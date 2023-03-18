// Path: store/index.js

// setup Pinia store
import { defineStore } from "pinia";
import { Toast, ErrorToast, cleanError, WarningToast, SuccessToast } from "@svonk/util";

// get firebase requirements
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

// add email and name to provider
provider.addScope("email");
provider.addScope("profile");
auth.useDeviceLanguage();
// constrict to only mvla.net emails
provider.setCustomParameters({
  login_hint: "username@mvla.net",
  hd: "mvla.net",
});

// import router
import router from "../router";
function validAccount(userEmail) {
  return userEmail.split("@")[1] == "mvla.net";
}
// define store
export const useMainStore = defineStore({
  // store name
  id: "main",
  // store state
  state: () => ({
    user: null,
    // user data
    doc: null,
    classes: [],
  }),
  // store getters
  getters: {
    docRef() {
      if (!this.user) return null;
      return doc(db, "users", this.user.uid);
    },
    tests() {
      // get all the classes with this.classes(), then get all their tests and combine them into an array
      let tests = [];
      let classes = this.classes;
      for (let i = 0; i < classes.length; i++) {
        let class_tests = classes[i].tests;
        // add class name and color to each test
        for (let j = 0; j < class_tests.length; j++) {
          classes[i].name = classes[i].name ? classes[i].name : "Unnamed Class";
          // check test date type and convert to date object if necessary
          if (typeof class_tests[j].date == "string") {
            class_tests[j].date = new Date(class_tests[j].date);
            class_tests[j].date = isNaN(class_tests[j].date) ? null : class_tests[j].date;
          }

          // push test to array
          tests.push({
            ...class_tests[j],
            color: classes[i]?.color,
            class_name: classes[i].name,
          });
        }
      }
      console.log("tests", tests);
      return tests;
    },
  },
  actions: {
    async get_classes() {
      // get all the classes from the user's doc, then get all their documents and combine them into an array
      if (!this.doc) return [];
      let classes = [];
      for (let i = 0; i < this.doc.classes.length; i++) {
        let class_id = this.doc.classes[i];
        const class_ref = doc(db, "classes", class_id);
        let class_doc = await getDoc(class_ref);
        if (class_doc.exists) {
          classes.push(class_doc.data());
        } else {
          console.warn("Class doesn't exist: " + class_id);
        }
      }
      this.classes = classes;
    },
    set_user(user) {
      if (!user.email || !validAccount(user.email)) {
        auth.signOut();
        console.warn("Invalid account: " + user.email);
        new WarningToast("Please use your MVLA email to log in", 2000);
        this.clear();
        return;
      }
      this.user = user;

      // if router has a redirect, go to it
      if (
        router.currentRoute.value &&
        router.currentRoute.value.query &&
        router.currentRoute.value.query.redirect
      ) {
        router.push(router.currentRoute.value.query.redirect);
      }
    },
    clear() {
      this.user = null;
      this.doc = null;
      // if page requires auth, redirect to home
      if (
        router.currentRoute.value &&
        router.currentRoute.value.meta &&
        router.currentRoute.value.meta.requiresAuth
      ) {
        router.push("/");
      }
    },
    async login() {
      new Toast(
        "Opening login popup...",
        "default",
        1000,
        require("@svonk/util/assets/info-locked-icon.svg")
      );
      // sign in with google, then set user data
      await signInWithPopup(auth, provider)
        .then(() => {
          if (!this.user || !this.user.email || !validAccount(this.user.email)) return;
          new Toast(
            "Logged in as " + this.user.displayName + "!",
            "default",
            2000,
            require("@svonk/util/assets/info-unlocked-icon.svg")
          );
          if (
            !(
              router.currentRoute.value &&
              router.currentRoute.value.query &&
              router.currentRoute.value.query.redirect
            )
          ) {
            router.push("/portal");
          }
        })
        .catch((error) => {
          if (
            error.code == "auth/cancelled-popup-request" ||
            error.code == "auth/popup-closed-by-user"
          ) {
            new WarningToast(cleanError(error), 2000);
          } else {
            new ErrorToast("Couldn't log in", cleanError(error), 2000);
          }
        });
    },
    logout() {
      auth.signOut();
      new Toast("Logged Out", "default", 1500, require("@svonk/util/assets/info-locked-icon.svg"));
    },
    // set document data
    setDoc(new_doc) {
      this.doc = new_doc;
    },
    async getDoc() {
      // get doc from firebase
      let doc = await getDoc(this.docRef);
      if (doc.exists) {
        this.doc = doc.data();
      } else {
        // if doc doesn't exist, create it
        await this.createDoc();
        this.getDoc;
      }
    },
    async createDoc() {
      console.warn("Creating user document");
      new WarningToast("User document doesn't exist, creating new one...", 2000);
      await setDoc(this.docRef, {
        name: this.user.displayName,
        email: this.user.email,
        classes: [],
      });
      console.log("Created user document");
      new SuccessToast("Created user document", 2000);
      // placeholder: do onboarding
    },
    async updateDoc() {
      console.log("Updating user document");
      await this.getDoc();
      await this.get_classes();
      console.log("Updated user document");
    },
  },
});
