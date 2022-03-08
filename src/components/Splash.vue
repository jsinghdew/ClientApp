<template>
    <transition name="fade">
        <section class="splash_screen" v-if="showS">
            <div class="inner_splash">
                <h4>welcome to</h4>
                <img src="../assets/images/splash.png" alt="">
            </div>
        </section>
    </transition>
</template>
<script>
    export default {
        beforeMount() {
            this.delay(3000);
        },
        name: 'Splash',
        props: {
            msg: String
        },
        data() {
            return {
                showS: true
            }
        },
        methods: {
            delay(ms) {
                setTimeout(() => this.showS = false, ms)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fade-enter-from {
        opacity: 0;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-enter-active {
        transition: all 2s ease;
    }

    .fade-leave-from {
        opacity: 1;
    }

    .fade-leave-to {
        opacity: 0;
    }

    .fade-leave-active {
        transition: all 2s ease;
    }
</style>

