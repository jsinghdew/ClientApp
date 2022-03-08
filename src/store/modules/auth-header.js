//import { useCookies } from "vue3-cookies";

export default function authHeader() {
    //const { cookies } = useCookies();
    let user = localStorage.getItem('user-info');// cookies.get("sPorTzCooKie");
    if (user) {
        return { Authorization: 'Bearer ' + user }; 
    } else {
        return {};
    }
}