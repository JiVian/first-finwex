<template>
  <section class="container" id="summit-preview">
    <div class="bannerEn" v-if="isEnglish">
      <div class="content">
        <div class="insti_title">
          <h2 class="title1">
            <!-- 独立、客观的区块链项目风险评估专家 -->
            {{ $t("ratings.title")}}</h2>
          <p class="title_des">
            <!-- FINWEX 评级致力于促进区块链技术长远健康发展，通过公正、客观的评级体系和独立、专业的智库团队，为市场参与者揭示区块链项目中的各类风险；同时致力于研究区块链技术风险特征，为行业发展和政策制定提供参考，为区块链技术服务于社会经济的进步发展做出贡献。 -->
            {{ $t("ratings.titledes")}}</p>
          <a href="/download/区块链评级月报_2018年第一期.pdf" target="_blank">
            <!-- 评级白皮书 1.0 下载 -->
          {{ $t("ratings.bpsxz")}}</a>
          <p class="title_email">{{ $t("ratings.lxwm")}}</p>
        </div>
      </div>
    </div>
    <div class="banner" v-else>
      <div class="content">
        <div class="insti_title">
          <h2 class="title1">
            <!-- 独立、客观的区块链项目风险评估专家 -->
            {{ $t("ratings.title")}}</h2>
          <p class="title_des">
            <!-- FINWEX 评级致力于促进区块链技术长远健康发展，通过公正、客观的评级体系和独立、专业的智库团队，为市场参与者揭示区块链项目中的各类风险；同时致力于研究区块链技术风险特征，为行业发展和政策制定提供参考，为区块链技术服务于社会经济的进步发展做出贡献。 -->
            {{ $t("ratings.titledes")}}</p>
          <a href="/download/区块链评级月报_2018年第一期.pdf" target="_blank">
            <!-- 评级白皮书 1.0 下载 -->
          {{ $t("ratings.bpsxz")}}</a>
          <p class="title_email">{{ $t("ratings.lxwm")}}</p>
        </div>
      </div>
    </div>
    <div class="ratings-method">
      <div class="text">
        <!-- 评级方法 -->
        <h2>{{ $t("ratings.pjff")}}</h2>
        <!-- FINWEX 评级模型采用定量与定性结合的方式，根据风险来源将区块链项目风险分为内部风险和外部风险，对项目技术设计、必要性与竞争力、实现路径、项目治理、宏观环境等多维因素进行综合评估，基于历史回溯检验结果锚定初步评级，再通过其他风险因素调整得出最终评级结果。 -->
        <p v-if="isEnglish" class="pEn">{{ $t("ratings.pjmx")}}</p>
        <!-- FINWEX 评级模型采用定量与定性结合的方式，根据风险来源将区块链项目风险分为内部风险和外部风险，对项目技术设计、必要性与竞争力、实现路径、项目治理、宏观环境等多维因素进行综合评估，基于历史回溯检验结果锚定初步评级，再通过其他风险因素调整得出最终评级结果。 -->
        <p v-else>{{ $t("ratings.pjmx")}}</p>
      </div>
      <img src="/images/finwise/group5En.png" alt="" v-if="isEnglish">
      <img src="/images/finwise/group5.png" alt="" v-else>
    </div>
     <div class="ratings-moon">
      <h2>
        <!-- 报告速递 -->
        {{ $t("ratings.bgsd")}}</h2>
      <div class="download-moon">
        <span>
          <!-- 《区块链评级月报》2018年第一期.pdf -->
          {{ $t("ratings.pjyb")}}</span>
        <a href="/download/区块链评级月报_2018年第一期.pdf" target="_blank">
          <img src="../assets/img/blue_download.jpg" alt="">
        </a>
      </div>

      <div class="announcement">
        
        <div class="table">
          <h2>
            <!-- 评级公告 -->
            {{ $t("ratings.pjgg")}}</h2>
          <ul class="thEn" v-if="isEnglish">
            <li class="project-name">
              <!-- 项目名称 -->
              {{ $t("ratings.xmmc")}}</li>
            <li class="project-type">
              <!-- 类型 -->
              {{ $t("ratings.xmlx")}}</li>
            <li class="level">
              <!-- 评级 -->
              {{ $t("ratings.pj")}}</li>
            <li class="outlook">
              <!-- 展望 -->
              {{ $t("ratings.zw")}}</li>
            <li class="updated_time">
              <!-- 更新时间 -->
              {{ $t("ratings.gxsj")}}</li>
              <!-- 下载 -->
            <!-- <li class="download">{{ $t("ratings.xz")}}</li> -->
          </ul>
          <ul class="th" v-else>
            <li class="project-name">
              <!-- 项目名称 -->
              {{ $t("ratings.xmmc")}}</li>
            <li class="project-type">
              <!-- 类型 -->
              {{ $t("ratings.xmlx")}}</li>
            <li class="level">
              <!-- 评级 -->
              {{ $t("ratings.pj")}}</li>
            <li class="outlook">
              <!-- 展望 -->
              {{ $t("ratings.zw")}}</li>
            <li class="updated_time">
              <!-- 更新时间 -->
              {{ $t("ratings.gxsj")}}</li>
            <!-- 下载 -->
            <!-- <li class="download">{{ $t("ratings.xz")}}</li> -->
          </ul>
            <!-- 英文版 -->
          <div v-if="isEnglish" class="tdEn">
            <ul class="td"  v-for="val in ratingsEn" :key="val">
              <li class="project-name"><img class="coin_logo" :src="val.coin_icon" alt=""><span class="project-name-text">{{val.project_name}}</span></li>
              <li class="project-type">{{val.project_type}}</li>
              <li class="level">{{val.level}}</li>
              <li class="outlook">{{val.outlook}}</li>
              <li class="updated_time">{{val.updated_time}}</li>
              <!-- <li class="download"><a :href="val.report_url"><img  class="download-but" src="../assets/img/download_gray.png" alt=""></a></li> -->
              <span class="line"></span>
            </ul>
          </div>
            <!-- 中文版 -->
          <div v-else>
            <ul class="td"   v-for="val in ratings" :key="val">
              <li class="project-name"><img class="coin_logo" :src="val.coin_icon" alt=""><span class="project-name-text">{{val.project_name}}</span></li>
              <li class="project-type">{{val.project_type}}</li>
              <li class="level">{{val.level}}</li>
              <li class="outlook">{{val.outlook}}</li>
              <li class="updated_time">{{val.updated_time}}</li>
              <!-- <li class="download"><a :href="val.report_url"><img  class="download-but" src="../assets/img/download_gray.png" alt=""></a></li> -->
              <span class="line"></span>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 返回顶部 -->
    <scrollTop></scrollTop>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import scrollTop from '../components/goTop';
import RatingsList from "../components/Ratings/RatingsList";
import AboutRatings from "../components/Ratings/AboutRatings";
export default {
  head: {
    title: "FINWEX RATINGS 区块链评级 - 独立、客观的区块链项目风险评估专家"
  },
  layout: "ratings",
  async asyncData(ctx) {
    ctx.store.commit("changeUrl", ctx.route.name);
    let ratings = await ctx.$axios.get("/api/ratings?type=1");
    let ratingsEn = await ctx.$axios.get("/api/ratings?type=2");
    return {
      ratings: ratings.data.data,
      ratingsEn: ratingsEn.data.data
    };
  },
  components: {
    AboutRatings,
    RatingsList,
    scrollTop
  },
  computed: {
    ...mapGetters("app", ["isEnglish"])
  },
  watch: {
    isEnglish: function(curState,oldState){
      //英文
      if (curState) {
        document.title ="FINWEX LABS - One-stop incubation & eco-integration platform"
      } else {
        document.title ="FINWEX RATINGS 区块链评级 - 独立、客观的区块链项目风险评估专家"
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@style/variables";
//PC端样式
.container {
  min-width: 1110px;
  margin-bottom: -200px;
}
.relative {
  position: relative;
}
.margintop20 {
  margin-top: 20px;
}
.banner {
  width: 100%;
  min-width: 1110px;
  background: url(../assets/img/bkg_institute.jpg);
  height: 670px;
  margin: 0 auto;
  padding-top: 0;
  background-position: center;
  overflow: hidden;
}
.bannerEn {
  width: 100%;
  min-width: 1110px;
  background: url(../assets/img/bkg_institute.jpg);
  height: 670px;
  margin: 0 auto;
  padding-top: 0;
  background-position: center;
  overflow: hidden;
  .content .insti_title a{
    margin-top:40px;
  }
  .content .insti_title .title_email{
      font-size: 16px;
      margin: 16px auto;
    }
}
.content {
  padding: 20px 0 80px;
  margin: 0 auto;
  width: 1080px;
  margin-top: 100px;
  .insti_title {
    margin-bottom: 80px;
    display: inline-block;
    width: 1080px;
    margin: 0 auto;
    h2 {
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 40px;
      color: #ffffff;
      letter-spacing: 5px;
      font-weight:550;
    }
    .title1En {
      letter-spacing: 2px;
      line-height: 50px;
    }
    p {
      font-size: 18px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      line-height: 26px;
      font-weight: lighter;
      width: 800px;
      margin: 51px auto;
    }
    .title_email {
      font-size: 16px;
      margin: 76px auto;
    }
    a {
      background: #88acff;
      border-radius: 15px;
      text-align: center;
      display: block;
      margin: 0 auto;
      width: 230px;
      height: 30px;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 30px;
      margin-top: 57px;
      text-decoration: none;
    }
  }
}
.ratings-method {
  width: 1000px;
  background: #ffffff;
  -webkit-box-shadow: 0 10px 30px 0 rgba(113, 163, 246, 0.22);
  box-shadow: 0 10px 30px 0 rgba(113, 163, 246, 0.22);
  border-radius: 8px;
  margin: 0 auto;
  padding: 32px;
  position: relative;
  bottom: 140px;
  height: 240px;
  .text {
    float: left;
    h2 {
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #42505c;
      //letter-spacing: 3.89px;
      line-height: 36px;
    }
    p {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #42505c;
      letter-spacing: 1.75px;
      margin-top: 10px;
      line-height: 24px;
      width: 480px;
    }
    .pEn {
      letter-spacing: 0;
    }
  }

  img {
    height: 240px;
    float: right;
  }
}
.ratings-moon {
  padding: 24px 0 80px;
  margin: 10px auto 0px;
  width: 880px;
  position: relative;
  bottom: 100px;
  h2 {
    font-size: 24px;
    color: #42505c;
  }
  .download-moon {
    width: 880px;
    margin: 20px auto 0;
    span {
      font-family: PingFangSC-Medium;
      font-size: 14px;
      line-height: 36px;
      color: #42505c;
      letter-spacing: 0;
      margin-left: 20px;
    }
    a {
      img {
        width: 20px;
        height: 20px;
        margin-top: 7px;
        margin-right: 20px;
      }
      float: right;
    }
  }
  .download-moon:hover {
    background: #ffffff;
    box-shadow: 0 2px 6px 0 rgba(136, 172, 255, 0.2);
    border-radius: 10px;
  }
}
.announcement {
  padding: 24px 0 80px;
  margin: 30px auto;
  width: 880px;
  .table {
    width: 920px;
    margin: 30px auto 0;

    .th,.thEn {
      font-size: 16px;
      color: #a5b7c4;
      line-height: 30px;
    }

    ul {
      margin-top: 10px;
      list-style: none;
      li {
        display: inline-table;
      }
      .project-name {
        width: 205px;
        text-align: center;
        .coin_logo {
          width: 24px;
          height: 24px;
          float: left;
        }
        .project-name-text {
          line-height: 26px;
          margin-left: 10px;
        }
      }
      .project-type {
        width: 130px;
        text-align: center;
      }
      .level {
        width: 120px;
        text-align: center;
      }
      .outlook {
        width: 120px;
        text-align: center;
      }
      .updated_time {
        width: 160px;
        text-align: center;
      }
      .download {
        width: 200px;
        text-align: center;
        .download-but {
          width: 20px;
          height: 20px;
        }
      }
    }
    .line {
      width: 710px;
      border: 1px solid #eaeaea;
      display: block;
      margin-top: 10px;
      margin-right: 40px;
    }

    .th li {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #a5b7c4;
      text-align: left;
      display: inline-table;
      //margin: 10px 50px 0px 50px;
    }
    .thEn li {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #a5b7c4;
      text-align: left;
      display: inline-table;
      //margin: 10px 50px 0px 50px;
    }
    .td li {
      display: inline-table;
      //margin: 10px 50px 0px 10px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #42505c;
      text-align: left;
      height: 24px;
      .coin_logo {
        width: 24px;
        height: 24px;
        float: left;
      }
      span {
        line-height: 26px;
        margin-left: 10px;
      }
      .download-but {
        width: 20px;
        height: 20px;
      }
    }
    .td {
      .download {
        padding-left: 20px;
        width: 160px;
      }
    }

    .date_time {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #8d99a4;
    }
  }
}

#summit-preview {
  //移动端样式
  @media screen and (max-width: @device-width-mobile) {
    min-width: 100%;
    &.container {
      margin-bottom: -50px !important;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        padding: 0;
        margin: 0;
      }
    }
    .banner {
      text-align: center;
      min-width: 0;
      background: url("/images/mobile_img/banner_bg.jpg") no-repeat;
      background-size: cover;
      height: 10.45411rem;
      .content {
        width: 100%;
        margin-top: 0;
        padding: 0;
        .insti_title {
          width: 90%;
          margin: 2.28502rem auto auto auto;
          width: 6rem;
          .title1 {
            font-family: PingFangSC-Semibold;
            font-size: 0.55rem;
            color: #ffffff;
            letter-spacing: 0.05556rem;
            line-height: 36px;
          }
          .title_des {
            font-family: PingFangSC-Regular;
            font-size: 0.28rem;
            color: #f3f6ff;
            letter-spacing: 0;
            margin: 25px auto;
            line-height: 22px;
          }
          a {
            margin-top: 0;
          }
          h2 {
            font-size: 0.6rem;
            line-height: 45px;
          }
          p {
            width: 100%;
          }
        }
      }
    }
    .bannerEn {
      text-align: center;
      min-width: 0;
      background: url("/images/mobile_img/banner_bg.jpg") no-repeat;
      background-size: cover;
      height: 10.45411rem;
      .content {
        width: 100%;
        margin-top: 0;
        padding: 0;
        .insti_title {
          width: 90%;
          margin: 0.8rem auto auto auto;
          width: 6rem;
          .title1 {
            font-family: PingFangSC-Semibold;
            font-size: 0.45rem;
            color: #ffffff;
            letter-spacing: 0;
            line-height: 36px;
          }
          .title_des {
            font-family: PingFangSC-Regular;
            font-size: 0.28rem;
            color: #f3f6ff;
            letter-spacing: 0;
            margin: 25px auto;
            line-height: 20px;
          }
          a {
            margin-top: 0;
          }
          h2 {
            font-size: 0.6rem;
            line-height: 45px;
          }
          p {
            width: 100%;
          }
        }
      }
    }
    .ratings-method {
      width: 6.5rem;
      height: 100%;
      position: relative;
      bottom: 90px;
      padding: 30px 0;
      text-align: center;
      .text {
        float: none;
        text-align: center;
        p {
          font-family: PingFangSC-Regular;
          font-size: 0.3rem;
          color: #42505c;
          letter-spacing: 0.04227rem;
          width: 6rem;
          //line-height: 0.57971rem;
          //width: 6.5rem;
          margin: 0.19324rem auto 0.50725rem auto;
        }
        .pEn {
          letter-spacing: 0;
          line-height: 22px;
        }
      }
      img {
        float: none;
        width: 6rem;
        height: 100%;
      }
    }
    .ratings-moon {
      text-align: center;
      padding: 0 0 80px;
      width: 100%;
      bottom: 0;
      .download-moon {
        font-family: PingFangSC-Medium;
        font-size: 0.33816rem;
        color: #42505c;
        letter-spacing: 0;
        line-height: 0.86957rem;
        width: 100%;
        margin: 0 auto;
        background: #ffffff;
        box-shadow: 0 0.0161rem 0.04831rem 0 rgba(136, 172, 255, 0.2);
        border-radius: 0.24155rem;
        text-align: left;
      }
      .announcement {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 20px auto;
        .table {
          margin: 0;
          width: 100%;
          .th {
            font-family: PingFangSC-Medium;
            font-size: 0.28986rem;
            color: #a5b7c4;
            text-align: left;
            padding-left: 29px;
            li {
              width: 0.5rem;
              font-size: 12px;
            }
            .project-name {
              width: 2.2rem;
            }
            .project-type {
              width: 0.8rem;
            }
            .level {
              width: 1.1rem;
            }
            .outlook {
              width: 1rem;
            }
            .updated_time {
              width: 1.4rem;
            }
          }
          .thEn {
            font-family: PingFangSC-Medium;
            font-size: 0.28986rem;
            color: #a5b7c4;
            text-align: left;
            li {
              width: 0.5rem;
              font-size: 12px;
            }
            .project-name {
              width: 2.2rem;
              padding-left:.2rem;
            }
            .project-type {
              width: 1.5rem;
              text-align: left;
            }
            .level {
              width: 1.1rem;
            }
            .outlook {
              width: 1rem;
            }
            .updated_time {
              width: 1rem;
            }
          }
          .line {
            margin-top: 0;
          }
          .td {
            margin-top: 0;
            text-align: left;
            position: relative;
            padding-left: 5px;
            li {
              width: auto;
              height: auto;
              font-size: 0.2rem;
              .coin_logo {
                width: 15px;
                height: 15px;
                position: absolute;
                top: 25%;
              }
              .download-but {
                width: 15px;
                height: 12px;
              }
            }
            .project-name {
              width: 2.7rem;
              span {
                padding-left: 15px;
              }
            }
            .project-type {
              width: 0.8rem;
            }
            .level {
              width: 1rem;
            }
            .outlook {
              width: 1rem;
            }
            .updated_time {
              width: 1.5rem;
            }
          }
          .tdEn {
            .td {
            margin-top: 0;
            text-align: left;
            position: relative;
            padding-left: 5px;
            li {
              width: auto;
              height: auto;
              font-size: 0.2rem;
              .coin_logo {
                width: 15px;
                height: 15px;
                position: absolute;
                top: 25%;
              }
              .download-but {
                width: 15px;
                height: 12px;
              }
            }
            .project-name {
              width: 2.4rem;
              span {
                padding-left: 15px;
              }
            }
            .project-type {
              width: 1.5rem;
            }
            .level {
              width: 1rem;
            }
            .outlook {
              width: 1rem;
            }
            .updated_time {
              width: 1.5rem;
            }
          }
          }
          .td:nth-of-type(even) {
            background-color: rgba(0, 0, 0, 0.05);
          }
        }
      }
    }
    .announcement {
      padding: .3rem 0 0;
    }
  }
}
</style>
