import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import NotFound from "../views/Home/NotFound.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        page_title: "Home",
        theme_color: {
          light: "#ffffff",
          dark: "#16130e",
        },
        requiresAuth: false,
      },
      children: [
        // about and contact pages
        {
          path: "",
          name: "home",
          component: () => import("../views/Home/HomeView.vue"),
          meta: {
            page_title: "Home",
            theme_color: {
              light: "#ffffff",
              dark: "#16130e",
            },
            requiresAuth: false,
          },
        },
        {
          path: "about",
          name: "about",
          component: () => import("../views/Home/AboutView.vue"),
          meta: {
            page_title: "About",
            theme_color: {
              light: "#ffffff",
              dark: "#16130e",
            },
            requiresAuth: false,
          },
        },
        // {
        //   path: "contact",
        //   name: "contact",
        //   component: () => import("../views/Home/ContactView.vue"),
        //   meta: {
        //     page_title: "Contact",
        //     theme_color: {
        //       light: "#ffffff",
        //       dark: "#16130e",
        //     },
        //     requiresAuth: false,
        //   },
        // },
        {
          path: "/:pathMatch(.*)*",
          name: "404",
          component: NotFound,
          meta: {
            page_title: "404",
            theme_color: {
              light: "#ffffff",
              dark: "#16130e",
            },
          },
        },
      ],
    },
    {
      path: "/portal",
      name: "portal",
      component: () => import("../views/Portal/Portal.vue"),
      meta: {
        page_title: "Portal",
        theme_color: {
          light: "#ffffff",
          dark: "#121212",
        },
        requiresAuth: true,
      },
      children: [
        {
          path: "/portal/onboarding",
          name: "onboarding",
          component: () => import("../views/Portal/Onboarding.vue"),
          meta: {
            page_title: "Onboarding",
            theme_color: {
              light: "#ffffff",
              dark: "#121212",
            },
            requiresAuth: true,
          },
        },

        {
          path: "/portal/add",
          name: "addclass",
          component: () => import("../views/Portal/AddClass.vue"),
          meta: {
            page_title: "Join a Class",
            theme_color: {
              light: "#ffffff",
              dark: "#121212",
            },
            requiresAuth: true,
          },
        },
        {
          path: "/portal/create",
          name: "createclass",
          component: () => import("../views/Portal/CreateClass.vue"),
          meta: {
            page_title: "Teacher | Create Class",
            theme_color: {
              light: "#ffffff",
              dark: "#121212",
            },
            requiresAuth: true,
            requiresTeacher: true,
          },
        },
        {
          path: "/portal/newtest",
          name: "newtest",
          component: () => import("../views/Portal/AddTest.vue"),
          meta: {
            page_title: "Teacher | Add Test",
            theme_color: {
              light: "#ffffff",
              dark: "#121212",
            },
            requiresAuth: true,
            requiresTeacher: true,
          },
        },

        {
          // specify param "test" in the route
          path: "/portal/test",
          name: "test",
          component: () => import("../views/Portal/ViewTest.vue"),
          meta: {
            page_title: "View Test",
            theme_color: {
              light: "#ffffff",
              dark: "#121212",
            },
            requiresAuth: false,
            props: (route) => ({
              test: route.query.test,
            }),
          },
        },
      ],
    },
    // redirect any /app routes to /portal
    {
      path: "/app",
      redirect: "/portal",
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

export default router;
