function changePackage(source) {
  const [scope, packageName, component] = source.split("/")
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
    case "elements":
      const folders = new Map([
        ["base", "@doors/core"],
        ["grid", "@doors/core"],
        ["container", "@doors/core"],
        ["card", "@doors/core"],
        ["constants", "@doors/core"],
        ["button", "@doors/controls"],
        ["toggle", "@doors/controls"],
        ["text-input", "@doors/controls"],
        ["checkbox", "@doors/controls"],
        ["radio", "@doors/controls"],
        ["tag", "@doors/display"],
        ["progress-bar", "@doors/feedback"],
        ["fullpage-modal", "@doors/overlays"],
        ["tooltip", "@doors/overlays"],
        ["menu", "@doors/overlay"],
        ["modal", "@doors/overlay"],
      ])
      return folders.get(component)
    default:
      return `@doors/${packageName}`
  }
}

module.exports = function (file, api) {
  const j = api.jscodeshift
  const root = j(file.source)
  const importDeclarations = root.find(codeshift.ImportDeclaration)
  importDeclarations.forEach((path) => {
    // Need to check for constants package and delete call expressions.
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
