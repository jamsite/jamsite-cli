const requireRel = require('../require-rel')
const {
  execCommands,
  commandsFromScripts
} = require('../exec')

module.exports = async function commandBuild () {
  const cwd = process.cwd()
  const { Jamsite } = requireRel(cwd, 'node_modules', '@jamsite', 'jamsite')
  const jamsite = new Jamsite(cwd)

  // execute user defined commands
  const commands = commandsFromScripts(jamsite.config.scripts.build || {})

  if (commands.length) {
    console.log('Executing user defined "build" commands...')
    console.log(commands.map((command) => `- ${command}`).join('\n'))
    await execCommands(commands)
  }

  // build static files
  console.log('\nBuild static files...')
  jamsite.build()
}
