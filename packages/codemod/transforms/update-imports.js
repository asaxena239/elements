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
        // Don't do anything with constants, too complicated.
        ["constants", "@rent_avail/elements/constants"],
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
  const importDeclarations = root.find(j.ImportDeclaration)
  importDeclarations.forEach((path) => {
    const source = path.node.source.value
    const specifiers = path.node.specifiers.map((path) => {
      if (path.imported && path.imported.name !== path.local.name) {
        return j.importSpecifier(path.imported, path.local)
      }
      return j.importSpecifier(path.local, path.local)
    })

    // TODO: Deal with typography changes differently. Remove indentifiers to Text and Heading and insert Box components.

    if (source.includes("@rent_avail")) {
      const newSource = j.literal(changePackage(source))
      const declaration = j.importDeclaration(specifiers, newSource)
      j(path).replaceWith(declaration)
    }
  })
  return root.toSource()
}
