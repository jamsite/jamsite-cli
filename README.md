# jamsite-cli

Jamsite cli - JAMstack framework command line interface.

# Install

jamsite-cli is inteded to be installed globally, but can will work locally as well.

`npm i -g @jamsite/jamsite-cli`

## Usage

Execute `jamsite` or `npx jamsite` inside your jamsite root directory (the one with package.json).

## Commands

```
Usage: jamsite <command> [options]

Commands:
  jamsite start             Start jamsite server in production mode.
  jamsite start-dev         Start jamsite in development mode.
  jamsite new               Generate new site from template.
  jamsite data              Start node repl with jamsite data context.
  jamsite build             Generate static files.
  jamsite build:<command>   Run local build command given by name.

Options:
  -h, --help                Show help
```
