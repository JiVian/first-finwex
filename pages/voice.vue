<template>
<div class="container">
    <div class="banner" >
     <a class="banner_des" v-for="post in banner_posts"  target="_blank" :key="post.id" :href="'/newsDetail?id=' + post.id">
      <img class="swiper-img" :src="post.featured_media" alt="">
      <div class="text">
         <div class="title">
         <!-- JRR携手FINWEX集团共同布局区块链全球生态 -->
         {{ post.title.rendered }}</div>
         <div class="date">
         <!-- 2018年09月10日 -->
         {{ post.date | formatDateEn}}</div>
         <div class="summary">
         <!-- 北京时间2018年9月9日晚8点，JRR和FINWEX在上海外滩W酒店携手举办了“区块链之夜”主题酒会，JRR全球合伙人陈敏涛、林尚儒
        以及来自普华永道、平安集团、第一财经、戈壁投资的诸多投资界人士出席。 -->
         <p v-html="post.excerpt.rendered"></p></div>
         <a class="more" href="/new/newsDetail1/"><span>
         <!-- 了解详情 -->
         {{ $t('news.learn')}}</span><img class="more-row" src="/images/Finwex-index/yellow-row.png"/></a>
      </div>
     </a>
    </div>
  <!-- 英文版样式 -->
  <!-- <div class="news-listEn content-w" v-if="isEnglish">
    <a class="news" v-for="post in posts" v-if="post.categories[0] === 2" :key="post.id" target="_blank" :href="'/newsDetail?id=' + post.id">
        <div class="news-img">
          <img  :src="post.featured_media" />
        </div>
        <div class="title">{{ post.title.rendered }}</div>
        <div class="date">{{ post.date | formatDateEn }}</div>
        <div class="summary"><p v-html="post.excerpt.rendered"></p></div>
        <a class="more" href=" "><span>了解详情</span><img class="more-row" src="/images/Finwex-index/yellow-row.png"/></a>
    </a>
    <div class="readmore content-w" @click="fetch" v-show="!isShow">
      <p>{{ $t('news.ydgd')}}</p>
    </div>
  </div> -->
  <!-- 中文版样式 -->
  <div class="news-list content-w">
     <!-- 中文wordpress -->
    <a class="news" v-for="post in posts" :key="post.id" target="_blank" :href="'/newsDetail?id=' + post.id">
        <div class="news-img">
          <img  :src="post.featured_media" />
        </div>
        <div class="title">{{ post.title.rendered }}</div>
        <div class="date">{{ post.date | formatDate }}</div>
        <div class="summary"><p v-html="post.excerpt.rendered"></p></div>
        <a class="more" :href="'/newsDetail?id=' + post.id"><span>了解详情</span><img class="more-row" src="/images/Finwex-index/yellow-row.png"/></a>
    </a>
    <div class="readmore content-w" @click="fetch" v-show="!isShow">
      <p>{{ $t('news.ydgd')}}</p>
    </div>
  </div>
    
</div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import {formatDate} from '../plugins/date.js'
export default {
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
  head() {
    return {
      title: this.$t('news.newsTitle')
    }
  },
  layout: "news",
  data() {
    return {
      isShow: false,
      per_page: 6,
      categories: 1,
      banner: 3,
      posts: [],
      banner_posts: [],
      button: true,
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
    };
  },
  //wordpress接口数据
  async asyncData(ctx) {
    let category = 1;
    let ban = 3;
    if (ctx.store.getters["app/isEnglish"]) {
      category = 2;
      ban = 4;
    }
    let postsa = await ctx.$axios.get(
      "/api/news?page=1&per_page=6&categories=" + category
    )
    //console.log('asyncData',postsa)
    let banner_post = await ctx.$axios.get(
      "/api/news?page=1&per_page=6&categories=" + ban
    )
    //console.log('postsa.date:',postsa.data)
    return {
      posts: postsa.data,
      banner_posts: banner_post.data,
      // page: postsa.data.length + 1
    };
  },
  //点击查看更多的方法
  methods: {
    btn: function() {
      this.isShow = !this.isShow;
    },
    async change(){
      this.per_page += 6;
      let postsa = await this.$axios.get(
        "/api/news?page=1&per_page=" +
          this.per_page +
          "&categories=" +
          this.banner
      );
      //console.log('change',postsa)
      this.banner_posts = postsa.data;
    },
    async fetch() {
      this.per_page += 6;
      this.isShow = false;
      let postsa = await this.$axios.get(
        "/api/news?page=1&per_page=" +
          this.per_page +
          "&categories=" +
          this.categories
      )
      //console.log('fetch',postsa)
      if (postsa.data.length >= this.per_page) {
        this.posts = postsa.data;
      } else {
        this.posts = postsa.data;
        this.isShow = !this.isShow;
      }
    }
  },
  computed: {
    ...mapGetters("app", ["isEnglish"]),
  },
  watch: {
    isEnglish: function(curState, oldState) {
      if (curState) {
        this.per_page = 0;
        this.categories = 2;
        this.banner = 4;
        this.change();
        this.per_page = 0;
        this.fetch();
      } else {
        this.per_page = 0;
        this.categories = 1;
        this.banner = 3;
        this.change();
        this.per_page = 0;
        this.fetch();
      }
    },
  },
};
</script>

<style  lang="less" scoped>
@swiper-height: 500px;
// PC端
.container {
  padding-bottom: 40px;
  .content-w {
    width: 1200px;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
    list-style: none;
  }
  .banner {
    height: 496px;
    //background: url('/images/Finwex-index/pcBanner.jpg') no-repeat;
    background-position: top center;
    background-size: 1154px;
    margin-right: 15px;
    text-align: center;
    .news-img {
      height: 306px;
      cursor: pointer;
      img {
        height: 100%;
        display: none;
      }
    }
    .banner_des {
      height: 496px;
      margin: 0 auto;
      width: 1160px;
      position: relative;
      img {
        width: 1160px;
        height: 100%;
        //margin-right: 80px;
      }
      .text {
        height: 190px;
        width: 1162px;
        position: absolute;
        bottom: 0;
        left: -1px;
        background-image: linear-gradient(
          -180deg,
          rgba(0, 0, 0, 0) 0%,
          #000000 100%
        );
      }
    }
    .title {
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      font-weight: 550;
      color: #fff;
      margin: 0 auto;
      width: 600px;
      border-bottom: 2px solid #f5b514;
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: left;
    }
    .date {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999999;
      margin: 0 auto;
      text-align: left;
      line-height: 30px;
      width: 600px;
    }
    .summary {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #999999;
      margin: 0 auto;
      width: 600px;
      text-align: left;
      line-height: 20px;
      p{
        height:60px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .more {
      display: none;
    }
  }
  .news-list,
  .news-listEn {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    overflow: hidden;
    margin: 0 auto;
  }
  .news-listEn {
    .news {
      width: 480px;
      .title {
        height: 78px;
        line-height: 20px;
        word-wrap: break-word;
        word-break: break-all;
      }
      .summary {
        width: 370px;
        height: 90px;
        line-height: 18px;
        word-wrap: break-word;
        word-break: break-all;
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }
  }
  .news {
    width: 370px;
    height: 480px;
    flex: 0 0 31%;
    margin-bottom: 40px;
    padding: 20px 12px;
    cursor: pointer;
    //width:360px;
    .news-img {
      height: 250px;
      width: 370px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .title {
      width: 100%;
      height: 46px;
      font-family: PingFangSC-Medium;
      font-weight: 550;
      font-size: 16px;
      color: #3f4147;
      letter-spacing: 0;
      line-height: 25px;
      padding-top: 25px;
      padding-bottom: 9px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .date {
      width: 100%;
      font-family: HelveticaNeue;
      font-size: 12px;
      color: rgba(63, 65, 71, 0.5);
      letter-spacing: 0;
      padding-bottom: 14px;
      position: relative;
    }
    .date::before {
      content: "";
      width: 65px;
      height: 4px;
      background-color: #f5b514;
      position: absolute;
      bottom: 0px;
    }
    .summary {
      width: 100%;
      font-family: PingFangSC-Light;
      font-size: 14px;
      color: #3f4147;
      padding-top: 18px;
      letter-spacing: 0;
      line-height: 21px;
      height: 75px;
      word-wrap: break-word;
      word-break: break-all;
      p {
          position: relative;
          margin: 1%;    /*决定省略号在文本尾部的位置*/
          height: 66px;
          overflow: hidden;
          text-overflow: ellipsis;
          p::after{
            bottom: 0;
            right: 0;
            content: "...";
            padding: 0 -40px 0 0;
            position: absolute;
          }
      }
    }
    .more {
      float: right;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #f37519;
      letter-spacing: 0;
      height: 20px;
      width: 150px;
      line-height: 20px;
      text-align: right;
      .more-row {
        height: 20px;
        vertical-align: bottom;
        line-height: 20px;
        display: inline-block;
      }
    }
    span {
      background: #eaeaea;
      width: 60px;
      text-align: center;
      display: inline-block;
      line-height: 20px;
    }
  }
  //轮播图动画样式
  .my-swiper {
    height: 500px;
    width: 1200px;
    .swiper-wrapper {
      height: 500px;
    }
    .swiper-slide {
      width: 1200px;
      display: flex;
      overflow: hidden;
      // 居中显示
      justify-content: center;

      .swiper-img {
        // 宽度 自动按比例(同高度的比例)缩放
        width: auto;
        height: 500px;
      }
    }
    .swiper-pagination {
      // 覆盖 js 添加的内联样式 width
      width: 100% !important;

      // Styles for indicators
      > .swiper-pagination-bullet {
        width: 30px;
        height: 6px;
        border-radius: 0;
        transition: all 0.6s;
        background: rgba(255, 255, 255, 0.31);
        cursor: pointer;
        // <style lang="less" scoped> 下此条样式不会生效, 因为没有 [data-xxxxx] 属性
        &.swiper-pagination-bullet-active {
          background: #ffffff;
        }
      }
      > .swiper-pagination-bullet:hover {
        transform: scale(1.8);
        height: 15px;
        background-color: rgba(20, 200, 200, 0.8);
      }
    }
  }
  .readmore {
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #505050;
    letter-spacing: 0;
    padding: 50px 0;
    cursor: pointer;
  }
}
//移动端
@media screen and(max-width:480px) {
  html,
  body {
    overflow: hidden;
  }
  a {
    color: #3f4147;
    text-decoration: none;
    list-style: none;
  }
  a:visited {
    text-decoration: none;
  }
  .container {
    width: 100%;
    .banner {
      width: 100%;
      height: 8rem;
      background: none;
      margin-top: 0;
      .news-img,
      .title,
      .date,
      .summary,
      .more {
        display: block;
      }
      .banner_des {
        background: none;
        width: 99%;
        height: auto;
        img {
          width: 99%;
          height: 4.1rem;
        }
        .text {
          width: 99%;
          background: none;
          position: static;
          height: auto;
        }
        .title {
          width: 95%;
          color: #000;
          font-size: 20px;
          font-weight: 550;
          padding: 10px 10px;
          position: relative;
          line-height: 26px;
          border-bottom: none;
        }
        .title::after {
          content: "";
          width: 95%;
          height: 2px;
          position: absolute;
          background-color: #f5b514;
          left: 10px;
          bottom: 0;
        }
        .date {
          width: 95%;
          font-size: 14px;
          color: rgba(63, 65, 71, 0.5);
          padding: 5px 10px;
          line-height: 0.6rem;
        }
        .summary {
          width: 95%;
          padding: 5px 10px;
          line-height: 22px;
          color: #3f4147;
          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            height: 64px;
          }
        }
        .more {
          float: right;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #f37519;
          letter-spacing: 0;
          height: 20px;
          width: 150px;
          line-height: 20px;
          text-align: right;
          text-decoration: none;
          padding-right: 0.2rem;
          .more-row {
            width: 0.8rem;
            height: 20px;
            vertical-align: bottom;
            line-height: 20px;
            display: inline-block;
          }
          span {
            background: #eaeaea;
            width: 60px;
            text-align: center;
            display: inline-block;
            line-height: 20px;
          }
        }
      }
    }
    .news-list {
      width: 94%;
      margin-top: 0.6rem;
      .news {
        padding: 0;
        height: auto;
        width: 100%;
        margin: 20px auto;
        //box-shadow:2px 3px 2px #EAEAEA;
        .more {
          width: 2.4rem;
        }
      }
      .title {
        height: auto;
        padding-top: 0.15rem;
      }
      .summary {
        height: 0.8rem;
        padding-top: 0.16rem;
        margin-bottom: 0.35rem;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        p{
          margin: 0;
        }
      }
    }
    .news-listEn {
      margin-top: 0.6rem;
      .news {
        width: 100%;
        padding: 0.4rem 0;
        .summary {
          width: 100%;
          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
      }
    }
    //轮播图动画样式
    .my-swiper {
      height: 7.58rem;
      width: 100%;
      .swiper-wrapper {
        height: 7.58rem;
      }
      .swiper-slide {
        display: flex;
        overflow: hidden;
        // 居中显示
        justify-content: center;

        .swiper-img {
          // 宽度 自动按比例(同高度的比例)缩放
          width: auto;
          height: 7.58rem;
        }
      }
      .swiper-pagination {
        // 覆盖 js 添加的内联样式 width
        width: 100% !important;

        // Styles for indicators
        > .swiper-pagination-bullet {
          width: 0.4rem;
          height: 3px;
          border-radius: 0;
          transition: all 0.6s;
          background: rgba(255, 255, 255, 0.31);
          cursor: pointer;
          // <style lang="less" scoped> 下此条样式不会生效, 因为没有 [data-xxxxx] 属性
          &.swiper-pagination-bullet-active {
            background: #ffffff;
          }
        }
        > .swiper-pagination-bullet:hover {
          transform: scale(1.8);
          height: 15px;
          background-color: rgba(20, 200, 200, 0.8);
        }
      }
    }
    .content-w {
      width: 94%;
    }
  }
}
@media only screen and(max-width:416px) and(min-width:380px) {
}
</style>
