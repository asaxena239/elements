function changePackage(source) {
  const [scope, packageName] = source.split("/")
  switch (packageName) {
    case "input":
    case "controls":
    case "autocomplete":
    case "select":
      return `@doors/controls`
    case "base":
    case "core":
    case "layout":
      return `@doors/core`
    case "avatar":
    case "tag":
      return `@doors/display`
    case "progress":
    case "skeleton":
    case "toast":
      return `@doors/feedback`
    case "":
      return `@doors/hooks`
    case "icons":
      return `@doors/icons`
    case "dialog":
    case "feedback":
    case "menu":
    case "popover":
    case "tooltip":
      return `@doors/overlays`
    case "utils":
      return `@doors/utils`
    default:
      return `@doors/${packageName}`
  }
}

export default function Transformer(file, api) {
  const codeshift = api.jscodeshift
  const root = codeshift(file.source)
  const importDeclarations = root.find(codeshift.ImportDeclaration)
  importDeclarations.forEach((path) => {
    const source = path.node.source.value
    const specifiers = path.node.specifiers
    if (source.includes("@rent_avail")) {
      const newSource = codeshift.literal(changePackage(source))
      const declaration = codeshift.importDeclaration(specifiers, newSource)
      codeshift(path).replaceWith(declaration)
    }
  })
  return root.toSource()
}
