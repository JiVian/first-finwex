<template>
  <chart :options="polar"/>
</template>

<script>
  import Chart from 'vue-echarts'
  export default {
    props: ['polar'],
    components: {
      chart: Chart
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
.echarts{
  width:675px;
  height:330px;
}

</style>
