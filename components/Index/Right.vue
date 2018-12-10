<template>
  <div class="right">
    <div class="about">
      <div class="title" v-bind:style="{ 'border-bottom': 2 +'px solid' + index_data.color }">
        {{index_data.title || ''}} 介绍
      </div>
      <p class="text">
        {{aboutIndex.content }}
      </p>
      <p class="margintop20">
        详细资料
      </p>
      <a class="doc-title" v-bind:href="aboutIndex.white_paper_url" target="_blank">
        <span>{{aboutIndex.white_paper_name}}</span>
        <img class="right download_img" src="../../assets/img/download.png">
      </a>
    </div>
    <h3 class="title rating_title">评级</h3>
    <div class="rating">
      <img class="logo" src="../../assets/img/logo_ratings_d.png">
      <p class="text">
        FINWEX评级模型采用定量与定性结合的方式，根据风险来源将区块链项目风险分为内部风险和外部风险，先对项目技术设计、必要性与竞争力、实现路径、项目治理、宏观环境等多方面因素进行综合评估锚定初步评级，再通过其他风险因素调整得出最终评级结果。
      </p>
      <p class="margintop20">
        详细资料
      </p>
      <a class="doc-title" href="./download/ratings/whitepaper/FINWEX区块链项目评级白皮书_V1.0.pdf" target="_blank">
        <span>FINWEX RATINGS 白皮书.pdf</span>
        <img class="right download_img" src="../../assets/img/download.png">
      </a>
      <p class="margintop30 color_gray">
      </p>
      <div class="program_item">
        <img src="../../assets/img/7.png">
        <div class="program_item-text">
          <h4>Cardano (ADA)</h4>
          <span class="color_gray">类型:货币</span>
          <span class="color_gray">展望:稳定</span>
        </div>
       <h1 class="rating-a">A</h1>
      </div>
      <div class="program_item">
        <img src="../../assets/img/19.png">
        <div class="program_item-text">
          <h4>Steem (Steem)</h4>
          <span class="color_gray">类型:货币</span>
          <span class="color_gray">展望:稳定</span>
        </div>
        <h1 class="rating-a">A-</h1>
      </div>
      <div class="program_item">
        <img src="../../assets/img/3.png">
        <div class="program_item-text">
          <h4>Ripple (XRP)</h4>
          <span class="color_gray">类型:货币</span>
          <span class="color_gray">展望:稳定</span>
        </div>
        <h1 class="rating-b">BBB</h1>
      </div>
      <div class="program_item">
        <img src="../../assets/img/5.png">
        <div class="program_item-text">
          <h4>EOS (EOS)</h4>
          <span class="color_gray">类型:货币</span>
          <span class="color_gray">展望:稳定</span>
        </div>
        <h1 class="rating-a">A</h1>
      </div>
      <a href="/ratings" class="ra_link">查看更多</a>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState([
      'index_data',
      'aboutIndex',
      'white_paper'
    ]),
    methods: {
      change(e) {
      }
    }
  }
</script>

<style lang="less" scoped>
  .right{
    width: 350px;
    float: right;
  }
  .title{
    border-bottom: 2px solid #FF8458;
    font-size: 18px;
    padding-bottom: 0px;
    margin-bottom: 15px;
  }
  .margintop20{
    margin-top: 20px;
    margin-bottom: 7px;
  }

  .doc-title {
    font-size: 13px;
    color: #42505C;
    text-decoration: none;
  }

  .about{
    background: #fff;
    width: 310px;
    padding: 20px;
  }

  .download_img{
    width: 14px;
    margin-top: 2px;
  }

  .rating{
    width: 310px;
    background: #fff;
    padding: 20px;
  }

  .rating_title{
    border-bottom: none;
    margin-top: 22px;
    margin-bottom: 8px;
  }

  .rating .logo{
    width: 284px;
    margin-bottom: 16px;
  }

  .about span, .rating span{
    font-size: 13px;
  }

  .program_item{
    height: 50px;
    background: #FAFAFA;
    margin-top: 10px;
    padding-top: 10px;
    padding-left: 10px;

    border-radius: 30px 0 0 30px;
    h1 {
      line-height: 21px;
      font-weight: 700;
    }
    img{
      width:40px;
      height:40px;
      float: left;
    }
    .program_item-text{
      width: 220px;
      float: left;
      h4{
        // font-family: Calibri-Bold;
        font-size: 14px;
        font-weight: 700;
        color: #42505C;
        letter-spacing: 0;
        text-align: left;
        float: left;
        width: 220px;
        margin-left: 20px;
        margin-bottom: 6px;
        line-height: 20px;
      }
      span{
        float: left;
        font-family: PingFangSC-Light;
        font-size: 12px;
        color: #42505C;
        letter-spacing: 0;
        text-align: center;
        margin-left: 20px;
      }
    }
    .rating-a{
      font-family: Helvetica-Bold;
      font-size: 18px;
      color: #167C41;
      letter-spacing: 0;
      text-align: center;
      margin-top: 8px;
      position: relative;
      right: 10px;
    }
    .rating-b{
      font-family: Helvetica-Bold;
      font-size: 18px;
      color: #2FCDE7;
      letter-spacing: 0;
      text-align: center;
      margin-top: 8px;
      position: relative;
      right: 10px;
    }
  }
  .text{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #42505C;
    letter-spacing: 0;
    line-height: 22px;
    height:180px;
  }
  .ra_link{
    font-size: 14px;
    margin-top: 20px;
    text-decoration: none;
    display: block;
    text-align: center;
  }
</style>
