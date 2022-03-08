<template>
    <div class="main_body">
        <section class="main_wrapper">
            <div class="outer_panel">
                <div class="left_panel sidebar" id="mySidebar">
                    <a href="javascript:void(0)" class="closebtn" id="closebtn">×</a>
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
                    <a href="" class="common_btn red_btn">logout</a>
                </div>
                <div class="center_panel">
                    <div class="breadcrmps">
                        <h3>
                            <sapn id="main">
                                <img class="openbtn"
                                     onclick="openNav()"
                                     src="images/menu.png"
                                     alt="" />
                            </sapn>
                        </h3>
                    </div>
                    <div class="solo_mode">
                        <div class="row justify-content-center">
                            <div class="col-lg-9 col-xl-7">
                                <div class="cus_timer">
                                    <div class="inner_timer">
                                        <svg width="100"
                                             height="100"
                                             viewBox="0 0 100 100"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="50"
                                                    cy="50"
                                                    r="50"
                                                    fill="url(#paint0_linear_502_70)" />
                                            <circle cx="50" cy="50" r="45" fill="white" />
                                            <circle cx="50"
                                                    cy="50"
                                                    r="43"
                                                    fill="url(#paint1_linear_502_70)" />
                                            <circle cx="50"
                                                    cy="50"
                                                    r="38"
                                                    fill="url(#paint2_linear_502_70)" />
                                            <path fill-rule="evenodd"
                                                  clip-rule="evenodd"
                                                  d="M76.2505 54C74.76 54 73.5079 55.0848 73.1039 56.5196C70.2633 66.6063 60.9951 74 50 74C36.7452 74 26 63.2548 26 50C26 36.7452 36.7452 26 50 26C62.2409 26 72.3414 35.1641 73.8151 47.006C74.0197 48.6501 75.3431 50 77 50C78.6569 50 80.0158 48.653 79.8523 47.0042C78.3491 31.8422 65.5575 20 50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C64.0071 80 75.7721 70.4004 79.075 57.4213C79.5301 55.6329 78.096 54 76.2505 54Z"
                                                  fill="url(#paint3_linear_502_70)" />
                                            <mask id="mask0_502_70"
                                                  style="mask-type: alpha"
                                                  maskUnits="userSpaceOnUse"
                                                  x="20"
                                                  y="20"
                                                  width="60"
                                                  height="30">
                                                <rect x="20"
                                                      y="20"
                                                      width="60"
                                                      height="30"
                                                      fill="#C4C4C4" />
                                            </mask>
                                            <g mask="url(#mask0_502_70)">
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M76.2505 54C74.76 54 73.5079 55.0848 73.1039 56.5196C70.2633 66.6063 60.9951 74 50 74C36.7452 74 26 63.2548 26 50C26 36.7452 36.7452 26 50 26C62.2409 26 72.3414 35.1641 73.8151 47.006C74.0197 48.6501 75.3431 50 77 50C78.6569 50 80.0158 48.653 79.8523 47.0042C78.3491 31.8422 65.5575 20 50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C64.0071 80 75.7721 70.4004 79.075 57.4213C79.5301 55.6329 78.096 54 76.2505 54Z"
                                                      fill="#50AB33" />
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_502_70"
                                                                x1="50"
                                                                y1="0"
                                                                x2="50"
                                                                y2="100"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#C5C5C5" />
                                                    <stop offset="0.234375" stop-color="#FAFBFB" />
                                                    <stop offset="0.505208" stop-color="#ADB1B4" />
                                                    <stop offset="0.505308" stop-color="#CCCCCC" />
                                                    <stop offset="1" stop-color="#D3D3D3" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_502_70"
                                                                x1="50"
                                                                y1="7"
                                                                x2="50"
                                                                y2="93"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0F131F" />
                                                    <stop offset="0.494792" stop-color="#374B5E" />
                                                    <stop offset="1" stop-color="#314856" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_502_70"
                                                                x1="50"
                                                                y1="12"
                                                                x2="50"
                                                                y2="88"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#293C4B" />
                                                    <stop offset="1" stop-color="#0F131F" />
                                                </linearGradient>
                                                <linearGradient id="paint3_linear_502_70"
                                                                x1="50"
                                                                y1="94.5"
                                                                x2="73.5"
                                                                y2="64.5"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.509382" stop-color="#50AB33" />
                                                    <stop offset="1" stop-color="#161D2A" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div class="middle_text">00</div>
                                    </div>
                                </div>
                                <div class="solo_content">
                                    <span class="cus_time">00 / 00</span>
                                    <svg class="question_mark"
                                         width="36"
                                         height="36"
                                         viewBox="0 0 36 36"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18"
                                                cy="18"
                                                r="16"
                                                fill="white"
                                                stroke="#EEEEEE"
                                                stroke-width="4" />
                                        <path d="M16.3887 20.6348C16.3887 19.7233 16.4993 18.9974 16.7207 18.457C16.9421 17.9167 17.3457 17.3861 17.9316 16.8652C18.5241 16.3379 18.918 15.9115 19.1133 15.5859C19.3086 15.2539 19.4062 14.9056 19.4062 14.541C19.4062 13.4408 18.8984 12.8906 17.8828 12.8906C17.401 12.8906 17.0137 13.0404 16.7207 13.3398C16.4342 13.6328 16.2845 14.0397 16.2715 14.5605H13.4395C13.4525 13.3171 13.8529 12.3438 14.6406 11.6406C15.4349 10.9375 16.5156 10.5859 17.8828 10.5859C19.263 10.5859 20.334 10.9212 21.0957 11.5918C21.8574 12.2559 22.2383 13.1966 22.2383 14.4141C22.2383 14.9674 22.1146 15.4915 21.8672 15.9863C21.6198 16.4746 21.1868 17.0182 20.5684 17.6172L19.7773 18.3691C19.2826 18.8444 18.9993 19.401 18.9277 20.0391L18.8887 20.6348H16.3887ZM16.1055 23.6328C16.1055 23.1966 16.252 22.8385 16.5449 22.5586C16.8444 22.2721 17.2253 22.1289 17.6875 22.1289C18.1497 22.1289 18.5273 22.2721 18.8203 22.5586C19.1198 22.8385 19.2695 23.1966 19.2695 23.6328C19.2695 24.0625 19.123 24.4173 18.8301 24.6973C18.5436 24.9772 18.1628 25.1172 17.6875 25.1172C17.2122 25.1172 16.8281 24.9772 16.5352 24.6973C16.2487 24.4173 16.1055 24.0625 16.1055 23.6328Z"
                                              fill="#094E85" />
                                    </svg>

                                    <p>
                                        Besides being a fine quarterback, this player, usually a
                                        second stringer, was also a certified engineer. He played
                                        much of his career for the Colts.
                                    </p>
                                </div>

                                <div class="solo_list">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" class="solo_btn common_btn">Gene Mingo</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="solo_btn common_btn">Gene Mingo</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="solo_btn common_btn">Gene Mingo</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="solo_btn common_btn">Gene Mingo</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="solo_btn common_btn">Gene Mingo</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="solo_btn common_btn">Gene Mingo</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="solo_btn common_btn">Gene Mingo</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="solo_btn common_btn">Gene Mingo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="footer">
              <div class="ad_space">PLACE YOUR ADS HERE</div>
            </div> -->
                </div>
            </div>
        </section>
    </div>
</template>

 

<style>
    @import '../assets/styles/style.css';
    .BtnGene {
        margin: auto auto;
        position: relative;
        text-align: center;
        padding-top: -7%;
        border-image: 30 round;
        transform: translateY(20px);
      
    }
    #Txtbevel {
        border: 2px solid;
        margin: auto auto;
        background-color: white;
        height: 180px;
        max-width: 380px;
        text-align: center;
        transform: translateX(0px);
       
    }
    .divTimerCircle {
        transform: translateY(6px);
        color: blue;
        width: 75px;
        height: 75px;
        border-radius: 50%;
        margin: auto auto;
        background-color: white;
        padding-top: 10px;
        font-size: 25px;
        position: absolute;
        z-index: 99;
    }
    .divQuestion {
        transform: translateY(87px);
        color: blue;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: auto auto;
        background-color: white;
        padding-top: 10px;
        font-size: 25px;
    }
        #Txtbevel::before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            clip-path: polygon(7% 1%, 92% 0, 100% 20%, 100% 80%, 92% 100%, 8% 100%, 0% 80%, 0% 20%);
        }
            .ques_img {
        width: 50px;
        height: 50px;
        transform: translateY(80px);
    }
    .count {
           margin:auto auto;
          background-color:blue;
          height:20px;
          width:50px;
    }
    #txtimg {
        transform: translateY(33px); 
        color: white;
    }
    .txtclip {
        transform: translateY(55px); color: black; 
    }
    .divPolyGon {
        border: 2px solid;
        margin: auto auto;
        background-color: transparent;
        height: 180px;
        max-width: 380px;
        text-align: center;
        transform: translateX(0px);
        position: relative;
        margin-top:50px
    }

        .divPolyGon::before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            clip-path: polygon(7% 1%, 92% 0, 100% 20%, 100% 80%, 92% 100%, 8% 100%, 0% 80%, 0% 20%);
            background-color: #efefef;
        }
</style>
