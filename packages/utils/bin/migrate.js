#! /usr/bin/env node

const { Command } = require("commander")

const program = new Command()

program
  .command("migrate <path>")
  .action((path) =>
    shell.exec(`npx --yes -t ../dist/migration-helper.js ${path}`)
  )
