<template>
    <section class="main_section" v-if="showCreateAccount">
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
                                <h3 class="title color-dark-blue">Create New Account</h3>
                                <p class="top_des">Please fill in the form to continue</p>
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" v-model="DisplayName" placeholder="your Name">
                                <div id="errorDisplayName" class="validation-message" v-if="showDisplayNameValidation">A valid name is required.</div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" v-model="UserName" placeholder="you@email.com">
                                <div id="errorUserName" class="validation-message" v-if="showUserNameValidation">A valid email address is required.</div>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" v-model="Password" placeholder="Password">
                                <div id="errorPassword" class="validation-message" v-if="showPasswordValidation">The password is required.</div>
                            </div>
                            <div class="form-check check_text">
                                <input class="form-check-input" type="checkbox" id="gridCheck" @change="activateOrDeactivateSignUpButton($event)" value="acceptPrivacyPolicy">
                                <label class="form-check-label" for="gridCheck">
                                    Buy checking this box, I affrim that I have read and understood the <a href="">Privacy Policy</a> and agree to the <a href="">Terms and Conditions</a> for use.
                                </label>
                            </div>
                            <div class="text-right">
                                <button type="button" @click="submitSignUp()" class="common_btn submit-class" :disabled="isDisabled">Submit</button>
                            </div>
                            <div class="other_option">
                                <small>Have an Account? <a href="#" @click.prevent="openSignIn" class="forgot-link color-orange">Login</a></small>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-sm-0 col-md-0 col-lg-1"></div>
            </div>
        </div>
    </section>
</template>


<script>
    import axios from 'axios'
    export default {
        name: "CreateAccount",
        data() {
            return {
                showDisplayNameValidation: false,
                showUserNameValidation: false,
                showPasswordValidation: false,
                showMessageValidation: false,
                acceptPrivacyPolicy: true,
                isDisabled: true,
                showL: false,
                showCreateAccount: true,
                DisplayName:'',
                UserName: '',
                Password: '',
                loginAPI: process.env.VUE_APP_ROOT_API +'/Account/SignUpData'
            }
        },
        methods: {
           openSignIn() {
                this.$router.push('/');
            },
            submitSignUp() {
                if (this.DisplayName.length > 0 && this.UserName.length > 0 && this.Password.length > 0) {

                    this.showDisplayNameValidation = false;
                    this.showUserNameValidation = false;
                    this.showPasswordValidation = false;

                    var postData = {
                        UserName: this.UserName,
                        Password: this.Password,
                        DisplayName: this.DisplayName
                    };

                    let axiosConfig = {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    };

                    axios.post(this.loginAPI, postData, axiosConfig)
                        .then((res) => {

                            if (res.status == 200) {
                                console.log("signup success");
                            }
                        })
                        .catch((err) => {
                            console.log("AXIOS ERROR: ", err);
                        });
                }

                if (this.DisplayName.length == 0) {
                    this.showDisplayNameValidation = true;
                    this.showMessageValidation = false;
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
            activateOrDeactivateSignUpButton(e) {
                
                if (e.target.checked) {
                    this.isDisabled = false;
                }
                else {
                    this.isDisabled = true;
                }
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
    button.submit-class{
        border:none;
    }
    button.submit-class:focus {
        outline: none;
    }
    button.submit-class[disabled] {
        opacity:0.3;
        cursor:not-allowed;
    }
</style>
