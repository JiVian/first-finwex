<template>
  <section class="container">
    <banner/>
    <contents/>
  </section>
</template>

<script>
  import Banner from '../components/Index/Banner.vue'
  import Contents from '../components/Index/Contents.vue'
  export default {
    head: {
      title: 'FINWEX INDEX 区块链指数 - 实时多维反映区块链市场的整体动态'
    },
    components: {
      Banner,
      Contents
    },
    layout: 'index',
    asyncData(ctx) {
      ctx.store.commit('changeUrl', ctx.route.name)
    },
    async fetch({store, app}) {
      let res = await app.$axios.$get('/api/about_index?indexType=finwex20')
      store.commit('getAboutIndex', res)
    },
  }
</script>

<style scoped>

</style>
