/**
 * This store manages web api notifications, and provides a simple interface for creating and managing them
 * @file store/notifications.js
 * @namespace .notify
 * @memberOf store
 */

// setup Pinia store
import { _status } from "@/common";
import { ErrorToast, SuccessToast } from "@svonk/util";
import { defineStore } from "pinia";

export const useNotifications = defineStore({
  id: "notifications",
  state: () => ({
    active: [],
  }),
  /**
   * @namespace .notify.getters
   * @memberof .notify
   */
  getters: {
    /**
     * @function .notify.getters.enabled
     * @returns {Boolean} Whether notifications are enabled
     */
    enabled() {
      return "Notification" in window && Notification.permission === "granted";
    },
  },
  /**
   * @namespace .notify.actions
   * @memberof .notify
   */
  actions: {
    /**
     * @function .notify.actions.register
     * @description Setup the web notifications api permissions and notify the user that they're now active
     * @param {Boolean} force Force the notification registration even if already denied
     */
    register(force) {
      if (!("Notification" in window)) {
        _status.error("🔔 This browser does not support desktop notification");
        new ErrorToast("Cannot enable notifications", "browser lacks support", 2500);
      } else if (this.enabled) {
        _status.log("🔔 Notifications already enabled");
      } else if (force || Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            this.add({
              title: "Notifications Enabled",
              message: `You can now receive notifications from ${process.env.VUE_APP_BRAND_SHORT_NAME}`,
            });
          } else {
            _status.error("🔔 Notifications permission denied");
            new ErrorToast("Cannot enable notifications", "permission denied", 2500);
          }
        });
      } else {
        _status.warn("🔔 Notifications permission previously denied");
      }
    },
    /**
     * @function .notify.actions.add
     * @description Create a web notification
     * @param {Object} notification Notification object
     */
    add(notification) {
      let n = new Notification(notification.title, {
        body: notification.message,
        icon: notification.icon,
      });
      new SuccessToast("Notification Sent", "Notification sent successfully", 2500);
      this.active.push(n);
    },
  },
});
