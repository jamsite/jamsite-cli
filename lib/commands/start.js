const requireRel = require('../require-rel')

module.exports = async function commandStart () {
  const cwd = process.cwd()
  const { Jamsite, start } = requireRel(cwd, 'node_modules', '@jamsite', 'jamsite')
  const jamsite = new Jamsite(cwd)
  return start(jamsite)
}
