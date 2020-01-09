const path = require('path')

module.exports = async function commandStart () {
  const modulePath = require.resolve(path.join(process.cwd(), 'node_modules', '@jamsite', 'jamsite'))
  const jamsite = require(modulePath)
  jamsite.start()
}
