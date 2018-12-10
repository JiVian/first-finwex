<template>
  <section class="container">
    <div class="container-fluid banner">
      <div class="banner-con">
        <h1>
          <!-- 关于纷睿 -->
          {{ $t('about.title3')}}</h1>
           <!-- FINWEX纷睿致力于成为全球金融科技及区块链的领导咨询企业和智库领袖之一， -->
         <!-- 旗下涵盖全球顶尖金融科技系列峰会FINWEX SUMMIT、区块链智库FINWEX INSTITUTE、指数FINWEX INDEX、评级FINWEX RATINGS、孵化器FINWEX LABS、资讯平台FINWEX VOICE，以及咨询、培训业务等。 -->
        <p>{{ $t('about.des3')}}<br>
         <!-- 纷睿团队由经验丰富的金融和区块链行业专家团队组成，核心成员均来自顶级金融机构、区块链、咨询、评级及互联网公司。 -->
        {{ $t('about.des4')}}</p>
        <img src="../assets/img/about_finwex.png">
      </div>
    </div>
    <div class="content">
      <div class="about_title">
        <img src="../assets/img/insti_line.png">
        <div>
          <h2>{{ $t('about.team')}}</h2>
          <!-- <span>THE CORE TEAM</span> -->
        </div>
        <img src="../assets/img/insti_line.png">
      </div>
      <!-- pc端英文版 -->
      <div class="about_rowEn" v-if="isEnglish">
        <div v-for="personnel in coreTeamEn" class="row11">
          <img :src="personnel.img_url" class="face">
          <div class="font">
            <div>
              <h3>{{personnel.name}}</h3>
              <p>{{personnel.position}}</p>
              <span>
						  {{personnel.detail}}
						</span>
            </div>
          </div>
        </div>
      </div>
      <!-- pc端中文 -->
      <div class="about_row" v-else>
        <div v-for="personnel in coreTeam" class="row11">
          <img :src="personnel.img_url" class="face">
          <div class="font">
            <div>
              <h3>{{personnel.name}}</h3>
              <p>{{personnel.position}}</p>
              <span>
						  {{personnel.detail}}
						</span>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="about_title title2">
        <img src="../assets/img/insti_line.png">
        <div>
          <h2>
            <!-- 投资人及重要合作伙伴 -->
            {{ $t('about.partner')}}</h2>
          <!-- <span>THE INVESTOR & PARTNERS</span> -->
        </div>
        <img src="../assets/img/insti_line.png">
      </div>
       <!-- pc端英文版 -->
      <div class="about_rowEn margintop40 about_center" v-if="isEnglish">
        <div v-for="per in nvestmenterEn" >
          <img :src="per.img_url" class="face">
          <div class="font">
            <div>
              <h3>{{per.name}}</h3>
              <p>{{per.position}}</p>
              <span>
					    {{per.detail}}
						</span>
            </div>
          </div>
        </div>
      </div>
      <!-- pc端中文 -->
      <div class="about_row margintop40 about_center" v-else>
        <div v-for="per in nvestmenter" >
          <img :src="per.img_url" class="face">
          <div class="font">
            <div>
              <h3>{{per.name}}</h3>
              <p>{{per.position}}</p>
              <span>
					    {{per.detail}}
						</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 返回顶部 -->
    <scrollTop></scrollTop>
  </section>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import scrollTop from '../components/goTop'
export default {
  head() {
    return {
      title: this.$t('about.aboutTitle')
    }
  },
  layout: 'about',
  components: {
    scrollTop
  },
  async asyncData(ctx) {
    ctx.store.commit('changeUrl', ctx.route.name)
    let coreTeam = await ctx.$axios.get('/api/personnel?type=1')
    let coreTeamEn = await ctx.$axios.get('/api/personnel?type=5')
    let nvestmenter = await ctx.$axios.get('/api/personnel?type=2')
    let nvestmenterEn = await ctx.$axios.get('/api/personnel?type=6')
    return {
      coreTeam: coreTeam.data.data,
      coreTeamEn: coreTeamEn.data.data,
      nvestmenter: nvestmenter.data.data,
      nvestmenterEn: nvestmenterEn.data.data
    }
  },
  computed: {
    ...mapGetters("app", ["isEnglish"]),
  },
}
</script>

<style lang="less" scoped>
@import "~@style/variables";
@import "~@style/summit/ratings";
//PC端
.banner{
  width: 100%;
  min-width: 1110px;
  background: url(../assets/img/bkg_institute.jpg);
  height: 670px;
  margin: 0 auto;
  padding-top: 12px;
  background-position: center;
  >div{
    margin: 0 auto;
    width: 1080px;
    color: #fff;
    text-align: center;
  }
  p{
    color: #fff;
    width: 778px;
    margin: 40px auto 0;
    font-size: 18px;
    line-height: 28px;
    font-weight: lighter;
    text-align: left;
  }
  h1{
    margin-top: 120px;
    font-size: 50px;
    color: #fff;
  }
  h2{
    margin-top: 30px;
    font-size: 32px;
  }
  img{
    width: 470px;
    position: relative;
    top: 60px;
  }
}
.content{
    text-align:center;
  }
.content{
  padding: 24px 0 80px;
  margin: 0 auto;
  width: 1080px;
  .about_title {
    text-align: center;
    margin-top: 50px;

    h2 {
      line-height: 40px;
      font-size: 30px;
      color:#8D89B9;
    }

    img{
      width: 140px;
      display: inline-block;
      position: relative;
      bottom: 7px;
    }

     >div{
      display: inline-block;
      margin-right: 20px;
      margin-left: 20px;
    }

     h2{
      margin-bottom: 0;
    }

    span{
      font-size: 24px;
      color: #8D89B9;
    }
  }

  .about_row,.about_rowEn{
    margin-top: 40px;
    display: inline-block;
    color: #42505c;
    >div{
      height:500px;
    }
    .font{
      margin-top: 8px;
      h3 {
        font-size: 19px;
        line-height: 21px;
        font-weight: 600;
      }
      p {
        font-size: 16px;
        line-height: 22px;
        margin: 0 0 10px;
      }
      span{
        line-height: 17px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #363636;
        letter-spacing: 0;
        display: block;
        text-align:left;
      }
    }
  }
  .about_rowEn{
    >div{
      height:580px;
    }
  }
  .about_row >div{
    float: left;
    width: 240px;
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
  }
  .about_rowEn >div{
    float: left;
    width: 240px;
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
  }
 .about_row >div >img{
    width: 240px;
  }
  .about_rowEn >div >img{
    width: 240px;
  }
  .clear{
    clear:both;
  }
}
//移动端

</style>
