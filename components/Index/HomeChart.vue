<template>
  <div class="chart">
    <!-- <div class="title" v-bind:style="{ 'border-bottom': 2 +'px solid' + index_data.color }">
      {{index_data.title}}
    </div> -->
    <!-- <div class="top">
      <div class="bannertxt" v-if="index_data.indexDetail.rise">
        <h2>{{index_data.indexDetail.nowIndex}}</h2>
        <h3 class="up"  style="color:#2BCAA6">
          +{{index_data.indexDetail.rate}}%
        </h3> -->
        <!--<img class="banner_arrow" src="../../assets/img/arrow_g.png">-->
      <!-- </div>
      <div v-else class="bannertxt"  >
        <h2>{{index_data.indexDetail.nowIndex}}</h2>
        <h3 class="down" style="color:#FF3D58">
          -{{index_data.indexDetail.rate}}%
        </h3> -->
        <!--<img class="banner_arrow" src="../../assets/img/arrow_r.png">-->
      <!-- </div>
    </div> -->

    <div class="chart-frame">
      <div class="data-zoom">
        <div class="zoom-name">
          Zoom:
        </div>
        <div class="zoom-item" v-on:click="change('1d')" v-bind:class="{select:type_select=='1d'}">
          1d
        </div>
        <div class="zoom-item" v-on:click="change('7d')" v-bind:class="{select:type_select=='7d'}">
          7d
        </div>
        <div class="zoom-item" v-on:click="change('1m')" v-bind:class="{select:type_select=='1m'}">
          1m
        </div>
        <div class="zoom-item"  v-on:click="change('all')" v-bind:class="{select:type_select=='all'}">
          All
        </div>
      </div>
      <echart v-bind:polar="polar"/>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import moment from 'moment'
  import Echart from './EChart'
  export default {
    components: {Echart},
    created() {
      this.$store.dispatch('changeIndex', { index_type: 'finwex20', type: this.type_select })
    },
    computed: mapState({
      index_data: state => state.index_data,
      polar: state => {
        let p = {
          //提示框设置
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line'
            },
            //backgroundColor:'rgba(255,255,255,0.90)',
            // textStyle:{
            //   color:'#484A4F'
            // }  
          },
          xAxis: {
            axisLine: {
              show: false,
              lineStyle:{
                color:'#BEC7D0'
              }
            },
            scale: true,
            boundaryGap: false,
            data: [],
            //x轴刻度颜色
            axisLabel:{
              color:'#BEC7D0'
            },
            //图中网格线的虚线设置
            splitLine:{
              lineStyle:{
                type:'dashed'
              }
            }
          },
          dataZoom: [{
            show: true,
            type: 'inside',
            start: 50,
            end: 100
          }],
          grid: {
            top: '5%',
            left: '2%',
            right: '2%',
            bottom: '0%',
            containLabel: true
            // show: true,
            // backgroundColor: '#ffffff'
          },
          yAxis: {
            axisLine: {
              show: false,
              lineStyle:{
                color:'#BEC7D0'
              }
            },
            scale: true,
            splitArea: {
              show: false
            },
            axisLabel:{
              color:'#BEC7D0'
            },
            splitLine:{
              lineStyle:{
                type:'dashed'
              }
            }
          },
          series: [{
            name: '',
            smooth: false,
            symbol: 'none',
            type: 'line',
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#F12C8D'
                }
              }
            },
            lineStyle:{
              color:'#F12C8D'
            },
          }]
        }
        if (state.index_data.data) {
          for (let val of state.index_data.data) {
            let t = moment(val.time).format('YY-MM-DD hh:mm:ss')
            p.xAxis.data.push(t)
            p.series[0].data.push(val.value)
            p.series[0].name = state.index_data.title
            //p.series[0].itemStyle.normal.lineStyle.color = state.index_data.color
          }
        }
        return p
      }
    }),
    async mounted() {
    },
    methods: {
      change(type, obj) {
        console.log(obj)
        this.$store.dispatch('changeIndex', { type: type, index_type: this.index_data.indexType })
        this.type_select = type
      }
    },
    data() {
      return {
        type_select: '7d',
        new_index: 0,
        rate: 0,
        polar1: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line'
            }
          },
          xAxis: {
            axisLine: {
              show: false
            },
            scale: true,
            boundaryGap: false,
            data: []
          },
          dataZoom: [ {
            show: true,
            type: 'inside',
            start: 50,
            end: 100
          } ],
          grid: {
            top: '5%',
            left: '0%',
            right: '2%',
            bottom: '5%',
            containLabel: true
          },
          yAxis: {
            axisLine: {
              show: false
            },
            scale: true,
            splitArea: {
              show: true
            }
          },
          series: [{
            name: '',
            smooth: false,
            symbol: 'none',
            type: 'line',
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#F12C8D'
                }
              }
            },
            lineStyle:{
              color:'#F12C8D'
            }
          }]
        },
        animationDuration: 2000
      }
    }
  }
</script>

<style lang="scss" scoped>
  $width:900px;
//PC端
 .chart{
    height: 230px;
    width: $width;
    background: #fff;
    padding: 20px 20px 0 20px;
  }

  .chart h2{
    font-size: 30px;
    margin-top: 0;
  }
  .top{
    height:47px;
    .bannertxt{
      width: 300px;
      height:47px;
    }
    h2{
      float: left;
      font-family: DINAlternate-Bold;
      font-size: 40px;
      color: #42505C;
      letter-spacing: 0;
      text-align: center;
    }
    h3{
      float: left;
      height:24px;
      margin: 15px 0px 0px 10px;
      font-family: DINAlternate-Bold;
      font-size: 20px;
      letter-spacing: 0;
      text-align: center;
    }
    img{
      margin: 15px 0px 0px 10px;
      width: 18px;
      height:23px;
      float: left;
    }
  }
  .chart-frame{
    position:relative;
    .data-zoom{
      width:265px;
      position:absolute;
      right:-7px;
      top:-24px;
    }
  }
  .title{
    //border-bottom: 2px solid #7259BD;
    font-size: 18px;
    padding-bottom: 4px;
    margin-bottom: 10px;
  }
  .chart p{
    color: #44525E;
    margin-bottom: 24px;
  }
  .kchart{
    width: 450px;
  }
  .banner_arrow{
    width: 20px;
    height :22px;
  }
  .data-zoom{
    width: 450px;
    height: 30px;
    .zoom-name{
      width: 44px;
      font-family: ArialMT;
      font-size: 12px;
      color: #8D99A4;
      float:left;
      line-height:30px;
    }
    .zoom-item{
      font-family: ArialMT;
      font-size: 12px;
      color: #8F9CA7;
      float:left;
      background: #F9F9F9;
      border-radius: 3px;
      margin-right: 25px;
      cursor:pointer;
      line-height:30px;
      text-align: center;
    }
    .select{
      background: #e4e4e4;
      width:30px;
      height:30px;
      font-family: Helvetica-Bold;
      font-weight:600;
      color: #2F2A3D;
    }
  } 
//移动端
@media screen and(max-width:414px){
  .chart{
    //height: 260px;
    background: #fff;
    padding: 20px 20px 0 20px;
  }

  .chart h2{
    font-size: 30px;
    margin-top: 0;
  }
  .top{
    height:47px;
    .bannertxt{
      width: 300px;
      height:47px;
    }
    h2{
      float: left;
      font-family: DINAlternate-Bold;
      font-size: 40px;
      color: #42505C;
      letter-spacing: 0;
      text-align: center;
    }
    h3{
      float: left;
      height:24px;
      margin: 15px 0px 0px 10px;
      font-family: DINAlternate-Bold;
      font-size: 20px;
      letter-spacing: 0;
      text-align: center;
    }
    img{
      margin: 15px 0px 0px 10px;
      width: 18px;
      height:23px;
      float: left;
    }
  }
 
  .title{
    //border-bottom: 2px solid #7259BD;
    font-size: 18px;
    padding-bottom: 4px;
    margin-bottom: 10px;
  }
  .chart p{
    color: #44525E;
    margin-bottom: 24px;
  }
  .kchart{
    width: 450px;
  }
  .banner_arrow{
    width: 20px;
    height :22px;
  }
  .chart-frame{
    position:relative;
    .data-zoom{
      width:7rem;     
      position:absolute;
      right:-7px;
      top:-23px;
      text-align: center;
    }
  }
  .data-zoom{
    height: 35px;
    .zoom-name{
      width: 44px;
      font-family: ArialMT;
      font-size: 12px;
      color: #8D99A4;
      float:left;
      line-height:30px;
      display:none;
    }
    .zoom-item{
      width:1.1rem;
      height:.5rem;
      line-height:.5rem;
      font-family: ArialMT;
      font-size: 12px;
      float:left;
      cursor:pointer;
      border:.5px solid #99A2BF;
      border-radius: 30px;
      color:#99A2BF;
      margin-left:.3rem;
      margin-right:.2rem;
      background-color: #fff;
    }
    .select{
      width:1.1rem;
      height:.5rem;
      font-family: Helvetica-Bold;
      font-weight:600;
      color: #3C4256;
      border: 1px solid #F12C8D;
      background-color: #fff;
    }
  }
} 
</style>
