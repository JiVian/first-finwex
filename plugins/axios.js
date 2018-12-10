
export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    if (process.browser) {
    }
    console.log('Making request to ' + config.url)
  })
  $axios.onResponse(response => {
    if (process.browser) {
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
