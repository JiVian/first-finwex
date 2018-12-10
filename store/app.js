
export const state = () => ({
  locales: [
    'en',
    'zh-cn'
  ],
  //默认显示中文
  locale: 'zh-cn',
  windowFocused: true
})

export const getters = {
  isEnglish(state) {
    return state.locale === 'en'
  }
}

export const mutations = {
  setLang(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  setFocus(state, value) {
    state.windowFocused = value
  }
}
