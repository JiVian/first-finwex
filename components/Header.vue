<template>
  <header :class="url">
    <div class="logo">
      <img v-if="url==='about'" src="../assets/img/logo_finwex.png" class="logo_finwex" >
      <img v-if="url==='index'" src="../assets/img/logo.png" >
      <img v-if="url==='institute'" src="../assets/img/logo_institute.png" >
      <img v-if="url==='ratings'" src="../assets/img/logo_ratings.png" >
      <img v-if="url==='labs'" src="../assets/img/logo_labs.png" >
      <img v-if="url==='labs'" src="../assets/img/logo_labs.png" >
      <img v-if="url==='news'" src="../assets/img/logo_voice.png" >

    </div>

    <div class="navigation">
      <a class="item" href="/">首页</a>
      <nuxt-link class="item" to="/index">指数</nuxt-link>
      <nuxt-link class="item" to="/ratings">评级</nuxt-link>
      <nuxt-link class="item" to="/institute">智库 </nuxt-link>
      <nuxt-link class="item" to="/labs" >Labs</nuxt-link>
      <nuxt-link class="item" to="/about">关于我们</nuxt-link>
      <!--<div class="lang item">-->
        <!--<nuxt-link to="/cn">CN</nuxt-link>-->
        <!--/-->
        <!--<nuxt-link to="/en" >EN</nuxt-link>-->
      <!--</div>-->
    </div>
  </header>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'url'
      ]),
      ...mapGetters('app', [
        'isEnglish'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  $width : 1080px;
  .institute,.labs,.about,.ratings{
    width: 1080px;
    margin: auto;
    height: 80px;
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    .navigation{
      .item{
        color: #ffffff;
        a{
          color: #ffffff;
        }
      }
      .nuxt-link-exact-active{
        border-bottom: 3px solid #ffffff;
      }
    }
  }

  header{
    width: $width;
    margin: 0 auto;
    height: 80px;

    .logo{
      width:270px;
      padding:  23px 0px 23px 0px;
      float: left;
      img{
        height: 34px;
        width:270px;
      }
      .logo_finwex{
        width: 166px;
        height:34px;
      }
    }
    .navigation{
      float: right;
      height: 34px;
      padding:  23px 0px 23px 0px;
      text-align: center;

      .item{
        text-decoration: none;
        font-family: PingFangTC-Semibold;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        text-align: center;
        margin-left: 24px;
        display:inline-block;
        line-height:34px;
      }
      .lang{
          display: inline-block;
        a{
          color: #333;
          text-decoration: none;
          font-size: 12px;
        }

      }
    }
  }
  .nuxt-link-exact-active{
    border-bottom: 3px solid #333333;
  }

  @media (max-width: 600px) {
    header{
        .navigation{

        }
    }
  }


</style>
