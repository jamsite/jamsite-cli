const requireRel = require('../require-rel')
const {
  execCommands,
  commandsFromScripts
} = require('../exec')

module.exports = async function commandStartDev () {
  const cwd = process.cwd()
  const { JamsiteDev, start } = requireRel(cwd, 'node_modules', '@jamsite', 'jamsite-dev')

  const jamsiteDev = new JamsiteDev(cwd)

  // execute user defined commands
  const commands = commandsFromScripts(jamsiteDev.config.scripts['start-dev'] || {})
  if (commands.length) {
    console.log('Executing user defined "start-dev" commands...')
    console.log(commands.map((command) => `- ${command}`).join('\n'))
    execCommands(commands)
  }

  start(jamsiteDev)
}
