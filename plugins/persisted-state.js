import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

export default ({ store }) => {
  createPersistedState({
    paths: [
      'app.locale'
    ],
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => {
        // 窗口失去焦点后则不再持久化
        if (!store.state.app.windowFocused) {
          const lang = Cookies.get('lang')
          if (lang !== store.state.app.locale) {
            // Sync with updates happened in other tabs
            store.commit('app/setLang', lang)
          }
          return
        }

        // 刷新时做判断, 默认以json格式存放进vuex的key里
        if (key === 'vuex') {
          try {
            Cookies.set('lang', JSON.parse(value).app.locale)
          } catch (e) {
            console.error('unable to persist "lang" in cookie', e)
          }
        }
      },
      removeItem: key => Cookies.remove(key)
    }
  })(store)

  if (process.browser) {
    // Listen events: "focus", "blue"
    window.addEventListener('focus', () => {
      store.commit('app/setFocus', true)
    })
    window.addEventListener('blur', () => {
      store.commit('app/setFocus', false)
    })
  }
}
