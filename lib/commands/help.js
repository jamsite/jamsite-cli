module.exports = async function commandHelp () {
  console.log(
`Usage: jamsite <command> [options]

Commands:
  jamsite start             Start jamsite server in production mode.
  jamsite start-dev         Start jamsite in development mode.
  jamsite new               Generate new site from template.
  jamsite data              Start node repl with jamsite data context.
  jamsite build             Generate static files.
  jamsite build:<command>   Run local build command given by name.

Options:
  -h, --help                Show help
`
  )
}
