<template>
  <chart :options="polar"/>
</template>

<script>
//f20饼状图
  import Chart from 'vue-echarts'
  export default {
    props: [
      'balance',
      'assets'
    ],
    components: {
      chart: Chart
    },
    data() {
      return {
        polar: {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
           orient: "vertical",
           //x: "left",
           left: 350,
           data: [
             "bitcoin",
              "ethereum",
              "ripple",
              "bitcoin-cash",
              "eos",
              "stellar",
              "litecoin",
              "cardano",
              "iota",
              "monero",
              "tron",
              "dash",
              "ethereum-classic",
              "neo",
              "binance-coin",
              "vechain",
              "nem",
              "tezos",
              "zcash",
              "omisego"
            ]
          },
          series: [
            {
              name: "详细数据",
              type: "pie",
              radius: ["50%", "70%"],
              center: [150, 120],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: "bold"
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { name: "bitcoin", value: 120105697776 },
                { name: "ethereum", value: 28345064605 },
                { name: "ripple", value: 13106477064 },
                { name: "bitcoin-cash", value: 9306186052 },
                { name: "eos", value: 5632222781 },
                { name: "stellar", value: 4092379418 },
                { name: "litecoin", value: 3463128709 },
                { name: "cardano", value: 2591511815 },
                { name: "iota", value: 1927506967 },
                { name: "monero", value: 1772279599 },
                { name: "tron", value: 1622393828 },
                { name: "dash", value: 1538285929 },
                { name: "ethereum-classic", value: 1326775818 },
                { name: "neo", value: 1261279500 },
                { name: "binance-coin", value: 1023836940 },
                { name: "vechain", value: 942142671 },
                { name: "nem", value: 924506999 },
                { name: "tezos", value: 815074121 },
                { name: "zcash", value: 677743142 },
                { name: "omisego", value: 584378732 }
              ]
            }
          ],
          color:[
          '#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae',
          '#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570',
          '#c4ccd3','#92CBF1','#6BCCD8','#B15D3F','#9AEBC5',
          '#EFB45D','#7BCC97','#F3CBBF','#9AA6BF']
        }
      }
    }
  }
</script>

<style scoped>
  .echarts{
    width:600px;
    height: 300px;
  }
</style>
