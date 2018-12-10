<template>
<div class="content">
  <div class="index-bgwrap index-bgwrapnew">
    <!--<div w3-include-html="top.html"></div>-->
    <section class="index-bgdd text-center container">
        <div class="index-bg text-center">
            <img src="/images/finwise/finwise-logo.png" alt="" class="clogo-img">
            <div class="foot-p text-center">
                <!-- <a href="http://www.huodongxing.com/go/finwise2017" target="_blank"><span class="corange-btn bz-btn mar-rt15">报名参加</span></a> -->
                <!-- <a href="./appc.html"><span class="corange-btn bz-btn">成为赞助商</span></a> -->
            </div>
        </div>
    </section>
  </div>
  <!-- 数字显示的参会嘉宾-->
  <section class="A-wrap container c-important bg-white">

    <div>
        <div class="row count-wrap data-item">
            <ul class="swatch-a col-md-1">
                <li class="number"> 3,000+ </li>
                <li class="title" dom-i18n='chjb13'> 
                  <!-- 参会嘉宾  -->
                  {{ $t('page.chjb13')}}</li>
            </ul>
            <ul class="swatch-b col-md-1">
                <li class="number"> 80+ </li>
                <li class="title" dom-i18n='adviceperson'> 
                  <!-- 金融科技 -->
                  {{ $t('SH.adv345')}}<br>
                  <!-- 意见领袖  -->
                  {{ $t('SH.adv346')}}</li>
            </ul>
            <ul class="swatch-c  col-md-1">
                <li class="number"> 100+ </li>
                <li class="title" dom-i18n='tzjg14'> 
                  <!-- 投资机构 -->
                   {{ $t('page.tzjg14')}}</li>
            </ul>
            <ul class="swatch-d col-md-1">
                <li class="number"> 70+ </li>
                <li class="title" dom-i18n='mtbd15'> 
                  <!-- 媒体参与报道  -->
                  {{ $t('page.tzjg14')}} </li>
            </ul>
            <ul class="swatch-e col-md-1">
                <li class="number"> 60+ </li>
                <li class="title" dom-i18n='perproject'> 
                  <!-- 国内外顶尖 -->  <!-- 区块链项目  -->
                  {{ $t('page.perproject1')}} <br>
                  {{ $t('page.perproject2')}}</li>
            </ul>
        </div>
    </div>
    <!--end list-->

    <div class="ad-fimg ad-fimg-new">
        <h2 class="ad-h2title" dom-i18n='chinamacau'>
          <!-- 中国澳门 -->
          {{ $t('page.chinamacau')}}
          <br>2018 FINWISE</h2>
    </div>
    <span class="h6-title" dom-i18n='mcaddr'>
              <!-- 地址 --><!-- 中国澳门 路氹 路氹连贯公路 喜来登金沙城中心大酒店 -->
              {{ $t('page.mcaddr')}}{{ $t('page.mcaddrdetail')}}
            </span>
            <!-- <p class="cm-ct" dom-i18n='mcaddrdetail'>
              
               {{ $t('page.mcaddrdetail')}}
            </p> -->
            <!-- <span class="h6-title" dom-i18n='mctime'>
            
              </span> -->
            <!-- 时间  2018年1月12日-13日 -->
            <p class="cm-ct" dom-i18n='mctimedetail'>
                 {{ $t('page.mctime')}} {{ $t('page.mctimedetail')}}
                </p>
  </section>
    <!--</div>-->
  <!--</section>-->
  <!-- 视频 -->
  <div class="video_des">
        <video src="/images/finwise/mv.mp4" controls="controls" class="video" style="margin: 0 auto 60px;width: 50%" >
        <!-- 您的浏览器不支持 video 标签。 -->
         {{ $t('page.macsu12')}}
        </video>
        <div class="contact-wrap">
            <div class="cm-ct">
                <p class="fh-intro fh-top" dom-i18n='fwmacaudes'>
                    <!-- 2018年1月12日，Finwise Summit 纷智区块链峰会将在中国·澳门举办。此次峰会旨在加强全球金融行业从业者们的交流，推动全球金融科技的发展。峰会还将以目前金融科技领域最前沿的区块链技术为主导，集合全球优秀金融科技及区块链企业，对未来科技金融及区块链技术应用发展，进行展望和推进。 -->
                    {{ $t('page.fwmacaudes')}}</p>
            </div>
            <a target="_blank" href="https://home.aiyaopai.com/fengzhi/index.html" class="full_video">{{ $t('page.wzsp')}}</a>
        </div>
    </div>
  <!-- 参会嘉宾 -->
  <section class="footer-wrap mar-auto container xh-container guest-item">
    <h2 class="h2-title text-center" dom-i18n='chjb13'>
      <!-- 参会嘉宾 -->
      {{ $t('page.ATFuest_tl')}}  </h2>
    <div class="row">  
    <div class="col-md-2">
            <div>
                <img src="/images/finwise/zhangzurong.jpg" alt="刘关华" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 刘关华 -->
                  {{ $t('page.nameMac11')}}</p>
                <p class="pl-info">
                  <!-- 澳门贸易投资促进局代主席 -->
                  {{ $t('page.positionLiugh')}}</p>
            </div>
    </div>
    <div class="col-md-2">
            <div>
                <img src="/images/finwise/wangbingsheng.jpg" alt="王彬生" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 王彬生 -->
                   {{ $t('page.namewbs02')}}</p>
                <p class="pl-info">
                  <!-- 区块链联合发展组织顾问、中国社会科学院研究生院特聘教授 -->
                {{ $t('page.positionwbs02')}}</p>
            </div>
    </div>
    <div class="col-md-2">
            <div>
                <img src="/images/finwise/hans.jpg" alt="Hans Henrik Christensen" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Hans Henrik Christensen</p>
                <p class="pl-info">
                  <!-- 迪拜硅谷管理局企业家中心 主任 -->
                  {{ $t('page.positionDibai11')}}</p>
            </div>
    </div>
    <div class="col-md-2">
            <div>
                <img src="/images/finwise/guohongcai.jpg" alt="郭宏才" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 郭宏才 -->
                  {{ $t('page.nameghc11')}}</p>
                <p class="pl-info">
                  <!-- 比特币天使投资人 -->
                  {{ $t('page.positionghc11')}}</p>
            </div>
    </div>

    <div class="col-md-2">
            <div>
                <img src="/images/finwise/lishufei.jpg" alt="李书沸" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 李书沸 -->
                  {{ $t('page.namelsf15')}}</p>
                <p class="pl-info">OKEx CEO</p>
            </div>
    </div>
    <div class="col-md-2">
            <div>
                <img src="/images/finwise/liufei.jpg" alt="刘飞" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 刘飞 -->
                  {{ $t('page.namelf04')}}</p>
                <p class="pl-info">
                  <!-- 火币Pro运营总监 -->
                  {{ $t('page.positionlf04')}}</p>
            </div>
    </div>    
    </div>
    <div class="row">
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/ted.jpg" alt="Ted Lin" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Ted Lin</p>
                <p class="pl-info">
                  <!-- 币安国际市场负责人 -->
                  {{ $t('page.positiontedlin22')}}</p>
            </div>
        </div>
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/wangyuehua.jpg" alt="王岳华" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 王岳华 -->
                  {{ $t('page.namewyh10')}}</p>
                <p class="pl-info">
                  <!-- 德丰杰龙脉创新基金 合伙人 -->
                  {{ $t('page.positionwyh10')}}</p>
            </div>
        </div>
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/liuhaifeng.jpg" alt="刘海峰" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 刘海峰 -->
                  {{ $t('page.namemalhf')}}</p>
                <p class="pl-info">
                  <!-- STBCHAIN创始人 -->
                  {{ $t('page.positionmalhf')}}</p>
            </div>
        </div>
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/duanxinxing.jpg" alt="段新星" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 段新星 -->
                  {{ $t('page.namedxx23')}}</p>
                <p class="pl-info">
                  <!-- 比原链 创始人 -->
                  {{ $t('page.positiondxx23')}}</p>
            </div>
        </div>
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/zhangyinhai.jpg" alt="张银海" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 张银海 -->
                  {{ $t('page.namezyh03')}}</p>
                <p class="pl-info">
                  <!-- Lighting BTC中国区负责人 -->
                  {{ $t('page.positionzyh03')}}</p>
            </div>
        </div>    
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/limingzhao.jpg" alt="李明肇" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 李明肇 -->
                  {{ $t('page.namelmz21')}}</p>
                <p class="pl-info">
                  <!-- 小牛链 CEO -->
                  {{ $t('page.positionlmz21')}}</p>
            </div>
        </div>
    </div> 
    <div class="row">
          
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/gaofei.jpg" alt="高飞" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 高飞 -->
                  {{ $t('page.namegf61')}}</p>
                <p class="pl-info">
                  <!-- AFC亞太區運營總監 -->
                  {{ $t('page.positiongf61')}}</p>
            </div>
        </div>
        <div class="col-md-2">

            <div>
                <img src="/images/finwise/lixiong.jpg" alt="李雄" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 李雄 -->
                  {{ $t('page.namemalx')}}</p>
                <p class="pl-info">
                  <!-- 链向财经创始人&CEO -->
                  {{ $t('page.positionmalx')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/luozhengyu.jpg" alt="罗罡瑜" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 罗罡瑜 -->
                  {{ $t('page.namelyy1')}}</p>
                <p class="pl-info">
                  <!-- 嘻哈财经创始人 国业资本董事长 香港尚亚交易所 执行董事 -->
                  {{ $t('page.positionlyy1')}}</p>
            </div>
        </div>
        
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/zhangliaoliao.jpg" alt="张了了" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 张了了 -->
                  {{ $t('page.namezll12')}}</p>
                <p class="pl-info">
                  <!-- gate.io合伙人 -->
                  {{ $t('page.positionzll12')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/yanglinke.jpg" alt="杨林科" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 杨林科 -->
                  {{ $t('page.nameYangNK')}}</p>
                <p class="pl-info">
                  <!-- 比特币中国联合创始人、比特币钻石中国区顾问 -->
                  {{ $t('page.positionYangNK')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/jiaoguangming.jpg" alt="焦光明" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 焦光明 -->
                  {{ $t('page.namejgm')}}</p>
                <p class="pl-info">
                  <!-- TopChain 创始人 -->
                  {{ $t('page.positioinjgm')}}</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/hujiepeng.jpg" alt="胡杰鹏" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 胡杰鹏 -->
                  {{ $t('page.namehjp18')}}</p>
                <p class="pl-info">
                  <!-- 量子金亚洲市场负责人 -->
                  {{ $t('page.positionhjp18')}}</p>
            </div>
        </div>  
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/linqibin.jpg" alt="林琪武" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 林琪武 -->
                  {{ $t('page.namelqw19')}}</p>
                <p class="pl-info">
                  <!-- 知产链IPChain联合创始人 -->
                  {{ $t('page.positionhjp18')}}</p>
            </div>
        </div>  
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/chenchen.jpg" alt="陈晨" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 陈晨 -->
                  {{ $t('page.namecc1')}}</p>
                <p class="pl-info">
                  <!-- 嘻哈财经副总裁 -->
                  {{ $t('page.positioncc1')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/chenhao.jpg" alt="陈浩" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 陈浩 -->
                  {{ $t('page.namech20')}}</p>
                <p class="pl-info">
                  <!-- 维优 首席技术官 -->
                  {{ $t('page.positionch20')}}</p>
            </div>
        </div>  
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/raymond.jpg" alt="Raymond" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Raymond He</p>
                <p class="pl-info">Head of Finwise Business Development</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/tarmar.jpg" alt="Tarmar" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Tarmar Menteshashvili</p>
                <p class="pl-info">Expread Co-founder</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/zhuzitong.jpg" alt="​朱梓橦" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">​
                  <!-- 朱梓橦 -->
                  {{ $t('page.namezzt')}}</p>
                <p class="pl-info">
                  <!-- 凤凰卫视知名主持人 -->
                   {{ $t('page.positionzzt')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/xuanxuan.jpg" alt="李萱萱" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 李萱萱 -->
                  {{ $t('page.namelxx')}}</p>
                <p class="pl-info">
                  <!-- 杭州电视台新媒体节目《留学真相》双语主持人 -->
                  {{ $t('page.positionlxx')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/zenghaohao.jpg" alt="曾豪" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 曾豪 -->
                  {{ $t('page.zenghao')}}</p>
                <p class="pl-info">
                  <!-- 福建区块链俱乐部联合创始人、蚂蚁区块链联盟创始人 -->
                  {{ $t('page.zenghao_des')}}</p>
            </div>
        </div>
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/you.jpg" alt="Riconi You" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Riconi You</p>
                <p class="pl-info">{{ $t('page.z_des_5')}}</p>
                <p class="pl-info">{{ $t('page.z_des_51')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/youya.jpg" alt="Viola You" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Viola You</p>
                <p class="pl-info">
                  <!-- c2cx启行 亚太区市场总监 -->
                  {{ $t('page.positionc2cx')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/chenqiannan.jpg" alt="Nancy Chen" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Nancy Chen</p>
                <p class="pl-info">ZENAIR CEO</p>
            </div>
        </div>
        
        

    </div>
    <div class="row">
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/ethan.jpg" alt="Ethan Yu" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Ethan Yu</p>
                <p class="pl-info">
                  <!-- BABI财经 运营总监 -->
                  {{ $t('page.positionbabi')}}</p>
            </div>
        </div> 
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/jiangyujie.jpg" alt="蒋宇捷" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 蒋宇捷 -->
                  {{ $t('page.namejyj27')}}</p>
                <p class="pl-info">
                  <!-- 信天创投合伙人 -->
                  {{ $t('page.positionjyj27')}}</p>
            </div>
        </div>
        
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/sunjian.jpg" alt="孙健" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 孙健 -->
                  {{ $t('page.namesj28')}}</p>
                <p class="pl-info">
                  <!-- 九鼎数字资产实验室（J Lab）合伙人 -->
                  {{ $t('page.positionsj28')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/zenghao.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 张竟唯 -->
                  {{ $t('page.namezjw')}}</p>
                <p class="pl-info">
                  <!-- 蚂蚁区块链联盟联合创始人、福建区块链俱乐部联合发起人、厦门区块链云科技有限公司总裁 -->
                  {{ $t('page.positionzjw')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/xukang.jpg" alt="胥康" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 胥康 -->
                  {{ $t('page.namexk11')}}</p>
                <p class="pl-info">Exchange Union Business Development</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/kilian.jpg" alt="Kilian Rausch" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Kilian Rausch</p>
                <p class="pl-info">Exchange Union Product Director</p>
            </div>
        </div>
        
    </div>
    <div class="row">
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/liuyongzhe.jpg" alt="刘永哲" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 刘永哲 -->
                  {{ $t('page.namelyz3')}}</p>
                <p class="pl-info">Expread Co-founder & CEO</p>
            </div>
        </div>
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/liangbin.jpg" alt="良滨" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 良滨 -->
                  {{ $t('page.namelb5')}}</p>
                <p class="pl-info">
                  <!-- Fortuna方图创始人 -->
                  {{ $t('page.positionlb5')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/xuxiaodong.jpg" alt="徐晓冬" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 徐晓冬 -->
                  {{ $t('page.namexxd6')}}</p>
                <p class="pl-info">
                  <!-- 游娱社区负责人&COO -->
                  {{ $t('page.positionxxd6')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/zhengyu.jpg" alt="郑宇" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 郑宇 -->
                  {{ $t('page.namezy6')}}</p>
                <p class="pl-info">
                  <!-- 全民链CEO -->
                  {{ $t('page.positionzy6')}}</p>
            </div>
        </div>
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/hezhi.jpg" alt="牛慧君" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 牛慧君 -->
                  {{ $t('page.namenhj6')}}</p>
                <p class="pl-info">Acute Angle Cloud CMO</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/zero.jpg" alt="高泽龙" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 高泽龙 -->
                  {{ $t('page.namegyl69')}}</p>
                <p class="pl-info">
                  <!-- 国际区块链与数字货币协会 副会长 -->
                  {{ $t('page.positiongyl69')}}</p>
            </div>
        </div>
    </div>
    <div class="row">
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/emmie.jpg" alt="Emmie Chang" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Emmie Chang</p>
                <p class="pl-info">Superbloom CEO</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/talal.jpg" alt="Talal Tabbaa" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Talal Tabbaa</p>
                <p class="pl-info">Co-Founder Jibrel Network</p>
            </div>
        </div>


        <div class="col-md-2">
            <div>
                <img src="/images/finwise/xiongjian.jpg" alt="熊健" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 熊健 -->
                  {{ $t('page.namexj6')}}</p>
                <p class="pl-info">
                  <!-- 联币网未来网络科技有限公司创始人兼CEO 澳洲U网中国社区负责人 -->
                  {{ $t('page.positionxj6')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/wenxiaodong.jpg" alt="温小东" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 温小东 -->
                  {{ $t('page.namewxd6')}}</p>
                <p class="pl-info">
                  <!-- 快速比特币东南亚国家总裁，天使投资人 -->
                  {{ $t('page.positionwxd6')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/shixiaohong.jpg" alt="石晓虹" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 石晓虹 -->
                  {{ $t('page.namesxh34')}}</p>
                <p class="pl-info">UniGame CEO</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/nenad.jpg" alt="Nenad Rakocevic" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Nenad Rakocevic</p>
                <p class="pl-info">Co-Founder of Red</p>
            </div>
        </div>
    </div>
    <div class="row">
        

        <div class="col-md-2">
            <div>
                <img src="/images/finwise/shaon.jpg" alt="尚币哥" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 尚币哥 -->
                  {{ $t('page.namestg37')}}</p>
                <p class="pl-info">
                  <!-- BTC123 董事长 -->
                  {{ $t('page.positionstg37')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/hanfeng.jpg" alt="韩锋" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 韩锋 -->
                  {{ $t('page.nameHanFeng_info')}}</p>
                <p class="pl-info">
                  <!-- 哥伦比亚大学访问研究员，亦来云联合创始人 -->
                  {{ $t('page.positionHanFeng')}}</p>
            </div>
        </div>
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/emil.jpg" alt="Emil" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Emil</p>
                <p class="pl-info">
                  <!-- Penta社区负责人 -->
                  {{ $t('page.positionemil38')}}</p>
            </div>
        </div>
        
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/lixiangyu.jpg" alt="李翔宇" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 李翔宇 -->
                  {{ $t('page.namelxy39')}}</p>
                <p class="pl-info">
                  <!-- NEM中国联合创始人兼COO -->
                  {{ $t('page.positionlxy39')}}</p>
            </div>
        </div> 
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/lidawei.jpg" alt="李大伟" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 李大伟 -->
                  {{ $t('page.nameldw40')}}</p>
                <p class="pl-info">
                  <!-- ZB.COM中币创始人 -->
                  {{ $t('page.positionldw40')}}</p>
            </div>
        </div>
       <div class="col-md-2">
            <div>
                <img src="/images/finwise/mark.jpg" alt="Mark" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Mark</p>
                <p class="pl-info">
                  BlockchainCasnio创始人
                  {{ $t('page.positionmark41')}}</p>
            </div>
        </div> 
      </div>
    <div class="row">
      <div class="col-md-2">
            <div>
                <img src="/images/finwise/wangyi.jpg" alt="董长治" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 董长治 -->
                  {{ $t('page.namedcz42')}}</p>
                <p class="pl-info">
                  <!-- Basic World 联合创始人 -->
                  {{ $t('page.positiondcz42')}}</p>
            </div>
      </div>
      <div class="col-md-2">
            <div>
                <img src="/images/finwise/wanglijie.jpg" alt="王利杰" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 王利杰 -->
                  {{ $t('page.namewlj43')}}</p>
                <p class="pl-info">
                  <!-- BeeChat Fund 董事 -->
                  {{ $t('page.positionwlj43')}}</p>
            </div>
      </div>
      <div class="col-md-2">
            <div>
                <img src="/images/finwise/shawn.jpg" alt="Eric Voskuil" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Eric Voskuil</p>
                <p class="pl-info"></p>
            </div>
      </div>
      <div class="col-md-2">
            <div>
                <img src="/images/finwise/kenzi.jpg" alt="Kenzi Wang" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Kenzi Wang</p>
                <p class="pl-info">
                  <!-- Superbloom联合创始人 -->
                  {{ $t('page.positionkw44')}}</p>
            </div>
      </div>
      <div class="col-md-2">
            <div>
                <img src="/images/finwise/huyuanquan.jpg" alt="胡园泉" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 胡园泉 -->
                  {{ $t('page.namehyq45')}}</p>
                <p class="pl-info">
                  <!-- BEPAL首席执行官、黑盾区块链安全研究中心联合创始人 -->
                  {{ $t('page.positionhyq45')}}</p>
            </div>
      </div>
      <div class="col-md-2">
        <div>
            <img src="/images/finwise/fangjinzhu.jpg" alt="房金柱" class="party-pl">
        </div>
        <div class="foot-p text-left">
            <p class="plname-info">
              <!-- 房金柱 -->
              {{ $t('page.namefjz9')}}</p>
            <p class="pl-info">
              <!-- e-Chat团队推广经理，90后新生代实战营销策划人 -->
              {{ $t('page.positionfjz9')}}</p>
        </div>
      </div> 
    <!-- BitRent平台业务发展 -->
    <!-- <div class="col-md-2">
            <div>
                <img src="/images/finwise/igor.jpg" alt="Igor Pavlov" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Igor Pavlov</p>
                <p class="pl-info">
                  {{ $t('page.positionbitr7')}}</p>
            </div>
    </div> -->
    </div>
    <div class="row">
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/zoey.jpg" alt="Zoey Sun" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Zoey Sun</p>
                <p class="pl-info">
                  <!-- Bit-Z市场总监 -->
                  {{ $t('page.positionbitz3')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/tangwutong.jpg" alt="唐梧桐" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 唐梧桐 -->
                  {{ $t('page.nametwt7')}}</p>
                <p class="pl-info">
                  <!-- BitAsiaEx联合创始人 -->
                  {{ $t('page.positiontwt7')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/lirenjie.jpg" alt="李仁杰"  class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 李仁杰 -->
                  {{ $t('page.namelrj36')}}</p>
                <p class="pl-info">
                  <!-- 富士康HCM资本执行合伙人 -->
                  {{ $t('page.positionlrj36')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/pengzongxin.jpg" alt="彭宗欣" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 彭宗欣 -->
                  {{ $t('page.namepzx52')}}</p>
                <p class="pl-info">
                  <!-- 国际区块链研究会&量子金创始人 -->
                  {{ $t('page.positionpzx52')}}</p>
            </div>
        </div> 
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/toni.jpg" alt="Toni" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Toni</p>
                <p class="pl-info">
                  <!-- 超级玩家链ceo -->
                  {{ $t('page.positionsupe98')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/shaojianliang.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 邵建良 -->
                  {{ $t('page.namesjl47')}}</p>
                <p class="pl-info">
                  <!-- 比升资本创始人 浙江省投融资协会常务副秘书长 -->
                  {{ $t('page.positionsjl47')}}</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/caofeng.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 曹锋 -->
                  {{ $t('page.namecf48')}}</p>
                <p class="pl-info">
                  <!-- PCHAIN发起人、中物联区块链协会首席科学家、区块链联盟ChinaLedger共同发起人 -->
                  {{ $t('page.positioncf48')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/xiaoyongquan.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 肖永泉 -->
                  {{ $t('page.namexyq49')}}</p>
                <p class="pl-info">
                  <!-- MeshBox创始人、CEO -->
                  {{ $t('page.positionxyq49')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/chenzhaoyuan.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 陈昭元 -->
                  {{ $t('page.nameczy76')}}</p>
                <p class="pl-info">
                  <!-- 区块链财神社区创始人 -->
                  {{ $t('page.positionczy76')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/sunzeyu.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 孙泽宇 -->
                  {{ $t('page.nameszy50')}}</p>
                <p class="pl-info">
                  <!-- 库神联合创始人、库神品牌总监 -->
                  {{ $t('page.positionszy50')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/paulliu.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Paul Liu</p>
                <p class="pl-info">
                  <!-- 敏捷区块链基金会（FAB）主席，首席区块链专家 -->
                  {{ $t('page.positionpl51')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/chenyuexuan.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 程玥瑄 -->
                  {{ $t('page.namecyx66')}}</p>
                <p class="pl-info">
                  <!-- 区块链产业应用研究专家 精灵链天使投资人 -->
                  {{ $t('page.positioncyx66')}}</p>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/liangyu.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 粱羽 -->
                  {{ $t('page.namely78')}}</p>
                <p class="pl-info">
                  <!-- 星链StarChain投资人、開拍網創始人&CEO -->
                  {{ $t('page.positionly78')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/miah.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Hassan Miah</p>
                <p class="pl-info">CTO and Co-Founder of Robin8</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/sunmingwei.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 孙明伟 -->
                  {{ $t('page.namesmw55')}}</p>
                <p class="pl-info">
                  <!-- 块讯 创始人 -->
                  {{ $t('page.positionsmw55')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/kevin.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 凌连伟 -->
                  {{ $t('page.namellw56')}}</p>
                <p class="pl-info">
                  <!-- GCS游戏链创始人 -->
                  {{ $t('page.positionllw56')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/enioe.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 符文科 -->
                  {{ $t('page.namefwk57')}}</p>
                <p class="pl-info">Enjoy chain CEO</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/milla.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Marketing Director, GENEXI</p>
                <p class="pl-info">Milla Zemceva</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/liuping.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 刘平 -->
                  {{ $t('page.namelp58')}}</p>
                <p class="pl-info">
                  <!-- Seer数字竞猜负责人 -->
                  {{ $t('page.positionlp58')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/stevie.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Steviliv</p>
                <p class="pl-info">
                  <!-- ZenGold产品负责人 -->
                  {{ $t('page.positionzen897')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/potti.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Roger Pottier</p>
                <p class="pl-info">
                  <!-- ATN 产品经理 -->
                  {{ $t('page.positionrp59')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/leiyingchun.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 雷迎春 -->
                  {{ $t('page.namelyc60')}}</p>
                <p class="pl-info">
                  <!-- 九个亿财经CEO -->
                  {{ $t('page.positionlyc60')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/polulykhov.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 丹尼斯 -->
                  {{ $t('page.namedns0')}}</p>
                <p class="pl-info">
                  <!-- Polulykhov  Mark-Space 管理合伙人 -->
                  {{ $t('page.namedns0')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/lishangxin.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 李尚信 -->
                  {{ $t('page.namelsx33')}}</p>
                <p class="pl-info">
                  <!-- 高尔街集团创始人及行政总裁，以太坊华南及南亚社区联合创始人 -->
                  {{ $t('page.positionlsx33')}}</p>
            </div>
        </div>
    </div>
    <div class="row">   
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/wubinhua.jpg" alt="David Moskowitz" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 吴兵华 -->
                  {{ $t('page.namewbh63')}}</p>
                <p class="pl-info">
                  <!-- UGCHAIN 创始人 -->
                  {{ $t('page.positionwbh63')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/cyrus.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">Cyrus Khajvandi</p>
                <p class="pl-info">NSF&HHMI Researcher, Stanford Univerisity</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/justinhe.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 何清涛 -->
                  {{ $t('page.namehqt65')}}</p>
                <p class="pl-info">
                  <!-- HLWCHAIN社区负责人兼CEO -->
                  {{ $t('page.positionhqt65')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/zenglimin.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">
                  <!-- 曾利民 -->
                  {{ $t('page.namezlm06')}}</p>
                <p class="pl-info">
                  <!-- 游奇互娱科技CEO -->
                  {{ $t('page.positionzlm06')}}</p>
            </div>
        </div>
        <div class="col-md-2">
            <div>
                <img src="/images/finwise/zhanyangbing.jpg" class="party-pl">
            </div>
            <div class="foot-p text-left">
                <p class="plname-info">YangBing Zhan</p>
                <p class="pl-info">CEO, Coinbene</p>
            </div>
        </div>
    </div>
  </section>
  <!-- 联合主办 -->
  <section class="container footer-wrap">

    <h2 class="h2-title text-center" dom-i18n='lhzb35'>
      <!-- 联合主办 -->
      {{ $t('page.lhzb20')}}</h2>
   
        <ul class="swatch-a col-md-3 col-sm-3">
            <img src="/images/finwise/logo_ibca.png" alt="IBCA">
        </ul>
        <ul class="swatch-b col-md-3 col-sm-3">
            <img src="/images/finwise/logo_fab.png" alt="区块链联合发展组织">
        </ul>
        
        <ul class="swatch-b col-md-3 col-sm-3">
            <img src="/images/finwise/logo_BJDO.png" alt="区块链联合发展组织">
        </ul>
        
        <ul class="swatch-b col-md-3 col-sm-3">
            <img src="/images/finwise/logo_ibaf.png" alt="IBAF">
        </ul>
        <ul class="swatch-b col-md-3 col-sm-3">
            <img src="/images/finwise/logo_fjqkl.png" alt="福建区块链协会">
        </ul>
       <ul class="swatch-b col-md-3 col-sm-3">
            <img src="/images/finwise/logo_beechat.png">
        </ul>
    <ul class="swatch-b col-md-3 col-sm-3">
            <img src="/images/finwise/logo_stbchain.png">
        </ul>
    
  </section>
  <!-- 媒体协办 -->
  <section class="container footer-wrap">

    <h2 class="h2-title text-center" dom-i18n='mtxb21'>
      <!-- 媒体协办 -->
      {{ $t('page.mtxb21')}}</h2>

        <ul class="swatch-b col-md-2">
            <img src="/images/finwise/logo_Jin.png" alt="金色财金">
        </ul>
        
        <ul class="swatch-c  col-md-2">
            <img src="/images/finwise/logo_btc123.jpg" alt="BTC123">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_lxcj.png" alt="链向财经">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_8btc.png" alt="巴比特">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_euro.png">
        </ul>
        <ul class="swatch-c  col-md-2">
            <img src="/images/finwise/logo_sharedfinance.png" alt="共享财经">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_jgycj.png" alt="九个亿财经">
        </ul>
        <ul class="swatch-b col-md-2">
            <img src="/images/finwise/logo_babicj.png" alt="巴比财金">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_xiha.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_quintar.png" alt="quintar">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_blocknews.png" alt="blocknews">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_wlcj.png" alt="未来财经">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_meiribidu.png" alt="每日币读">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_newsbtc.png" alt="newsbtc">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_blockchainru.png" alt="blockchainru">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_aicoin.png" alt="aicoin">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_18.png" alt="aicoin">
        </ul> 
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_bb.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_ninjas.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_yangyang.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_yiyi.png">
        </ul>
        
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_bcdws.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_btcfamily.png" alt="比特币之家">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_haitun.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_blockwor.png">
        </ul>
  </section>
  <!-- 协办方 -->
  <section class="container footer-wrap">

    <h2 class="h2-title text-center" dom-i18n='xbfe22'>
      <!-- 协办方 -->
      {{ $t('page.xbfe22')}}</h2>
    
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_draper.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_huobi.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_okcoin.png">
        </ul>
        <ul class="swatch-c  col-md-2">
            <img src="/images/finwise/logo_binance.png" alt="币安">
        </ul>
        
         <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_gateio.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_aex.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_afc.png">
        </ul>    
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_jiuding.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_xintian.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_baofeng.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_preangel.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_nem.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_dubai1.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_dubai2.png">
        </ul>
        <ul class="swatch-c  col-md-2">
            <img src="/images/finwise/MVSfoundation.png" alt="元界基金会">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_bcd.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_coldlar.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_zenair.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_btc.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_superbloom.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_bepal.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_fenghuang.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_ubs.png">
        </ul>
        
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_fortuna.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_demo.png">
        </ul>

        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_cdgex.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_ip.png">
        </ul>

        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_red.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_youyu.png">
        </ul>

        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_ruijiao.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_quanmin.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_basicworld.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_gcs.png">
        </ul>  
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_casnio.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_topchain.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_exchange.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_btom.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_leo.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_u.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_cc.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_fudan.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_seer.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_fabtc.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_jibrel.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_int.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_smt.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_mvs.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_bitas.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_gve.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_coinegg.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_atn.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_lite.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_bitz.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_echat.png">
        </ul>
        
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_zhanqi.png">
        </ul>
        
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_zengold.png">
        </ul>

        
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_genex.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_sgc.png">
        </ul>

        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_robin.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_huangpu.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_gd.png">
        </ul>
        

        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_jinglin.png">
        </ul>

        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_guangyinglian.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_rnt.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_starchain.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_unigame.png">
        </ul>

        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_bitgame.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_starchain.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_youqi.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_zb.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_gaoerjie.png">
        </ul>
        <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_mark.png">
        </ul>
         <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_fcfl.png">
        </ul>
         <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_8dec.png">
        </ul>
         <ul class="swatch-a col-md-2">
            <img src="/images/finwise/logo_coinbene.png">
        </ul>
  </section>
  <!-- 大会精彩瞬间 -->
  <div class="moment" ref="moment">
    <h3>{{ $t('page.dhjc1')}}</h3>
    <div class="moment_title">
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
        <img  v-for="val in photo2" :src="val.url" alt="">
    </div>
    <div class="moment_all"  v-if="navActive === 3">
       <img  v-for="val in photo3" :src="val.url" alt="">
    </div>
    <div class="moment_all"  v-if="navActive === 4">
       <img  v-for="val in photo4" :src="val.url" alt="">
    </div>
  </div>
  <!-- 返回顶部 -->
  <scrollTop></scrollTop>
</div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import scrollTop from "../../../components/goTop";
export default {
  head() {
    return {
      title: this.$t('page.pageTitle')
    }
  },
  layout: "summit",
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
  async asyncData(ctx) {
    ctx.store.commit("changeUrl", ctx.route.name);
    //精彩瞬间数据
    let photo = await ctx.$axios.get("/api/photo?catetory=1&type=all");
    let photo1 = await ctx.$axios.get("/api/photo?catetory=1&type=16");
    let photo2 = await ctx.$axios.get("/api/photo?catetory=1&type=18");
    let photo3 = await ctx.$axios.get("/api/photo?catetory=1&type=17");
    let photo4 = await ctx.$axios.get("/api/photo?catetory=1&type=19");
    return {
      photo: photo.data.data,
      photo1: photo1.data.data,
      photo2: photo2.data.data,
      photo3: photo3.data.data,
      photo4: photo4.data.data
    };
  },
  computed: {
    ...mapGetters("app", ["isEnglish"]),
  },
  methods: {
    more() {
      this.photojz = this.photo.length; //全部长度
      this.photoLess = this.photo.slice(0, this.photojz);
    }
  },
  mounted() {
    this.photoLess = this.photo.slice(0, this.photojz);
  },
};
</script>

<style lang="less" scoped>
@import "~@style/bundle";
@import "~@style/xh-style";
@import "~@style/scss";

#topnav.stick .navigation-menu > li > a:hover {
  color: #f9297d;
}

.foot-p p {
  color: #fff;
}

.lang-select a:hover {
  color: #fff;
}

#footer {
  margin-top: 50px;
}

.fg-line {
  margin: 0;
}

.lang-select {
  background: #f9297d;
  padding: 4px;
  border-radius: 4px;
  top: 12px;
  font-size: 14px;
  min-width: 100px;
  text-align: center;
}

.get-btn,
.corange-btn {
  background: #f9297d;
}

.head-p {
  background: none;
}

.i-cont .foot-p {
  background: #333;
  padding-top: 0;
  padding: 25px 40px 40px;
}

.footer-wrap{
  ul{
    img{
      width:80%;
      //border: 1px solid #ccc;
      margin:10px;
    }
  }
}
.video_des {
  width: 1200px;
  display: flex;
  margin: 0 auto;
  padding-top: 40px;
  .contact-wrap {
    padding-top: 14px;
    margin-left: 53px;
    width: 536px;
    .fh-top {
      margin-top: -10px;
    }
    .fh-intro {
      font-size: 22px;
    }
    .full_video {
      display: block;
      width: 138px;
      height: 30px;
      background-image: linear-gradient(-90deg, #1e99f9 2%, #4242f6 99%);
      border-radius: 22.5px;
      color: #fff;
      text-align: center;
      font-size: 14px;
      line-height: 30px;
      margin-left: 25px;
      margin-top: 20px;
      cursor: pointer;
      text-decoration: none;
    }
  }
}

.moment {
  width: 1080px;
  margin: 50px auto;
  flex-direction: column;
  h3 {
    font-size: 30px;
    text-align: center;
    font-weight: 700;
  }
  .moment_title {
    display: flex;
    div {
      height: 24px;
      line-height: 24px;
      border: 1px solid #e9e9e9;
      border-radius: 15px;
      text-align: center;
      font-family: SourceHanSansCN-Normal;
      font-size: 12px;
      color: #4a556d;
      padding: 0 10px;
      margin: 20px 14px 10px 14px;
      cursor: pointer;
    }
    .title_active {
      background-color: #2687f9;
      height: 24px;
      line-height: 24px;
      border: 1px solid #e9e9e9;
      border-radius: 15px;
      text-align: center;
      font-family: SourceHanSansCN-Normal;
      font-size: 12px;
      color: #fff;
      margin: 20px 14px 10px 14px;
      padding: 0 10px;
      cursor: pointer;
    }
  }
  .moment_all {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 246px;
      height: 165px;
      margin: 10px;
    }
  }
  .partic_more {
    width: 87px;
    height: 24px;
    margin: 20px auto;
    border: 1px solid #c5ccdb;
    background: url("/images/finwex-summit/HongKong/arrow_down.png") no-repeat;
    background-position: 73px 8px;
    background-size: 12%;
    font-family: SourceHanSansCN-Normal;
    font-size: 12px;
    color: #4a556d;
    line-height: 24px;
    padding-left: 10px;
    cursor: pointer;
  }
}

.bz-btn.corange-btn:hover,
.get-btn,
.corange-btn:hover {
  background: #ff5599;
}

.xx-title-new {
  font-size: 30px;
  padding-bottom: 20px;
}

.get-btn,
.corange-btn {
  padding: 0;
}

.i-cont {
  /*background: url(../images/finwise/zanzhu.jpg);
        background-attachment: fixed;*/
}

.head-p {
  background: #333;
}

#topnav .logo img {
  width: 210px;
}

.foot-p .plname-info {
  color: #333;
}

#topnav .toggle-inner {
  background-color: #ff5599;
}

// .index-bg{
//   .clogo-img{
//     margin: 170px 60px 60px 0;
//     width: 380px
//   }
// }
@media (min-width: 1200px) {
  .container {
    width: 1300px;
  }
}

@media (max-width: 768px) {
  .clogo-img {
    width: 230px;
    margin: 60px 34px 10px 0;
  }
  .partner-wrap .col-md-3 {
    width: 32.666667%;
  }
  .index-bgwrapnew {
    background-position: center;
    background-size: cover;
  }

  .head-p,
  .i-cont .foot-p {
    padding-left: 0;
    padding-right: 0;
  }

  #topnav .logo img {
    width: 140px;
  }

  #topnav .logo {
    padding: 15px 0;
  }

  .head-p .xx-title {
    padding-left: 20px;
  }
  .video_des,.video_desEn{
    width:100%;
    flex-wrap: wrap;
    height: auto;
    padding-top: 6px;
    .video{
      display: none;
    }
    .contact-wrap{
      width: 92%;
      margin-left:0;
      margin: 0 auto;
      img{
        display: none;
      }
      h2{
        font-family: SourceHanSansCN-Bold;
        padding-left: 0;
        letter-spacing: 1px;
        font-size:19px;
        text-align: center;
        line-height: 35px;
      }
      p{
        width:100%;
        padding:5px 0 0;
      }
      .full_video{
        margin:.5rem auto;
        font-size: 15px;
      }
    }
  }
  .news {
    width: 100%;
    text-align: center;
    h3 {
      padding-left: 0;
      font-size: 18px;
    }
    h3::after {
      display: none;
      width: 100%;
    }
    line-height: 22px;
    .news_big {
      width: 94%;
      margin: 0 auto;
      padding-left: 0;
      .news_box {
        text-align: left;
        padding: 0.2rem 0;
        img {
          height: 1.6rem;
          width: 2.9rem;
        }
        .news_des {
          h4 {
            font-size: 15px;
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          span {
            padding-top: 0;
            line-height: 19px;
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }
  .moment {
    width: 100%;
    text-align: center;
    h3 {
      padding-left: 0;
      font-size: 18px;
    }
    h3::after {
      display: none;
      width: 100%;
    }
    .moment_title {
      flex-wrap: wrap;
      margin: 0 auto;
      justify-content: space-between;
      .title_active,
      div {
        margin: 0.1rem;
        padding: 0;
        width: 21%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .moment_all {
      margin: 0 auto;
      padding: 0 0.1rem;
      justify-content: space-between;
      img {
        width: 3.2rem;
        height: 2.4rem;
      }
    }
    .partic_more {
      padding-left: 0;
    }
  }
}

@media (max-width: 991px) {
  .lang-select {
    right: 46px;
    top: 10px;
  }
}
</style>

