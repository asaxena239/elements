#! /usr/bin/env node
const { program } = require("commander")
const jscodeshiftExecutable = require.resolve(".bin/jscodeshift")
const { spawn } = require("child_process")

program
  .argument("<migrationFiles>", "Path of files to transform.")
  .option("-d, --dry")
  .option("-p, --print")
  .action((migrationFiles, options) => {
    const jsCodeshiftOptions = []
    if (options.dry) {
      jsCodeshiftOptions.push("-d")
    }
    if (options.print) {
      jsCodeshiftOptions.push("-p")
    }
    spawn(
      jscodeshiftExecutable,
      [
        "-t",
        "./transforms/update-imports.js",
        migrationFiles,
        ...jsCodeshiftOptions,
      ],
      {
        stdio: "inherit",
      }
    )
  })

program.parse()
