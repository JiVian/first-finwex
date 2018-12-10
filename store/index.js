
export const state = () => ({
  idx: 0,
  counter: 0,
  select_index: 'fbi',
  index_data: {
    indexDetail: {}
  },
  aboutIndex: {},
  url: '/',
  white_paper: []
})

//mutations
export const mutations = {
  change(state, indexData) {
    state.index_data = indexData
  },
  getAboutIndex(state, data) {
    state.aboutIndex = data
  },
  changeUrl(state, url) {
    state.url = url
  },
  setWhitePaper(state, whitePaper) {
    state.white_paper = whitePaper
  }
}
//actions
export const actions = {
  async changeIndex(context, {index_type: indexType, type}) {
    let indexData = await this.$axios.$get('/api/index', {params: {indexType, type}})
    context.commit('change', indexData)
  },
  async getAboutIndex(context, {indexType}) {
    let res = await this.$axios.$get('/api/about_index?indexType=' + indexType)
    context.commit('getAboutIndex', res)
  },
  async getWhitePaper(context) {
    let whitePaper = await this.$axios.$get('/api/white_paper')
    context.commit('setWhitePaper', whitePaper)
  }
}
