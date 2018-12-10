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

<div class="index-bgwrap index-bgwrapnew">
    <!--<div w3-include-html="top.html"></div>-->

    <!-- header-->
    <header id="topnav">
        <div class="container">
            <!-- Logo container-->
            <div class="logo">
                <a href="./index.html">
                    <img class="logo-light" src="/images/finwise/logo-macau.png" alt="纷智全球峰会">
                    <img class="logo-dark" src="/images/finwise/logo-macau.png" alt="纷智全球峰会">
                </a>
            </div>
            <!-- End Logo container-->
            <div class="menu-extras">
                <div class="menu-item toggle-nav">
                    <!-- Mobile menu toggle-->
                    <a class="menu-toggle" href="#" onclick="mininav()">
                        <div class="toggle-inner"></div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>
            <div class="lang-select">
                <!-- <a href="/appc-index.html">中文</a><span class="fg-line">/</span><a href="/appc-index-en.html">English</a> -->
                <a href="https://msite.31huiyi.com/1097240309" class="fg-line" target="_blank" >获取门票</a>    
            </div>

            <div id="navigation">
                
                <ul class="navigation-menu nav">
                    <li>
                        <a href="../index.html" >首页</a>
                    </li>
                    <li>
                         <a href="./agenda.html" class="endingbtn" target="_blank" >会议议程</a>
                    </li>
                    <li>
                        <a href="./cooperation.html" class="endingbtn" >赞助合作</a>
                    </li>
                    <!--<li>-->
                         <!--<a href="./appc-index.html" class="endingbtn" target="_blank" >往届回顾</a>-->
                    <!--</li>-->
                    <li id="lang-switch" class="lang-switch">
                        <a href="javascript:;" class="endingbtn" onclick="i18n.setLang('zh')">中文</a>／
                        <a href="javascript:;" class="endingbtn" onclick="i18n.setLang('en')">EN</a>
                        <!--<a href="javascript:;" class="endingbtn" onclick="i18n.setLang('jap')">日語</a>-->
                   </li>
                </ul>
            </div>
        </div>
    </header>
    <!-- header end-->

    
</div>
<section class="fm-wrap spe-formwrap A-wrap container bg-white">
    <h1 >会议议程</h1>
    
    <img src="/images/finwise/1.jpg" class="coop-table">
    <img src="/images/finwise/2.jpg" class="coop-table">
    <img src="/images/finwise/3.jpg" class="coop-table">
    <img src="/images/finwise/4.jpg" class="coop-table">
    <img src="/images/finwise/5.jpg" class="coop-table">
    <img src="/images/finwise/6.jpg" class="coop-table">
    <img src="/images/finwise/7.jpg" class="coop-table">
    <img src="/images/finwise/8.jpg" class="coop-table">
    <img src="/images/finwise/9.jpg" class="coop-table">
    <img src="/images/finwise/10.jpg" class="coop-table">
    <img src="/images/finwise/11.jpg" class="coop-table">
    <img src="/images/finwise/12.jpg" class="coop-table">

</section>

<!--footer begin-->
<footer id="footer">
    <div class="container">
        <div class="row">
            <h2 class="text-center contact-us" >联系我们</h2>
            <div class="col-md-4 cont-im">
                <h3 class="h3-fl" >票务咨询</h3>
                <p class="contact-usstyle">
                    ticket@finwisesummit.com
                </p>
                <h3  class="h3-fl" >赞助咨询</h3>
                <p class="contact-usstyle">
                    Tel & Wechat 137 6459 5403
                </p>
            </div>

            <div class="col-md-4 social">
                <!-- <div>社交媒体</div>
                <a href="https://www.facebook.com/Finwise-456119451417070/?ref=aymt_homepage_panel">
                    <img  src="/images/finwise/facebook.png" alt="facebook">
                </a>
                <a href="https://twitter.com/finwise_org">
                    <img  src="/images/finwise/twitter.png" alt="twitter">
                </a> -->
            </div>

            <div class="col-md-4 social show-zhblock">
                <div  class="h3-fl" >微信公众号</div>
                <img src="/images/finwise/Wechat.png" id="wechat-img">
            </div>

            <div class="col-md-4 social show-enblock">
                <div>Socail Media</div>
                <a href="https://www.facebook.com/pg/Finwise-456119451417070/posts/">
                    <img  src="/images/finwise/facebook-purple.png" alt="facebook">
                </a>
                <a href="https://twitter.com/finwise_org">
                    <img  src="/images/finwise/twitter-purple.png" alt="twitter">
                </a>
                <a href="https://www.instagram.com/finwiseofficial/">
                    <img  src="/images/finwise/instagram-purple.png" alt="instagram">
                </a>
            </div>

        </div>

    </div>
</footer>
<!--footer end-->

<div class="go-top">
    <a href="#top">
        <i class="hc-angle-up"></i>
    </a>
</div>

</div>    
</template>

<script>
export default {
    head:{
        title:"纷智峰会 · 澳门"
    }
}
</script>

<style lang="less" scoped>
@import "~@style/bundle";
@import "~@style/hody-icons";
@import "~@style/xh-style";
@import "~@style/macau/agenda";
</style>