import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.app.locale,
    fallbackLocale: 'zh-cn',
    messages: {
      'en': require('~/locales/en.json'),
      'zh-cn': require('~/locales/zh-cn.json')
    }
  })
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }

  store.subscribe((mutation, state) => {
    if (mutation.type === 'app/setLang') {
      app.i18n.locale = mutation.payload
    }
  })
}
