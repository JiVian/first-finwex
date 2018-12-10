<template>
  <footer class="page-footer summit-footer">
    <div class="container">
      <!-- 对应主题使用不同的 LOGO -->
      <slot name="logo"></slot>

      <!-- 合作伙伴 -->
      <Partners v-if="hidePartners" />

      <!-- 联系方式 -->
      <ul class="contact-methods">
        <!-- Facebook 联系方式: 默认指向 Finwex -->
        <slot name="facebookLink">
          <li class="contact-item">
            <a href="https://www.facebook.com/finwexgroup/" target="_blank">
              <img src="../../assets/img/icon-contacts/icon-facebook.png" alt="">
            </a>
          </li>
        </slot>
        <li class="contact-item">
          <a href="https://twitter.com/FinwexOfficial" target="_blank">
            <img src="../../assets/img/icon-contacts/icon-twitter.png" alt="">
          </a>
        </li>
        <!-- 桌面端, 仅支持 hover -->
        <li class="hoverable contact-item">
          <img src="../../assets/img/icon-contacts/icon-wechat.png" alt="">
          <div class="hover-pane">
            <img src="/images/share/wechat.png" alt="">
          </div>
        </li>
        <!-- 移动端, 支持点击弹层 -->
        <li class="clickable contact-item">
          <img src="../../assets/img/icon-contacts/icon-wechat.png"
            alt=""
            @click="showQRCode('wechat')">
          <div v-show="qrActive === 'wechat'"
            class="hover-pane"
            @click="hideQRCode()">
            <img src="/images/share/wechat.png" alt="">
          </div>
        </li>
        <!-- 桌面端, 仅支持 hover -->
        <li class="hoverable last contact-item">
          <a href="https://weibo.com/finwex" target="_blank">
            <img src="../../assets/img/icon-contacts/icon-weibo.png" alt="">
          </a>
          <div class="hover-pane">
            <img src="/images/share/weibo.png" alt="">
          </div>
        </li>
        <!-- 移动端, 支持点击弹层 -->
        <li class="clickable last contact-item">
          <img src="../../assets/img/icon-contacts/icon-weibo.png"
            alt=""
            @click="showQRCode('weibo')">
          <div v-show="qrActive === 'weibo'"
            class="hover-pane"
            @click="hideQRCode()">
            <img src="/images/share/weibo.png" alt="">
          </div>
        </li>
      </ul>

      <p class="more">
        <!-- 获取更多信息，请发邮件  -->
        {{ $t('footer.contactPartA') }}
        <span class="emphasize">info@finwex.com</span>
        <!-- 与我们联系 -->
        {{ $t('footer.contactPartB') }}
      </p>
      <p class="copyright">
         Copyright © 2018-2019  www.finwex.com.     沪ICP备18011657号-1
      </p>
    </div>
  </footer>
</template>

<script>
  import Partners from './Partners.vue'

  export default {
    data() {
      return {
        qrActive: ''
      }
    },
    props: {
      // 是否隐藏合作伙伴
      hidePartners: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Partners
    },
    methods: {
      showQRCode(tag) {
        this.qrActive = tag
      },
      hideQRCode(tag) {
        this.qrActive = ''
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
