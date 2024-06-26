<template>
  <Modal
    :can_continue="true"
    :title="'Leaving ' + $env.VUE_APP_BRAND_NAME_SHORT"
    :html="contents"
    :continue_action="open"
    :skippable="true"
    :skip_text="'Cancel'"
    @skip="$emit('close')"
    :submit_text="'Continue'"
  />
</template>

<script>
/**
 * @file Redirect.vue
 * @displayName Redirect
 * @description A view that redirects to the path specified in the route "path" prop.
 */

import Modal from "@/components/Modal/Modal.vue";
import { WarningToast } from "@svonk/util";
export default {
  name: "RedirectView",
  components: {
    Modal,
  },
  emits: ["close"],
  data() {
    return { path: "" };
  },
  mounted() {
    this.path = this.$route?.params?.path;
    if (!this.path) {
      new WarningToast("Missing redirect path");
      this.$emit("close");
    } else {
      // fix path to add protocol if it's missing
      this.path = this.path.startsWith("http") ? this.path : `https://${this.path}`;
    }
    try {
      const url = new URL(this.path);
      // check against brand domain
      if (
        this.$env.VUE_APP_BRAND_DOMAIN == url.host ||
        url.host.endsWith("." + this.$env.VUE_APP_BRAND_DOMAIN)
      ) {
        this.$status.log(`🔗 Redirecting to ${this.$env.VUE_APP_BRAND_NAME_SHORT}`);
        this.open();
        return;
      }
      // check against allowed domains (may have * for wildcards) in this.$env.VUE_APP_BRAND_ALLOWED_HOSTS
      const allowed_pattern = (this.$env.VUE_APP_BRAND_ALLOWED_HOSTS || "")
        .split(",")
        .some((host) => {
          return host.includes("*") ? url.host.endsWith(host.replace("*", "")) : url.host == host;
        });
      if (allowed_pattern) {
        this.$status.log(`🔗 Redirecting to permitted pattern ${allowed_pattern} automatically`);

        this.open();
      }
    } catch {
      this.$status.log(
        `Couldn't not verify path domain is not ${this.$env.VUE_APP_BRAND_NAME_SHORT}`
      );
    }
  },
  computed: {
    contents() {
      return this.path
        ? `You are being redirected to <a href="${this.path}">${new URL(this.path).host}</a>
            <br><br>
           Content outside of ${
             this.$env.VUE_APP_BRAND_NAME_SHORT
           } is not vetted by our team, and may be harmful.`
        : "Missing redirect path";
    },
  },
  methods: {
    open() {
      this.$emit("close");
      window.location.replace(this.path);
    },
  },
};
</script>

<style></style>
