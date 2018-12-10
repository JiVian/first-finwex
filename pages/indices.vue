<template>
  <div class="container">
    <!-- 背景 -->
      <!-- pc端 -->
    <div class="head-bg pc">
      <h1>FINWEX INDEX</h1>
      <p>
        <!-- 全球第一个区块链综合指数体系 -->
        {{ $t('index.banner1')}}</p>
    </div>
      <!-- 移动端 -->
    <div class="head-bgEn mb" v-if="isEnglish">
    </div>
    <div class="head-bg mb" v-else>
    </div>
    <!-- 内容部分 -->
    <div class="content">
      <div class="content-leftEn pc" v-if="isEnglish">
        <div class="num"  v-on:click="change('finwex11')" v-bind:class="{'numActive':selectIndex=='finwex11'}">
          <div class="num1-title">
            <h2>FCI</h2>
            <span>{{ banner.hedge.nowIndex }}</span>
            <span v-if="banner.hedge.rise" class="down-per"> {{ banner.hedge.rate }}%</span>
            <span v-else class="down-per">{{ banner.hedge.rate }}%</span>
          </div>
          <p>
            <!-- Finwex Composite Index - 纷睿综合指数，包含全球通证交易所挂牌交易的1000多种通证。 -->
            {{ $t("index.fci")}}</p>
        </div>
        <div class="num"  v-on:click="change('finwex20')" v-bind:class="{'numActive':selectIndex=='finwex20'}">
          <div class="num1-title">
            <h2>FWX20</h2>
            <span>{{ banner.synthesis.nowIndex }}</span>
            <span v-if="banner.synthesis.rise" class="up-per">{{ banner.synthesis.rate }}%</span>
            <span v-else class="down-per">{{ banner.synthesis.rate }}%</span>
          </div>
          <p>
            <!-- FINWEX20 - 纷睿20指数，由流通市值前20的大通以市值加权法构成，反映区块链核心市场价格水平。 -->
            {{ $t("index.f20")}}</p>
        </div>
      </div>
      <div class="content-left pc" v-else>
        <div class="num"  v-on:click="change('finwex11')" v-bind:class="{'numActive':selectIndex=='finwex11'}">
          <div class="num1-title">
            <h2>FCI</h2>
            <span>{{ banner.hedge.nowIndex }}</span>
            <span v-if="banner.hedge.rise" class="down-per"> {{ banner.hedge.rate }}%</span>
            <span v-else class="down-per">{{ banner.hedge.rate }}%</span>
          </div>
          <p>
            <!-- Finwex Composite Index - 纷睿综合指数，包含全球通证交易所挂牌交易的1000多种通证。 -->
            {{ $t("index.fci")}}</p>
        </div>
        <div class="num"  v-on:click="change('finwex20')" v-bind:class="{'numActive':selectIndex=='finwex20'}">
          <div class="num1-title">
            <h2>FWX20</h2>
            <span>{{ banner.synthesis.nowIndex }}</span>
            <span v-if="banner.synthesis.rise" class="up-per">{{ banner.synthesis.rate }}%</span>
            <span v-else class="down-per">{{ banner.synthesis.rate }}%</span>
          </div>
          <p>
            <!-- FINWEX20 - 纷睿20指数，由流通市值前20的大通以市值加权法构成，反映区块链核心市场价格水平。 -->
            {{ $t("index.f20")}}</p>
        </div>
      </div>
      <div class="index-number">
        <div class="index-num1">
          <div class="num1"  v-on:click="change('finwex11')" v-bind:class="{'num2':selectIndex=='finwex11'}">
            <!-- 移动端标题 -->
            <h3 class="mb">FCI</h3>
          </div>
          <div class="num1"  v-on:click="change('finwex20')" v-bind:class="{'num2':selectIndex=='finwex20'}">
            <!-- 移动端标题 -->
            <h3 class="mb">FWX20</h3>
          </div>
        </div>
        <h4 class="mb" v-if="selectIndex === 'finwex20'">
          <!-- Finwex 20 — 纷睿20指数 -->
          {{ $t('index.f201')}}</h4>
        <h4 class="mb" v-if="selectIndex === 'finwex11'">
          <!-- Finwex Composite Index — 纷睿综合指数 -->
          {{ $t('index.fci1')}}</h4>
      </div>
      <div class="content-right pc">
        <div v-if="selectIndex === 'finwex11'" class="num2-title">
          <h2 class="pc">
            <!-- 纷睿综合指数 -->
            {{ $t('index.fci2')}}</h2>
          <span v-if="selectIndex === 'finwex11'">{{ banner.hedge.nowIndex }}</span>
          <span v-if="banner.hedge.rise" class="up-per">({{ banner.hedge.rise ? '+' : '-' }} {{ banner.hedge.rate }}%)</span>
          <span v-else class="down-per">({{ banner.hedge.rise ? '+' : '-' }} {{ banner.hedge.rate }}%)</span>
        </div>
        <div v-if="selectIndex === 'finwex20'" class="num2-title">
        <h2 class="pc">
          <!-- 纷睿20指数 -->
          {{ $t('index.f202')}}</h2>
          <span>{{ banner.synthesis.nowIndex }}</span>
          <span v-if="banner.synthesis.rise" class="up-per">({{ banner.synthesis.rise ? '+' : '-' }} {{ banner.synthesis.rate }}%)</span>
          <span v-else class="down-per">({{ banner.synthesis.rise ? '+' : '-' }} {{ banner.synthesis.rate }}%)</span>
        </div>

        <div class="subtitle">
          <span :class="{'span-active': tabActive === 0}" @click="tabActive = 0">
            <!-- 概览 -->
            {{ $t('index.perform')}}</span>
          <span :class="{'span-active': tabActive === 1}" @click="tabActive = 1">
            <!-- 指数特点 -->
            {{ $t('index.charact')}}</span>
          <span :class="{'span-active': tabActive === 2}" @click="tabActive = 2">
            <!-- 指数成分 -->
            {{ $t('index.const')}}</span>
        </div>
        <!-- 指数图 -->
        <div class="chartType">
          <!-- 概览(折线图) -->

          <div class="index-chart" v-if="tabActive === 0">
            <index-chart/>
          </div>

          <!-- 指数特点 上综合 下f20-->
          <div class="feature" v-if="tabActive === 1 && selectIndex === 'finwex11' ">
            <li><h2>
              <!-- 指数成分数量 -->
              {{ $t('index.noc')}}</h2><p>1564</p></li>
            <li><h2>
              <!-- 指数基期 -->
              {{ $t('index.ld')}}</h2><p>Apr.30, 2018</p></li>
            <li><h2>
              <!-- 成分总市值 -->
              {{ $t('index.cfzsz')}}</h2><p>15,055,728.082189</p></li>
            <li><h2>
              <!-- 最大市值 -->
              {{ $t('index.zdsz')}}</h2><p>4,069,111.516658</p></li>
            <li><h2>
              <!-- 最小市值 -->
              {{ $t('index.zxsz')}}</h2><p>0.041057</p></li>
            <li><h2>
              <!-- 平均市值 -->
              {{ $t('index.pjsz')}}</h2><p>1.381934</p></li>
            <li><h2>
              <!-- 市值中位数 -->
              {{ $t('index.szzws')}}</h2><p>234.699989</p></li>
            <p class="feature-p">
              <!-- 截止 -->
              {{ $t('index.jzsj')}}2018年9月1日</p>
          </div>
          <div class="feature" v-if="tabActive === 1 &&  selectIndex === 'finwex20' " >
            <li><h2>
              <!-- 指数成分数量 -->
              {{ $t('index.noc')}}</h2><p>20</p></li>
            <li><h2>
              <!-- 指数基期 -->
              {{ $t('index.ld')}}</h2><p>Apr.30, 2018</p></li>
            <li><h2>
              <!-- 成分总市值 -->
              {{ $t('index.cfzsz')}}</h2><p>201058872466</p></li>
            <li><h2>
              <!-- 最大市值 -->
              {{ $t('index.zdsz')}}</h2><p>120105697776</p></li>
            <li><h2>
              <!-- 最小市值 -->
              {{ $t('index.zxsz')}}</h2><p>584378732</p></li>
            <li><h2>
              <!-- 平均市值 -->
              {{ $t('index.pjsz')}}</h2><p>10052943623</p></li>
            <li><h2>
              <!-- 市值中位数 -->
              {{ $t('index.szzws')}}</h2><p>1622393828</p></li>
            <p class="feature-p">
              <!-- 截止 -->
              {{ $t('index.jzsj')}}2018年9月1日</p>
          </div>
          <!-- 指数成分（饼状图）上综合 下f20 -->
          <div :style="{width: '600px', height: '300px'}" class="pie2" v-show="tabActive === 2 &&  selectIndex === 'finwex11'">
            <pieChart :options="pie1_pc"/>
          </div>
          <div :style="{width: '600px', height: '400px'}" class="pie" v-show="tabActive === 2 &&  selectIndex === 'finwex20'">
            <pieChart :options="pie2_pc"/>
          </div>
        </div>

        <div class="con-pdf">
          <span>
            <!-- 指数编制方法 -->
            {{ $t('index.zsbzff')}}</span>
          <a href="/download/FINWEX_Composite_Index.pdf"  target="_blank" class="pdf" v-if="selectIndex === 'finwex11'">FINWEX Composite Index 
          <!-- 白皮书 -->
          {{ $t('index.bps1')}}.pdf</a>
          <a href="/download/FINWEX_20Index.pdf"  target="_blank" class="pdf" v-if="selectIndex === 'finwex20'">FWX20 
           <!-- 白皮书 -->
          {{ $t('index.bps1')}}.pdf</a>
        </div>
        <p class="con-des" v-if="selectIndex === 'finwex11'">
          <!-- FINWEX Composite Index 纷睿综合指数（简称“FCI”）包含全球通证交易所挂牌交易的1000多种通证，数据来自全球超过200家交易所，
          2000多个交易对。该指数以比特币作为基准，以流通市值为权重，反映全球通证兑比特币的价格变动情况。 -->
        {{ $t('index.fci3')}}</p>
        <p class="con-des" v-if="selectIndex === 'finwex20'">
         <!-- FINWEX20 - 纷睿20指数（简称“FWX20”）由流通市值前20的大通以市值加权法构成，反映区块链核心市场价格水平。 -->
         {{ $t('index.f203')}}</p>
        <p class="contact">
          <!-- 如有合作请发送邮件至 -->
          {{ $t('index.ryhe')}}<span>lloyd.qiu@finwex.com</span> 
          <!-- 与我们联系。 -->
          {{ $t('index.ywmlx')}}</p>
        
      </div>
      <div class="content-right mb">
        <div v-if="selectIndex === 'finwex11'" class="num2-title">
          <h2 class="pc">
            <!-- 纷睿综合指数 -->
            {{ $t('index.fci2')}}</h2>
          <span v-if="selectIndex === 'finwex11'">{{ banner.hedge.nowIndex }}</span>
          <span v-if="banner.hedge.rise" class="up-per">({{ banner.hedge.rise ? '+' : '-' }} {{ banner.hedge.rate }}%)</span>
          <span v-else class="down-per">({{ banner.hedge.rise ? '+' : '-' }} {{ banner.hedge.rate }}%)</span>
        </div>
        <div v-if="selectIndex === 'finwex20'" class="num2-title">
          <h2 class="pc">
          <!-- 纷睿20指数 -->
          {{ $t('index.f202')}}</h2>
          <span>{{ banner.synthesis.nowIndex }}</span>
          <span v-if="banner.synthesis.rise" class="up-per">({{ banner.synthesis.rise ? '+' : '-' }} {{ banner.synthesis.rate }}%)</span>
          <span v-else class="down-per">({{ banner.synthesis.rise ? '+' : '-' }} {{ banner.synthesis.rate }}%)</span>
        </div>
        <!-- 指数图 -->
        <div class="chartType">
          <!-- 概览(折线图) -->
          <div class="index-chart">
            <index-chart/>
          </div>
        </div>
        <div class="subtitle1" v-if="isEnglish">
          <span :class="{'span-active': tabActive === 0}" @click="tabActive = 0">
            <!-- 概览 -->
            {{ $t('index.perform')}}</span>
          <span :class="{'span-active': tabActive === 1}" @click="tabActive = 1">
            <!-- 指数特点 -->
            {{ $t('index.charact')}}</span>
          <span :class="{'span-active': tabActive === 2}" @click="tabActive = 2">
            <!-- 指数成分 -->
            {{ $t('index.const')}}</span>
          <span :class="{'span-active': tabActive === 3}" @click="tabActive = 3">
             <!-- 新闻公告 -->
            news</span>
        </div>
        <div class="subtitle" v-else>
          <span :class="{'span-active': tabActive === 0}" @click="tabActive = 0">
            <!-- 概览 -->
            {{ $t('index.perform')}}</span>
          <span :class="{'span-active': tabActive === 1}" @click="tabActive = 1">
            <!-- 指数特点 -->
            {{ $t('index.charact')}}</span>
          <span :class="{'span-active': tabActive === 2}" @click="tabActive = 2">
            <!-- 指数成分 -->
            {{ $t('index.const')}}</span>
          <span :class="{'span-active': tabActive === 3}" @click="tabActive = 3">
             <!-- 新闻公告 -->
          {{ $t('index.xwgg')}}</span>
        </div>
        
        <!-- 指数特点 上综合 下f20-->
          <div class="feature" v-if="tabActive === 1 && selectIndex === 'finwex11' ">
            <li><h2>
              <!-- 指数成分数量 -->
              {{ $t('index.noc')}}</h2><p>1564</p></li>
            <li><h2>
              <!-- 指数基期 -->
              {{ $t('index.ld')}}</h2><p>Apr.30, 2018</p></li>
            <li><h2>
              <!-- 成分总市值 -->
              {{ $t('index.cfzsz')}}</h2><p>15,055,728.082189</p></li>
            <li><h2>
              <!-- 最大市值 -->
              {{ $t('index.zdsz')}}</h2><p>4,069,111.516658</p></li>
            <li><h2>
              <!-- 最小市值 -->
              {{ $t('index.zxsz')}}</h2><p>0.041057</p></li>
            <li><h2>
              <!-- 平均市值 -->
              {{ $t('index.pjsz')}}</h2><p>1.381934</p></li>
            <li><h2>
              <!-- 市值中位数 -->
              {{ $t('index.szzws')}}</h2><p>234.699989</p></li>
            <p class="feature-p">
              <!-- 截止 -->
              {{ $t('index.jzsj')}}{{ $t('index.jzsj91')}}</p>
          </div>
          <div class="feature" v-if="tabActive === 1 &&  selectIndex === 'finwex20' " >
            <li><h2>
              <!-- 指数成分数量 -->
              {{ $t('index.noc')}}</h2><p>20</p></li>
            <li><h2>
              <!-- 指数基期 -->
              {{ $t('index.ld')}}</h2><p>Apr.30, 2018</p></li>
            <li><h2>
              <!-- 成分总市值 -->
              {{ $t('index.cfzsz')}}</h2><p>201058872466</p></li>
            <li><h2>
              <!-- 最大市值 -->
              {{ $t('index.zdsz')}}</h2><p>120105697776</p></li>
            <li><h2>
              <!-- 最小市值 -->
              {{ $t('index.zxsz')}}</h2><p>584378732</p></li>
            <li><h2>
              <!-- 平均市值 -->
              {{ $t('index.pjsz')}}</h2><p>10052943623</p></li>
            <li><h2>
              <!-- 市值中位数 -->
              {{ $t('index.szzws')}}</h2><p>1622393828</p></li>
            <p class="feature-p">
              <!-- 截止 -->
              {{ $t('index.jzsj')}}{{ $t('index.jzsj91')}}</p>
          </div>
        <!-- 指数成分（饼状图）上综合 下f20 -->
        <div :style="{width: '360px', height: '450px'}" class="pie2" v-show="tabActive === 2 &&  selectIndex === 'finwex11'">
          <pieChart :options="pie1_mobile"/>
        </div>
        <div :style="{width: '360px', height: '450px'}" class="pie" v-show="tabActive === 2 &&  selectIndex === 'finwex20'">
          <pieChart :options="pie2_mobile"/>
        </div>
        <div class="con-pdf" v-if="tabActive === 0">
          <p>
            <!-- 指数编制方法 -->
            {{ $t('index.zsbzff')}}</p>
          <a href="/download/FINWEX_Composite_Index.pdf"  target="_blank" class="pdf" v-if="selectIndex === 'finwex11'">FINWEX Composite Index
           <!-- 白皮书 -->
          {{ $t('index.bps1')}}.pdf</a>
          <a href="/download/FINWEX_20Index.pdf"  target="_blank" class="pdf" v-if="selectIndex === 'finwex20'">FWX20 
           <!-- 白皮书 -->
          {{ $t('index.bps1')}}.pdf</a>
        </div>
        <p class="con-des" v-if="selectIndex === 'finwex11' && tabActive === 0">
          <!-- FINWEX Composite Index 纷睿综合指数（简称“FCI”）包含全球通证交易所挂牌交易的1000多种通证，数据来自全球超过200家交易所，
          2000多个交易对。该指数以比特币作为基准，以流通市值为权重，反映全球通证兑比特币的价格变动情况。 -->
        {{ $t('index.fci3')}}</p>
        <p class="con-des" v-if="selectIndex === 'finwex20'  && tabActive === 0">
         <!-- FINWEX20 - 纷睿20指数（简称“FWX20”）由流通市值前20的大通以市值加权法构成，反映区块链核心市场价格水平。 -->
         {{ $t('index.f203')}}</p>
        <p class="contact" v-if="tabActive === 0">
          <!-- 如有合作请发送邮件至 -->
          {{ $t('index.ryhe')}}<br><span>lloyd.qiu@finwex.com</span> 
          <!-- 与我们联系。 -->
          {{ $t('index.ywmlx')}}</p>
        
        <div class="new-des" v-if="tabActive === 3">
          <div class="des1">
            <p>
              <!-- 纷睿20 指数成分因子调整报告 -->
              {{ $t('index.fwx20')}}</p>
            <span>
              <!-- 2019年8月12日 -->
              {{ $t('index.f20sj')}}</span>
          </div>
          <div class="des1">
            <p>
              <!-- 纷睿20 指数成分因子调整报告 -->
              {{ $t('index.fwx20')}}</p>
            <span>
              <!-- 2019年8月12日 -->
              {{ $t('index.f20sj')}}</span>
          </div>
        </div>
        <div class="new-des" v-if="tabActive === 3">
          <div class="des1">
            <p>
              <!-- 纷睿20 指数成分因子调整报告 -->
              {{ $t('index.fwx20')}}</p>
            <span>
              <!-- 2019年8月12日 -->
              {{ $t('index.f20sj')}}</span>
          </div>
          <div class="des1">
            <p>
              <!-- 纷睿20 指数成分因子调整报告 -->
              {{ $t('index.fwx20')}}</p>
            <span>
              <!-- 2019年8月12日 -->
              {{ $t('index.f20sj')}}</span>
          </div>
        </div>
      </div>
    </div>
    <scrollTop></scrollTop>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import IndexChart from "../components/Index/IndexChart";
import pieChart from "../components/Index/pieChart";
import pieChart2 from "../components/Index/pieChart2";
import scrollTop from '../components/goTop'
export default {
  head() {
    return {
      title: this.$t('index.indexTitle')
    }
  },
  layout: "index",
  components: {
    IndexChart,
    pieChart,
    pieChart2,
    scrollTop
  },
  data() {
    return {
      isShow: false,
      tabActive: 0,
      leftActive: 0,
      selectIndex: "finwex20",
      banner: {
        synthesis: {},
        surprise: {},
        hedge: {}
      },
      pie1_mobile: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
           orient: "vertical",
           left:"20%",
           //left: "center",
           top:"60%",
           width: "340",
          data: [
            "ethereum",
            "XRP",
            "Bitcoin-cash",
            "EOS",
            "Stellar",
            "Litecoin",
            "Tether",
            "Cardano",
            "Monero",
            "Dash",
            "another"
          ]
        },
        series: [
          {
            name: "详细数据",
            type: "pie",
            radius: ["45%", "60%"],
            center: ['52%', '30%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
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
              { name: "ethereum", value: 28345064605 },
              { name: "XRP", value: 13106477064 },
              { name: "Bitcoin-cash", value: 9306186052 },
              { name: "EOS", value: 5632222781 },
              { name: "Stellar", value: 4092379418 },
              { name: "Litecoin", value: 3463128709 },
              { name: "Tether", value: 2782446371 },
              { name: "Cardano", value: 2591511815 },
              { name: "Monero", value: 1772279599 },
              { name: "Dash", value: 1538285929 },
              { name: "another", value: 32246864462 }
            ]
          }
        ]
      },
      pie1_pc: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          //x: "left",
          left: 350,
          data: [
            "ethereum",
            "XRP",
            "Bitcoin-cash",
            "EOS",
            "Stellar",
            "Litecoin",
            "Tether",
            "Cardano",
            "Monero",
            "Dash",
            "another"
          ]
        },
        series: [
          {
            name: "详细数据",
            type: "pie",
            radius: ["40%", "55%"],
            center: [150, 120],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
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
              { name: "ethereum", value: 28345064605 },
              { name: "XRP", value: 13106477064 },
              { name: "Bitcoin-cash", value: 9306186052 },
              { name: "EOS", value: 5632222781 },
              { name: "Stellar", value: 4092379418 },
              { name: "Litecoin", value: 3463128709 },
              { name: "Tether", value: 2782446371 },
              { name: "Cardano", value: 2591511815 },
              { name: "Monero", value: 1772279599 },
              { name: "Dash", value: 1538285929 },
              { name: "another", value: 32246864462 }
            ]
          }
        ]
      },
      pie2_mobile: {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
           orient: "vertical",
           left:"1%",
           //left: "center",
           top:"60%",
           width: "340",
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
              radius: ["45%", "60%"],
              center: ['52%', '30%'],
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
              tooltip:{
                position:function(point){
                  return [point[1],'10%']
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
      },
      pie2_pc: {
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
              radius: ["40%", "55%"],
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
    };
  },
  // async mounted() {
  //   let res = await this.$axios.$get("/api/banner_index");
  //   console.log(res);
  //   this.banner = res;
  // },
  methods: {
    change(index) {
      this.$store.dispatch("changeIndex", { index_type: index });
      this.selectIndex = index;
      //console.log(this.selectIndex)
    },
    onUpdate(newDate) {
      console.log(newDate);
      this.today = newDate;
    },
    handleCurrentDayChanged(current) {
      this.current = current
    },
    btnDes(){
      this.isShow = !this.isShow;
    },
  },
  async mounted() {
    let res = await this.$axios.$get("/api/banner_index");
    console.log(res);
    this.banner = res;
  },
  computed: {
    ...mapGetters("app", ["isEnglish"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@style/index1";
</style>
