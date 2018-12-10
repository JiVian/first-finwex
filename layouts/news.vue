<template>
  <div :class="['layout-news', 'layout', locale]">
    <CommonHeader>
      <div class="logo finwise-news"
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

<style scoped>

</style>
