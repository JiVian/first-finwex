<template>
  <!-- 合作伙伴 -->
  <ul class="partner-list">
    <li class="partner-item">
      <a href="http://jrrcrypto.io/" target="_blank">
        <img v-if="dark" src="/images/Finwex-index/jrr.png" alt="">
        <img v-else src="/images/logos/partners/logo-jrr.png" alt="JrrCrypto">
      </a>
    </li>
    <li class="partner-item">
      <a href="http://dkbfund.com/" target="_blank">
        <img v-if="dark" src="/images/Finwex-index/dkb.png" alt="">
        <img v-else src="/images/logos/partners/logo-dkb.png" alt="DKB">
      </a>
    </li>
    <li class="partner-item">
      <a href="https://www.moac.io/" target="_blank">
        <img v-if="dark" src="/images/Finwex-index/moac.png" alt="">
        <img v-else src="/images/logos/partners/logo-moac.png" alt="">
      </a>
    </li>
    <li class="partner-item">
      <a href="https://www.weplus.com/" target="_blank">
        <img v-if="dark" src="/images/Finwex-index/we.png" alt="">
        <img v-else src="/images/logos/partners/logo-we.png" alt="">
      </a>
    </li>
    <li class="partner-item">
      <a href="http://www.gfdvc.com/" target="_blank">
        <img v-if="dark" src="/images/Finwex-index/goldford.png" alt="">
        <img v-else src="/images/logos/partners/logo-gao.png" alt="">
      </a>
    </li>
    <!-- <li class="partner-item">
      <a href="https://www.caixinglobal.com/" target="_blank">
        <img v-if="dark" src="/images/Finwex-index/caixin.png" alt="">
        <img v-else src="/images/logos/partners/logo-cai.png" alt="">
      </a>
    </li> -->
  </ul>
</template>

<script>
  export default {
    props: {
      // 是否显示黑色版合作伙伴 LOGO
      dark: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
