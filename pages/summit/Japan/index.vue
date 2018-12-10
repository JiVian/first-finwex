<template>
<div class="content">
    <div class="index-bgwrap index-fwrap">
        <!--<div w3-include-html="top.html"></div>-->

        <!--load common header begin-->
        <!--<header id="topnav" class="load-header"></header>-->
        <!--load common header end-->

        <!--welcome begin-->
        <section class="im-welbox index-bgdd text-center container">
            <div class="index-bg">
                <!-- 桌面端 -->
                <img src="/images/finwex-summit/Tokoyo/il.png" alt="2018纷智区块链峰会-东京" class="clogo-img lazy pc-hide">
                <!-- 移动端 -->
                <img src="/images/finwex-summit/Tokoyo/il-wap.png" alt="2018纷智区块链峰会-东京" class="clogo-img lazy wap-show">
                <p class="beginning-time mar-left">21—22 MAY, 2018 </p>
                
                <p class="beginning-time mar-left mr-btsapace">
                   <!-- 日本东京新高轮格兰王子酒店 -->
                   {{ $t('indexBg.beginning')}}
                </p>
                <!-- 企业参会 -->
                <!-- <a href="./cooperation.html" target="_blank" class="red-btn wap-show mar-left gray-nouse">
                  
                  {{ $t('indexBg.Cop')}}
                <i class="s-icon"></i></a> -->
                <!--<img src="/images/finwex-summit/Tokoyo/fiwise.png" alt="" class="clogo-img">-->
                <!--<img src="/images/finwex-summit/Tokoyo/slg.png" alt="" class="clogo-img">-->
                
            </div>

             <!--参会入口 begin  企业参展或演讲-->
            <!-- <div class="entrance-wrap row">
                <div class="tiketsex col-md-6">
                    <div class="tkbox"></div>
                    <div class="tkbox-br">
                        <h3 class="xx-title">
                          {{ $t('entrance.enTitle') }}
                        </h3>
                        <p class="tk-des">
                          {{ $t('entrance.enDes')}}
                        </p>

                        <div class="foot-p text-center">
                            <a href="./cooperation.html" target="_blank" class="corange-btn gray-nouse">
                            {{ $t('entrance.enPer')}}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="tiketsex col-md-6">
                    <div class="tkbox"></div>
                    <div class="tkbox-br">
                        <h3 class="xx-title">
                          {{ $t('tiket.tkTitle')}}
                        </h3>

                        <div class="tk-des">
                            <span class="buy-tk el-tk" >
                                {{ $t('tiket.tkDes')}}
                            </span>
                        </div>

                        <div class="foot-p text-center">
                            <a href="javascript:;" target="_blank" class="corange-btn gray-nouse">

                              {{ $t('tiket.tkCor')}}
                            </a>
                        </div>
                    </div>
                </div>
            </div> -->
            <!--参会入口 end-->
        </section>
        <!--welcome end-->

        <!--count numbers begin-->
        <div class="row count-wrap data-item wap-show">
            <ul class="swatch-a col-md-1">
                <li class="number wap-num"> <img src="/images/finwex-summit/Tokoyo/number/2500.png"> </li>
                <li class="title"> 
                  <!-- 参会嘉宾 -->
                  {{ $t('count.chjb13')}} </li>
            </ul>

            <ul class="swatch-a  col-md-1">
                <li class="number wap-num"> <img src="/images/finwex-summit/Tokoyo/number/100.png"> </li>
                <li class="title"> 
                  <!-- 投资机构  -->
                  {{ $t('count.tzjg14')}} </li>
            </ul>
            <ul class="swatch-d col-md-1">
                <li class="number wap-num"> <img src="/images/finwex-summit/Tokoyo/number/70.png"> </li>
                <li class="title"> 
                  <!-- 媒体覆盖  -->
                  {{ $t('count.mediacover')}} </li>
            </ul>
            <ul class="swatch-e col-md-1">
                <li class="number wap-num"> <img src="/images/finwex-summit/Tokoyo/number/60.png"> </li>
                <li class="title"> 
                  <!-- 参会企业  -->
                  {{ $t('count.chqyfw')}} </li>
            </ul>
        </div>
        <!--count numbers end-->
    </div>

    <!--purple bg content begin-->
    <section class="Bg-fwwrap">
        <!--about begin-->
        <div class="about-wrap container">
            <div class="pc-hide clearfix">

                <div class="row count-wrap data-item">
                    <ul class="swatch-a col-md-1">
                        <!--<li class="number"> 3,000+ </li>-->
                        <li class="number"> <img src="/images/finwex-summit/Tokoyo/2500.png"> </li>
                        <li class="number wap-num"> <img src="/images/finwex-summit/Tokoyo/number/2500.png"> </li>
                        <li class="title"> 
                          <!-- 参会嘉宾  -->
                          {{ $t('count.chjb13')}} </li>
                    </ul>
                    <!--<ul class="swatch-a col-md-1">-->
                        <!--&lt;!&ndash;<li class="number"> 80+ </li>&ndash;&gt;-->
                        <!--<li class="number"> <img src="/images/finwex-summit/Tokoyo/80.png"> </li>-->
                        <!--<li class="number wap-num"> <img src="/images/finwex-summit/Tokoyo/number/80.png"> </li>-->
                        <!--<li class="title"> 金融科技意见领袖 </li>-->
                    <!--</ul>-->
                    <ul class="swatch-a  col-md-1">
                        <!--<li class="number"> 100+ </li>-->
                        <li class="number"> <img src="/images/finwex-summit/Tokoyo/100.png"> </li>
                        <li class="number wap-num"> <img src="/images/finwex-summit/Tokoyo/number/100.png"> </li>
                        <li class="title">
                           <!-- 投资机构  -->
                           {{ $t('count.tzjg14')}}</li>
                    </ul>
                    <ul class="swatch-d col-md-1">
                        <!--<li class="number"> 70+ </li>-->
                        <li class="number"> <img src="/images/finwex-summit/Tokoyo/70.png"> </li>
                        <li class="number wap-num"> <img src="/images/finwex-summit/Tokoyo/number/70.png"> </li>
                        <li class="title">
                          <!-- 媒体参与报道  -->
                          {{ $t('count.mtbd15')}}</li>
                    </ul>
                    <ul class="swatch-e col-md-1">
                        <!--<li class="number"> 60+ </li>-->
                        <li class="number"> <img src="/images/finwex-summit/Tokoyo/60.png"> </li>
                        <li class="number wap-num"> <img src="/images/finwex-summit/Tokoyo/number/60.png"> </li>
                        <li class="title"> 
                          <!-- 全球区块链公司  -->
                          {{ $t('count.qqgs16')}}</li>
                    </ul>
                </div>
            </div>
            <!--end list-->

            <div class="contact-wrap clearfix">
                <div class="col-md-6 video-box pc-hide">
                    <video src="/download/video_tokyo.mp4" controls="controls" style=""></video>
                    <!--<img src="/images/finwex-summit/Tokoyo/video-adwap.png" class="lazy wap-vidimg wap-show">-->
                    <!--<video src="/images/finwise/mv.mp4" controls="controls" style="margin: 0 auto 60px;display: block;" >-->
                    <!--您的浏览器不支持 video 标签。-->
                    <!--</video>-->
                </div>
                <div class="col-md-6 video_right">
                    <h2 class="about-finwise h2-tl" >
                      <!-- 关于大会  -->
                      {{ $t('aboutFn.gydh17')}}
                      <br><span class="about-intr wap-show">INTRODUCTION</span></h2>
                    <p class="abfw-des"> 
                      <!-- Finwise Summit纷智区块链峰会,旨在加强全球金融行业从业者们的交流，推动全球金融科技的发展，我们将以目前金融科技领域最前沿的区块链技术为主导，集合全球优秀业内企业，对未来科技金融及区块链技术应用发展，进行展望和推进。  -->
                      {{ $t('aboutFn.fstj18')}}</p>
                   <!-- 了解更多 -->
                    <!-- <a href="/summit/aboutMeeting" class="abfw-des c-more">
                    {{ $t('aboutFn.more')}}</a> -->
                    <a target="_blank" href="https://home.aiyaopai.com/tokyo/index.html" class="full_video">{{ $t('page.wzsp')}}</a>
                </div>
                <div class="col-md-6 video-box wap-show">
                    <!-- <img src="/images/finwex-summit/Tokoyo/video-adwap.png" class="lazy wap-vidimg finwise-ad">
                    <img src="/images/finwex-summit/Tokoyo/about-banner.png" class="lazy wap-vidimg"> -->
                    <!--<video src="/images/finwise/mv.mp4" controls="controls" style="margin: 0 auto 60px;display: block;" >-->
                    <!--您的浏览器不支持 video 标签。-->
                    <!--</video>-->
                </div>
            </div>

        </div>
        <!--about end-->

        <!--参会嘉宾 begin-->
        <section class="footer-wrap mar-auto container xh-container guest-item">
            <div class="text-center">
                <h2 class="h2-tl text-center"><span class="h2-tlgt">
                  <!-- 参会嘉宾 -->
                   {{ $t('page.chjb131')}}</span></h2>
            </div>
            <div class="row show-ft">

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/JC-Oliver.png" alt="JC Oliver" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">JC Oliver</p>
                        <p class="pl-info">Global Chief Creative Officer at Unlockd</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/zhouhongqi.png" alt="Chou Hung Chi" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 周宏骐  -->
                           {{ $t('page.namezhq74')}}</p>
                        <p class="pl-info">
                          <!-- 新加坡国立大学教授, 香港科技大学管理学院兼任教授, 北京大学国家发展研究院特聘教授 -->
                            {{ $t('page.positionzhq74')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Johnny.png" alt="" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 吴杰庄 -->
                            {{ $t('page.nameswjz72')}}</p>
                        <p class="pl-info">
                          <!-- 高峰集团董事局主席 全国政协委员、香港青年联会首席参事 -->
                            {{ $t('page.positionwjz72')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/liuyanshen.png" alt="刘彦燊" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 刘彦燊   -->
                          {{ $t('page.lysn76')}}</p>
                        <p class="pl-info">
                          <!-- Colony Capital柯罗尼资本亚太区董事总经理 WE+创始人兼首席执行官CEO  -->
                           {{ $t('page.lysd77')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/liujialin.jpg" alt="刘嘉陵" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 刘嘉陵（巨蟹）  -->
                          {{ $t('page.nameljl68')}}</p>
                        <p class="pl-info">
                          <!-- 比特股理事会理事
                            比特创业营创始成员
                            YOYOW 联合创始人   -->
                            {{ $t('page.positionljl68')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/liufei.jpg" alt="刘飞" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 刘飞  -->
                           {{ $t('page.namelf04')}}</p>
                        <p class="pl-info">
                          <!-- 火币Pro运营总监  -->
                           {{ $t('page.positionlf04')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/liujin.png" alt="刘劲" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 刘劲   -->
                          {{ $t('page.namelj05')}}</p>
                        <p class="pl-info">
                          <!-- 日中AI·IoT产业联盟会长 -->
                            {{ $t('page.positionlj05')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/zhangyinhai.jpg" alt="张银海" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 张银海  -->
                           {{ $t('page.namezyh03')}}</p>
                        <p class="pl-info">
                          <!-- Lighting BTC中国区负责人   -->
                          {{ $t('page.positionzyh03')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/you.jpg" alt="Riconi You" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Riconi You</p>
                        <p class="pl-info">Finwise Co-founder</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/wangyuehua.jpg" alt="王岳华" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 王岳华   -->
                          {{ $t('page.namewyh10')}}</p>
                        <p class="pl-info">
                          <!-- 德丰杰龙脉创新基金 合伙人  -->
                           {{ $t('page.positionwyh10')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Supernova.png" alt="Liang  Zeng" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 曾良   -->
                          {{ $t('page.namesupernova14')}}</p>
                        <p class="pl-info">
                          <!-- Supernova Chain董事长、币快报联合创始人   -->
                          {{ $t('page.positionsupernova14')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/wangbingsheng.png" alt="王彬生" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 王彬生   -->
                          {{ $t('page.namewbs02')}}</p>
                        <p class="pl-info">
                          <!-- 区块链联合发展组织顾问、中国社会科学院研究生院特聘教授  -->
                           {{ $t('page.positionwbs02')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/liangyu.jpg" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 粱羽   -->
                          {{ $t('page.namely53')}}</p>
                        <p class="pl-info">
                          <!-- 星链StarChain投资人、開拍網創始人&CEO  -->
                           {{ $t('page.positionly53')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/songfei.png" alt="宋斐" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 宋斐 -->
                            {{ $t('page.namesf06')}}</p>
                        <p class="pl-info">
                          <!-- 海朴际诚基金执行合伙人  -->
                           {{ $t('page.positionsf06')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/zhuangzhong.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 庄重   -->
                          {{ $t('page.namezz88')}}</p>
                        <p class="pl-info">
                          <!-- 全球最大矿池BTC.com负责人   -->
                          {{ $t('page.positionzz88')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Marwan.jpg" alt="Marwan" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Marwan</p>
                        <p class="pl-info">Dr. Marwan Al-Zarooni | Founder and CEO of Dubai Blockchain Centr</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/wuji.png" alt="wuji" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 无极  -->
                           {{ $t('page.nameswj71')}}</p>
                        <p class="pl-info">
                          <!-- 华迎控股集团 董事长   -->
                          {{ $t('page.positionswj71')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Leon.png" alt="Leon" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 刘洋   -->
                          {{ $t('page.nameliuyang76')}}</p>
                        <p class="pl-info">
                          <!-- BITKAN 董事长  -->
                           {{ $t('page.positionliuyang76')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/liubinjiang.png" alt="刘炳江" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 刘炳江  -->
                           {{ $t('page.namelbj14')}}</p>
                        <p class="pl-info">
                          <!-- Digital Asset Co., Ltd 社长   -->
                          {{ $t('page.positionlbj14')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/guohongcai.jpg" alt="郭宏才" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 郭宏才  -->
                          {{ $t('page.nameghc11')}}</p>
                        <p class="pl-info">
                          <!-- 比特币天使投资人  -->
                           {{ $t('page.positionghc11')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/hujiepeng.jpg" alt="胡杰鹏" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 胡杰鹏  -->
                           {{ $t('page.namehjp18')}}</p>
                        <p class="pl-info">
                          <!-- 香港区块链金融总会联合发起人&量子金市场顾问  -->
                          {{ $t('page.positionhjp18')}}</p>
                    </div>
                </div>
                <div class="col-md-2" style="display:none!important">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/linqibin.jpg" alt="林琪武" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 林琪武  -->
                          {{ $t('page.namelqw19')}}</p>
                        <p class="pl-info">
                          <!-- 知产链IPChain联合创始人  -->
                          {{ $t('page.positionlqw19')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/gaoyilong.jpeg" alt="高泽龙" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 高泽龙 -->
                          {{ $t('page.namegyl69')}}</p>
                        <p class="pl-info">
                          <!-- 国际区块链与数字货币协会 副会长  -->
                          {{ $t('page.positiongyl69')}}</p>
                    </div>
                </div>


                <div class="col-md-2" style="display: none!important">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/limingzhao.jpg" alt="李明肇" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 李明肇 -->
                          {{ $t('page.namelmz21')}}</p>
                        <p class="pl-info">
                          <!-- 小牛链 CEO  -->
                          {{ $t('page.positionlmz21')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/keda-che.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Keda Che</p>
                        <p class="pl-info">
                          <!-- Universal Labs的创始人  -->
                          {{ $t('page.positionkc87')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/zhaoqianjie.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 赵千捷 -->
                          {{ $t('page.namezhaoqianjie80')}}</p>
                        <p class="pl-info">
                          <!-- BTCC 高级副总裁 -->
                          {{ $t('page.positionzhaoqianjie80')}}</p>
                    </div>
                </div>

                <div class="col-md-2">

                    <div class="photo-dbbox">
                        <img src="/images/finwise/yezuyan.jpg" alt="叶祖研" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 叶祖研 -->
                           {{ $t('page.nameyzy24')}}</p>
                        <p class="pl-info">
                          <!-- 链向财经联合创始人&CEO -->
                           {{ $t('page.positionyzy24')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/zhangliaoliao.jpg" alt="张了了" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 张了了  -->
                          {{ $t('oage.namezll12')}}</p>
                        <p class="pl-info">
                          <!-- gate.io合伙人 -->
                           {{ $t('page.positionzll12')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/liyiling.png" alt="李一灵" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 李一灵 -->
                           {{ $t('page.namelyl26')}}</p>
                        <p class="pl-info">
                          <!-- Trinity创始人  -->
                          {{ $t('page.positionlyl26')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/jiangyujie.jpg" alt="蒋宇捷" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 蒋宇捷 -->
                           {{ $t('page.namejyj27')}}</p>
                        <p class="pl-info">
                          <!-- 信天创投合伙人  -->
                          {{ $t('page.positionjyj27')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/zenghaohao.jpg" alt="曾豪" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 曾豪  -->
                          {{ $t('page.namezh46')}}</p>
                        <p class="pl-info">
                          <!-- 蚂蚁区块链联盟创始人 -->
                           {{ $t('page.positionzh46')}}</p>
                        <p class="pl-info" style=" margin-top: 2px;">
                          <!-- 蚂蚁联盟国际资本董事长 -->
                           {{ $t('page.positionzh47')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/yuxiaohan.png" alt="余晓菡" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 余晓菡  -->
                          {{ $t('page.nameyxh29')}}</p>
                        <p class="pl-info">
                          <!-- DataKYC时链创始人 -->
                           {{ $t('page.positionyxh29')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/chenhao.jpg" alt="陈浩" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 陈浩  -->
                          {{ $t('page.namech20')}}</p>
                        <p class="pl-info">
                          <!-- 维优 首席技术官 -->
                          {{ $t('page.positionch20')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/qujianxi.png" alt="區鍵禧" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 區鍵禧 -->
                           {{ $t('page.namekjx31')}}</p>
                        <p class="pl-info">
                          <!-- LUXCHAIN联合创始人 | 区块链及人工智能领域专栏作家 Kenny Au, co-founder LUXCHAIN | Blockchain & AI Journalist.  -->
                           {{ $t('page.positionkjx31')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/fengjin.png" alt="冯晋" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 冯晋   -->
                          {{ $t('page.positionfj09')}}</p>
                        <p class="pl-info">
                          <!-- 高榕资本  -->
                          {{ $t('page.positionfj09')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/huangjunlang.png" alt="" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 黃俊瑯  -->
                          {{ $t('page.namehjl73')}}</p>
                        <p class="pl-info">
                          <!-- Goldford 行政總裁 -->
                         {{ $t('page.positionhjl73')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/ethan.jpg" alt="Ethan Yu" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Ethan Yu</p>
                        <!-- <p class="pl-info">BABI财经 运营总监</p> -->
                        <p class="pl-info">
                          <!-- COINVOICE创始人 -->
                           {{ $t('page.positionethanyu25')}}
                          </p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/caiyiqun.png" alt="蔡逸群" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 蔡逸群  -->
                           {{ $t('page.namecyq33')}}</p>
                        <p class="pl-info">
                          <!-- 名资金融科技、名资创投、名资股份有限公司创始人、董事长兼首席资本家、元界基金会首席资本家  -->
                           {{ $t('page.positioncyq33')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Longdans.png" alt="Longdans" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 龙典   -->
                          {{ $t('page.namesld70')}}</p>
                        <p class="pl-info">
                          <!-- 火讯财经创始人 -->
                        {{ $t('page.positionsld70')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/dongyang.png" alt="佟扬" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 佟扬 -->
                        {{ $t('page.namety16')}}</p>
                        <p class="pl-info">
                          <!-- 金色财经合伙人   -->
                          {{ $t('page.positionty16')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/shaojianliang.jpg" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 邵建良  -->
                          {{ $t('page.namesjl47')}}</p>
                        <p class="pl-info">
                          <!-- 比升资本创始人 浙江省投融资协会常务副秘书长 -->
                          {{ $t('page.positionsjl47')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/huyuanquan.jpg" alt="胡园泉" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 胡园泉 -->
                           {{ $t('page.namehyq45')}}</p>
                        <p class="pl-info">
                          <!-- BEPAL首席执行官、黑盾区块链安全研究中心联合创始人 -->
                           {{ $t('page.positionhyq45')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/sunjian.jpg" alt="孙健" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 孙健 -->
                          {{ $t('page.namesj28')}}</p>
                        <p class="pl-info">
                          <!-- 九鼎数字资产实验室（J Lab）合伙人  -->
                          {{ $t('page.positionsj28')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/zhouxun.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 周迅  -->
                          {{ $t('page.namezhouxun79')}}</p>
                        <p class="pl-info">
                          <!-- EKT通用积分CEO  -->
                          {{ $t('page.positionzhouxun79')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/pengzongxin.jpg" alt="彭宗欣" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 彭宗欣 -->
                           {{ $t('page.namepzx52')}}</p>
                        <p class="pl-info">
                          <!-- 国际区块链研究会&量子金创始人 -->
                           {{ $t('page.positionpzx52')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/eric.png" alt="Eric" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Eric</p>
                        <p class="pl-info">
                          <!-- 维优CEO初夏虎 -->
                           {{ $t('page.positionEric110')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/leiyingchun.jpg" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 雷迎春 -->
                           {{ $t('page.namelyc60')}}</p>
                        <p class="pl-info">
                          <!-- 九个亿财经CEO -->
                           {{ $t('page.positionlyc60')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/yuanding.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 丁元  -->
                          {{ $t('page.namedingyuan78')}}</p>
                        <p class="pl-info">
                          <!-- 火币研究院首席分析师 -->
                           {{ $t('page.positiondingyuan78')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Adel-ATN.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Adel</p>
                        <p class="pl-info">ATN Co-Founder</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/chenqin.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 陈庆  -->
                          {{ $t('page.namecq89')}}</p>
                        <p class="pl-info">
                          <!-- Higgs Block 集团CEO  -->
                          {{ $t('page.positioncq89')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Eric-Yao.png" alt="Eric Yao" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Eric Yao</p>
                        <p class="pl-info">CTO of i-House.com (IHT)</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/BitRent.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 赵千捷  -->
                          {{ $t('page.namezhaoqianjie80')}}</p>
                        <p class="pl-info">
                          <!-- BTCC 高级副总裁 -->
                           {{ $t('page.positionzhaoqianjie80')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/chenzhangrong.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 陈樟荣 -->
                           {{ $t('page.nameczr82')}}</p>
                        <p class="pl-info">
                          <!-- 沃尔顿首席运营官 -->
                           {{ $t('page.positionczr82')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/zhenkaili.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 郑凯丽  -->
                          {{ $t('page.namezkl83')}}</p>
                        <p class="pl-info">
                          <!-- 弗雷尔链 CMO  -->
                          {{ $t('page.positionzkl83')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Ken-Dean.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 邓柯 -->
                           {{ $t('page.namedc84')}}</p>
                        <p class="pl-info">
                          <!-- BitUN公司执行董事，Higgs Block 集团董事长  -->
                          {{ $t('page.positiondc84')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Storm-Zhang.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Storm Zhang</p>
                        <p class="pl-info">
                          <!-- InterValue核心架构师  -->
                          {{ $t('page.positionstormz85')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Anndy-Lian.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 连炜蔃  -->
                          {{ $t('page.namelyq86')}}</p>
                        <p class="pl-info">Linfinity  Singapore CEO </p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/zhaozihui.png" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 赵子惠  -->
                          {{ $t('page.namezzh98')}}</p>
                        <p class="pl-info">
                          <!-- PUNCPH亚洲区发起人 -->
                           {{ $t('page.positionzzh98')}} </p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Tony-Sun.png" alt="Tony Sun" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 孙颖俊 -->
                           {{ $t('page.namesyj91')}}</p>
                        <p class="pl-info">ONEROOT CEO Tony Sun </p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Denis.png" alt="Denis" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Denis</p>
                        <p class="pl-info">Ecosystem Developer</p>
                    </div>
                </div>



                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/renjinghao.png" alt="任锦澔" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 任锦澔 -->
                           {{ $t('page.namerjh07')}}</p>
                        <p class="pl-info">
                          <!-- 国泰君安上海财富中心副总经理 -->
                           {{ $t('page.positionrjh07')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/qingzhonglin.png" alt="Zhongling Qin" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 秦中陵  -->
                          {{ $t('page.nameqzl93')}}</p>
                        <p class="pl-info">
                          <!-- 日中AI·IoT联盟执行委员长/爱立信日本新技术开发部Director -->
                           {{ $t('page.positionqzl93')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/zhougjin.png" alt="Jin Zhou" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 周金博士  -->
                          {{ $t('page.namezj94')}}</p>
                        <p class="pl-info">
                          <!-- 人工智能工学博士，华晋国际AI事业部本部长  -->
                          {{ $t('page.positionzj94')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/duhai.png" alt="Hai Du" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 杜海 -->
                           {{ $t('page.namedh95')}}</p>
                        <p class="pl-info">
                          <!-- 火币网区块链研究院数据负责人  -->
                          {{ $t('page.positiondh95')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/hanzheng.png" alt="John Han" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 韩铮  -->
                          {{ $t('page.namehz96')}}</p>
                        <p class="pl-info">Business Development Director </p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Peter-Yu.png" alt="Peter Yu" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Peter Yu</p>
                        <p class="pl-info">CEO CECECOCON of CyteCoin</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/shengbin.png" alt="Bing Shen" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Bing Shen</p>
                        <p class="pl-info">CEO of TBT/Blackchain Angel Investor</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/zhanglilan.png" alt="Bing Shen" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 张李楠 -->
                           {{ $t('page.namezll99"')}}</p>
                        <p class="pl-info">
                          <!-- 知名数字加密货币交易平台OEX 联合创始人＆CEO  -->
                          {{ $t('page.positionzll99')}}</p>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/sunmingwei.png" alt="sunmingwei" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 孙明伟  -->
                          {{ $t('page.namesmw100')}}</p>
                        <p class="pl-info">
                          <!-- 18区联合创始人 -->
                           {{ $t('page.positionsmw100')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/William.png" alt="sunmingwei" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 姜光璞  -->
                          {{ $t('page.namejgp101')}}</p>
                        <p class="pl-info">
                          <!-- 黄金链项目运营经理  -->
                          {{ $t('page.positionjgp101')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/SIMONJE.png" alt="sunmingwei" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">SIMON JE</p>
                        <p class="pl-info">
                          <!-- 黄金链项目运营经理  -->
                          {{ $t('page.positionjgp101')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Alex-Isaiev.png" alt="Alex Isaiev" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Alex Isaiev </p>
                        <p class="pl-info">Co-founder of Business Development Lead</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Nick-Lee.png" alt="Nick" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 李珩  -->
                          {{ $t('page.namenick104')}} </p>
                        <p class="pl-info">
                          <!-- Ocean chain创始人 -->
                           {{ $t('page.positionnick104')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/liaokeyan.png" alt="sunmingwei" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 缪可言 -->
                           {{ $t('page.nameMiao105')}}</p>
                        <p class="pl-info">Hyperpay CMO</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/chenyuming.png" alt="chenyuming" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 陈玉明 -->
                           {{ $t('page.namechenyuming106')}}</p>
                        <p class="pl-info">
                          <!-- CEO代理EBC  -->
                          {{ $t('page.positionchenyuming106')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/ARATA.png" alt="sunmingwei" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">ARATA</p>
                        <p class="pl-info">
                          AVHのCTO，⽇日本の仮想通貨メディア CRYPTO TIMESもプロデュース</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/duboyuan.png" alt="duboyuan" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 杜博源 -->
                           {{ $t('page.nameduboyuan108')}} </p>
                        <p class="pl-info">
                          <!-- OK资本投资人 -->
                           {{ $t('page.positionduboyuan108')}} </p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Tony-Evans.png" alt="Tony Evans" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Tony Evans</p>
                        <p class="pl-info">Vice-Chairman and Managing Director of Asia and the Middle East of Blockchain Industries, Inc.,Co Founder of Fintech Global Consultant’s </p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Shunri-Guo.png" alt="Shunri Guo" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 郭舜日 (Shunri Guo) -->
                          {{ $t('page.nameShunriGuo111')}}                          </p>
                        <p class="pl-info">
                          CEO & Co-Founder at ParcelX</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/Nic-Watson.png" alt="Nic Watson" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Nic Watson</p>
                        <p class="pl-info">
                          <!-- Naseba董事总经理  -->
                          {{ $t('page.positionNicWatson112')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/OlivierTruquet.png" alt="Shunri Guo" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 楚维  -->
                          {{ $t('page.nameOlivier113')}}</p>
                        <p class="pl-info">
                          <!-- 复旦区块链协会主席  -->
                           {{ $t('page.positionOlivier113')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/speaker/EricFang.png" alt="Eric Fang" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">Eric Fang</p>
                        <p class="pl-info">
                          <!-- 离子链联合创始人，时点资本合伙人 上海区块链产业联盟国际交流委员会主席 -->
                           {{ $t('page.positionEricFang114')}}</p>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="photo-dbbox">
                        <img src="/images/finwise/duanxinxing.jpg" alt="段新星" class="lazy party-pl">
                    </div>
                    <div class="foot-p">
                        <p class="plname-info">
                          <!-- 段新星  -->
                          {{ $t('page.namedxx23')}}</p>
                        <p class="pl-info">
                          <!-- 比原链 创始人  -->
                          {{ $t('page.positiondxx23')}}</p>
                    </div>
                </div>

            </div>

            <!-- 查看更多 ↓  -->
            <!-- <div class="show-all"> 
              {{ $t('page.ckgd19')}}</div> -->

        </section>
        <!--参会嘉宾 end-->

      </section>
    <!--purple bg content end-->

    <!-- 大会新闻 -->
    <div class="news" ref="news">
        <h3>{{ $t('page.dhxw')}}</h3>
        <div class="news_big">
          <!-- FINWEX宣布获得WE+酷窝战略投资，共建区块链生态整合平台 -->
          <a class="news_box" target="_blank" href="https://mp.weixin.qq.com/s/6RBu2f6p5mtSDthksjkjnA">
            <img src="/images/Finwex-index/news/g1.jpg" alt="">
            <div class="news_des">
              <h4> {{ $t('news.title10')}}</h4>
              <p>{{ $t('news.des10')}}<a target="_blank" href="https://mp.weixin.qq.com/s/6RBu2f6p5mtSDthksjkjnA">{{ $t('page.gdxw')}} ></a></p>
            </div>
          </a>
          <a class="news_box" target="_blank" href="https://medium.com/@FinwexOfficial/finwise-tokyo-summit-2018-ended-on-may-22-at-the-grand-prince-hotel-new-takanawa-in-tokyo-japan-50691a76528f" v-if="isEnglish">
            <img src="/images/finwex-summit/Tokoyo/news/japan2.jpg" alt="">
            <div class="news_des">
                <!-- 2018 Finwise纷智·东京区块链峰会圆满结束，附峰会现场照下载链接 -->
              <h4>{{ $t('japan.jpt2')}}</h4>
              <p>{{ $t('japan.jpp2')}}<a target="_blank" href="https://medium.com/@FinwexOfficial/finwise-tokyo-summit-2018-ended-on-may-22-at-the-grand-prince-hotel-new-takanawa-in-tokyo-japan-50691a76528f">{{ $t('page.gdxw')}} ></a></p>
            </div>
          </a >
          <a class="news_box" target="_blank" href="https://mp.weixin.qq.com/s/tnvGthaAg4vDlMxgftTevw" v-else>
            <img src="/images/finwex-summit/Tokoyo/news/japan2.jpg" alt="">
            <div class="news_des">
                <!-- 2018 Finwise纷智·东京区块链峰会圆满结束，附峰会现场照下载链接 -->
              <h4>{{ $t('japan.jpt2')}}</h4>
              <p>{{ $t('japan.jpp2')}}<a target="_blank" href="https://mp.weixin.qq.com/s/tnvGthaAg4vDlMxgftTevw">{{ $t('page.gdxw')}} ></a></p>
            </div>
          </a >
        </div>
    </div>
    <!--Partners begin（联合主办）-->
    <section class="container partner-wrap  union-wrap footer-wrap">
        <!--<h2 class="h2-tl spe-cltl text-center">合作伙伴</h2>-->
        <h3 class="h2-title spe-tlh3 text-left">
          <!-- 联合主办 -->
           {{ $t('page.lhzb20')}}</h3>

        <div class="swatch-a col-md-3 col-sm-3">
            <img src="/images/finwise/new/bcua.png" alt="IBAF" class="lazy cc-border">
        </div>
        <div class="swatch-a col-md-3 col-sm-3">
            <img src="/images/finwise/new/ibca-zh.png" alt="IBCA" class="lazy cc-border zhshow">
            <!-- <img src="/images/finwise/new/ibca-en.png" alt="IBCA" class="lazy cc-border enshow"> -->
        </div>

        <div class="swatch-a col-md-3 col-sm-3">
            <img src="/images/finwise/new/logo_BJDO.png" alt="区块链联合发展组织" class="lazy cc-border">
        </div>
        <div class="swatch-a col-md-3 col-sm-3">
            <img src="/images/finwise/new/ant.png" alt="IBAF" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-3 col-sm-3">
            <img src="/images/finwise/new/starchain.png" alt="Starchain" class="lazy cc-border">
        </div>
        <div class="swatch-a col-md-3 col-sm-3">
            <img src="/images/finwise/new/WEplus.png"  title="WE" class="lazy cc-border">
        </div>

    </section>
    <!--Partners end-->

    <!--media begin (媒体协办)-->
    <section class="container partner-wrap mdpartner-wrap footer-wrap">

        <h3 class="h2-title spe-tlh3 text-left">
          <!-- 媒体协办 -->
           {{ $t('page.mtxb21')}}</h3>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_Jin.png" alt="金色财经" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/bitkan.png" alt="金色财经" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_lxcj.png" alt="链向财经" class="lazy cc-border">
        </div>
        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/huoxun.png" alt="链向财经" class="lazy cc-border">
        </div>
        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_8btc.png" alt="巴比特" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/jingniucaijin.png" alt="金牛财经" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/JGY.png" alt="九个亿财经" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_babicj.png" alt="巴比财金" class="lazy cc-border">
        </div>

        <div class="swatch-a  col-md-2 imgBig">
            <img src="/images/finwise/logo_btc123.jpg" alt="BTC123" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_quintar.png" alt="quintar" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/Huobinews.png" alt="blocknews" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/sdz.png" alt="sdz" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_hongkong.png" alt="香港电视台" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/coinvoice.png" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_newsbtc.png" alt="newsbtc" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_blockchainru.png" alt="blockchainru" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/logo_bcchannel.png" alt="bcchannel" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/18area.png" alt="aicoin" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_ninjas.png" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_euro.png" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/huoxincaijin.png" alt="火星财经" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_aicoin.png" alt="aicoin" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_gongshi.png" alt="" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/onetv.png" alt="onetv" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/bimawen.png" alt="bimawen" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/xihacaijin.png" alt="xihacaijin" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/bikuaibao.png" alt="bikuaibao" class="lazy cc-border">
        </div>


        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/world.png" alt="" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/btchome.png" alt="" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/chainnews.png" alt="chainnews" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/one.png" alt="one" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/logo_wlcj.png" alt="未来财经" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/haitunblockchain.png" alt="" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/BockClip.png" alt="BockClip" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/DigtalJournal.png" alt="DigtalJournal" class="lazy cc-border">
        </div>

        <div class="swatch-a col-md-2 imgBig">
            <img src="/images/finwise/new/NHK2.png" alt="NHK" class="lazy cc-border">
        </div>
    </section>
    <!--media end-->

    <!--协办方 begin-->
    <section class="co-sponsor-wrap container  partner-wrap footer-wrap">

        <h3 class="h2-title spe-tlh3 text-left">
          <!-- 协办方  -->
          {{ $t('page.xbfe22')}}</h3>

        <div class="row show-allimg">

            <div class="swatch-a col-md-2 ">
                <img src="/images/finwise/new/logo_gateio.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/coinsuper.png" alt="coinsuper" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/alt.png" alt="alt" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/BTCC.png" alt="BTCC" class="lazy cc-border">
            </div>


            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/HOFT.png" alt="HOFT" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/logo_huobi.png" alt="HOFT" class="lazy cc-border">
            </div>


            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/HYPERLEDGER.png" alt="HYPERLEDGER" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_draper.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_huobi.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_okcoin.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/goldford.png" alt="goldford" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_aex.png" class="lazy cc-border">
            </div>


            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_jiuding.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/aws.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_preangel.png" class="lazy cc-border">
            </div>


            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/Waltonchain.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/guotaijunan.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/Chain.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/Freyrchain.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/CEX.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_btc.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_bepal.png" class="lazy cc-border">
            </div>


            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/EKT.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_cdgex.png" class="lazy cc-border">
            </div>
            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_shilian.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_aac.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/T-Capital.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_coinegg.png" class="lazy cc-border">
            </div>
            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_lite.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_genex.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_huangpu.png" class="lazy cc-border">
            </div>
            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/goldgold.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/logo_starchain.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/bitun.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/bitgogo.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/LINFINITY.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/intervalue.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/NHK.png" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/BYTOM.png"  title="BYTOM" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/punch.png"  title="punch" class="lazy cc-border">
            </div>


            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/ihouse.png"  title="ihouse" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/mvs.png"  title="metaverse" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/oneroot.png"  title="oneroot" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/TowerChain.png"  title="Tower Chain" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/Tulipex.png"  title="Tulipex" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/ULABS.png"  title="ULABS" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/zendao.png"  title="zendao" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/zengold.png"  title="zengold" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/logo-Trinity.png"  title="Trinity" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/ATN.png"  title="ATN" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/RNTB.png"  title="RNTB" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/Cytecoin.png"  title="Cytecoin" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/AVH.png"  title="AVH" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/OEX.png"  title="OEX" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/EBC.png"  title="EBC" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/hyperPAY.png"  title="hyperPAY" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/OSA.png"  title="OSA" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/FINTECH.png"  title="FINTECH" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/FINWEX.png"  title="FINWEX" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/KASKOGo.png"  title="KASKOGo" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/lekuai.png"  title="lekuai" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/PAECELX.png"  title="PAECELX" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/POINTLINX.png"  title="POINTLINX" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/TBT.png"  title="TBT" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/thpe.png"  title="thpe" class="lazy cc-border">
            </div>
            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/WAC.png"  title="WAC" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/WATFD.png"  title="WATFD" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/BlockchainR.png"  title="BlockchainR" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/IOCChain.png"  title="IOCChain" class="lazy cc-border">
            </div>

            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/Oceanchain.png"  title="Oceanchain" class="lazy cc-border">
            </div>
            <div class="swatch-a col-md-2 imgBig">
                <img src="/images/finwise/new/nasebanew.png"  title="naseba" class="lazy cc-border">
            </div>

        </div>
    </section>
    <!-- 大会精彩瞬间 -->
  <div class="moment" ref="moment">
    <h3>{{ $t('page.dhjc1')}}</h3>
    <div class="moment_title">
      <!--大咖风采，演讲现场，精彩圆桌，展会现场  -->
      <div :class="{'title_active': navActive === 0}" @click="navActive = 0">{{ $t('page.jcqb')}}</div>
      <div :class="{'title_active': navActive === 1}" @click="navActive = 1">{{ $t('page.jcsj')}}</div>
      <div :class="{'title_active': navActive === 2}" @click="navActive = 2">{{ $t('page.jcsj2')}}</div>
      <div :class="{'title_active': navActive === 3}" @click="navActive = 3">{{ $t('page.jcsj4')}}</div>
      <div :class="{'title_active': navActive === 4}" @click="navActive = 4">{{ $t('page.jcsj6')}}</div>
    </div>
    <div class="moment_all"  v-if="navActive === 0">
      <img  v-for="val in photoLess" :src="val.url" alt="">
      <!-- 加载更多 -->
      <div class="partic_more" @click="more" v-if="photojz !== photo.length">{{ $t('page.jzgd')}}</div>
    </div>
    <div class="moment_all" v-if="navActive === 1">
        <img  v-for="val in photo1" :src="val.url" alt="">
    </div>
    <div class="moment_all"  v-if="navActive === 2">
        <img  v-for="val in photo3" :src="val.url" alt="">
    </div>
    <div class="moment_all"  v-if="navActive === 3">
       <img  v-for="val in photo4" :src="val.url" alt="">
    </div>
    <div class="moment_all"  v-if="navActive === 4">
       <img  v-for="val in photo2" :src="val.url" alt="">
    </div>
   
  </div>
    <!-- 查看更多 ↓  -->
    <!-- <div class="show-hide">
      {{ $t('page.ckgd19')}}</div> -->
    <!--协办方 end-->
    <!-- 返回顶部 -->
    <scrollTop></scrollTop>
</div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import scrollTop from '../../../components/goTop'
export default {
  head() {
    return {
      title: this.$t('page.pageTitle')
    }
  },
  components: {
    scrollTop
  },
  data() {
    return {
      navActive: 0,
      photojz: 12,
      photo: [],
      photoLess: []
    };
  },
  layout: "summit",
  computed: {
    ...mapGetters("app", ["isEnglish"]),
  },
  async asyncData(ctx) {
    ctx.store.commit("changeUrl", ctx.route.name);
    //精彩瞬间数据
    let photo = await ctx.$axios.get("/api/photo?catetory=2&type=all");
    let photo1 = await ctx.$axios.get("/api/photo?catetory=2&type=12");
    let photo2 = await ctx.$axios.get("/api/photo?catetory=2&type=13");
    let photo3 = await ctx.$axios.get("/api/photo?catetory=2&type=14");
    let photo4 = await ctx.$axios.get("/api/photo?catetory=2&type=15");
    return {
      photo: photo.data.data,
      photo1: photo1.data.data,
      photo2: photo2.data.data,
      photo3: photo3.data.data,
      photo4: photo4.data.data
    };
  },
  methods: {
    more() {
      this.photojz = this.photo.length; //全部长度
      this.photoLess = this.photo.slice(0, this.photojz); //页面显示的长度
      console.log(this.photoLess);
    }
  },
  mounted() {
    this.photoLess = this.photo.slice(0, this.photojz); //页面显示的长度
  },
  i18n: {
    messages: {
      en: {
        indexBg: {
          beginning: "Grand Prince Hotel New Takanawa",
          Cop: "Enterprise"
        },
        entrance: {
          enTitle: "Exhibitors or Speakers",
          enDes: "Become a sponsor",
          enPer: "Exhibitor Registration"
        },
        tiket: {
          tkTitle: "Individual Tickets",
          tkDes: "Buy a ticket",
          tkCor: "Individual Registration"
        },
        count: {
          chjb13: "Participants",
          tzjg14: "Investmet Institutions",
          mediacover: "Media",
          chqyfw: "Enterprise",
          mtbd15: "Media and Reports",
          qqgs16: "Global Blockchain Corporation"
        },
        aboutFn: {
          gydh17: "About FINWISE",
          fstj18:
            "FINWEX SUMMIT aims to strengthen the communication among blockchain-related practitioners and promote the development of global financial technology. With a focus on cutting-edge blockchain technology, FINWEX SUMMIT brings together top talents, industry elites and excellent enterprises, provides a reliable collaboration platform and a wide media coverage.",
          more: "learn more"
        }
      },
      "zh-cn": {
        indexBg: {
          beginning: "日本东京新高轮格兰王子酒店",
          Cop: "企业参会"
        },
        entrance: {
          enTitle: "企业参展或演讲",
          enDes: "为您提供理想平台树立品牌认知度、达成联合主办关系和发布新产品",
          enPer: "企业报名"
        },
        tiket: {
          tkTitle: "个人购票报名",
          tkDes: "点击个人报名，购买峰会门票",
          tkCor: "个人报名"
        },
        count: {
          chjb13: "参会嘉宾",
          tzjg14: "投资机构",
          mediacover: "媒体覆盖",
          chqyfw: "参会企业",
          mtbd15: "媒体参与报道",
          qqgs16: "全球区块链公司"
        },
        aboutFn: {
          gydh17: "关于大会",
          fstj18:
            "FINWEX SUMMIT 旨在加强全球金融行业从业者们的交流，推动全球金融科技的发展，以金融科技领域最前沿的区块链技术为主导，集合全球优秀企业，对未来科技金融及区块链技术应用发展，进行展望和推进。",
          more: "了解更多"
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@style/bundle";
@import "~@style/xh-style";
@import "~@style/scss";
@import "~@style/Japan/JpIndex";

.Bg-fwwrap {
  .about-wrap {
    .count-wrap {
      margin: 0 auto;
    }
  }
}
</style>

