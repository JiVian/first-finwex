
const fs = require('fs')

const zooms = {}

if (zooms.length === 0) {
  fs.readdir('server/zoomData', (err, d) => {
    if (!err) {
      d.forEach((v) => {
        if (v !== 'index.js') {
          let zom = require('./' + v)
          zooms[zom.name] = zom
        }
      })
    }
  })
}
module.exports = function (type) {
  return zooms[type]
}
