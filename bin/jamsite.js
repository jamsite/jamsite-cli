#!/usr/bin/env node

// read .env from cwd, this should be changed when jamsite
// will allow specifying custom site path
require('dotenv').config()

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
    return require(`../lib/commands/${command}`)
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
    console.error(`Error: Unknown command "${command}"`)
    await runCommand('help', 1)
  }
}

const args = process.argv.splice(2)
const command = commandFromArgs(args)

command
  ? runCommand(command)
  : runCommand('help', 1)
