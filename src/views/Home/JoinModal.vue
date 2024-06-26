<template>
  <main class="onboardng" ref="modal" id="join_modal">
    <div class="overlay_contents_wrapper nopad">
      <img class="modal_art_part contrast_small_dark" v-lazy="source" />
      <div
        v-if="page == 'form'"
        class="overlay_contents overlay_contents__page overlay_more_pad_horizontal pad_overlay"
      >
        <h2 class="header_style modal_header_title overlay_title">
          Join the {{ $env.VUE_APP_BRAND_NAME_SHORT }} Beta
        </h2>
        <div class="overlay_inputs inputs_column">
          <input
            ref="name"
            class="styled_input styled_obj"
            type="text"
            v-model="form.name"
            placeholder="Your Name"
            enterkeyhint="next"
            @keydown.enter="$refs.grade.focus()"
          />
          <select
            class="styled_input styled_obj"
            v-model="form.grade"
            ref="grade"
            enterkeyhint="next"
            @keydown.enter="$refs.detail.focus()"
          >
            <option class="placeholder_text" value="" hidden disabled selected>Campus Role</option>
            <option
              v-for="grade in JSON.parse($env.VUE_APP_ORG_GRADES || default_grades)"
              :key="grade[0]"
              :value="grade[0]"
            >
              {{ grade[1] }}
            </option>
            <option class="break_text" value="" disabled>-----</option>
            <option value="teacher">{{ $env.VUE_APP_ORG_TEACHER_GRADE || "Teacher" }}</option>
          </select>
          <textarea
            ref="detail"
            enterkeyhint="done"
            @keydown.enter="action"
            v-model="form.usage"
            class="styled_input styled_textarea styled_obj"
            type="text"
            :placeholder="`How will you use ${$env.VUE_APP_BRAND_NAME_SHORT} (optional)`"
          />
        </div>
      </div>
      <div v-else class="overlay_contents pad_overlay overlay_contents__page img_container__page">
        <img class="auth_load_icon loading_icon" alt="Loading Icon" />
      </div>
    </div>
    <div class="bottom_actions">
      <button v-if="page == 'form'" class="close_action click_escape" @click="$emit('close')">
        {{ page == "form" && form.name == "" && form.grade == "" ? "Close" : "Cancel" }}
      </button>
      <div class="flex_spacer"></div>
      <button class="continue_action" :disabled="!contents_ready" @click="action">
        {{ continue_text[0] }}<span class="desktop_only">{{ continue_text[1] }}</span>
      </button>
    </div>
  </main>
</template>

<script>
import "@/assets/style/overlay.css";
import { WarningToast } from "@svonk/util";
export default {
  emits: ["close"],
  data() {
    return {
      default_grades: `[["student", "Student"]]`,
      page: "form",
      form: {
        name: "",
        grade: "",
        usage: "",
      },
    };
  },
  computed: {
    contents_ready() {
      // filled out name
      if (this.page == "form") {
        return this.form.name.length >= 2 && this.form.grade != "";
      } else {
        return false;
      }
    },
    continue_text() {
      if (this.page == "form") {
        return !this.$store?.user ? ["Continue", " to Sign-Up"] : ["Save"];
      } else {
        return !this.$store?.user ? ["Authenticating", "..."] : ["Saving...", ""];
      }
    },
    source() {
      try {
        return require(`@/assets/img/art/working/${this.combo}.png`);
      } catch (e) {
        return "err";
      }
    },
    combo() {
      let stored = window.localStorage.getItem("home_art");
      let stored_variant = stored ? stored.split("s")[1][0] : null;

      return "ls" + stored_variant;
    },
  },
  mounted() {
    // if user is logged in and has completed, close
    if (this.$store.done_join_form) {
      // exit
      this.$emit("close");
      new WarningToast("You've already joined!", 2000);
    }
    // if user is logged in, use their name to prefill
    if (this.$store?.user) {
      this.form.name = this.$store.user?.displayName || "";
    }
  },
  methods: {
    action() {
      if (!this.contents_ready) {
        return;
      }
      if (this.page == "form") {
        // move to auth page
        // update router so that this page will redirect to /portal/onboarding
        // if no redirect, make it onboarding
        if (!this.$route?.query?.redirect) {
          this.$router.replace({ name: "join", query: { redirect: "/portal" } });
        }
        this.page = "auth";
        this.$status.log("📝 Saving join form:", this.form);
        // trigger auth if needed
        if (!this.$store?.user) {
          this.$status.log("🔑 Triggering auth");
          // trigger auth, and once done, save form data and close
          this.$store
            .login()
            .then(() => {
              this.$store.save_join_form(this.form);
              this.check_store_and_close();
            })
            .catch((err) => {
              this.$status.error("💾 Error logging in:", err);
              new WarningToast("Couldn't complete authentication; " + err, 2000);
              this.page = "form";
            });
        } else {
          // save form data and close
          this.$store.save_join_form(this.form);
          this.check_store_and_close();
        }
      }
    },
    check_store_and_close() {
      // close if join_form is set
      if (this.$store.done_join_form) {
        this.$emit("close");
      }
    },
  },
  watch: {
    // listen for any changes to store
    "$store.done_join_form": {
      handler() {
        this.check_store_and_close();
      },
      deep: true,
    },
    "$store.user": {
      handler() {
        if (!this.$store?.user) {
          this.$router.push({ name: "home", query: { redirect: this.$route.query?.redirect } });
          return;
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
img.modal_art_part {
  display: none;
  user-select: none;
  pointer-events: none;
}
@media (min-width: 800px) {
  main#join_modal {
    max-width: 700px;
    max-height: 470px;
  }
  img.modal_art_part {
    display: block;
  }
}
.overlay_contents {
  border: none;
  justify-content: center;
  align-items: stretch;
  display: flex;
  flex-flow: column;
}
.bottom_actions {
  border-top: solid var(--thickness-overlay-border) var(--color-overlay-border);
}
.overlay_contents_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  max-height: 100%;
}
h2.overlay_title {
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
}
.modal_art_part {
  height: 400px;
  width: 270px;
}
.modal_art_part[lazy="loaded"] {
  object-fit: scale-down;
  object-position: bottom left;
}
.inputs_column {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  margin: 0;
}
.inputs_column .styled_input {
  width: 100%;
  margin: 0;
  margin-bottom: calc(var(--padding-overlay) / 2);
}
.img_container__page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth_load_icon {
  width: 100%;
  height: 0;
  flex-basis: 240px;
  flex-grow: 1;
  flex-shrink: 1;
}
select:has(.placeholder_text[selected]) {
  color: var(--color-placeholder);
}
</style>
