<template>
<div id="finwex-home" class="content">
  <nuxt/>
  <CommonFooter class="transparent">
    <!-- 页脚 LOGO 位置-->
    <div class="partner-title"
      slot="logo">
      <!-- 合作伙伴 -->
      {{ $t('links.partners') }}
    </div>
  </CommonFooter>
</div>
</template>

<script>
  import CommonFooter from '../components/common/CommonFooter.vue'
  export default {
    components: {
      CommonFooter
    },
    head: {
      script: [{
        src: '/responsive.min.js'
      }]
    },
    data() {
      return {
        wechat: false
      }
    },
    methods: {
      mouseover(type) {
        this[type] = true
        console.log(1111)
      },
      mouseout(type) {
        this[type] = false
      }
    }
  }
</script>

<style lang="less">
@import "~@style/variables";

#finwex-home {
  min-height: 800px;
  min-width: 1080px;
  height: 100%;
  width: 100%;
  // background-image: url(../assets/img/background_home.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;

  &.content{
    margin: 0 auto;
    padding-top: 150px;
    text-align: center;
  }

  .partner-title {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    line-height: 25px;
  }
}

@media screen and (max-width: @device-width-mobile) {
  #finwex-home {
    min-width: 100%;

    &.content {
      padding-top: 95px;
    }
  }
}
</style>
