<template>
<div class="content" id="summit-preview">
    <!-- BangKok 版心背景 -->
    <div class="bg pc" id="goTop">
        <!-- <img v-if="isEnglish" src="/images/finwex-summit/BangKok/英文.png" alt="">
        <img v-else src="/images/finwex-summit/BangKok/中文banner.png" alt="">   -->
        <!-- <img src="/images/finwex-summit/BangKok/bannerPc.png" alt="" class="mb"> -->
    </div>
    <div class="bg mb">
        <img src="/images/Finwex-index/mobile/bannerMb1.png" alt="" class="mb">
    </div>
    <!-- 亚洲最具影响力峰会文字 -->
    <div class="summit container full" >
        <h1>
          <!-- 亚洲最具影响力的金融科技峰会之一 -->
          {{ $t('summit.title') }}
        </h1>
        <div class="p-one">
            <p>
              <!-- FINWISE SUMMIT 汇集业内顶尖项目... -->
              {{ $t('summit.pOne') }}
            </p>
        </div>
        
        <div class="p-two">
            <p>
              <!-- FINWISE SUMMIT 创立至今已在上海... -->
              {{ $t('summit.pTwo') }}
            </p>
        </div>
    </div>
    <!-- 数字显示的嘉宾 -->
    <div class="summit-stats full">
      <!-- pc端 -->
       <img v-if="isEnglish" class="pc-img" src="/images/finwex-summit/BangKok/pc-en.png">
       <img v-else class="pc-img" src="/images/finwex-summit/BangKok/pc-zh.png">
       <!-- 移动端 -->
       <img v-if="isEnglish" class="web-img" src="/images/finwex-summit/BangKok/web-en.png">
       <img v-else class="web-img" src="/images/finwex-summit/BangKok/web-zh.png">
    </div>
    <div class="partner">
        <div class="partOne">
           <img src="/images/finwex-summit/BangKok/industry kols.png" alt="">
           <p class="partTitle">
             <!-- 云集业界“最强大脑” -->
             {{ $t('partners.partOneTitle') }}
           </p>
           <p class="partPro">
              <!-- 力邀全球范围的金融科技业界大咖... -->
              {{ $t('partners.partOneDesc') }}
           </p>
        </div>
        <div class="partOne">
           <img src="/images/finwex-summit/BangKok/reliable collaborction.png" alt="">
           <p class="partTitle">
             <!-- 可靠的合作平台 -->
             {{ $t('partners.partTwoTitle') }}
           </p>
           <p class="partPro" >
             <!-- 由组委会专家团队谨慎挑选与会展商... -->
             {{ $t('partners.partTwoDesc') }}
           </p>
        </div>
        <div class="partOne">
           <img src="/images/finwex-summit/BangKok/strong media.png" alt="">
           <p class="partTitle">
             <!-- 强大的媒体资源 -->
             {{ $t('partners.partThreeTitle') }}
           </p>
           <p class="partPro">
             <!-- 从主流传统媒体到行业媒体... -->
             {{ $t('partners.partThreeDesc') }}
           </p>
        </div>
    </div>
    <!-- 参会嘉宾 -->
    <div class="invited-guest" v-if="isEnglish">
      <!-- 参会嘉宾 -->
      <h1>{{$t('bangkok.guest22')}}</h1>
      <div class="guest-total">
        <div class="guest" v-for ="val in guestEn">
          <img :src="val.img_url" alt="">
          <h2>{{ val.name}}</h2>
          <p v-html="val.position"></p>
        </div>
      </div>  
    </div>
    <div class="invited-guest" v-else>
      <h1>
        <!-- 参会嘉宾 -->
        {{$t('bangkok.guest22')}}
      </h1>
      <div class="guest-total">
        <div class="guest" v-for ="val in guest">
          <img :src="val.img_url" alt="">
          <h2>{{ val.name}}</h2>
          <p v-html="val.position"></p>
        </div>
      </div>  
    </div>
    <!-- 拟邀嘉宾 -->
    <div class="invited-guest" v-if="isEnglish">
      <!-- 拟邀嘉宾 -->
      <h1>{{$t('bangkok.guest11')}}</h1>
      <div class="guest-total">
        <div class="guest" v-for="val in insEn">
          <img :src="val.img_url" alt="">
            <h2>{{ val.name }}</h2>
          <p v-html="val.position"></p>
        </div>
      </div>
    </div>
     <div class="invited-guest" v-else>
      <!-- 拟邀嘉宾 -->
      <h1>{{$t('bangkok.guest11')}}</h1>
      <div class="guest-total">
        <div class="guest" v-for="val in ins">
          <img :src="val.img_url" alt="">
            <h2>{{ val.name }}</h2>
          <p v-html="val.position"></p>
        </div>
      </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="partner-logo">
      <h1>
        <!-- 合作伙伴 -->
        {{$t('links.partners')}}</h1>
      <div class="logo-total">
        <div class="logo-img" v-for="item in imgs" :key="item">
          <img :src="item.Img" alt="">
        </div>
      </div>
    </div>
    <!-- 合作媒体 -->
    <div class="coop-media">
      <h1>
        <!-- 合作媒体 -->
        {{$t('page.Media_tl')}}</h1>
      <div class="deep-coop">
        <h2>
          <!-- 深度合作 -->
        {{$t('bangkok.deepcoop')}}</h2>
        <div class="deep-logo">
          <div class="logo-img">
            <img src="/images/finwex-summit/BangKok/logo/logo22.png" alt="">
          </div>
          <div class="logo-img">
            <img src="/images/finwex-summit/BangKok/logo/logo23.png" alt="">
          </div>
          <div class="logo-img">
            <img src="/images/finwex-summit/BangKok/logo/logo24.png" alt="">
          </div>
          <div class="logo-img">
            <img src="/images/finwex-summit/BangKok/logo/logo25.png" alt="">
          </div>
          <div class="logo-img">
            <img src="/images/finwex-summit/BangKok/logo/logo26.png" alt="">
          </div>
          <div class="logo-img">
            <img src="/images/finwex-summit/BangKok/logo/logo27.png" alt="">
          </div>
          <div class="logo-img">
            <img src="/images/finwex-summit/BangKok/logo/logo28.png" alt="">
          </div>
          <div class="logo-img">
            <img src="/images/finwex-summit/BangKok/logo/logo33.png" alt="">
          </div>
          <div class="logo-img">
            <img src="/images/finwex-summit/BangKok/logo/logo34.png" alt="">
          </div>
          <div class="logo-img">
            <img src="/images/finwex-summit/BangKok/logo/logo35.png" alt="">
          </div>
        </div>
      </div>
      <div class="unique-coop">
        <h2>
          <!-- 独家全球 -->
          {{ $t('bangkok.global')}}
          <!-- 社区服务商 --></h2>
          
        <div class="logo-img">
          <img src="/images/finwex-summit/BangKok/logo/logo29.png" alt="">
        </div>
      </div>
    </div>
    <!-- 峰会议程 -->
    <div class="agenda pc">
      <!-- 曼谷峰会议程 -->
      <h1>{{ $t('bangkok.agenda')}}</h1>
      <div class="agendaImgEn" v-if="isEnglish">
         <img src="/images/finwex-summit/BangKok/day1-web-en.png" alt="">
         <img src="/images/finwex-summit/BangKok/day2-web-en.png" alt="">
      </div>
      <div class="agendaImg" v-else>
         <img src="/images/finwex-summit/BangKok/day1-web-cn.png" alt="">
         <img src="/images/finwex-summit/BangKok/day2-web-cn.png" alt="">
      </div>
    </div>

    <div class="agendaMb mb">
      <!-- 曼谷峰会议程 -->
      <h1>{{ $t('bangkok.agenda')}}</h1>
      <div class="agendaImg" v-if="isEnglish">
         <img src="/images/finwex-summit/BangKok/day1-phone-en.png" alt="">
         <img src="/images/finwex-summit/BangKok/day2-phone-en.png" alt="">
      </div>
      <div class="agendaImg" v-else>
         <img src="/images/finwex-summit/BangKok/day1-phone-cn.png" alt="">
         <img src="/images/finwex-summit/BangKok/day2-phone-cn.png" alt="">
      </div>
    </div>
     <!-- 赞助条款 -->
    <div class="support">
        <!-- 赞助条款 -->
        <h1>{{ $t('support.title') }}</h1>
        <table > 
        <tbody>
          <tr class="thead">
            <th>
              <!-- 标准展位招商 -->
              {{ $t('page.bzzs34')}}</th>
            <th :class="{'th-hover':thHover===1}" @mouseover="changeStyle(1)">
              <!-- 联合主办 -->
              {{ $t('page.lhzb35')}}</th>
            <th :class="{'th-hover':thHover===2}" @mouseover="changeStyle(2)">
              <!-- 钻石级协办 -->
              {{ $t('page.zsxb36')}}</th>
            <th :class="{'th-hover':thHover===3}" @mouseover="changeStyle(3)">
              <!-- 金牌赞助 -->
              {{ $t('page.jpzz37')}}</th>
            <th :class="{'th-hover':thHover===4}" @mouseover="changeStyle(4)">
              <!-- 银牌赞助 -->
              {{ $t('page.ypzz38')}}</th>
            <th :class="{'th-hover':thHover===5}" @mouseover="changeStyle(5)">
              <!-- 铜牌赞助 -->
              {{ $t('page.tpzz39')}}</th>
          </tr>
            <tr v-for="item in table"  :key="item.index">
              <td v-if="isEnglish">{{item.des2}}</td>
              <td v-else>{{item.des1}}</td>
              <td :class="{'td-hover':tdHover===1}" v-if="item.isprice"> <p>{{item.price1}}</p>
              <p v-if="isEnglish">{{item.pass11}}</p>
              <p v-else>{{item.pass1}}</p>
              </td>
              <td :class="{'td-hover':tdHover===1}" v-else >
                <img v-if="tdHover===1 && item.pic1" :src="item.pic1+'white.png'" alt="">
                <img v-else-if="item.pic1" :src="item.pic1+'dark.png'" alt="">
              </td>

              <td :class="{'td-hover':tdHover===2}" v-if="item.isprice" ><p>{{item.price2}}</p>
                <p v-if="isEnglish">{{item.pass22}}</p> 
                <p v-else>{{item.pass2}}</p> 
              </td>
              <td :class="{'td-hover':tdHover===2}" v-else >
                <img v-if="tdHover===2 && item.pic2" :src="item.pic2+'white.png'" alt="">
                <img v-else-if="item.pic2" :src="item.pic2+'dark.png'" alt="">
              </td>

              <td :class="{'td-hover':tdHover===3}" v-if="item.isprice" ><p>{{item.price3}}</p>
                <p v-if="isEnglish">{{item.pass33}}</p> 
                <p v-else>{{item.pass3}}</p> 
               </td>
              <td :class="{'td-hover':tdHover===3}" v-else >
                <img v-if="tdHover===3 && item.pic3" :src="item.pic3+'white.png'" alt="">
                <img v-else-if="item.pic3" :src="item.pic3+'dark.png'" alt="">
              </td>

              <td :class="{'td-hover':tdHover===4}" v-if="item.isprice" > <p>{{item.price4}}</p>
               <p v-if="isEnglish">{{item.pass44}}</p> 
                <p v-else>{{item.pass4}}</p> 
                </td>
              <td :class="{'td-hover':tdHover===4}" v-else >
                <img v-if="tdHover===4 && item.pic4" :src="item.pic4+'white.png'" alt="">
                <img v-else-if="item.pic4" :src="item.pic4+'dark.png'" alt="">
              </td>

              <td :class="{'td-hover':tdHover===5}" v-if="item.isprice" > <p>{{item.price5}}</p>
                <p v-if="isEnglish">{{item.pass55}}</p> 
                <p v-else>{{item.pass5}}</p> 
                </td>
              <td :class="{'td-hover':tdHover===5}" v-else >
                <img v-if="tdHover===5 && item.pic5" :src="item.pic5+'white.png'"  alt="">
                <img v-else-if="item.pic5" :src="item.pic5+'dark.png'" alt="">
              </td>
            </tr>
          </tbody>
        </table>
        <div class="support-mb mb">
          <img v-if="isEnglish" src="/images/finwex-summit/BangKok/support-en.png" alt="">
          <img v-else src="/images/finwex-summit/BangKok/support-zh.png" alt="">  
        </div>
    </div>
    <!-- 联系我们 -->
    <div class="contact container full">
        <div class="contact1">
            <h1>
              <!-- 联系我们 -->
              {{ $t('contact.title') }}
            </h1>
        </div>
        <div class="contact2">
            <h4>
              <!-- 赞助咨询 -->
              {{ $t('contact.sponsor') }}
            </h4>
            <div class="conBig">
                <div class="conSmall">
                    <h3>Raymond He</h3>
                    <p>TEL/Wechat: 13764595403</p>
                    <p>Email: raymond.he@finwex.com</p>
                </div>
                <div class="conSmall">
                    <h3>David Li</h3>
                    <p>TEL/Wechat:15316569597</p>
                    <p>Email：david.li@finwex.com</p>
                </div>
            </div>
            <div class="conBig2">
                <div class="conSmall">
                    <h3>Damian Qian</h3>
                    <p>TEL/Wechat: 18600936157</p>
                    <p>Email: damian.qian@finwex.com</p>
                </div>
                <div class="conSmall">
                    <h3>Steven Zhou</h3>
                    <p>TEL/Wechat:15201963586</p>
                    <p>Email: steven.zhou@finwex.com</p>
                </div>
            </div>
        </div>
        <div class="contact3">
            <h4>
              <!-- 媒体咨询 -->
              {{ $t('contact.media') }}
            </h4>
            <div class="conSmall">
                <h3>Ewa Jiang</h3>
                <p>Wechat: Ewa170878</p>
                <p>Email: ewa.jiang@finwex.com</p>
            </div>
        </div>
    </div>
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
    layout: "summit",
    components: {
      scrollTop
    },
    data() {
      return {
        tdHover:1,
        thHover:1,
        sponsorExpanded: 'coHost',
        //合作伙伴渲染的图片数据
        imgs:[
          {Img:'/images/finwex-summit/BangKok/logo/logo32.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo17.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo6.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo5.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo3.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo30.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo1.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo2.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo7.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo4.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo8.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo9.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo10.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo11.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo12.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo13.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo14.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo15.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo16.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo18.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo19.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo20.png'},
          {Img:'/images/finwex-summit/BangKok/logo/logo21.png'},
        ],
        table:[
          {des1:'官网显示企业Logo及企业描述',
          des2:'Logo and corporate description shown on the official website',
          pic1:'/images/finwex-summit/BangKok/',
          pic2:'/images/finwex-summit/BangKok/',
          pic3:'/images/finwex-summit/BangKok/',
          pic4:'/images/finwex-summit/BangKok/',
          pic5:'/images/finwex-summit/BangKok/',
          },
          {des1:'峰会展商手册 展示企业品牌',
          des2:'Corporate brand displayed on the Summit Exhibitor Manual',
          pic1:'/images/finwex-summit/BangKok/',
          pic2:'/images/finwex-summit/BangKok/',
          pic3:'/images/finwex-summit/BangKok/',
          pic4:'/images/finwex-summit/BangKok/',
          pic5:'/images/finwex-summit/BangKok/',
          },
          {des1:'标准展台 (规格: 3m*3m)',
          des2:'Standard Booth(3m*3m)',
          pic1:'/images/finwex-summit/BangKok/',
          pic2:'/images/finwex-summit/BangKok/',
          pic3:'/images/finwex-summit/BangKok/',
          pic4:'/images/finwex-summit/BangKok/',
          pic5:''
          },
          {des1:'20分钟独立演讲',
          des2:'20 mins Independent Speech',
          pic1:'/images/finwex-summit/BangKok/',
          pic2:'/images/finwex-summit/BangKok/',
          pic3:'/images/finwex-summit/BangKok/',
          pic4:'',
          pic5:'/images/finwex-summit/BangKok/'
          },
          {des1:'峰会暖场期间企业视频的播放',
          des2:'Warm-up video of the corporate played during the summit',
          pic1:'/images/finwex-summit/BangKok/',
          pic2:'/images/finwex-summit/BangKok/',
          pic3:'',
          pic4:'',
          pic5:''
          },
          {des1:'媒体专访',
          des2:'Exclusive Interview',
          pic1:'/images/finwex-summit/BangKok/',
          pic2:'/images/finwex-summit/BangKok/',
          pic3:'',
          pic4:'',
          pic5:''
          },
        
          {des1:'分会场冠名',
          des2:'Title Sponsorship of Sub-venues',
          pic1:'/images/finwex-summit/BangKok/',
          pic2:'',
          pic3:'',
          pic4:'',
          pic5:''
          },
          {des1:'价格',
          des2:'Price',
          isprice:"1",
          price1:'8 BTC',
          pass1:'8 张VIP通行证',
          pass11:'8 VIP Passes',
          price2:'6.5 BTC',
          pass2:'4 张VIP通行证',
          pass22:'4 VIP Passes',
          price3:'4.5 BTC',
          pass3:'3 张VIP通行证',
          pass33:'3 VIP Passes',
          price4:'3.5 BTC',
          pass4:'2 张VIP通行证',
          pass44:'2 VIP Passes',
          price5:'2.5 BTC',
          pass5:'1 张VIP通行证',
          pass55:'1 VIP Passes',
          },
        ]
      }  
    },
    async asyncData(ctx) {
        ctx.store.commit("changeUrl", ctx.route.name);
        //参会嘉宾
        let guest = await ctx.$axios.get("/api/personnel?type=12");
        let guestEn = await ctx.$axios.get("/api/personnel?type=13");
        //拟邀嘉宾数据
        let ins = await ctx.$axios.get("/api/personnel?type=14");
        let insEn = await ctx.$axios.get("/api/personnel?type=15");
        return {
          guest: guest.data.data,
          guestEn: guestEn.data.data,
          ins: ins.data.data,
          insEn: insEn.data.data,
        }
    },
    computed: {
      ...mapGetters('app', [
        'isEnglish'
      ]),
    },
    methods: {
      handleToggle(tag) {
        if (this.sponsorExpanded === tag) {
          this.sponsorExpanded = ''
        } else {
          this.sponsorExpanded = tag
        }
      },
      changeStyle(style){
        this.tdHover = style;
        this.thHover = style;
          console.log( this.tdHover);
      }
    },
    i18n: {
      messages: {
        'en': {
          summit: {
            title: 'Leading FinTech Summit in Asia',
            pOne: 'FINWEX SUMMIT brings together top industry projects,investors,media,political representatives,experts and scholars to create a reliable collaboration platform with local regulators. The summit aims to discuss and explore the application prospects of blockchain technology in local market, share the forefront fintech information,and make contribution to enhance the sustainable development of the fintech and blockchain industry. ',
            pTwo: 'FINWEX SUMMIT has been held in key Asia cities including Shanghai, Macau,Tokyo and Hong Kong, with tens of thousands of people present and millions online viewership. It attracted dozens of outstanding fintech enterprises to participate, and enjoyed huge media coverage.'
          },
          partners: {
            partOneTitle: 'Industry KOLs',
            partOneDesc: 'Global leaders in the financial technology industry are invited to speak on hot topics, share their insights on the latest technological developments, and analyze trends in the future.',
            partTwoTitle: 'Reliable Collaboration Platform',
            partTwoDesc: 'The Summit is a reliable platform where famous multinational corporations, leading projects, technology experts, and investment institutions can meet.',
            partThreeTitle: 'Strong Media Coverage',
            partThreeDesc: 'The organizer works with extensive media, from mainstream traditional media to industry editors, to provide brand exposures and in-depth reports. '
          },
          support: {
            title: 'Sponsorship Clauses',
            coHost: 'Co-host',
            coHostDesc: [
              'Logo and corporate description shown on the official website',
              'Corporate brand displayed on the Summit Exhibitor Manual',
              'Warm-up video of the corporate played during the summit',
              'Title Sponsorship of Sub-venues',
              'Exclusive Interview',
              '20 mins Independent Speech',
              'Standard Booth(3m*3m)',
              '8 VIP Passes'
            ],
            diamond:'Diamond Sponsor',
            diamondDesc: [
              'Logo and corporate description shown on the official website',
              'Corporate brand displayed on the Summit Exhibitor Manual',
              'Warm-up video of the corporate played during the summit',
              'Exclusive Interview',
              '20 mins Independent Speech',
              'Standard Booth(3m*3m)',
              '4 VIP Passes'
            ],
            gold: 'Gold Sponsor',
            goldDesc: [
              'Logo and corporate description shown on the official website',
              'Corporate brand displayed on the Summit Exhibitor Manual',
              '20 mins Independent Speech',
              'Standard Booth(3m*3m)',
              '3 VIP Passes'
            ],
            silver: 'Silver Sponsor',
            silverDesc: [
              'Logo and corporate description shown on the official website',
              'Corporate brand displayed on the Summit Exhibitor Manual',
              'Standard Booth(3m*3m)',
              '2 VIP Passes'
            ],
            bronze: 'Bronze Sponsor',
            bronzeDesc: [
              'Logo and corporate description shown on the official website',
              'Corporate brand displayed on the Summit Exhibitor Manual',
              '20 mins Independent Speech',
              '1 VIP Pass'
            ]
          },
          contact: {
            title: 'Contact',
            sponsor: 'Sponsorship',
            media: 'Media'
          }
        },
        'zh-cn': {
          summit: {
            title: '亚洲最具影响力的金融科技峰会之一',
            pOne: 'FINWEX SUMMIT 汇集业内顶尖项目、投资机构、权威媒体、政界代表以及专家学者，携手当地监管机构创建可信的合作平台，共同交流探讨区块链技术的应用前景，分享最前沿的科技进展，共同促进金融科技及区块链行业的长期稳健发展。',
            pTwo: 'FINWEX SUMMIT 创立至今已在上海、澳门、东京和香港连续举办四届金融科技高端峰会。吸引了近百家行业领先企业的参展及国内外媒体的争相报道，共计近万人现场参与和数百万人的在线关注。'
          },
          partners: {
            partOneTitle: '云集业界“最强大脑”',
            partOneDesc: '力邀全球范围的金融科技业界大咖，探讨热点话题，分享最前沿的科技进展，共同分析研判趋势，掌握未来。',
            partTwoTitle: '可靠的合作平台',
            partTwoDesc: '由组委会专家团队谨慎挑选与会展商，包含知名跨国企业、顶尖项目、技术专家、及投资机构，为各方交流互动、探索合作商机提供了可靠的平台。',
            partThreeTitle: '强大的媒体资源',
            partThreeDesc: '从主流传统媒体到行业媒体，组委会拥有全面、强大的媒体资源，可为各合作方提供品牌曝光、深度报道，影响千万级受众。'
          },
          support: {
            title: '赞助条款',
            coHost: '联合主办',
            coHostDesc: [
              '官网显示企业Logo及企业描述',
              '峰会展商手册展示企业品牌',
              '峰会暖场期间企业视频的播放',
              '分会场冠名',
              '媒体专访',
              '20分钟独立演讲',
              '标准展台(规格: 3m*3m)',
              '8张 VIP通行证'
            ],
            diamond: '钻石级协办',
            diamondDesc: [
              '官网显示企业Logo及企业描述',
              '峰会展商手册展示企业品牌',
              '峰会暖场期间企业视频的播放',
              '媒体专访',
              '20分钟独立演讲',
              '标准展台(规格: 3m*3m)',
              '4张 VIP通行证'
            ],
            gold: '金牌赞助',
            goldDesc: [
              '官网显示企业Logo及企业描述',
              '峰会展商手册展示企业品牌',
              '20分钟独立演讲',
              '标准展台(规格: 3m*3m)',
              '3张 VIP通行证'
            ],
            silver: '银牌赞助',
            silverDesc: [
              '官网显示企业Logo及企业描述',
              '峰会展商手册展示企业品牌',
              '标准展台(规格: 3m*3m)',
              '2张 VIP通行证'
            ],
            bronze: '铜牌赞助',
            bronzeDesc: [
              '官网显示企业Logo及企业描述',
              '峰会展商手册展示企业品牌',
              '20分钟独立演讲',
              '1张 VIP通行证'
            ]
          },
          contact: {
            title: '联系我们',
            sponsor: '赞助咨询',
            media: '媒体咨询'
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
@import "~@style/summit/BangK-Index";
@import "~@style/layout/content";

</style>
