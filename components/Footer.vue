<template>
  <footer class="footer">
    <div class="content">
      <div class="info">
        <img src="../assets/img/logo_finwex.png" alt="">
        <p>获取更多信息，请发邮件至 <br>
          info@finwex.com 与我们联系</p>
      </div>
      <div class="link">
        <p class="title">合作伙伴</p>
        <ul class="partner-list">
          <li class="partner-item">
            <a href="http://jrrcrypto.io/" target="_blank">
              <img src="/partner_logo/1.png" alt="">
            </a>
          </li>
          <li class="partner-item">
            <img src="/partner_logo/4.png" alt="">
          </li>
          <li class="partner-item">
            <a href="https://www.caixinglobal.com/" target="_blank">
              <img src="/partner_logo/2.png" alt="">
            </a>
          </li>
          <li class="partner-item">
            <a href="https://www.weplus.com/" target="_blank">
              <img src="/partner_logo/3.png" alt="">
            </a>
          </li>
          <li class="partner-item">
            <a href="http://www.gfdvc.com/" target="_blank">
              <img src="/partner_logo/5.png" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="about">
        <div class="title">关于我们</div>
        <a href="https://www.facebook.com/finwexgroup/" target="_blank">
          <img class="logo" src="../assets/img/facebook.png" alt="">
        </a>
        <a href="https://twitter.com/FinwexOfficial" target="_blank">
          <img class="logo margin" src="../assets/img/twitter.png" alt="">
        </a>
        <img class="logo" src="../assets/img/weixin.png" alt="">
      </div>
      <p class="copyright">Copyright © 2018-2019  www.finwex.com &nbsp; &nbsp; 沪ICP备18011657号-1</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer{
    height: 270px;
    background: #383444;
    clear: both;
    position: relative;
    top: 80px;
    min-width: 1110px;
  }

  .copyright {
    position: absolute;
    bottom: 22px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: rgba(255,255,255,0.70);
  }

  .content{
    width: 1080px;
    margin: 0 auto;
    .info{
      float: left;
      margin-top: 51px;
      img{
        width: 233px;
        height:46px;
      }
      p{
        font-family: PingFangSC-Light;
        font-size: 12px;
        color: rgba(255,255,255,0.70);
        margin-top: 14px;
        text-align: center;
      }
    }
    .link{
      margin-left: 118px;
      float: left;
      margin-top: 49px;
      width: 409px;
      height: 160px;
      .title{
        line-height: 25px;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        border-bottom: 1px solid #FFFFFF;
        opacity: 0.75;
        padding-bottom: 5px;
      }
      .partner-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin-right: -27px;
        margin-top: 14px;
        .partner-item {
          flex: 0 0 145px;
          width: 120px;
          height: 45px;
          margin-bottom: 11px;
          // Fix img mis position
          font-size: 0;
          > a,
          img {
            display: block;
            width: 120px;
            height: 45px;
          }
        }
      }
      $top:10px;
      .caixin{
        width: 102px;
        height:55px;
        margin-top: $top;
        margin-left: 0px;
        float: left;
      }
      .weplus{
        width: 122px;
        margin-top: $top;
        float: left;
        margin-left: 30px;
      }
      .fintech{
        width: 122px;
        margin-top: $top;
        float: left;
        margin-left: 30px;
      }
    }
    .about{
      width: 208px;
      float: left;
      margin-top: 49px;
      margin-left: 50px;
      .title{
        line-height: 25px;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        border-bottom: 1px solid #FFFFFF;
        opacity: 0.75;
        padding-bottom: 5px;
      }
      .logo{
        width: 30px;
        height:30px;
        float: left;
        margin-top: 35px;
        opacity: 0.6;
      }
      .margin{
        margin-left: 57px;
        margin-right: 57px;
      }
    }
  }

</style>
