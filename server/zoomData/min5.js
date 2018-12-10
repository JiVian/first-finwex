
const home_data = require('../sql/home')

module.exports = {
  name: 'min5',
  action: function () {
    let end = Date.now()
    let start = end - 5 * 60 * 1000
    return home_data.get_index_by_time(start, end)
  }
}
