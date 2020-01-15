const requireRel = require('../require-rel')

module.exports = async function commandStart () {
  const jamsite = requireRel(process.cwd(), 'node_modules', '@jamsite', 'jamsite')
  await jamsite.start(process.cwd())
}
