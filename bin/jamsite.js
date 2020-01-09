#!/usr/bin/env node

function commandFromArgs (args) {
  if (!args.length) return false
  const command = args[0]

  if (command.startsWith('-')) {
    return ['--help', '-h'].includes(command)
      ? 'help'
      : false
  }

  return command
}

function moduleByCommand (command) {
  try {
    return require(`../lib/command-${command}`)
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      return null
    }

    throw e
  }
}

async function runCommand (command, exitCode = null) {
  const commandModule = moduleByCommand(command)

  if (commandModule) {
    await commandModule()
    if (exitCode !== null) {
      process.exit(exitCode)
    }
  } else {
    console.error(`Unknown command "${command}"`)
    await runCommand('help', 1)
  }
}

const args = process.argv.splice(2)
const command = commandFromArgs(args)

if (command) {
  runCommand(command)
} else {
  runCommand('help', 1)
}
