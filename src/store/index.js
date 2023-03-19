// Path: store/index.js

// setup Pinia store
import { defineStore } from "pinia";
import { Toast, ErrorToast, cleanError, WarningToast, SuccessToast } from "@svonk/util";

// get firebase requirements
import { collection, doc, setDoc, getDoc, getDocs, query } from "firebase/firestore";
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
  id: "main",
  // store state
  state: () => ({
    user: null,
    doc: null,
    classes: [],
    loaded_email: null,
    loaded_classes: null,
  }),
  // store getters
  getters: {
    userdoc_ref() {
      if (!this.user) return null;
      return doc(db, "users", this.user.uid);
    },
    get_tests() {
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
      return tests;
    },
  },
  actions: {
    async get_classes() {
      // check for duplicates
      if (this.doc.classes) {
        let unique = [...new Set(this.doc.classes)];
        if (unique.length != this.doc.classes.length) {
          this.doc.classes = unique;
          await this.update_remote();
          new WarningToast("Removed duplicate classes", 2000);
        }
      }
      // get all classes' data and combine into an array
      if (!this.doc) return [];
      let classes = [];
      for (let class_path of this.doc.classes) {
        // split class path into teacher/uid
        let [teacher, class_id] = class_path.split("/");
        if (!teacher || !class_id) {
          await this.remove_invalid(class_path);
          continue;
        }
        // get document for teacher email (first part of path)
        let teacher_ref = doc(db, "classes", teacher);
        let teacher_doc = await getDoc(teacher_ref);
        if (!teacher_doc.exists()) {
          await this.remove_invalid(class_path);
          continue;
        }
        // get classes sub-collection from teacher's doc
        let teacher_classes = collection(teacher_ref, "classes");
        if (!teacher_classes) {
          await this.remove_invalid(class_path);
          continue;
        }
        // get class doc from classes sub-collection
        let subclass_ref = doc(teacher_classes, class_id);
        let subclass_doc = await getDoc(subclass_ref);
        if (!subclass_doc.exists()) {
          await this.remove_invalid(class_path);
          continue;
        }
        // push class to array
        let doc_data = subclass_doc.data();
        doc_data.id = class_path;
        classes.push(doc_data);
      }
      this.classes = classes;
    },
    async remove_invalid(class_id) {
      console.warn("Class doesn't exist: " + class_id);
      this.doc.classes = this.doc.classes.filter((c) => c != class_id);
      await this.update_remote();
      console.log("Removed class from user's doc: " + class_id);
      new WarningToast("Removed non-existent class with id " + class_id, 2000);
    },
    async remove_class(class_id) {
      this.doc.classes = this.doc.classes.filter((c) => c != class_id);
      await this.update_remote();
      console.warn("Removed class from user's doc: " + class_id);
      new SuccessToast("Removed class", 2000);
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
    async get_remote() {
      // get doc from firebase
      let doc = await getDoc(this.userdoc_ref);
      if (doc.exists()) {
        this.doc = doc.data();
      } else {
        // if doc doesn't exist, create it
        await this.create_doc();
        await this.get_remote();
      }
    },
    async create_doc() {
      console.warn("Creating user document");
      new WarningToast("User document doesn't exist, creating new one...", 2000);
      this.doc = {
        name: this.user.displayName,
        email: this.user.email,
        classes: [],
      };
      await this.update_remote();
      new SuccessToast("Created user document; Let's get started", 2000);
      // do onboarding
      router.push("/portal/onboarding");
    },
    async update_remote() {
      // update remote doc
      await setDoc(this.userdoc_ref, this.doc, { merge: true });
    },
    async get_classes_by_email(email) {
      this.loaded_email = null;
      if (!email || !validAccount(email)) {
        this.loaded_classes = null;
        this.loaded_email = email;
        return;
      }
      let classes_maindoc = await getDoc(doc(db, "classes", email));
      if (classes_maindoc.exists()) {
        let classes = [];
        let classes_subcollection = collection(doc(db, "classes", email), "classes");
        let classes_subcollection_query_snapshot = await getDocs(query(classes_subcollection));
        classes_subcollection_query_snapshot.forEach((doc) => {
          let class_data = doc.data();
          class_data.id = doc.id;
          // if user already in class, change name to "[JOINED] name"
          if (this.doc.classes.includes([email, doc.id].join("/"))) {
            class_data.name = "[JOINED] " + class_data.name;
            class_data.is_joined = true;
          }
          classes.push(class_data);
        });
        this.loaded_classes = classes;
      } else {
        this.loaded_classes = null;
      }

      this.loaded_email = email;
    },
    async add_class(teacher_email, class_id, class_name) {
      if (!this.doc) return;
      if (!class_id) return;
      if (this.doc.classes.includes(class_id)) return;
      this.doc.classes.push([teacher_email, class_id].join("/"));
      await this.update_remote();
      new SuccessToast(`Added "${class_name}" to your classes`, 2000);
      // redirect to /portal
      router.push("/portal");
    },
  },
});
