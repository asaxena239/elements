const path = require("path")
const { program } = require("commander")
const execa = require("execa")
const jscodeshiftExecutable = require.resolve(".bin/jscodeshift")

const transformerDirectory = path.join(__dirname, "../", "transforms")

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
    execa(
      jscodeshiftExecutable,
      [
        "-t",
        path.join(transformerDirectory, "update-imports.js"),
        migrationFiles,
        ...jsCodeshiftOptions,
      ],
      {
        stdio: "inherit",
        stripEof: false,
      }
    )
  })

program.parse()
