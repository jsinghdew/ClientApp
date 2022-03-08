import { jwtDecrypt } from "../../shared/jwtHelper";
import { tokenAlive } from "../../shared/jwtHelper";
import axios from "axios";
import authHeader from './auth-header';

const state = () => ({
    authData: {
        token: "",
        refreshToken: "",
        tokenExp: "",
        userId: "",
        userName: "",
    },
    userProfile: {
        id: 0,
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
    },
    loginApiStatus: "",
    loginStatus: "",
    logOut: false,
});

const getters = {
    getLoginStatus(state) {
        return state.loginStatus;
    },
    getAuthData(state) {
        return state.authData;
    },
    isTokenActive(state) {
        if (!state.authData.tokenExp) {
            return false;
        }
        return tokenAlive(state.authData.tokenExp);
    },
    getLogout(state) {
        return state.logOut;
    },
    getUserProfile(state) {
        console.log('getUserProfile evoked');
        return state.userProfile;
    },
    getLoginApiStatus(state) {
        return state.loginApiStatus;
    },
};

const actions = {
    
    async userLogout({ commit }) {
        const response = await axios
            .get("http://localhost:3000/logout", { withCredentials: true, credentials: 'include' })
            .catch((err) => {
                console.log(err);
            });

        if (response && response.data) {
            commit("setLogout", true)
        }
        else {
            commit("setLogout", false)
        }
    },
    async userProfile({ commit }) {
        console.log('final getUserProfile evoked');
        const response = await axios
            .get(process.env.VUE_APP_ROOT_API+"/Account/Profile", { headers: authHeader() })
            .catch((err) => {
                console.log('final getUserProfile error - '+err);
            });

        
        
        if (response && response.data) {
            console.log('UserProfile Response - ' + response);
            commit("setUserProfile", response.data)
        }
    },


    async loginApi({ commit }, payload) {
        const response = await axios
            .post("https://localhost:44310/api/Account/SignIn",
                payload, { withCredentials: true, credentials: 'include' })
            .catch((err) => {
                console.log(err);
            });

        if (response && response.data) {
            commit("setLoginApiStatus", "success");
        } else {
            commit("setLoginApiStatus", "failed");
        }
    },
};



const mutations = {
    saveTokenData(state, data) {

        //localStorage.setItem("access_token", 'Bearer '+data.access_token);
        //localStorage.setItem("refresh_token", data.refresh_token);

        

        const jwtDecodedValue = jwtDecrypt(data.access_token);
        const newTokenData = {
            token: data.access_token,
            refreshToken: data.refresh_token,
            tokenExp: jwtDecodedValue.exp,
            userId: jwtDecodedValue.sub,
            userName: jwtDecodedValue.username,
        };
        state.authData = newTokenData;
    },
    setLoginStatu(state, value) {
        state.loginStatus = value;
    },
    setLogout(state, payload) {
        state.logOut = payload;
    },
    setUserProfile(state, data) {
        const userProfile = {
            id: data.id,
            lastName: data.lastName,
            firstName: data.firstName,
            email: data.email,
            phone: data.phone,
        };
        state.userProfile = userProfile
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}