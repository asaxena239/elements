const path = require("path")
const { program } = require("commander")
const execa = require("execa")
const jscodeshiftExecutable = require.resolve(".bin/jscodeshift")

const transformerDirectory = path.join(__dirname, "../", "transforms")

program
  .argument(
    "<transform>",
    `Type of transform to run, one of the following:
    - update-imports
    `
  )
  .argument("<migrationFiles>", "Path of files to transform.")
  .option("-d, --dry")
  .option("-p, --print")
  .action((transform, migrationFiles, options) => {
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
        path.join(transformerDirectory, `${transform}.js`),
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
