<template>
  <div id="summit-preview">
    <div class="container-fluid bannerEn" v-if="isEnglish">
      <div class="wrapper">
        <h1 class="title-h1"> {{$t('institute.title')}}</h1>
        <h2 class="title-h2En" v-if="isEnglish">
          <!-- 依托FINWEX平台，汇聚国内外权威金融科技领域专家学者建立的智库平台。 -->
         </h2>
        <h2 class="title-h2" v-else>
          <!-- 依托FINWEX平台，汇聚国内外权威金融科技领域专家学者建立的智库平台。 -->
         </h2>
        <p>
          <!-- 联合权威媒体，为政府机构、上市公司和知名高校提供区块链培训，普及新科技知识，优化市场环境。 -->
          {{ $t('institute.pingtai')}}
        </p>
        <p>  
          <!-- 为FINWEX指数/评级/孵化器等业务提供智力资源，从探讨泛区块链、通证经济深入到行业的前沿技术和应用，提高整个行业从业者的学术水准。 -->
          {{ $t('institute.index')}}
        </p>
        <img src="../assets/img/tag_finwex.png">
      </div>
    </div>
    <div class="container-fluid banner" v-else>
      <div class="wrapper">
        <h1 class="title-h1">{{$t('institute.title')}}</h1>
        <!-- <h2 class="title-h2En" v-if="isEnglish"></h2>
        <h2 class="title-h2" v-else>
         
          {{$t('institute.title')}}</h2> -->
        <p>
          <!-- 联合权威媒体，为政府机构、上市公司和知名高校提供区块链培训，普及新科技知识，优化市场环境。 -->
          {{ $t('institute.pingtai')}}
        </p>
        <p>  
          <!-- 为FINWEX指数/评级/孵化器等业务提供智力资源，从探讨泛区块链、通证经济深入到行业的前沿技术和应用，提高整个行业从业者的学术水准。 -->
          {{ $t('institute.index')}}
        </p>
        <img src="../assets/img/tag_finwex.png">
      </div>
    </div>
    <div class="content">
      <div class="insti_title">
        <img src="../assets/img/insti_line.png">
        <div class="title11">
          <h2>
            <!-- 首批智库专家代表 -->
             {{ $t('institute.advisors')}}</h2>
          <span>THINK-TANK ADVISORS</span>
        </div>
      </div>
      <div class="insti_row" v-if="isEnglish">
        <div class="item" v-for="val in insen" >
          <img :src="val.img_url" class="face">
          <div class="font">
            <img src="../assets/img/tag_insti_s.png">
            <div>
              <h3>{{val.name}}</h3>
              <p class="pEn" v-html="val.position"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="insti_row " v-else>
        <div class="item" v-for="val in ins" >
          <img :src="val.img_url" class="face">
          <div class="font">
            <img src="../assets/img/tag_insti_s.png">
            <div>
              <h3>{{val.name}}</h3>
              <p v-html="val.position"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 返回顶部 -->
    <scrollTop></scrollTop>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import scrollTop from '../components/goTop'
export default {
  head() {
    return {
      title: this.$t('institute.insTitle')
    }
  },
  layout: "institute",
  computed: {
    ...mapGetters("app", ["isEnglish"]),
  },
  components: {
    scrollTop
  },
  async asyncData(ctx) {
    ctx.store.commit("changeUrl", ctx.route.name);
    let ins = await ctx.$axios.get("/api/personnel?type=3");
    let insen = await ctx.$axios.get("/api/personnel?type=4");
    return {
      ins: ins.data.data,
      insen: insen.data.data
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@style/variables";
//PC端
.banner,.bannerEn {
  width: 100%;
  min-width: 1110px;
  background: url(../assets/img/bkg_institute.jpg);
  height: 670px;
  margin: 0 auto;
  padding-top: 0;
  background-position: bottom center;

  .wrapper {
    margin: 0 auto;
    width: 1080px;
    color: #fff;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    padding-top: 120px;
    height: 670px;
  }
  .title-h1 {
    color: #fff;
    font-size: 42px;
    font-weight: 550;
    line-height: 65px;
    padding: 30px 0;
  }
  .title-h2 {
    color: #fff;
    margin-top: 30px;
    margin-bottom:30px;
    font-size: 32px;
    letter-spacing: 4.6px;
    line-height:40px;
  }
  .title-h2En {
    letter-spacing: 0;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 40px;
    line-height:45px;
  }
  p {
    width: 830px;
    line-height: 32px;
    font-weight: lighter;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #ffffff;
    text-align: left;
    margin: 0 auto;
  }
  img {
    width: 290px;
    position: absolute;
    right: 8%;
    bottom: -105px;
  }
}
.bannerEn{
  .title-h1{
    line-height: 58px;
  }
}
.content {
  padding: 24px 0 80px;
  margin: 0 auto;
  width: 1080px;
  .insti_title {
    margin-bottom: 60px;
    margin-top: 70px;
    img {
      width: 140px;
      position: relative;
      bottom: 18px;
      margin-left: 30px;
      margin-right: 20px;
    }
    div {
      display: inline-block;
      h2 {
        font-family: PingFangSC-Medium;
        font-size: 36px;
        color: #43406C;
        line-height: 54px;
      }
      span {
        color: #8d89b9;
        font-size: 20px;
      }
    }
  }
  .insti_row {
    display: flex;
    flex-wrap: wrap;
    //justify-content: left;
    width: 1080px;
    .item {
      flex: 0 0 270px;
      box-sizing: border-box;
      width: 270px;
      padding: 0 15px;
      .face {
        width: 240px;
        height: 240px;
      }
      .font {
        position: relative;
        bottom: 40px;
        left: 5px;
        img {
          width: 265px;
        }
        div {
          position: absolute;
          top: 10px;
          left: 20px;
          width: 200px;
          h3 {
            font-size: 14px;
            color: #fff;
            margin-bottom: 8px;
          }
          p {
            font-size: 12px;
            line-height: 16px;
            color: rgba(255, 255, 255, 0.6);
          }
          .pEn {
            line-height:12px;
          }
        }
      }
    }
  }
}
//移动端
#summit-preview {
  @media screen and (max-width: @device-width-mobile) {
    width: 100%;
    .content {
      padding: 0;
    }
    .row {
      margin: 0;
    }
    .banner {
      background: url("/images/mobile_img/banner_bg.jpg") no-repeat;
      background-size: cover;
      height: 8.5rem;
      min-width: 0;
      width: 100%;
      position: relative;
      .wrapper {
        padding: 1rem .5rem;
        width: 100%;
        color: #fff;
        text-align: center;
        .title-h1 {
          font-size: 0.6rem;
          font-weight:550;
        }
        .title-h2 {
          font-size: 0.4rem;
          line-height: 25px;
          margin: 0.5rem auto auto auto;
          letter-spacing: 0.6px;
        }
        .title-h2En{
          font-size:20px;
          line-height:22px;
        }
        p {
          width: 100%;
          font-size: 0.25rem;
          margin: 0.6rem auto auto auto;
          line-height: 16px;
        }
        img {
          width: 4.5rem;
          left: 22%;
          bottom: 24%;
        }
      }
    }
    .bannerEn {
      background: url("/images/mobile_img/banner_bg.jpg") no-repeat;
      background-size: cover;
      height: 11.5rem;
      min-width: 0;
      width: 100%;
      position: relative;
      .wrapper {
        padding: 1rem .2rem;
        width: 95%;
        color: #fff;
        text-align: center;
        .title-h1 {
          font-size: 0.6rem;
          font-weight:550;
        }
        .title-h2 {
          font-size: 0.4rem;
          line-height: 25px;
          margin: 0.5rem auto auto auto;
          letter-spacing: 0.6px;
        }
        .title-h2En{
          font-size:20px;
          line-height:22px;
        }
        p {
          width: 100%;
          font-size: 0.25rem;
          margin: 0.6rem auto auto auto;
          line-height: 16px;
        }
        img {
          width: 4.5rem;
          left: 22%;
          bottom: 2%;
        }
      }
    }
    .content {
      width: 100% !important;
      .insti_title {
        bottom: 0;
        margin-top: 80px;
        margin-bottom: .8rem;
        img {
          width: 1rem;
          bottom: -40px;
        }
        .title11 {
          font-size: 0.35rem;
          color: #43406c;
          padding-left:1.8rem;
          h2,
          span {
            font-size: 0.36rem;
            line-height: 22px;
          }
        }
      }
      .insti_row {
        width: 100%;
        display: flex;
        .item {
          width: 3.6rem;
          height: auto;
          flex: 1;
          padding: 0 10px;
          img {
            width: 3.5rem;
            height: auto;
          }
          h3 {
            font-size: 10px;
            margin-bottom: 3px;
          }
          p {
            font-size: 4px;
            line-height: 14px;
          }
          .pEn{
            font-size: 4px;
            line-height: 10px;
          }
          .font {
            img{
              height:2rem;
            }
            div {
              width: 2.5rem;
              left: 10px;
              top: 7px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 416px) and (min-width:380px){
    .banner{
      .wrapper {
        img {
          width: 4.5rem;
          left: 22%;
          bottom: 16%;
        }
      }
    }
    .bannerEn{
      height:10.5rem;
      .wrapper{
        img{
          bottom:0%;
        }
      }
    }
  }
}
</style>