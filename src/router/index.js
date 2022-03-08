import { createWebHistory, createRouter } from "vue-router";
import CreateAccount from "@/components/CreateAccount.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import Dashboard from "@/components/Dashboard.vue";
/*import Login from "@/components/LoginView.vue";*/
import Splash from "@/components/Splash.vue";
import GameLauncher from "@/components/GameLauncher.vue";
const routes = [
    {
        path: "/",
        name: "Login",
        component: Splash,
    },
    {
        path: "/CreateAccount",
        name: "CreateAccount",
        component: CreateAccount,
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
    },
    {
        path: "/GameLauncher",
        name: "GameLauncher",
        component: GameLauncher,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;