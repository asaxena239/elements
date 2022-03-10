#! /usr/bin/env node
const { program } = require("commander")
const jscodeshiftExecutable = require.resolve(".bin/jscodeshift")
const { spawn } = require("child_process")

program
  .argument("<migrationFiles>", "Path of files to transform.")
  .action((migrationFiles) => {
    spawn(
      jscodeshiftExecutable,
      ["-t", "./transforms/update-imports.js", migrationFiles],
      {
        stdio: "inherit",
      }
    )
  })

program.parse()
