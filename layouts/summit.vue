<template>
  <div :class="['layout-summit', 'layout', locale]">
    <CommonHeader>
      <div class="logo finwise-summit"
        slot="logo">
        Finwise Summit
      </div>
    </CommonHeader>
    <nuxt />
    <CommonFooter hide-partners>
      <!-- 页脚 LOGO -->
      <div class="logo finwex"
        slot="logo">
        Finwex
      </div>
      <!-- 指向 Finwise 独立的 Facebook 页面 -->
      <li class="contact-item" slot="facebookLink">
        <a href="https://www.facebook.com/FinwiseOffical/" target="_blank">
          <img src="../assets/img/icon-contacts/icon-facebook.png" alt="">
        </a>
      </li>
    </CommonFooter>
  </div>
</template>

<script>
  // 大会页面
  import { mapState } from 'vuex'
  import CommonHeader from '../components/common/CommonHeader.vue'
  import CommonFooter from '../components/common/CommonFooter.vue'
  export default {
    components: {
      CommonHeader,
      CommonFooter
    },
    head: {
      script: [{
        src: '/responsive.min.js'
      }]
    },
    computed: {
      ...mapState('app', [
        'locale'
      ])
    }
  }
</script>

<style lang="less">

</style>
