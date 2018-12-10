<template>
  <div class="report">
    <h4 class="title repo_title">FINWEX INDEX详情介绍</h4>
    <a href="./download/index/whitepaper/FINWEX综合指数1.0.pdf" class="report_item" target="_blank">
      <div class="left">
        <h3>
          FINWEX 综合指数白皮书
        </h3>
        <p class="color_gray">更新时间<span class="color_gray">2018年5月30日</span></p>
      </div>
      <div class="right">
        <img  class="index_img" src="../../assets/img/fwx20_b.png" alt="">
      </div>
    </a>
    <a href="./download/index/whitepaper/FINWEX避险指数1.0.pdf" class="report_item" target="_blank">
      <div class="left">
        <h3>
          FINWEX 避险指数白皮书
        </h3>
        <p class="color_gray">更新时间<span class="color_gray">2018年5月30日</span></p>
      </div>
      <div class="right">
        <div class="index_img">
          <img  class="index_img" src="../../assets/img/fwx11_b.png" alt="">
        </div>
      </div>
    </a>
    <a href="./download/index/whitepaper/FINWEX偏离指数1.0.pdf" class="report_item" target="_blank">
      <div class="left">
        <h3>
          FINWEX 偏离指数白皮书
        </h3>
        <p class="color_gray">更新时间<span class="color_gray">2018年5月30日</span></p>
      </div>
      <div class="right">
        <div class="index_img">
          <img  class="index_img" src="../../assets/img/fwb20_b.png" alt="">
        </div>
      </div>
    </a>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  $width:674px;
  .report{
    width: $width;
    // height: 400px;
    background: #fff;
    padding: 20px 20px 0 20px;
    margin-top: 15px;
  }

  .repo_title{
    border-bottom: none;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  .right{
    float:right;
  }
  .left{
    float:left;
  }

  .report_item{
    border-top: 1px dashed #E0E0E0;
    padding: 15px 0;
    height: 108px;
    display: block;
  }

  .report_item h3{
    font-size: 16px;
    color: #42505c;
    line-height: 22px;
    font-weight: 700;
  }

  .report_item p{
    font-size: 12px;
  }

  .report_item .index_img{
    height: 108px;
  }
  .color_gray{
    margin-top: 10px;
    color: #8D99A4;
  }

</style>
