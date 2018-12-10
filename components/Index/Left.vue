<template>
  <div class="left">
    <index-chart/>
    <report/>
  </div>
</template>

<script>
  import IndexChart from './IndexChart'
  import Report from './Report'
  export default {
    components: {
      IndexChart,
      Report
    }
  }
</script>

<style scoped>
  .left{
    width: 714px;
    display: inline-block;
  }
</style>
