const home_data = require('../sql/home')

module.exports = {
  name: 'd1',
  action: async function () {
    let end = Date.now()
    let start = end - 5 * 60 * 1000
    let data = await home_data.get_index_by_time(start, end)
    let resultData = []
    for (let val in data) {

    }
  }
}
