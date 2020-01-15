const requireRel = require('../require-rel')

module.exports = async function commandStart () {
  const jamsite = requireRel(process.cwd(), 'node_modules', '@jamsite', 'jamsite-dev')
  jamsite.start(process.cwd())
}
