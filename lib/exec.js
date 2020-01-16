const execSh = require('exec-sh')

module.exports.execCommands = async function execCommands (commands) {
  return Promise.all(
    commands.map((command) =>
      execSh.promise(command)
    )
  )
}

module.exports.commandsFromScripts = function commandsFromScripts (scripts) {
  return Object.values(scripts).reduce((a, command) => {
    if (Array.isArray(command)) {
      if (command.length) {
        a.push(command.join(' && '))
      }
    } else {
      a.push(command)
    }
    return a
  }, [])
}
