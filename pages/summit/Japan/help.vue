<template>
    <div class="content">
           <!-- Preloader-->
    <div id="loader">
        <div class="centrize">
            <div class="v-center">
                <div id="mask">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
    <!-- End Preloader-->


    <!-- header-->
    <header id="topnav">
        <div class="container">
            <!-- Logo container-->
            <div class="logo">
                <a href="index.html" class="finwise-logowrap">
                    <!--<img class="logo-light" data-original="/images/finwise/logo-macau.png" alt="纷智全球峰会">-->
                    <img class="logo-dark fwlogo" src="/images/finwise-tokyo/finwiselogo.png" alt="纷智全球峰会">
                </a>
            </div>
            <!-- End Logo container-->
            <div class="menu-extras">
                <div class="menu-item toggle-nav">
                    <!-- Mobile menu toggle-->
                    <a class="menu-toggle" href="help.html#" onclick="mininav()">
                        <div class="toggle-inner"></div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>

            <a href="https://msite.31huiyi.com/m/1323220912" target="_self" class="fg-line tikets-wapbox wap-show">
                <span class="gettiketsbox">
                    <!-- <a href="/appc-index.html">中文</a><span class="fg-line">/</span><a href="/appc-index-en.html">English</a> -->
                   个人参会
                </span>
            </a>

            <!--<div class="lang-select gray-nouse">-->
            <!--&lt;!&ndash; <a href="/appc-index.html">中文</a><span class="fg-line">/</span><a href="/appc-index-en.html">English</a> &ndash;&gt;-->
            <!--<a href="#" class="fg-line">获取门票</a>-->
            <!--</div>-->

            <div id="navigation">
                <ul class="navigation-menu nav">
                    <li>
                        <a href="../index.html">首页</a>
                    </li>
                    <li>
                        <a href="agenda/finwise-agenda.pdf" class="endingbtn" target="_blank">会议议程</a>
                    </li>
                    <li>
                        <a href="cooperation.html" class="endingbtn">赞助合作</a>
                    </li>
                    <li class="past-review sl-language">
                        <a class="spe-hover" href="javascript:;">往届回顾</a>
                        <ul class="review-old">
                            <li><a href="https://finwisesummit.com/Japan/appc-index.html" class="endingbtn" target="_blank">上海站</a></li>
                            <li><a href="https://finwisesummit.com/Japan/macau/index.html" class="endingbtn" target="_blank">澳门站</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="about.html" class="about">关于我们</a>
                    </li>
                    <li>
                        <a href="javascript:;" class="help active">参会指南</a>
                    </li>
                    <li class="tikets-box pc-hide">
                        <a href="javascript:;" target="_blank" class="fg-line">
                            <span class="gettiketsbox gray-nouse">
                                <!-- <a href="/appc-index.html">中文</a><span class="fg-line">/</span><a href="/appc-index-en.html">English</a> -->
                               获取门票
                            </span>
                        </a>
                    </li>
                    <li id="lang-switch" class="lang-switch">
                        <a href="javascript:;" class="endingbtn" onclick="i18n.setLang('zh')">中文</a>／
                        <a href="javascript:;" class="endingbtn" onclick="i18n.setLang('en')">EN</a>／
                        <a href="javascript:;" class="endingbtn" onclick="i18n.setLang('jap')">日語</a>
                   </li>
                </ul>
            </div>
        </div>
    </header>
    <!-- header end-->

    <!-- tab content begin-->
    <div class="tab-ctwrap container">
        <h2 class="vs-h1 help-h1 text-center">参会指南</h2>
        <ul id="myTab11" class="nav nav-tabs nav-zdytabs text-center">
            <li class="visatab tabitem tabitemxyz hide active">
                <a href="help.html#home" data-toggle="tab">
                    签证指南
                </a>
            </li>
            <li class="tabitem"><a href="help.html#ios" data-toggle="tab">周边酒店</a></li>

        </ul>
        <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade in active visa-ncontent" id="home">
                <!--visa begin-->
                <div class="visa-fwrap container">

                    <h2 class="vs-h1 text-center">中国人赴日个人旅游（单次）签证指南</h2>

                    <div class="im-tips">
                        <strong>
                            日本是不支持个人递签，必须通过有资质的旅行社或代理机构。<br>
                            自由行签证。有效期90天，最长停留15天。一般的日本旅行，自由行就是这种签证。
                        </strong>
                    </div>

                    <div class="mar-tb45">
                        <h3 class="va-h3">日本领事馆</h3>
                        <p>北京领区： 北京、天津、陕西、山西、甘肃、河南、河北、湖北、湖南、青海、新疆维吾尔自治区、宁夏回族自治区、西藏自治区、内蒙古自治区；  </p>
                        <p>上海领区：上海、安徽、浙江、江苏、江西； </p>
                        <p>广州领区： 广东、海南、福建、广西； </p>
                        <p>沈阳领区： 辽宁（除大连）、吉林、黑龙江； </p>
                        <p>重庆领区： 重庆、四川、贵州、云南； </p>
                        <p>大连领区： 大连市； </p>
                        <p>青岛领区： 山东省；</p>
                        <p>香港领区： 香港和澳门</p>
                    </div>

                    <div class="mar-tb45">
                        <h3 class="va-h3">所需材料</h3>
                        <p>1、护照原件（新老护照，老护照遗失的要提供遗失证明）</p>
                        <p>2、2张2寸白底彩照（半年内）</p>
                        <p>3、身份证（正反）</p>
                        <p>4、复印件户口簿（全本）复印件在职证明，需体现10万以上年收入（尽量公司抬头纸打印，公章）</p>
                        <p>5、公司营业执照（副本）（加盖公章）</p>
                        <p>6、签证申请表（双面打印）</p>
                        <p>7、个人资料表和个人信息同意处理书</p>
                        <p>8、机票和酒店预订单（必须体现所有签证人的姓名等信息）</p>
                        <p>9、完税证明（近6个月）</p>
                        <p>10、工资卡银行流水单（近6个月，银行盖章）</p>
                    </div>

                    <div class="mar-tb45">
                        <h3 class="va-h3">标准审查时间</h3>
                        <p>如果审查结果没有问题，从日本领事馆受理翌日起第5个工作日发给签证。 </p>
                        <p>*上述时间不包括旅行社另行审查该签证的时间，敬请注意。</p>
                    </div>

                    <div class="im-tips">
                        <strong>
                            如有疑问，请访问日本国驻华大使馆官网或咨询当地旅行社。<br>
                            日本国驻华大使馆官网：http://www.cn.emb-japan.go.jp/consular/joho180301.htm
                        </strong>
                    </div>



                </div>
                <!--visa end-->
            </div>
            <div class="tab-pane fade hotel-content" id="ios">
                <!--hotel begin-->
                <div class="hotel-wrap container">
                    <div class="im-tips">
                        <strong >
                            温馨提示：以下是主办方推荐的酒店，离会议中心比较近，不负责预定，如需预定请您直接联系您中意的酒店，请您理解！
                            注：如有住宿需求，请尽快联系酒店方，以免人多预定不到您理想的酒店。
                        </strong>
                    </div>


                    <div class="ht-list mar-tb45">
                        <h3 class="va-h3"> Grand Prince Hotel New Takanawa（新高轮格兰王子大饭店）</h3>
                        <div class="ht-imgs clearfix">
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht15.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht14.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht13.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht16.png" class="ht-img lazy">
                            </div>
                        </div>
                        <p class="ht-dt"> 四星级酒店 </p>
                        <div class="ht-dt">
                            <span>地址：</span>
                            <span>108-8612 东京都, Minato-ku, Takanawa 3-13-1</span>
                        </div>
                        <p class="ht-dt"> 大会举办场地酒店 </p>
                    </div>

                    <div class="ht-list mar-tb45">
                        <h3 class="va-h3">  Shinagawa Tobu Hotel（品川东武酒店）</h3>
                        <div class="ht-imgs clearfix">
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht05.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht06.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht07.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht08.png" class="ht-img lazy">
                            </div>
                        </div>
                        <p class="ht-dt"> 三星级酒店 </p>
                        <div class="ht-dt">
                            <span>地址：</span>
                            <span>108-0074 东京都, Minato-ku Takanawa 4-7-6</span>
                        </div>
                        <p class="ht-dt"> 距离会场 0.3 公里，步行 5 分钟到会场 </p>
                    </div>

                    <div class="ht-list mar-tb45">
                        <h3 class="va-h3">  Keikyu EX Inn Takanawa（高轮京急酒店）</h3>
                        <div class="ht-imgs clearfix">
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht01.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht02.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht03.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht04.png" class="ht-img lazy">
                            </div>
                        </div>
                        <p class="ht-dt"> 三星级酒店 </p>
                        <div class="ht-dt">
                            <span>地址：</span>
                            <span>108-0074 东京都, Minato-ku Takanawa 4-10-8</span>
                        </div>
                        <p class="ht-dt"> 距离会场 1 公里，步行 5-10 分钟到会场 </p>
                    </div>

                    <div class="ht-list mar-tb45">
                        <h3 class="va-h3">  Keikyu EX Inn Shinagawa（品川京滨急EX酒店）</h3>
                        <div class="ht-imgs clearfix">
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht09.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht10.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht11.png" class="ht-img lazy">
                            </div>
                            <div class="col-sm-3">
                                <img data-original="/images/hotel-imgs/ht12.png" class="ht-img lazy">
                            </div>
                        </div>
                        <p class="ht-dt"> 三星级酒店 </p>
                        <div class="ht-dt">
                            <span>地址：</span>
                            <span>108-0074 东京都, Minato-ku Takanawa 3-13-3</span>
                        </div>
                        <p class="ht-dt"> 距离会场 1.5 公里，步行10 分钟到会场 </p>
                    </div>
                </div>
                <!--hotel end-->
            </div>

        </div>
    </div>
    <!-- tab content end-->


    <!--load common footer begin-->
    <footer id="footer" class="load-footer"></footer>
    <!--load common footer end-->


    <div class="go-top">
        <a href="help.html#top">
            <i class="hc-angle-up"></i>
        </a>
    </div>

    </div>
</template>

<script>
export default {
    head:{
        title:""
    }
}
</script>

<style lang="less" scoped>
@import "~@style/bundle";
@import "~@style/xh-style";
@import "~@style/scss";

#topnav.stick .navigation-menu > li > a:hover{
            color: #f9297d;
        }

        .foot-p p{
            color: #fff;
        }

        .lang-select a:hover{
            color: #fff;
        }

        #footer{
            /*margin-top: 50px;*/
        }

        .fg-line{
            margin: 0;
        }

        .get-btn, .corange-btn{
            background: #f9297d;
        }

        .head-p{
            background: none;
        }

        .i-cont .foot-p{
            background: #333;
            padding-top: 0;
            padding: 25px 40px 40px;
        }

        .head-p{
            padding: 40px;
            margin-top: 20px;
        }

        .bz-btn.corange-btn:hover, .get-btn, .corange-btn:hover {
            background: #ff5599;
        }

        .xx-title-new{
            font-size: 30px;
            padding-bottom: 20px;
        }

        .get-btn, .corange-btn{
            padding: 0;
        }

        .i-cont{
            /*background: url(/images/finwise/zanzhu.jpg);
            background-attachment: fixed;*/
        }

        .head-p{
            background: #333;
        }

        #topnav .logo img{
            width: 210px;
        }

        .foot-p .plname-info{
            /*color: #333;*/
        }

        #topnav .toggle-inner {
            /*background-color: #ff5599;*/
            background-color: #D8D8D8;;
        }

        @media (max-width: 768px){
            .clogo-img{
                /*width: 230px;*/
                /*margin: 120px 34px 10px 0;*/
            }

            .index-bgwrapnew {
                background-position: center;
                background-size: cover;
            }

            .head-p, .i-cont .foot-p{
                padding-left: 0;
                padding-right: 0;
            }

            #topnav .logo img{
                width: 180px;
            }



            .head-p .xx-title{
                padding-left: 20px;
            }
        }

        @media (max-width: 991px){
            .lang-select {
                right: 46px;
                top: 10px;
            }
        }
</style>