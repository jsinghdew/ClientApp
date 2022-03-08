<template>
    <transition name="fade">
        <section class="main_section" v-if="showForgotPassword">
            <div class="container">
                <div class="row align_center">
                    <div class="col-sm-0 col-md-0 col-lg-1"></div>
                    <div class="col-md-6 col-lg-5 back-image">
                        <div class="logo_side">
                            <img src="../assets/images/logo.png" alt="logo" class="logo_center">
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-5 form_side">
                        <div class="login_form common_form create_account">
                            <form>
                                <div class="top_form">
                                    <h3 class="title color-dark-blue">Forgot Password</h3>
                                    <p class="top_des">Please fill in the form to continue</p>
                                </div>
                                <!--<div class="alert cus_alert" role="alert">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path id="iconmonstr-info-1" d="M12,24A12,12,0,1,0,0,12,12,12,0,0,0,12,24Zm1-6H11V10h2ZM12,5.75A1.25,1.25,0,1,1,10.75,7,1.25,1.25,0,0,1,12,5.75Z" transform="translate(24 24) rotate(180)" fill="#fff" />
                                    </svg>
                                    Please fill out all fields.
                                </div>-->
                                <div class="form-group">

                                    <input type="email" class="form-control" id="formGroupExampleInput"
                                           placeholder="you@email.com">
                                </div>
                                <div class="text-right">
                                    <a href="#" v-on:click="submitSignUp" class="common_btn">Submit</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-0 col-md-0 col-lg-1"></div>
                </div>
            </div>
        </section>
    </transition>
</template>


<script>
    export default {
        beforeMount() {
        },
        name: "ForgotPassword",
        data() {
            return {
                //showL: false,
                showForgotPassword: true
            }
        },
        methods: {
            delay(ms) {
                setTimeout(function () {
                    this.showForgotPassword = true;

                }, ms)
            }
        }
    }
</script>

<style>
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
