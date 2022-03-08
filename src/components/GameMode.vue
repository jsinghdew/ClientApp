
<template>
    <section class="main_wrapper">
        <div class="outer_panel">
            <div class="left_panel sidebar" id="mySidebar">
                <a v-on:click="opennav()" class="closebtn" id="closebtn">x</a>
                <div class="logo_div">
                    <a href=""><img src="images/logo.png" alt="" /></a>
                </div>
                <ul>
                    <li><a href="">PROFILE</a></li>
                    <li><a href="">sTORE</a></li>
                    <li><a href="">CHAT</a></li>
                    <li><a href="">LEADERBOARDS</a></li>
                    <li><a href="">SETTINGS</a></li>
                </ul>
                <a href="" class="common_btn red_btn">logout</a>
            </div>
            <div class="center_panel">
                <div class="breadcrmps">
                    <h3>
                        <sapn id="main">
                            <img class="openbtn" v-on:click="opennav()" src="../assets/images/menu.png" alt="">
                        </sapn>Sports
                    </h3>
                </div>
                <div class="purchase_coins_sec">
                    <div class="row">
                        <div class="col-lg-12" style="margin-bottom:30px">
                            <div class="inner_profile">
                                <div class="row no-gutters">
                                    <div class="col-auto">
                                        <div class="profile_image_div">
                                          
                                            <img  src="../assets/images/profile.png" class="profile_image" alt="" />
                                            <img src="../assets/images/flag.png" class="flag_img" alt="" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="proile_detail">
                                            <h4><span class="live"></span>John Doe</h4>
                                            <p>  <img src="../assets/images/Coin.png" class="coin" /> 100</p>
                                            <h6>
                                                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <rect width="15" height="18" fill="url(#pattern0)" />
                                                    <defs>
                                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                            <use xlink:href="#image0_100_780"
                                                                 transform="translate(0 -0.00451807) scale(0.0060241 0.00502008)" />
                                                        </pattern>
                                                        <image id="image0_100_780" width="166" height="201"
                                                               xlink:href="data:image/png;base64,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" />
                                                    </defs>
                                                </svg>
                                             USA , USA
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-6 col-sm-12">
                            <div class="bg_game_launcher bg_game_launcher_Baseball inner_coins">
                                <h2 class="sport-title"> Baseball</h2>
                                <ul>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/image_Solo.png')" alt=""><a class="btn_variant btn_Solo">Solo<div class="pt-6"><img src="../assets/images/Coin.png" class="coin" />100</div> </a>
                                    </li>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/image_Dual.png')" alt=""><a class="btn_variant btn_Dual">Dual<div class="pt-6"><img src="../assets/images/Coin.png" class="coin" /> 200</div> </a>
                                    </li>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/trophy.png')" alt=""><a class="btn_variant btn_Tournament">Tournament <div class="pt-6"><img src="../assets/images/Coin.png" class="coin" />300</div> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6 col-sm-12">
                            <div class=" bg_game_launcher bg_game_launcher_Hockey inner_coins ">
                                <h2 class="sport-title"> Hockey</h2>
                                <ul>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/image_Solo.png')" alt=""><a class="btn_variant btn_Solo">Solo<div class="pt-6"><img src="../assets/images/Coin.png" class="coin" />100</div> </a>
                                    </li>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/image_Dual.png')" alt=""><a class="btn_variant btn_Dual">Dual<div class="pt-6"><img src="../assets/images/Coin.png" class="coin" /> 200</div> </a>
                                    </li>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/trophy.png')" alt=""><a class="btn_variant btn_Tournament">Tournament <div class="pt-6"><img src="../assets/images/Coin.png" class="coin" />300</div> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6 col-sm-12">
                            <div class="bg_game_launcher bg_game_launcher_Basketball inner_coins">
                                <h2 class="sport-title"> Baseketball</h2>
                                <ul>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/image_Solo.png')" alt=""><a class="btn_variant btn_Solo">Solo<div class="pt-6"><img src="../assets/images/Coin.png" class="coin" />100</div> </a>
                                    </li>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/image_Dual.png')" alt=""><a class="btn_variant btn_Dual">Dual<div class="pt-6"><img src="../assets/images/Coin.png" class="coin" /> 200</div> </a>
                                    </li>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/trophy.png')" alt=""><a class="btn_variant btn_Tournament">Tournament <div class="pt-6"><img src="../assets/images/Coin.png" class="coin" />300</div> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6 col-sm-12">
                            <div class="bg_game_launcher bg_game_launcher_Football inner_coins">
                                <h2 class="sport-title"> Football</h2>
                                <ul>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/image_Solo.png')" alt=""><a class="btn_variant btn_Solo">Solo<div class="pt-6"><img src="../assets/images/Coin.png" class="coin" />100</div> </a>
                                    </li>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/image_Dual.png')" alt=""><a class="btn_variant btn_Dual">Dual<div class="pt-6"><img src="../assets/images/Coin.png" class="coin" /> 200</div> </a>
                                    </li>
                                    <li class="modes col-md-4" style="margin-bottom:40px">
                                        <img class="batchIcons" v-bind:src="require('../assets/images/trophy.png')" alt=""><a class="btn_variant btn_Tournament">Tournament <div class="pt-6"><img src="../assets/images/Coin.png" class="coin" />300</div> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="ad_space">PLACE YOUR ADS HERE</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import $ from "jquery";
   
    export default {
        name: 'GameModes',
     
        mounted: function () {
           
        },
        methods: {
            startCallBack: function (x) {
                console.log(x);
            },
            endCallBack: function (x) {
                console.log(x);
            },
            opennav: function () {

                // `this` inside methods point to the Vue instance
                $("#mySidebar").toggleClass("active-now");
            },
            closenav: function () {

                // `this` inside methods point to the Vue instance
                $("#mySidebar").toggleClass("active-now");
            },
           

        }
    }

</script>
<style>
    @import '../assets/styles/style.css';
    @import '../assets/styles/responsive.css';

   
</style>