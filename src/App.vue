<template>
    <!--<nav-menu></nav-menu>
    <router-view />-->
    <!---->
    <div class="main_body">
        <splash></splash>
        <!--<login-view></login-view>-->
        <router-view />
    </div>
</template>

<script>
    /*import NavMenu from './components/NavMenu.vue'*/
    /*import LoginView from './components/LoginView.vue'*/
    import Splash from './components/Splash.vue'

    export default {
        name: 'App',
        components: {
            /* NavMenu*/
            /*LoginView*/
            Splash
        }        
    }
</script>

<style>
    @import 'assets/styles/style.css';
    @import 'assets/styles/responsive.css';
    @font-face {
        font-family: "kvc-brute-regular";
        src: local("kvc-brute-regular"), url(assets/font/kvc-brute-regular-webfont.woff) format("truetype");
    }
</style>
