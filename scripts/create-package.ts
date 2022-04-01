const { spawn } = require("child_process")
const { writeFileSync, readdirSync, renameSync } = require("fs")
const { cp } = require("shelljs")

const packageName = process.argv[2]

if (!packageName) throw Error("Must contain a name argument.")

const description =
  process.argv[3] || `Doors design system package for ${packageName}`

const packageJson = `
{
  "license": "MIT",
  "name": "@doors/${packageName}",
  "version": "0.0.1",
  "description": "${description}",
  "source": "src/index.ts",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "exports": "dist/index.modern.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "mb": "microbundle --jsx 'React.createElement' --jsxImportSource react --globals react/jsx-runtime=jsx",
    "test": "echo 'run tests from the root directory'",
    "build": "yarn mb",
    "watch": "yarn mb watch --no-compress",
    "prepack": "yarn build"
  },
  "publishConfig": {
    "access": "public"
  },
  "contributors": [
    "Patrick Krawczykowski <patrick@dreadful.design>"
  ],
  "peerDependencies": {
    "react": "*",
    "react-dom": "*",
    "react-is": "*",
    "styled-components": "^5.X.X"
  }
}
`

const packages = readdirSync("./packages")

if (!packages.includes(packageName)) {
  console.log(`Creating file structure for ${packageName}...`)
  cp("-r", "template", `packages/${packageName}`)
  writeFileSync(`packages/${packageName}/package.json`, packageJson)
  renameSync(
    `packages/${packageName}/stories/package.stories.tsx`,
    `packages/${packageName}/stories/${packageName}.stories.tsx`
  )
  renameSync(
    `packages/${packageName}/tests/package.test.tsx`,
    `packages/${packageName}/tests/${packageName}.test.tsx`
  )
}
