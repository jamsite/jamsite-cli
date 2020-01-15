const requireRel = require('../require-rel')

module.exports = async function commandBuild () {
  const Jamsite = requireRel(process.cwd(), 'node_modules', '@jamsite', 'jamsite').Jamsite
  const jamsite = new Jamsite(process.cwd())

  // todo: run user defined build scripts
  jamsite.build()
}
