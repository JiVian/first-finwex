<template>
  <chart :options="polar"/>
</template>

<script>
//综合性饼状图
import Chart from "vue-echarts";
export default {
  props: ["balance", "assets", "options"],
  components: {
    chart: Chart
  },
  data() {
    return {
      polar: this.options
    };
  }
};
</script>

<style scoped>
.echarts {
  width: 600px;
  height: 400px;
}
@media screen and (max-width:480px){
  .echarts {
    width: 360px;
    height: 430px;
  }
}
</style>
