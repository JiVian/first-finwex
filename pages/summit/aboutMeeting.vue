<template>
<div class="content">
    <!--banner begin-->
    <div class="about-fwrap"></div>
    <!--banner end-->

    <!--finwsie des begin-->
    <div class="about-deswrap about-infowrap pd-tb container">
        <h2 class="h2-tlcom text-center" >
          <!-- 关于大会 -->
            <!--<br><span class="about-intr wap-show">INTRODUCTION</span>-->
        {{ $t('page.gydh17')}}</h2>
        <p class="afw-des first-p">
          <!-- FINWISE峰会是中国最具影响的区块链峰会之一，团队由经验丰富的金融市场专家和区块链行业团队组成，核心成员均来自知名银行、区块链、咨询、金融、互联网公司，汇集时代最强大脑，集合优秀企业，旨在加强行业从业者们的交流，推动全球金融科技的发展。 -->
          {{$t('page.fhfz71')}}</p>
        <p class="afw-des">
          <!-- 从2017起，FINWISE先后在上海和澳门两地举办，共吸引近万人现场参与，数百万人在线参与，近百家国内外媒体报道。2018年FINWISE将在东京、迪拜、香港等地陆续举办，我们邀请一起见证更美好的未来。 -->
          {{$t('page.cewl72')}}</p>
    </div>
    <!--finwsie des end-->
    
    <!--finwsie plan begin-->
    <div class="plan-wrap">
    <div class="event_box container">
        <!--<h2 class="h2-tlcom  text-center ">大会举办计划</h2>-->

        <div class="planc-wrap  text-center">
            <!--<h2 class="h2-tlcom">大会举办计划</h2>-->
            <!--<img src="/images/finwise-tokyo/about/fw-tokyo.png" class="lazy plan-img wap-vidimg">-->
            <!--<p class="beginning-time mar-left">21—22 MAY, 2018 </p>-->

            <!--<div class="space_div">-->
                <!--<p class="left_space"></p>-->
                <!--<p class="right_space"></p>-->
            <!--</div>-->


            <div class="parBd clearfix">
                <div class="slideBox">
                    <div class="slideBoxi">
                         <img src="/images/finwise-tokyo/about/city/fw-macau.png" class="plan-img">
                    </div>
                </div>
                <div class="slideBox" style="display: none;">
                    <div class="slideBoxi">
                        <img src="/images/finwise-tokyo/about/fw-tokyo.png" class="plan-img">
                    </div>
                </div>
                <div class="slideBox" style="display: none;">
                    <div class="slideBoxi">
                         <img src="/images/finwise-tokyo/about/city/fw-LosAngles.png" class="plan-img">
                     </div>
                </div>
                <!--<div class="slideBox" style="display: none;">-->
                    <!--<div class="slideBoxi">-->
                          <!--<img src="/images/finwise-tokyo/about/city/fw-Amsterdam.png" class="plan-img">-->
                    <!--</div>-->
                <!--</div>-->
                <div class="slideBox" style="display: none;">
                    <div class="slideBoxi">
                         <img src="/images/finwise-tokyo/about/city/fw-HK.png" class="plan-img">
                    </div>
                </div>
                <div class="slideBox" style="display: none;">
                    <div class="slideBoxi">
                          <img src="/images/finwise-tokyo/about/city/fw-Dubai.png" class="plan-img">
                     </div>
                </div>
                <div class="slideBox" style="display: none;">
                    <div class="slideBoxi">
                        <img src="/images/finwise-tokyo/about/city/fw-Bankok.png" class="plan-img">
                    </div>
                    </div>
            </div>


            <ul class="time-historywrap parHd clearfix">

                <li class="dl-tbox">
                    <div class="ht-con htthing-box">
                        <i class="circle-p"></i>
                        <p class="tr-addr city-lj">
                          <!-- 澳门 -->
                          {{$t('page.citymacau')}}</p>
                        <p class="tr-date city-lj">1.12-13</p>
                    </div>
                    <div class="line-c htthing-box"></div>
                </li>

                <li class="dl-tbox">
                    <div class="ht-con htthing-box">
                        <i class="circle-p"></i>
                        <p class="tr-addr city-lj">
                          <!-- 东京 -->
                          {{$t('page.citytokyo')}}</p>
                        <p class="tr-date city-lj">5.21-22</p>
                    </div>
                    <div class="line-c htthing-box"></div>
                </li>

                <li class="dl-tbox">
                    <div class="ht-con htthing-box">
                        <i class="circle-p"></i>
                        <p class="tr-addr city-lj">
                          <!-- 洛杉矶 -->
                          {{$t('page.citylsals')}}</p>
                        <p class="tr-date city-lj">
                          <!-- 6月 -->
                          {{$t('page.citytime1')}}</p>
                    </div>
                    <div class="line-c htthing-box"></div>
                </li>

                <!--<li class="dl-tbox">-->
                    <!--<div class="ht-con htthing-box">-->
                        <!--<i class="circle-p"></i>-->
                        <!--<p class="tr-addr city-lj">阿姆斯特丹</p>-->
                        <!--<p class="tr-date city-lj">6月</p>-->
                    <!--</div>-->
                    <!--<div class="line-c  htthing-box"></div>-->
                <!--</li>-->

                <li class="dl-tbox">
                    <div class="ht-con htthing-box">
                        <i class="circle-p"></i>
                        <p class="tr-addr city-lj">
                          <!-- 香港 -->
                          {{$t('page.cityhongkong')}}</p>
                        <p class="tr-date city-lj">
                          <!-- 8月 -->
                         {{$t('page.citytime2')}}</p>
                    </div>
                    <div class="line-c line-empty htthing-box"></div>
                </li>

                <li class="dl-tbox">
                    <div class="ht-con htthing-box">
                        <i class="circle-p"></i>
                        <p class="tr-addr city-lj">
                          <!-- 迪拜 -->
                          {{$t('page.citydubai')}}</p>
                        <p class="tr-date city-lj">
                          <!-- 10月 -->
                          {{$t('page.citytime3')}}</p>
                    </div>
                    <div class="line-c line-empty htthing-box"></div>
                </li>

                <li class="dl-tbox last-actbox">
                    <div class="ht-con htthing-box">
                        <i class="circle-p"></i>
                        <p class="tr-addr city-lj">
                          <!-- 曼谷 -->
                          {{$t('page.cityBangkok')}}</p>
                        <p class="tr-date city-lj">
                          <!-- 12月 -->
                          {{$t('page.cityte4')}}</p>
                    </div>
                    <div class="line-c line-empty htthing-box"></div>
                </li>

            </ul>
        </div>
    </div>
    </div>
    <!--finwsie plan end-->
    
    <!--finwsie Founder begin-->
    <div class="about-deswrap team-wrap pd-tb container">
        <h2 class="h2-tlcom text-center">
          <!-- FINWISE组委会 -->
            <!--<br><span class="about-intr wap-show">INTRODUCTION</span>-->
        {{$t('page.zwhe73')}}</h2>


        <div class="Header_team text-center row clearfix">

            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/finwise-tokyo/about/team-photo/Riconi.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">
                            <h3 class="fd-member">Riconi You</h3>
                            <span class="position-info">
                              <!-- 创始人&执行主席 -->
                              {{$t('page.positionriconi17')}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/HongKong/Team/wujiezhuang.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">
                            <h3 class="fd-member">
                              <!-- 吴杰庄 -->
                              {{$t('page.nameswjz72')}}</h3>
                            <span class="position-info">
                              <!-- 全国政协委员、香港青年联会首席参事、高锋集团董事局主席 -->
                              {{$t('page.positionwjz72')}}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row clearfix">

            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/finwise-tokyo/about/team-photo/zhangliaoliao.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">
                            <h3 class="fd-member">
                              <!-- 张了了 -->
                              {{$t('page.namezll12')}}</h3>
                            <span class="position-info">
                              <!-- gate.io合伙人 -->
                              {{$t('page.positionzll12')}}</span>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/HongKong/Team/huangjunlang.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">
                            <h3 class="fd-member">
                              <!-- 黄俊瑯 -->
                              {{$t('page.namehjl02')}}</h3>
                            <span class="position-info">
                              <!-- 高锋创新金融行政总裁 -->
                              {{$t('page.positionhjl02')}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/HongKong/Team/hujunyang.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">
                            <h3 class="fd-member">
                              <!-- 胡竣揚 -->
                              {{$t('page.namehjy03')}}</h3>
                            <span class="position-info">
                              <!-- 高锋创新金融区块链总监 -->
                              {{$t('page.positionhjy03')}}</span>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/HongKong/Team/zhongbingchen.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">
                            <h3 class="fd-member">
                              <!-- 钟并成 -->
                              {{$t('page.namezbc01')}}</h3>
                            <span class="position-info">
                              <!-- 高锋创新金融销售和市场总监 -->
                              {{$t('page.positionzbc01')}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!--finwsie Founder end-->

    <!--Team begin-->
    <div class="team-wrap coreteam-wrap container">
        <h2 class="h2-tlcom text-center">
          <!-- 核心团队成员 -->
          {{$t('page.hxcy74')}}</h2>
        <div class="row clearfix">

            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/finwise-tokyo/about/team-photo/raymond.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">Raymond He<br>
                            <span class="position-info">
                              <!-- 赞助合作 -->
                              {{$t('page.zzhz01')}}</span>
                        </div>
                        <p class="email-addr">raymond.he@finwex.com</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/finwise-tokyo/about/team-photo/qianjie.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">Damian Qian<br>
                            <span class="position-info" >
                              <!-- 赞助合作 -->
                              {{$t('page.zzhz01')}}</span>
                        </div>
                        <p class="email-addr">Damian@finwex.com</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/finwise-tokyo/about/team-photo/Steven Zhou.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">Steven Zhou<br>
                            <span class="position-info" >
                              <!-- 赞助合作 -->
                              {{$t('page.zzhz01')}}</span>
                        </div>
                        <p class="email-addr">steven.zhou@finwex.com</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/finwise-tokyo/about/team-photo/David.Li.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">David Li<br>
                            <span class="position-info">
                              <!-- 赞助合作 -->
                              {{$t('page.zzhz01')}}</span>
                        </div>
                        <p class="email-addr">David.Li@finwex.com</p>
                    </div>
                </div>
            </div>


            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/finwise-tokyo/about/team-photo/michelle.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">Michelle Dai<br>
                            <span class="position-info">
                              <!-- 媒体事宜 -->
                              {{$t('page.mtsy04')}}</span>
                        </div>
                        <p class="email-addr">Michelle.Dai@finwex.com</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/finwise-tokyo/about/team-photo/ewajiang.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">Ewa Jiang<br>
                            <span class="position-info">
                              <!-- 媒体事宜 -->
                              {{$t('page.mtsy04')}}</span>
                        </div>
                        <p class="email-addr">Ewa.Jiang@finwex.com</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-3 col-sm-12">
                <div class="team-bbox text-center">
                    <img src="/images/finwise-tokyo/about/team-photo/hq.png" class="lazy team-ph">
                    <div class="tm-detail">
                        <div class="foundername">Carol Huang<br>
                            <span class="position-info">
                              <!-- 票务事宜 -->
                              {{$t('page.pwsy05')}}</span>
                        </div>
                        <p class="email-addr">Carol.huang@finwex.com</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!--Team end-->
   
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
        title:"纷智峰会 · 关于大会"
    },
    layout:"summit"
}
</script>
<style lang="less" scoped>
@import "~@style/macau/Meeting";
@import "~@style/bundle";
@import "~@style/xh-style";
@import "~@style/scss";

.content{
  background-color:#f2f2f2;
}

</style>
