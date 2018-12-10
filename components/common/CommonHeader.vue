<template>
  <header class="nav-header summit-header">
    <div class="container full">
      <!-- 对应主题使用不同的 LOGO -->
      <slot name="logo"></slot>
      <ul :class="open ? 'header-nav-menu open' : 'header-nav-menu'"
        @click="handleClickOnMenu">
         <!-- 首页 -->
        <li class="nav-menu-item">
          <nuxt-link class="nav-link home" to="/">
            {{ $t('links.home') }}
          </nuxt-link>
        </li>
        <!-- 孵化器 -->
        <li class="nav-menu-item">
          <nuxt-link class="nav-link" to="/labs">
            {{ $t('links.labs') }}
          </nuxt-link>
        </li>
        <!-- 峰会 -->
        <li :class="subMenuOpen === 'summit' ? 'nav-menu-item open' : 'nav-menu-item'">
          <a class="nav-link pc-only" href="/summit">
            {{ $t('links.summit') }}
          </a>
          <span class="nav-link wap-only" @click="handleToggleSummitMenu">
            <!-- 峰会 -->
            {{ $t('links.summit') }}
          </span>
          <ul class="nav-sub-menu">
            <!-- 海南站预告 -->
            <li class="nav-sub-menu-item">
              <nuxt-link class="nav-link" to="/GFIS/Haikou">{{ $t('links.summitHaikou') }}
              </nuxt-link>
            </li>
            <li class="nav-sub-menu-item">
              <nuxt-link class="nav-link" to="/summit/bangkok">
                <!-- 曼谷|柏林站预告 -->
                {{ $t('links.summitPreview') }}
              </nuxt-link>
            </li>
            <li class="nav-sub-menu-item">
              <nuxt-link class="nav-link" to="/summit/hongkong">
                <!-- 香港站 -->
                {{ $t('links.summitHongKong') }}
              </nuxt-link>
            </li>
            <li class="nav-sub-menu-item">
              <nuxt-link class="nav-link" to="/summit/japan">
                <!-- 日本站 -->
                {{ $t('links.summitJapan') }}
              </nuxt-link>
            </li>
            <li class="nav-sub-menu-item">
              <nuxt-link class="nav-link" to="/summit/macau">
                <!-- 澳门站 -->
                {{ $t('links.summitMacau') }}

                
              </nuxt-link>
            </li>
            <li class="nav-sub-menu-item">
              <nuxt-link class="nav-link" to="/summit/shanghai">
                <!-- 上海站 -->
                {{ $t('links.summitShangHai') }}
              </nuxt-link>
            </li>
          </ul>
        </li>
        <!-- 评级 -->
        <!-- <li class="nav-menu-item">
          <nuxt-link class="nav-link" to="/ratings">
            {{ $t('links.ratings') }}
          </nuxt-link>
        </li> -->
        <!-- 新闻 -->
        <li class="nav-menu-item">
          <nuxt-link class="nav-link" to="/voice">
            {{ $t('links.news') }}
          </nuxt-link>
        </li>
        <!-- 智库 -->
        <li class="nav-menu-item">
          <nuxt-link class="nav-link" to="/institute">
            {{ $t('links.institute') }}
          </nuxt-link>
        </li>
        <!-- 指数 -->
        <li class="nav-menu-item">
          <nuxt-link class="nav-link" to="/index">
            {{ $t('links.index') }}
          </nuxt-link>
        </li>
        <!-- 关于我们 -->
        <li class="nav-menu-item">
          <nuxt-link class="nav-link" to="/about">
            {{ $t('links.aboutUs') }}
          </nuxt-link>
        </li>
        <li class="nav-menu-item lang-box">
          <a :class="locale === 'en' ? 'active nav-link lang-link' : 'nav-link lang-link'"
            @click="setLang('en')">
            EN
          </a>
          <span class="lang-sep">|</span>
          <a :class="locale === 'zh-cn' ? 'active nav-link lang-link' : 'nav-link lang-link'"
            @click="setLang('zh-cn')">
            中文
          </a>
        </li>
      </ul>
      <HamburgerMenuToggle
        class="header-nav-toggle"
        :open="open"
        @toggle="handleToggle"/>
    </div>
  </header>

</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import HamburgerMenuToggle from '../common/HamburgerMenuToggle.vue'

  export default {
    components: {
      HamburgerMenuToggle
    },
    data() {
      return {
        open: false,
        subMenuOpen: ''
      }
    },
    methods: {
      ...mapMutations('app', [
        'setLang'
      ]),
      handleToggle() {
        this.open = !this.open
      },
      handleClickOnMenu() {
        // 自动隐藏菜单
        if (this.open) {
          this.open = false
        }
      },
      handleToggleSummitMenu(evt) {
        // 避免触发菜单隐藏
        evt.stopPropagation()
        if (this.subMenuOpen !== '') {
          this.subMenuOpen = ''
        } else {
          this.subMenuOpen = 'summit'
        }
      }
    },
    computed: {
      ...mapState('app', [
        'locale'
      ])
    }
  }
</script>

<style lang="less" scoped>

</style>
