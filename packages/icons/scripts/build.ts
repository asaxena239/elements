const fs = require("fs")
const path = require("path")
const cheerio = require("cheerio")
const { minify } = require("html-minifier")
const upperCamelCase = require("uppercamelcase")
const { format } = require("prettier")

const svgFiles = fs.readdirSync(path.resolve(__dirname, "../svg"))

const icons = svgFiles.reduce((iconHash, file) => {
  const name = path.basename(file, ".svg")
  const svg = fs.readFileSync(path.resolve(__dirname, "../svg", file))
  const contents = cheerio.load(svg)("svg").html()
  iconHash[name] = minify(contents)
  return iconHash
}, {})

const keys = Object.keys(icons)

const sourceDir = path.resolve(__dirname, "../src")

const iconDirectory = path.resolve(sourceDir, "icons")

if (!fs.existsSync(iconDirectory)) {
  fs.mkdirSync(iconDirectory)
}

const initialTypeDefinitions = `
/// <reference types="react" />
import { FC, SVGAttributes } from 'react';
export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
export type Icon = FC<IconProps>;
`

fs.writeFileSync(path.resolve(sourceDir, "index.js"), "", "utf-8")
fs.writeFileSync(
  path.resolve(sourceDir, "index.d.ts"),
  initialTypeDefinitions,
  "utf-8"
)

keys.forEach((name) => {
  const location = path.resolve(sourceDir, "icons", `${name}.js`)
  const ComponentName = upperCamelCase(name)
  const element = `
    import React, { forwardRef } from "react"
    import p from "prop-types"
    export const ${ComponentName} = forwardRef(function ${ComponentName}(props, ref) {
      const { color = "currentColor", size = 24, ...rest } = props
      return (
        <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
          ${icons[name]}
        </svg>
      )
    })

    ${ComponentName}.propTypes = {
      color: p.string,
      size: p.oneOfType([
        p.string,
        p.number
      ]),
    }

    ${ComponentName}.defaultProps = {
      viewBox: "0 0 24 24",
      fill: "none",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }

    ${ComponentName}.displayName = "${ComponentName}"
  `

  const component = format(element, {
    parser: "flow",
    bracketSpacing: true,
    singleQuote: false,
  })

  fs.writeFileSync(location, component, "utf-8")

  console.log("Built", ComponentName)

  const exportString = `export * from "./icons/${name}"\r\n`

  fs.appendFileSync(path.resolve(sourceDir, "index.js"), exportString, "utf-8")

  const exportTypeString = `export const ${ComponentName}: Icon;\n`

  fs.appendFileSync(
    path.resolve(sourceDir, "index.d.ts"),
    exportTypeString,
    "utf-8"
  )
})
