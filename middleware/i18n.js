const _cookie = require('cookie-parse')

export default function ({ isHMR, app, store, route, params, error, redirect, req }) {
  const defaultLocale = app.i18n.fallbackLocale
  if (isHMR) return

  // 判断是否在服务端, 是否存在cookies, 不存在则不做任何操作
  if (process.server && req.headers.cookie) {
    const cookies = _cookie.parse(req.headers.cookie)
    // 取下cookies或者赋值默认
    const lang = cookies.lang || defaultLocale

    store.commit('app/setLang', lang)
  }
}
