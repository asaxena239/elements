#! /usr/bin/env node
const path = require("path")
const { program } = require("commander")
const jscodeshiftExecutable = require.resolve(".bin/jscodeshift")
const { spawn } = require("child_process")

const transformerDirectory = path.join(__dirname, "../", "transforms")

console.log(transformerDirectory)

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
        path.join(transformerDirectory, "update-imports.js"),
        migrationFiles,
        ...jsCodeshiftOptions,
      ],
      {
        stdio: "inherit",
      }
    )
  })

program.parse()
