const path = require('path')

module.exports = function requireRel (root, ...names) {
  return require(
    path.join(
      root,
      names.join(path.sep)
    )
  )
}
