<template>
    <section class="main_section" v-if="showL">
        <div class="container">
            <div class="row align_center">
                <div class="col-sm-0 col-md-0 col-lg-1"></div>
                <div class="col-md-6 col-lg-5 back-image">
                    <div class="logo_side">
                        <img src="../assets/images/logo.png" alt="logo" class="logo_center">
                    </div>
                </div>
                <div class="col-md-6 col-lg-5 form_side">
                    <form class="login_form">
                        <div class="top_form">
                            <h3 class="title color-dark-blue">Login</h3>
                            <p class="top_des">Sign in to full account so you can always log in and countinue your game later</p>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput" class="color-sky-blue">Email address</label>
                            <input type="email" class="form-control" v-model="UserName" placeholder="you@email.com">
                            <div id="errorUserName" class="validation-message" v-if="showUserNameValidation">A valid email address is required.</div>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2" class="color-sky-blue">Password</label>
                            <input type="password" class="form-control" v-model="Password" placeholder="Password">
                            <div id="errorPassword" class="validation-message" v-if="showPasswordValidation">The password is required.</div>
                        </div>
                        <div class="form-group">
                            <div class="validation-message" id="messageError" v-if="showMessageValidation">Invalid email or password.</div>
                        </div>
                        <div class="footer_form">
                            <div class="form-check check_text">
                                <input class="form-check-input" type="checkbox" id="gridCheck">
                                <label class="form-check-label" for="gridCheck">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" @click="showForgotPassword()" class="forgot-link color-orange">Forgot Password?</a>
                        </div>
                        <div class="text-right">
                            <a href="#" class="common_btn" @click="login()">Login</a>
                        </div>

                        <div class="other_option">
                            <small>Don't have an account? <a href="#" @click="showSignUp()" class="forgot-link color-orange">Sign Up</a></small>
                        </div>
                    </form>
                </div>
                <div class="col-sm-0 col-md-0 col-lg-1"></div>
            </div>
        </div>
    </section>
</template>


<script>
    import axios from 'axios';

    export default {       
        
        name: "LoginView",
        data() {
            return {
                showUserNameValidation: false,
                showPasswordValidation: false,
                showMessageValidation: false,
                showL: true,
                UserName: '',
                Password: '',
                loginAPI: process.env.VUE_APP_ROOT_API+'/Account/SignIn'
            }
        },        
        methods: {
            showSignUp() {
                this.showL = false;
                this.$router.push({ name: 'CreateAccount' })
            },
            showForgotPassword() {
                this.showL = false;
                this.$router.push({ name: 'ForgotPassword' })
            },
            login() {

                if (this.UserName.length > 0 && this.Password.length > 0) {

                    this.showUserNameValidation = false;
                    this.showPasswordValidation = false;


                    var postData = {
                        UserName: this.UserName,
                        Password: this.Password
                    };

                    let axiosConfig = {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    };

                    axios.post(this.loginAPI, postData, axiosConfig)
                        .then((res) => {

                            if (res.status == 200 && res.data.token!=null && res.data.token.length > 0) {
                                console.log("login success");
                                this.showMessageValidation = false;
                                localStorage.setItem("user-info", res.data.token);
                                this.showL = false;
                                this.$router.push({ name: 'GameLauncher' });
                            }
                            else {
                                this.showMessageValidation = true;
                            }
                        })
                        .catch((err) => {
                            console.log("AXIOS ERROR: ", err);
                        });
                }
                
                if (this.UserName.length == 0) {
                    this.showUserNameValidation = true;
                    this.showMessageValidation = false;
                }
                if (this.Password.length == 0) {
                    this.showPasswordValidation = true;
                    this.showMessageValidation = false;
                }

            },
            

        },
        mounted() {
            
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

    .validation-message {
        color: red;
        font: bold 12px Tahoma;
        margin-top: 10px;
    }
</style>
