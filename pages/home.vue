<template>
  <!-- 中文版  -->
  <div class="container">
    <!-- 首页背景 -->
    <div class="my-swiper" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <a class="swiper-slide" href="/GFIS/Haikou">
          <!-- PC端 -->
          <img class="swiper-img pc" src="/images/finwex-summit/Hainan/bannerPc-en.png">
          <!-- 移动端 -->
          <img class="swiper-img mb" src="/images/finwex-summit/Hainan/bannerMb-en.png">
        </a>
        <div class="swiper-slide">
          <!-- PC端 -->
          <img class="swiper-img pc h2-fa" src="/images/Finwex-index/banner2.png">
          <h2 class="pc h2En" v-if="isEnglish">{{ $t('index.banner2')}}</h2>
          <h2 class="pc" v-else>{{ $t('index.banner2')}}</h2>
          <!-- 移动端 -->
          <img class="swiper-img mb" src="/images/Finwex-index/mobile/banner.jpg">
        </div>
        <div class="swiper-slide">
        <a class="swiper-slide" href="/summit/bangkok">
          <!-- pc端 -->
          <img class="swiper-img pc" src="/images/Finwex-index/indexBg5.png">
          <!-- 移动端 --> 
          <img class="swiper-img mb" src="/images/Finwex-index/mobile/bannerMb1.png">
        </a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
    <!-- 纷睿指数 -->
    <div class="fr-index">
       <div class="fr-titleEn" v-if="isEnglish">
        <h2>
          <!-- 纷睿指数 -->
          {{ $t('index.fwx')}}
        </h2>
          <!-- 更多指数 -->
        <nuxt-link class="more-index" to="/indices/">
          <p>{{ $t('index.gdzs')}}</p>
          <img src="/images/Finwex-index/arrow.png" class="more-bg">
        </nuxt-link>
      </div>
      <div class="fr-title" v-else>
        <h2>
          <!-- 纷睿指数 -->
          {{ $t('index.fwx')}}
        </h2>
        <nuxt-link class="more-index" to="/indices/">
          <p>
            <!-- 更多指数 -->
            {{ $t('index.gdzs')}}
          </p>
          <img src="/images/Finwex-index/arrow.png" class="more-bg">
        </nuxt-link>
      </div>
      <div class="index-number">
        <div class="index-num1">
          <div
            class="num1"
            v-on:click="change('finwex20')"
            v-bind:class="{'num2':selectIndex=='finwex20'}"
          >
            <!-- PC端标题 -->
            <h3 class="pc">
              <!-- FWX20-纷睿20指数 -->
              {{ $t('index.f204')}}
            </h3>
            <!-- 移动端标题 -->
            <h3 class="mb">FWX20</h3>
            <div class="num22">
              <span>{{ banner.synthesis.nowIndex }}</span>
              <span
                v-if="banner.synthesis.rise"
                class="arrow up"
              >({{banner.synthesis.rise? '+' : '-'}} {{banner.synthesis.rate }}%)</span>
              <span
                v-else
                class="arrow down"
              >({{banner.synthesis.rise? '+' : '-'}} {{banner.synthesis.rate }}%)</span>
            </div>
          </div>
          <div
            class="num1"
            v-on:click="change('finwex11')"
            v-bind:class="{'num2':selectIndex=='finwex11'}"
          >
            <!-- PC端 -->
            <h3 class="pc">
              <!-- FCI-纷睿综合指数 -->
              {{ $t('index.fci4')}}
            </h3>
            <!-- 移动端标题 -->
            <h3 class="mb">FCI</h3>
            <div class="num22">
              <span>{{ banner.hedge.nowIndex }}</span>
              <span
                class="arrow up"
                v-if="banner.hedge.rise"
              >({{banner.hedge.rise? '+' : '-'}} {{banner.hedge.rate }}%)</span>
              <span
                v-else
                class="arrow down"
              >({{banner.hedge.rise? '+' : '-'}} {{banner.hedge.rate }}%)</span>
            </div>
          </div>
        </div>
        <h4 class="mb" v-if="selectIndex === 'finwex20'">
          <!-- Finwex 20 — 纷睿20指数 -->
          {{ $t('index.f201')}}
        </h4>
        <h4 class="mb" v-if="selectIndex === 'finwex11'">
          <!-- Finwex Composite Index — 纷睿综合指数 -->
          {{ $t('index.fci1')}}
        </h4>
        <div class="index-chart">
          <home-chart/>
        </div>
      </div>
    </div>
    <!-- 活动计划 -->
    <div class="plan">
      <!-- 活动计划 -->
      <h2 @click="mapMonth" class="plan-h2">{{ $t('home.plan')}}</h2>
      <div class="calendar">
        <LeftCalendar :date="today" @change="onUpdate" class="pc"></LeftCalendar>
      <no-ssr>  
          <EventCalendar
            :date="today"
            class="calendar-new"
          :events="demoEvents"
          @change="onUpdate"
            @changeCurrentDay="handleCurrentDayChanged"
          />
      </no-ssr>    
        <!-- <img src="/images/Finwex-index/time.png"> -->
        <div class="plan-activity">
          <div class="plan-wrapper">
            <div class="today1" v-if="isEnglish">
              <!-- 今日活动 -->
              <h2>{{ $t('home.active')}}</h2>
              <div
                class="line"
                v-if="!(demoEventsEn.map(item => {return item.date}).indexOf(current) > -1)"
              >
                <h1>{{current}}</h1>
                <!-- 今日无活动 -->
                <h2>{{ $t('home.activeno')}}</h2> 
              </div>
              <div v-for="item in demoEventsEn" :key="item.index" class="top-wrap">
                  <div v-if="item.date === current">
                    <p>{{ item.date }}</p>
                    <div class="line">
                      <h2>{{ item.title }}</h2>
                      <p>Time: {{ item.time }}</p>
                      <p>Address: {{ item.location }}</p>
                    </div>
                  </div>
              </div>
            </div>
            <div class="today1" v-else>
              <!-- 今日活动 -->
              <h2>{{ $t('home.active')}}</h2>
              <div
                class="line"
                v-if="!(demoEvents.map(item => {return item.date}).indexOf(current) > -1)"
              >
              <!-- <div class="line" v-if="item.time !== current"> -->
                <h1>{{current}}</h1>
                <!-- 今日无活动 -->
                <h2>{{ $t('home.activeno')}}</h2> 
              </div>
              <div v-for="item in demoEvents" :key="item.index" class="top-wrap">
                  <div v-if="item.date === current">
                    <p>{{ item.date }}</p>
                    <div class="line">
                      <h2>{{ item.title }}</h2>
                      <p>时间：{{ item.time }}</p>
                      <p>地点：{{ item.location }}</p>
                    </div>
                  </div>
              </div>
            </div>
             <!-- 热门推荐活动 -->
            <div class="popular">
              <h2>{{ $t('home.popular')}}</h2>
              <div class="line">
                  <!-- GBTIS · 海口站 -->
                  <h2>{{ $t('home.active7')}}</h2>
                  <!-- 时间：2019年01月  -->
                <p>{{ $t('home.time7')}}</p>
                <!-- 地点：泰国曼谷 -->
                <p>{{ $t('home.location7')}}</p>
              </div>
              <div class="line">
                <!-- CryptoFest 2018 Token Design Competition 通证经济模型设计大赛  -->
                <h2>{{ $t('home.active9')}}</h2>
                <!-- 时间：2018年12月07日 14：00-16：00 -->
                <p>{{ $t('home.time9')}}</p>
                <p>{{ $t('home.location9')}}</p>
              </div>
              <div class="line">
                <!-- FINWEX LABS: 墨客区块链上海技术创享会  -->
                <h2>{{ $t('home.active8')}}</h2>
                <!-- 时间：2018年12月08日 14：00-16：00 -->
                <p>{{ $t('home.time8')}}</p>
                <p>{{ $t('home.location8')}}</p>
              </div>
              <div class="line">
                  <!-- FINWEX SUMMIT 曼谷站 -->
                  <h2>{{ $t('home.active4')}}</h2>
                  <!-- 时间：2018年12月  -->
                <p>{{ $t('home.time4')}}</p>
                <p>{{ $t('home.location4')}}</p>
              </div>
            </div>
          </div>
          <div class="contact">
            <!-- 联系我们 -->
            <h2>{{ $t('home.contact')}}</h2>
            <span>steven.zhou@finwex.com / david.li@finwex.com</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻快讯 -->
    <div class="newEn" v-if="isEnglish">
      <div class="fr-title">
        <!-- 纷睿新闻 -->
        <h2>{{ $t('home.new11')}}</h2>
        <a class="more-index" href="/voice/">
          <!-- 更多新闻 -->
          <span>{{ $t('home.gdxw')}}</span>
          <img src="/images/Finwex-index/arrow.png" class="more-bg">
        </a>
      </div>
      <!-- 新闻内容 -->
      <div class="new-Sum">
        <a class="new-des" v-for="post in posts" :key="post.id" :href="'/newsDetail?id=' + post.id">
          <img :src="post.featured_media" alt>
          <div class="new-detail">
            <h3>{{ post.title.rendered }}</h3>
            <span>{{ post.date | formatDateEn }}</span>
            <p class="des1" v-html="post.excerpt.rendered"></p>
            <a href="/new/newsDetail12" class="des2">Read More</a>
          </div>
        </a>
      </div>
    </div>
    <div class="new" v-else>
      <div class="fr-title">
        <!-- 纷睿新闻 -->
        <h2>{{ $t('home.new11')}}</h2>
        <a class="more-index" href="/voice/">
          <!-- 更多新闻 -->
          <span>{{ $t('home.gdxw')}}</span>
          <img src="/images/Finwex-index/arrow.png" class="more-bg">
        </a>
      </div>
      <!-- 新闻内容 -->
      <div class="new-Sum">
        <a
          class="new-des"
          v-for="post in posts"
          :key="post.id"
          target="_blank"
          :href="'/newsDetail?id=' + post.id"
        >
          <img :src="post.featured_media" alt>
          <div class="new-detail">
            <h3>{{ post.title.rendered }}</h3>
            <span>{{ post.date | formatDate }}</span>
            <p class="des1" v-html="post.excerpt.rendered"></p>
            <a href="/new/newsDetail12" class="des2">Read More</a>
          </div>
        </a>
      </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="partner">
      <!-- 战略伙伴 -->
      <h2>{{ $t('home.zlhb')}}</h2>
      <Partners dark/>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import HomeChart from "../components/Index/HomeChart";
import Partners from "../components/common/Partners";
import EventCalendar from "../components/common/EventCalendar";
import LeftCalendar from "../components/common/LeftCalendar";
import format from "date-fns/format";
import {formatDate} from '../plugins/date.js'
export default {
  head() {
    return {
      title: this.$t('home.homeTitle')
    }
  },
  filters: {               //设置中文时间格式
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy年MM月dd日')
    },
    formatDateEn(time) {    //设置英文时间格式
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  components: {
    HomeChart,
    Partners,
    EventCalendar,
    LeftCalendar
  },
  layout: "finwex",
  //首页轮播图
  data() {
    //console.log(format(new Date(), "YYYY/MM/DD"));
    return {
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        // 切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间
        speed: 300,
        autoplay: {
          // 停留的时间
          delay: 3000
        },
        on: {
          slideChange() {
            // console.log('onSlideChangeEnd', this);
          },
          tap() {
            // console.log('onTap', this);
          }
        }
      },
      per_page: 3,
      categories: 5,
      posts: [],
      today: format(new Date(), "YYYY/MM"),
      current: format(new Date(), "YYYY/MM/DD"),
      selectIndex: "finwex20",
      banner: {
        synthesis: {},
        surprise: {},
        hedge: {}
      },
    }
  },
  //接口数据
  async asyncData(ctx) {
    ctx.store.commit("changeUrl", ctx.route.name);
    //wordpress
    let category = 5;
    if (ctx.store.getters["app/isEnglish"]) {
      category = 6;
    }
    let postsa = await ctx.$axios.get(
      "/api/news?page=1&per_page=3&categories=" + category
    )
    //日历数据
    let calendar = await ctx.$axios.get("/api/calendar?type=1")
    let calendarEn = await ctx.$axios.get("/api/calendar?type=2")
    return {
      posts: postsa.data,
      demoEvents: calendar.data.data,
      demoEventsEn: calendarEn.data.data,
    };
  },

  methods: {
    change(index) {
      this.$store.dispatch("changeIndex", { index_type: index });
      this.selectIndex = index;
    },
    onUpdate(newDate,dat) {
      this.today = newDate;
      // this.clearDateList();
      // this.mapMonth()
    },
    handleCurrentDayChanged(current) {
      this.current = current;
    },
    mapMonth() {
      this.demoEvents[this.demoEvents.length] = {date: objDate, title:""}
      let arr = this.today.split('/')
      //console.log("arr", arr)
      for (let index = 0; index < 32; index++) {
        let objDate = ''
        index < 10 ? objDate =  arr[0] + '/' + arr[1] + '/0' + index : objDate =  arr[0] + '/' + arr[1] + '/' + index
        //console.log("objDate", objDate)
        this.demoEvents[this.demoEvents.length] = {date: objDate, title:""}
      }
    },
    clearDateList() {
      this.demoEvents = [
        {
          date: "2018/09/28",
          title: "jinri", // Required
        },
        {
          date: "2018/09/25", // Required
          title: "区块链与国际艺术表演分享", // Required
          time: "时间：2018年09月25日 14:00-16:00",
          location: "地点：上海旅顺66号上海外滩W酒店LOUNGE"
        },
        {
          date: "2018/09/26", // Required
          title: "《纷 · 享汇》区块链系列沙龙第一期：传统金融对话新科技", // Required
          time: "时间：2018年09月26日",
          location: "地点：上海市黄浦区"
        }
      ]
    },
    async changeNew(){
      // this.per_page += 3;
      let postsa = await this.$axios.get(
        "/api/news?page=1&per_page=3&categories=" +
          this.categories
      );
      this.posts = postsa.data;
    }
  },
  computed: {
    ...mapGetters("app", ["isEnglish"]),
  },
  async mounted() {
    let res = await this.$axios.$get("/api/banner_index");
    this.banner = res;

  },
  watch: {
    isEnglish: function(curState, oldState) {
      if (curState) {
        this.categories = 6;
        this.changeNew();
      } else {
        this.categories = 5;
        this.changeNew();
      }
    },
  },
};
</script>

<style lang="less">
@import "~@style/FinIndex";

@swiper-height: 500px;
</style>
