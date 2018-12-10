<template>
  <div :class="['layout-labs', 'layout', locale]">
    <CommonHeader>
      <div class="logo finwex-labs"
        slot="logo">
        Finwise Labs
      </div>
    </CommonHeader>
    <nuxt />
    <CommonFooter hide-partners>
      <div class="logo finwex"
        slot="logo">
        Finwex
      </div>
    </CommonFooter>
  </div>
</template>

<script>
  // 孵化器页面
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
