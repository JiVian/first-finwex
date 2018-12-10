<template>
  <div :class="['layout-index', 'layout', locale]">
    <CommonHeader>
      <div class="logo finwex-index"
        slot="logo">
        Finwise Index
      </div>
    </CommonHeader>
    <nuxt />
    <CommonFooter
      hide-partners>
      <!-- 页脚 LOGO -->
      <div class="logo finwex finwex-home" slot="logo">
        Finwex
      </div>
    </CommonFooter>
  </div>
</template>

<script>
  // 指数页面
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
