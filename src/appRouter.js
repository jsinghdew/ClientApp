import { createRouter, createWebHistory } from 'vue-router';
import CreateAccount from "@/components/CreateAccount.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import Dashboard from "@/components/Dashboard.vue";
import Login from "@/components/LoginView.vue";
import GameLauncher from "@/components/GameLauncher.vue";
//import store from "@/store/index";
 
const routes =[
    {
        path: "/",
        name: "Login",
        component: Login,
        meta: { requiredAuth: false }
    },
    {
        path: "/CreateAccount",
        name: "CreateAccount",
        component: CreateAccount,
        meta: { requiredAuth: false }
    },
    {
        path: "/ForgotPassword",
        name: "ForgotPassword",
        component: ForgotPassword,
    },
    {
        path: "/Dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiredAuth: true }
    },
    {
        path: "/GameLauncher",
        name: "GameLauncher",
        component: GameLauncher,
        meta: { requiredAuth: true }
    }
];
 
export const routeConfig = createRouter({
  history: createWebHistory(),
  routes: routes
});

routeConfig.beforeEach(async (to, from, next) => {
  //if (!to.meta.requiredAuth) {
  //  var userProfile = store.getters["auth/getUserProfile"];
  //  if (userProfile.id === 0) {
  //    await store.dispatch("auth/userProfile");
  //    userProfile = store.getters["auth/getUserProfile"];
  //    if (userProfile.id === 0) {
  //      return next({ path: "/login" });
  //    } else {
  //      return next();
  //    }
  //  }
  //}
  return next();
});