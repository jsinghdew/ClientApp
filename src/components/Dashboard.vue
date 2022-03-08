<template>
    <section class="main_wrapper" v-if="showL">
        <div class="outer_panel">
            <div class="left_panel sidebar" id="mySidebar">
                <a href="javascript:void(0)" class="closebtn" id="closebtn">x</a>
                <div class="logo_div">
                    <a href=""><img src="../assets/images/logo.png" alt="" /></a>
                </div>
                <ul>
                    <li><a href="">PROFILE</a></li>
                    <li><a href="">sTORE</a></li>
                    <li><a href="">CHAT</a></li>
                    <li><a href="">LEADERBOARDS</a></li>
                    <li><a href="">SETTINGS</a></li>
                </ul>
                <a href="" class="common_btn red_btn" @click.prevent="logOut">logout</a>
            </div>
            <div class="center_panel sold_panel">
                <div class="breadcrmps">
                    <h3>
                        <sapn id="main">
                            <img class="openbtn"
                                 onclick="openNav()"
                                 src="../assets/images/menu.png"
                                 alt="" />
                        </sapn>Sold
                    </h3>
                </div>
                <div class="outer_sold">
                    <div class="inner_sold">
                        <ul>
                            <li class="active_svg">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="26.869"
                                     height="31.846"
                                     viewBox="0 0 26.869 31.846">
                                    <g id="Group_1"
                                       data-name="Group 1"
                                       transform="translate(-943 -571)">
                                        <path id="Group_2606_1_"
                                              data-name="Group 2606 (1)"
                                              d="M26.869,23.884V7.961L13.435,0,0,7.961V23.884l13.435,7.962Z"
                                              transform="translate(943 571)"
                                              fill="#fff" />
                                        <path id="Vector"
                                              d="M14.927,13.435V4.478L7.464,0,0,4.478v8.957l7.464,4.479Z"
                                              transform="translate(949 578)"
                                              fill="#fff" />
                                    </g>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="26.869"
                                     height="31.846"
                                     viewBox="0 0 26.869 31.846">
                                    <g id="Group_1"
                                       data-name="Group 1"
                                       transform="translate(-943 -571)">
                                        <path id="Group_2606_1_"
                                              data-name="Group 2606 (1)"
                                              d="M26.869,23.884V7.961L13.435,0,0,7.961V23.884l13.435,7.962Z"
                                              transform="translate(943 571)"
                                              fill="#fff" />
                                        <path id="Vector"
                                              d="M14.927,13.435V4.478L7.464,0,0,4.478v8.957l7.464,4.479Z"
                                              transform="translate(949 578)"
                                              fill="#fff" />
                                    </g>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="26.869"
                                     height="31.846"
                                     viewBox="0 0 26.869 31.846">
                                    <g id="Group_1"
                                       data-name="Group 1"
                                       transform="translate(-943 -571)">
                                        <path id="Group_2606_1_"
                                              data-name="Group 2606 (1)"
                                              d="M26.869,23.884V7.961L13.435,0,0,7.961V23.884l13.435,7.962Z"
                                              transform="translate(943 571)"
                                              fill="#fff" />
                                        <path id="Vector"
                                              d="M14.927,13.435V4.478L7.464,0,0,4.478v8.957l7.464,4.479Z"
                                              transform="translate(949 578)"
                                              fill="#fff" />
                                    </g>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="26.869"
                                     height="31.846"
                                     viewBox="0 0 26.869 31.846">
                                    <g id="Group_1"
                                       data-name="Group 1"
                                       transform="translate(-943 -571)">
                                        <path id="Group_2606_1_"
                                              data-name="Group 2606 (1)"
                                              d="M26.869,23.884V7.961L13.435,0,0,7.961V23.884l13.435,7.962Z"
                                              transform="translate(943 571)"
                                              fill="#fff" />
                                        <path id="Vector"
                                              d="M14.927,13.435V4.478L7.464,0,0,4.478v8.957l7.464,4.479Z"
                                              transform="translate(949 578)"
                                              fill="#fff" />
                                    </g>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="26.869"
                                     height="31.846"
                                     viewBox="0 0 26.869 31.846">
                                    <g id="Group_1"
                                       data-name="Group 1"
                                       transform="translate(-943 -571)">
                                        <path id="Group_2606_1_"
                                              data-name="Group 2606 (1)"
                                              d="M26.869,23.884V7.961L13.435,0,0,7.961V23.884l13.435,7.962Z"
                                              transform="translate(943 571)"
                                              fill="#fff" />
                                        <path id="Vector"
                                              d="M14.927,13.435V4.478L7.464,0,0,4.478v8.957l7.464,4.479Z"
                                              transform="translate(949 578)"
                                              fill="#fff" />
                                    </g>
                                </svg>
                            </li>
                        </ul>
                        <h4>starting at</h4>
                        <img src="../assets/images/three.png" class="count_img" alt="" />
                        <a href="" class="common_btn red_red_shadow_btn">cancel</a>
                    </div>
                </div>
                <div class="footer">
                    <div class="ad_space">ADS SPACE</div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        beforeCreate() {
            if (localStorage.getItem('user-info') == null) {
                this.$router.push({ name: 'Login' });
            }
        },
        name: "LoginView",
        data() {
            return {
                showL: true
            }
        },
        computed: {
            ...mapGetters("auth", {
                getUserProfile: "getUserProfile",
            }),
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
            logOut() {
                localStorage.removeItem('user-info')
                this.$router.push('/');
            },
                       
            ...mapActions("auth", {
                actionGetUserProfile: 'userProfile'
            }),
            async userProfile() {
                await this.actionGetUserProfile();
            },
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
