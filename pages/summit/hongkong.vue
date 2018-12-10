<template>
<div class="container" >
  <!-- 导航 -->
  <div class="navEn" v-if="navShow > 300 && isEnglish" id="box_action_translateYOut">
    <div  class="nav_box" v-for="(item,index) in productEn" :class="{'navActive':currentIndex === index}" >
      <div></div>
      <a :href="'#'+item">{{item}}</a>
    </div>
  </div>
  <div class="nav" v-if="navShow > 300 && !isEnglish" id="box_action_translateYOut">
    <div  class="nav_box" v-for="(item,index) in product" :class="{'navActive':currentIndex === index}" >
      <div></div>
      <a :href="'#'+item">{{item}}</a>
    </div>
  </div>
  <!-- 背景 -->
  <div class="banner" >
    <div class="slogan">
      <img v-if="isEnglish" src="/images/finwex-summit/HongKong/PC-en-logo-slogan.png" alt="2018纷智区块链峰会-香港" class="clogo-img lazy enshow">
      <img v-else src="/images/finwex-summit/HongKong/PC-zh-logo-slogan.png" alt="2018纷智区块链峰会-香港" class="clogo-img lazy zhshow">
    </div>
  </div>
  <!-- 传统经济遇见新金融video -->
  <div class="video_desEn" v-if="isEnglish">
    <div class="video">
      <video src="/download/Finwex_summit_Hongk.mp4" controls="controls" style="width:510px;height:315px"></video>
    </div>
    <div class="right_des">
      <img src="/images/finwex-summit/HongKong/logo_video.png" alt="">
     <!-- 传统经济遇见新金融科技力量 -->
      <h2>{{ $t('page.righth2')}}</h2>
      <p>{{ $t('page.HK_fwDes')}}</p>
      <p>{{ $t('page.HK_fwDes2')}}</p>
      <a class="full_video" target="_blank" href="https://home.aiyaopai.com/xianggang/index.html">{{ $t('page.wzsp')}}</a>  
    </div>
  </div>
  <div :id="$t('nav.SummitIn')" class="video_des" v-else>
    <div class="video">
      <video src="/download/Finwex_summit_Hongk.mp4" controls="controls" class="video_box"></video>
    </div>
    <div class="right_des">
      <img src="/images/finwex-summit/HongKong/logo_video.png" alt="">
     <!-- 传统经济遇见新金融科技力量 -->
      <h2>{{ $t('page.righth2')}}</h2>
      <p>{{ $t('page.HK_fwDes')}}</p>
      <p>{{ $t('page.HK_fwDes2')}}</p>
      <a class="full_video" target="_blank" href="https://home.aiyaopai.com/xianggang/index.html">{{ $t('page.wzsp')}}</a>  
    </div>
  </div>
  <!-- 主礼嘉宾 -->
  <div :id="$t('nav.Courtesy')" class="offciating">
    <!-- 主礼嘉宾 -->
    <h3>{{ $t('page.posit')}}</h3>
    <div class="offc_guest">
      <div class="offc">
        <img src="/images/finwex-summit/HongKong/m-guest/杨成伟.png" alt="">
        <!-- 杨成伟 -->
        <h4> {{ $t('page.ycw')}}</h4>
        <p>{{ $t('page.ycw_des1')}}</p>
      </div>
      <div class="offc">
        <img  src="/images/finwex-summit/HongKong/m-guest/陈思智.png" alt="陈智思">
          <!-- 陈智思 -->
        <h4>{{ $t('page.zmz2')}}</h4>
        <!-- 全国人民代表大会代表 香港行政会议非官守成员-->
        <p>{{ $t('page.z_des_2')}}</p>
        <p>{{ $t('page.z_des_21')}}</p>
      </div>
      <div class="offc">
        <img  src="/images/finwex-summit/HongKong/m-guest/吴杰庄.png" alt="吴杰庄 ">
        <!-- 吴杰庄 -->
        <h4>{{ $t('page.zmz3')}} </h4>
        <!-- 全国政协委员 --><!-- 香港青年联会顾问 -->
        <p>{{ $t('page.z_des_3')}}</p>
        <p>{{ $t('page.z_des_31')}}</p>
      </div>
      <div class="offc">
        <img  src="/images/finwex-summit/HongKong/m-guest/卢伟国照片.png" alt="卢伟国">
        <!-- 卢伟国 -->
        <h4>{{ $t('page.zmz4')}}</h4>
        <!-- 香港特别行政区 --><!-- 立法会议员 -->
        <p>{{ $t('page.z_des_4')}}</p>
        <p>{{ $t('page.z_des_41')}}</p>
      </div>
      <div class="offc">
        <img  src="/images/finwex-summit/HongKong/m-guest/riconi.png" alt="尤立">
        <!-- 尤立 -->
        <h4>{{ $t('page.zmz5')}}</h4>
        <!-- FINWEX创始人 --><!-- FINWISE执行主席 -->
        <p>{{ $t('page.z_des_5')}}</p>
        <p>{{ $t('page.z_des_51')}}</p>
      </div>
      <div class="offc">
        <img  src="/images/finwex-summit/HongKong/m-guest/黄俊朗.png" alt="黃俊瑯">
        <!-- 黃俊瑯 -->
        <h4>{{ $t('page.zmz6')}}</h4>
        <!-- 高锋创新金融行政总裁 -->
        <p>{{ $t('page.z_des_6')}}</p>
      </div>
    </div>
  </div>
  <!-- 参会嘉宾 -->
  <div :id="$t('nav.Guest')" class="Participants" ref="participants">
    <h3>{{ $t('page.chjb13')}}</h3>
    <div class="partic_guest" v-if="isEnglish">
      <div class="partic" v-for="(val, index) in insLessEn" :key="'insLessEn-' + index">
        <img :src="val.img_url" alt="">
        <h4>{{val.name}}</h4>
        <p v-html="val.position"></p>
      </div>
      <div class="partic_more" @click="moreEn" v-if="len !== insEn.length">
        More
      </div>
    </div>
    <div class="partic_guest" v-else>
      <div class="partic" v-for="(val, index) in insLess" :key="'insLess-' + index">
        <img :src="val.img_url" alt="">
        <h4>{{val.name}}</h4>
        <p v-html="val.position"></p>
      </div>
      <div class="partic_more" @click="more" v-if="len !== ins.length">
        加载更多
      </div>
    </div>

  </div>
  <!-- 大会新闻 -->
  <div :id="$t('nav.SummitV')"  class="news" ref="news">
    <h3>{{ $t('page.dhxw')}}</h3>
    <div class="news_big">
      <a  class="news_box" target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=2247484132&idx=1&sn=fd62b476ce8f85d24c627667041f7771&scene=19#wechat_redirect">
        <img src="/images/finwex-summit/HongKong/news/hongkongnews1.png" alt="">
        <div class="news_des">
          <!-- <h4>港發展區塊鏈技術需政策扶持 | 文汇报</h4> -->
          <h4>{{ $t('page.dht1')}}</h4>
          <span>{{ $t('page.dhp1')}}</span><a href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=2247484132&idx=1&sn=fd62b476ce8f85d24c627667041f7771&scene=19#wechat_redirect">{{ $t('news.learn')}} ></a>
        </div>
      </a>
      <a  class="news_box" target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=2247484137&idx=1&sn=5c252871e90ac16a962fdad7366e2c85&scene=19#wechat_redirect">
        <!-- FINWEX创始人Riconi You：赶着区块链风口去创业 -->
        <img src="/images/finwex-summit/HongKong/news/hongkongnews2.png" alt="">
        <div class="news_des">
          <h4>{{ $t('page.dht2')}}</h4>
          <span>{{ $t('page.dhp2')}}</span><a href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=2247484137&idx=1&sn=5c252871e90ac16a962fdad7366e2c85&scene=19#wechat_redirect">{{ $t('news.learn')}} ></a>
        </div>
      </a >
      <a  class="news_box" target="_blank" href="http://k.sina.com.cn/article_6145283913_m16e49974902000djnk.html?cre=tianyi&mod=pcpager_fin&loc=33&r=9&doct=0&rfunc=100&tj=none&tr=9">
        <img src="/images/finwex-summit/HongKong/news/hongkongnews3.png" alt="">
        <div class="news_des">
          <h4>{{ $t('page.dht3')}}</h4>
          <span>{{ $t('page.dhp2')}}</span><a href="http://k.sina.com.cn/article_6145283913_m16e49974902000djnk.html?cre=tianyi&mod=pcpager_fin&loc=33&r=9&doct=0&rfunc=100&tj=none&tr=9">{{ $t('news.learn')}} ></a>
        </div>
      </a>
      <a  class="news_box" target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=2247484132&idx=2&sn=3dbefbb5c3a67a0d4fbe9b279c917663&scene=19#wechat_redirect">
        <!-- BTC.com受邀出席香港Finwise -->
        <img src="/images/finwex-summit/HongKong/news/hongkongnews4.png" alt="">
        <div class="news_des">
          <h4>{{ $t('page.dht4')}} </h4>
          <span>{{ $t('page.dhp4')}}</span><a href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=2247484132&idx=2&sn=3dbefbb5c3a67a0d4fbe9b279c917663&scene=19#wechat_redirect">{{ $t('news.learn')}} ></a>
        </div>
      </a >
      <a  class="news_box" target="_blank" href="http://tech.163.com/18/0813/18/DP43E5UQ000998GP.html">
        <img src="/images/finwex-summit/HongKong/news/hongkongnews5.png" alt="">
        <div class="news_des">
          <h4>{{ $t('page.dht5')}} </h4>
          <span>{{ $t('page.dhp5')}}</span><a href="http://tech.163.com/18/0813/18/DP43E5UQ000998GP.html">{{ $t('news.learn')}} ></a>
        </div>
      </a >
      <a  class="news_box" target="_blank" href="https://www.jinse.com/blockchain/225566.html">
        <img src="/images/finwex-summit/HongKong/news/hongkongnews6.png" alt="">
        <div class="news_des">
          <h4>{{ $t('page.dht5')}}</h4>
          <span>{{ $t('page.dhp6')}}</span><a href="https://www.jinse.com/blockchain/225566.html">{{ $t('news.learn')}} ></a>
        </div>
      </a >
    </div>
  </div>
  <!-- 精彩演讲 -->
  <div :id="$t('nav.WonderfulS')" class="speech_bg" ref="speech_bg">
    <div class="speech">
      <h3>{{ $t('page.jcyj')}}</h3>
      <div class="speech_big" v-if="isEnglish">
        <div class="speech_box" v-for="val in speechEn" >
          <img :src="val.img_url" alt="">
          <h4>{{val.name}}</h4>
          <p class="pEn" v-html="val.position"></p>
          <h5>{{ $t('page.yjzt')}}</h5>
          <span v-html="val.detail"></span>
          <!-- 查看他的演讲 -->
          <a class="speech_active" target="_blank" :href="val.link">{{ $t('page.ckyj')}}</a>
        </div>
      </div>
      <div class="speech_big" v-else>
        <div class="speech_box" v-for="val in speech" >
          <img :src="val.img_url" alt="">
          <h4>{{val.name}}</h4>
          <p v-html="val.position"></p>
          <h5>{{ $t('page.yjzt')}}</h5>
          <span v-html="val.detail"></span>
          <!-- 查看他的演讲 -->
          <a class="speech_active" target="_blank" :href="val.link">{{ $t('page.ckyj')}}</a>
        </div>
      </div>
    </div>
  </div>
  <!-- 大会圆桌 -->
  <div :id="$t('nav.PanelD')" class="round_table"  ref="round_table">
    <h3>{{ $t('page.dhyz')}}</h3>
    <div class="table_big">
      <!-- 传统资本遇见新经济 -->
      <a class="table_box" target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=100000563&idx=1&sn=22d164a47bcfe2292703253de2a2955b&scene=19#wechat_redirect">
        <img src="/images/finwex-summit/HongKong/news/6401.png" alt="">
        <div class="table_des">
          <h4>{{ $t('page.yzt1')}}</h4>
          <p class="table_guest">{{ $t('page.yzg1')}}</p>
          <span>{{ $t('page.yzp1')}}</span><a href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=100000563&idx=1&sn=22d164a47bcfe2292703253de2a2955b&scene=19#wechat_redirect">{{ $t('news.learn')}} ></a>
        </div>
      </a>
      <!-- 区块链的不同商业生态 -->
      <a class="table_box" target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=100000560&idx=1&sn=50e3889fc0fbe3a0d53852a6c5b28c7b&scene=19#wechat_redirect">
        <img src="/images/finwex-summit/HongKong/news/6402.png" alt="">
        <div class="table_des">
          <h4>{{ $t('page.yzt2')}}</h4>
          <p class="table_guest">{{ $t('page.yzg2')}}</p>
          <span>{{ $t('page.yzp2')}}</span><a href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=100000560&idx=1&sn=50e3889fc0fbe3a0d53852a6c5b28c7b&scene=19#wechat_redirect">{{ $t('news.learn')}} ></a>
        </div>
      </a>
      <!-- 下一代交易所 -->
      <a class="table_box" target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=100000554&idx=1&sn=73595449468cb1e12a5a061ebe292c44&scene=19#wechat_redirect">
        <img src="/images/finwex-summit/HongKong/news/6403.png" alt="">
        <div class="table_des">
          <h4>{{ $t('page.yzt3')}}</h4>
          <p class="table_guest">{{ $t('page.yzg3')}}</p>
          <span>{{ $t('page.yzp3')}}</span><a href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=100000554&idx=1&sn=73595449468cb1e12a5a061ebe292c44&scene=19#wechat_redirect">{{ $t('news.learn')}} ></a>
        </div>
      </a>
      <!-- 区块链安全技术的痛点 -->
      <a class="table_box" target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=100000533&idx=1&sn=b606c28f85c918ab90a3a3c2b60aff83&scene=19#wechat_redirect">
        <img src="/images/finwex-summit/HongKong/news/6404.png" alt="">
        <div class="table_des">
          <h4>{{ $t('page.yzt4')}}</h4>
          <p class="table_guest">{{ $t('page.yzg4')}}</p>
          <span>{{ $t('page.yzp4')}}</span><a href="https://mp.weixin.qq.com/s?__biz=MzUzNDc4NzM5Nw==&mid=100000533&idx=1&sn=b606c28f85c918ab90a3a3c2b60aff83&scene=19#wechat_redirect">{{ $t('news.learn')}} ></a>
        </div>
      </a>
    </div>
  </div>
  <!-- 合作伙伴 -->
  <div :id="$t('nav.Partner')" class="partner2" ref="partner">
    <h3>{{ $t('page.hzhb1')}}</h3>
    <div class="partner_big">
      <div class="co_hosting">
        <h4 v-if="isEnglish" class="h4En">{{ $t('page.lhzb')}}</h4>
        <h4 v-else class="h4">{{ $t('page.lhzb')}}</h4>
        <div class="co_logo">
          <img src="/images/finwex-summit/HongKong/partner/goldfordfintech.png" alt="">
          <img src="/images/finwex-summit/HongKong/partner/finwex.png" alt="">
          <img src="/images/finwex-summit/HongKong/partner/CDGEX.png" alt="">
          <img src="/images/finwex-summit/HongKong/partner/funkey.png" alt="">
          <img src="/images/finwex-summit/HongKong/partner/kac.png" alt="">
          <img src="/images/finwex-summit/HongKong/partner/蚂蚁节点联盟.png" alt="">
        </div>
      </div>
      <div class="partner_box">
        <h4 v-if="isEnglish" class="h4En">{{ $t('page.hzhb1')}}</h4>
        <h4 v-else class="h4">{{ $t('page.hzhb1')}}</h4>
        <div class="partner_logo">
          <img v-for="val in partLess" :src="val.url" alt="">
        </div>
      </div>
      <div class="partic_more" @click="partner_more" v-if="part !== partner.length">{{ $t('page.jzgd')}}</div>
    </div>
  </div>
  <!-- 合作媒体 -->
  <div class="media" ref="media">
    <h3>{{ $t('page.hzmt')}}</h3>
    <div class="media_big">
      <div class="strategic">
        <h4 v-if="isEnglish" class="h4En">{{ $t('page.zlhz1')}}</h4>
        <h4 v-else class="h4">{{ $t('page.zlhz1')}}</h4>
        <div class="strate_logo">
          <img src="/images/finwex-summit/HongKong/media/亚太第一卫视.png" alt="">
          <img src="/images/finwex-summit/HongKong/media/币快报.png" alt="">
          <img src="/images/finwex-summit/HongKong/media/coinote.png" alt="">
        </div>
      </div>
      <div class="deep">
        <h4 v-if="isEnglish" class="h4En">{{ $t('page.sdhz1')}}</h4>
        <h4 v-else class="h4">{{ $t('page.sdhz1')}}</h4>
        <div class="strate_logo">
          <img src="/images/finwex-summit/HongKong/media/金色财经.png" alt="">
          <img src="/images/finwex-summit/HongKong/media/链向财经.png" alt="">
          <img src="/images/finwex-summit/HongKong/media/链闻.png" alt="">
          <img src="/images/finwex-summit/HongKong/media/coinvoice.png" alt="">
          <img src="/images/finwex-summit/HongKong/media/挖链网.png" alt="">
          <img src="/images/finwex-summit/HongKong/media/九个亿.png" alt="">
          <img src="/images/finwex-summit/HongKong/media/币小白.png" alt="">
        </div>
      </div>
      <div class="coop_media">
        <h4 v-if="isEnglish" class="h4En">{{ $t('page.xzmt1')}}</h4>
        <h4  v-else class="h4">{{ $t('page.xzmt1')}}</h4>
        <div class="strate_logo">
          <img v-for="val in strate" :src="val.url" alt="">
        </div>
      </div>
      <div class="coop_media1">
        <h5 v-if="isEnglish" class="h5En">{{ $t('bangkok.global')}}</h5>
        <h5 v-else class="h5">{{ $t('bangkok.global')}}</h5>
        <div class="strate_logo">
          <div class="logo_box"><img src="/images/finwex-summit/HongKong/partner/18区.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
  <!-- 大会精彩瞬间 -->
  <div :id="$t('nav.WonderfulM')" class="moment" ref="moment">
    <h3>{{ $t('page.dhjc1')}}</h3>
    <div class="moment_title">
      <div :class="{'title_active': navActive === 0}" @click="navActive = 0">{{ $t('page.jcqb')}}</div>
      <div :class="{'title_active': navActive === 1}" @click="navActive = 1">{{ $t('page.jcsj')}}</div>
      <div :class="{'title_active': navActive === 2}" @click="navActive = 2">{{ $t('page.jcsj2')}}</div>
      <div :class="{'title_active': navActive === 3}" @click="navActive = 3">{{ $t('page.jcsj3')}}</div>
      <div :class="{'title_active': navActive === 4}" @click="navActive = 4">{{ $t('page.jcsj4')}}</div>
      <div :class="{'title_active': navActive === 5}" @click="navActive = 5">{{ $t('page.jcsj5')}}</div>
      <div :class="{'title_active': navActive === 6}" @click="navActive = 6">{{ $t('page.jcsj6')}}</div>
      <div :class="{'title_active': navActive === 7}" @click="navActive = 7">{{ $t('page.jcsj7')}}</div>
    </div>
    <div class="moment_all"  v-if="navActive === 0">
      <img  v-for="val in photoLess" :src="val.url" alt="">
      <!-- 加载更多 -->
      <div class="partic_more" @click="moment_more" v-if="photojz !== photo.length">{{ $t('page.jzgd')}}</div>
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
    <div class="moment_all"  v-if="navActive === 5">
       <img  v-for="val in photo5" :src="val.url" alt="">
    </div>
    <div class="moment_all" v-if="navActive === 6">
       <img  v-for="val in photo6" :src="val.url" alt="">
    </div>
    <div class="moment_all" v-if="navActive === 7">
        <img  v-for="val in photo7" :src="val.url" alt="">
    </div>
  </div>
  <!-- 立即报名 -->
  <!-- <div class="register">
    <div class="register_banner">
      <h2>8th-9th January, 2019  FINWEX SUMMIT BANGKOK</h2>
      <a class="register_box" href="/summit/mangkok">{{ $t('page.ljbm')}}</a>
    </div>
  </div> -->
  <!-- 返回顶部 -->
  <scrollTop></scrollTop>
</div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import scrollTop from '../../components/goTop'
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
      ins: [],
      insEn: [],
      insLess: [],
      insLessEn: [],
      len: 18,
      partner: [],
      partLess: [],
      part: 12,
      photojz: 12,
      photo:[],
      photoLess: [],
      scroll: false,
      navShow: 0,
      currentIndex:0,
      product: [
        '峰会简介',
        '主礼嘉宾',
        '参会嘉宾',
        '大会新闻',
        '精彩演讲',
        '大会圆桌',
        '合作伙伴',
        '精彩瞬间',
      ],
      productEn: [
        'SUMMIT INTRODUCTION',
        'COURTESY GUEST',
        'SUMMIT PARTICIPANTS',
        'SUMMIT VOICE',
        'WONDERFUL SPEECH',
        'PANEL DISCUSSION',
        'SUMMIT PARTNER',
        'WONDERFUL MOMENT',
      ]
    };
  },
  layout: "summit",
  computed: {
    ...mapGetters("app", ["isEnglish"]),
  },
  async asyncData(ctx) {
    ctx.store.commit("changeUrl", ctx.route.name);
    //参会嘉宾数据
    let ins = await ctx.$axios.get("/api/personnel?type=9");
    let insEn = await ctx.$axios.get("/api/personnel?type=7");
    //演讲嘉宾的数据
    let speech = await ctx.$axios.get("/api/personnel?type=11");
    let speechEn = await ctx.$axios.get("/api/personnel?type=8");
    //合作伙伴数据
    let partner = await ctx.$axios.get("/api/partner?type=1");
    //协作媒体数据
    let strate = await ctx.$axios.get("/api/partner?type=2");
    //精彩瞬间数据
    let photo = await ctx.$axios.get("/api/photo?catetory=0&type=all");
    let photo1 = await ctx.$axios.get("/api/photo?catetory=0&type=1");
    let photo2 = await ctx.$axios.get("/api/photo?catetory=0&type=2");
    let photo3 = await ctx.$axios.get("/api/photo?catetory=0&type=3");
    let photo4 = await ctx.$axios.get("/api/photo?catetory=0&type=4");
    let photo5 = await ctx.$axios.get("/api/photo?catetory=0&type=5");
    let photo6 = await ctx.$axios.get("/api/photo?catetory=0&type=6");
    let photo7 = await ctx.$axios.get("/api/photo?catetory=0&type=7");
    return {
      ins: ins.data.data,
      insEn: insEn.data.data,
      speech: speech.data.data,
      speechEn: speechEn.data.data,
      partner: partner.data.data,
      strate: strate.data.data,
      photo: photo.data.data,
      photo1: photo1.data.data,
      photo2: photo2.data.data,
      photo3: photo3.data.data,
      photo4: photo4.data.data,
      photo5: photo5.data.data,
      photo6: photo6.data.data,
      photo7: photo7.data.data,
    }
  },
  methods:{
    //参会点击更多
    more () {
      this.len = this.ins.length
      //this.len = this.len + 18
      this.insLess = this.ins.slice(0, this.len)
    },
    moreEn () {
      this.len = this.insEn.length
      //this.len = this.len + 18
      this.insLessEn = this.insEn.slice(0, this.len)
      // console.log('insLessEn',this.insLessEn)
    },
    //合作伙伴
    partner_more() {
      this.part = this.partner.length
      this.partLess = this.partner.slice(0,this.part)
      // console.log('partLess',partLess)
    },
    //精彩瞬间
    moment_more() {
      this.photojz = this.photo.length          //全部长度
      this.photoLess = this.photo.slice(0,this.photojz)  //html中展示的部分
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.navShow = scrollTop
      let particHeight = this.$refs.participants.offsetHeight ;
      // console.log('particHeight',particHeight)
      let newsHeight = this.$refs.news.offsetHeight + particHeight ;
      let speechHeight = this.$refs.speech_bg.offsetHeight + newsHeight ;
      let tableHeight = this.$refs.round_table.offsetHeight + speechHeight ;
      let partnerHeight = this.$refs.partner.offsetHeight + tableHeight ;
      let mediaHeight = this.$refs.media.offsetHeight + partnerHeight;
      let momentHeight = this.$refs.moment.offsetHeight + mediaHeight;
      if(scrollTop <400){
         this.scroll = true
         this.currentIndex = 0
      }
      if(scrollTop > 400){
         this.scroll = true
         this.currentIndex = 1
      }
      if(scrollTop > particHeight){
         this.scroll = true
         this.currentIndex = 2
      }
      if(scrollTop > newsHeight){
         this.scroll = true
         this.currentIndex = 3
      }
      if(scrollTop > speechHeight){
         this.scroll = true
         this.currentIndex = 4
      }
      if(scrollTop > tableHeight){
         this.scroll = true
         this.currentIndex = 5
      }
      if(scrollTop > partnerHeight){
         this.scroll = true
         this.currentIndex = 6
      }
      if(scrollTop >  momentHeight){
         this.scroll = true
         this.currentIndex = 7
      }
    },
  },
  mounted() {
    this.insLess = this.ins.slice(0, this.len)
    this.insLessEn = this.insEn.slice(0, this.len)
    this.partLess = this.partner.slice(0, this.part)
    this.photoLess = this.photo.slice(0, this.photojz)
    window.addEventListener('scroll', this.handleScroll)
  },
};
</script>

<style lang="less" scoped>
@import "~@style/summit/hongk";
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.page {
  &.swiper-container-vertical > .swiper-pagination-bullets {
    top: 5%;
  }
}
</style>