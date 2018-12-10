<template>
  <div :class="['layout-finwex', 'layout', locale]">
    <CommonHeader>
      <div class="logo finwex"
        slot="logo">
        Finwise Index
      </div>
    </CommonHeader>
    <nuxt />
    <CommonFooter id="finwex">
      <div class="logo finwex"
        slot="logo">
        Finwex
      </div>
    </CommonFooter>
  </div>
</template>

<script>
  // 默认 Finwex 页面
  // TODO: 替代 layouts/default.vue
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
