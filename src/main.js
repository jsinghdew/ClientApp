////import 'bootstrap/dist/css/bootstrap.css'
////import { createApp } from 'vue'
////import App from './App.vue'
////import router from './router'
////import store from './store/index'

////createApp(App).use(router).use(store).mount('#app')
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import * as appRouter from './appRouter'
import store from './store/index'
import { globalCookiesConfig } from "vue3-cookies";

const app = createApp(App);
app.use(appRouter.routeConfig);
app.use(store);
app.mount('#app');

globalCookiesConfig({
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "; SameSite=Lax",
    httpOnly: "; HttpOnly=HttpOnly",
});