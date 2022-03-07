import { DoorsProvider } from "@doors/core"
import { initialize, mswDecorator } from "msw-storybook-addon"

// Initialize MSW
initialize()

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: { order: ["Packages", ["Core", "*", "Hooks"]] },
  },
  backgrounds: {
    default: "ui",
    values: [
      { name: "ui", value: "#f3f3f3" },
      { name: "dark", value: "#2d2d2d" },
      { name: "light", value: "#fff" },
    ],
  },
}

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "Avail",
    toolbar: {
      icon: "globe",
      // Array of plain string values or MenuItem shape (see below)
      items: ["Avail", "RDC"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

const rdcTheme = {
  config: { colorMode: "rdc" },
  baseSize: 8,
  fontSizes: {
    small: "1.75rem",
    body: "2rem",
    subtitle: "2.5rem",
    title: "3rem",
    headline: "4rem",
    hero: "7rem",
  },
  lineHeights: {
    body: "1.5",
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  fonts: {
    body: "'Roboto', sans-serif",
  },
  text: {
    title: {
      lineHeight: "1.334",
    },
    subtitle: {
      lineHeight: "1.4",
    },
    small: {
      lineHeight: "1.43",
    },
  },
  containerWidth: ["120rem"],
}

export const decorators = [
  mswDecorator,
  (Story, context) => {
    const isRdc = context.globals.theme === "RDC"
    return (
      <DoorsProvider theme={isRdc ? rdcTheme : {}}>
        <Story />
      </DoorsProvider>
    )
  },
]
