<template>
  <div class="about">
      <h1 class="title">
        FINWEX RATINGS 简介
      </h1>
      <div class="content">
        FINWEX RATINGS 此处是一段介绍ratings的介绍，以下文字为站位字符。FINWEX ratings 旨在描绘数字货币整体市场情绪。通过统计纳入指数的数字货币市值及成交 额，从而向投资者反映从基期至截止指数发布日的市场存量和发布日当日的市场增量的综合交 易状况。基于客观的市值和成交额，FINWEX INDEX 旨在减少主观判断，从而为投资者反映更 真实的市场样貌。
      </div>
      <div class="detail-download">
        <h3>详细资料</h3>
        <div class="download-name">
          FINWEX INDEX 1.0 白皮书.pdf
          <img src="../../assets/img/download.png" alt="">
        </div>
      </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
  .about{
    width: 350-38px;
    padding: 19px;
    display: inline-block;
    background: #FFFFFF;
    border-radius: 6px;
    margin-left: 16px;
    .title{
      font-family: DINAlternate-Bold;
      font-size: 18px;
      color: #42505C;
      letter-spacing: 0;
      text-align: left;
    }
    .content{
      margin-top: 21px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #42505C;
      letter-spacing: 0;
      line-height: 22px;
    }
    .detail-download{
      margin-top: 30px;
        h3{
          font-size: 14px;
        }
      .download-name{
        font-family: Helvetica;
        font-size: 13px;
        color: #42505C;
        letter-spacing: 0;
        text-align: left;
        margin-top: 10px;
        img{
          float: right;
          width: 15px;
          height:15px;
        }
      }
    }
  }
</style>
