export const colors = {
  ui_100: "#ffffff",
  ui_300: "#f3f3f3",
  ui_500: "#c7c7c7",
  ui_700: "#6f6f6f",
  ui_900: "#2d2d2d",

  blue_100: "#e9edf1",
  blue_300: "#7c95b0",
  blue_500: "#0f3e6f",
  blue_700: "#0b2e51",
  blue_900: "#0a2847",

  gold_100: "#fdf9e9",
  gold_300: "#fbeab3",
  gold_500: "#f9de89",
  gold_700: "#b6a264",
  gold_900: "#443d26",

  green_100: "#dff9f3",
  green_300: "#9fefdd",
  green_500: "#50e3c2",
  green_700: "#3ba68e",
  green_900: "#163e35",

  straw_100: "#fefef5",
  straw_300: "#fefce3",
  straw_500: "#fefacc",
  straw_700: "#e7e4ba",
  straw_900: "#a2a082",

  red_300: "#F6A5B4",
  red_500: "#EC4261",

  purple_300: "#B7B5EE",
  purple_500: "#6965D5",
}

const baseSize = 12

export const colorModes = {
  rdc: {
    brand: "#D92228",
    brandSecondary: "#3377CC",
    brandSecondaryDark: "#0D3C78",
    ui: "#F1F1F1",
    uiSecondary: "#949494",
    uiContrast: "#757575",
    uiSubtle: "#C8C8C8",
    text: "#333333",
    textSecondary: "#757575",
    textContrast: "#0D3C78",
    textSubtle: "#949494",
    action: "#3377CC",
    actionSecondary: "",
    actionSubtle: "",
    error: "#BA2328",
    errorSecondary: "",
    success: "#3D850A",
    successSecondary: "",
    overlay: "",
    focus: "",
    link: "",
    linkSecondary: "",
  },
  avail: {
    brand: colors.blue_500,
    brandSubtle: colors.blue_100,
    brandContrast: colors.blue_900,
    brandSecondary: colors.green_500,
    brandSecondarySubtle: colors.green_100,
    brandSecondaryContrast: colors.green_900,
    ui: colors.ui_100,
    uiSecondary: colors.ui_500,
    uiContrast: colors.ui_700,
    uiSubtle: colors.ui_300,
    text: colors.ui_900,
    textSecondary: colors.ui_700,
    textContrast: colors.blue_500,
    textSubtle: colors.ui_500,
    action: colors.blue_500,
    actionSecondary: colors.blue_700,
    actionSubtle: colors.blue_100,
    actionDisabled: colors.ui_300,
    error: colors.red_500,
    errorSecondary: colors.red_300,
    success: colors.green_500,
    successSecondary: colors.green_300,
    overlay: colors.ui_700,
    focus: colors.green_500,
    link: colors.green_500,
    visitedLink: colors.purple_500,
  },
}

export const baseTheme = {
  baseSize,
  config: {
    colorMode: "avail",
  },
  space: Array.from(Array(15).keys()).map((i) => i * baseSize),
  breakpoints: ["480px", "720px", "960px", "1200px", "1440px"],
  colors: {
    ...colors,
  },
  fonts: {
    body: "'Nunito', -apple-system, 'Segoe UI', sans-serif",
    legal: "'Noto Serif', serif",
    monospace: "'IBM Plex Mono', monospace",
  },
  fontSizes: {
    small: "1.334rem",
    body: "1.5rem",
    subtitle: "2rem",
    title: "3rem",
    headline: "4rem",
    hero: "5rem",
  },
  fontWeights: {
    light: 200,
    regular: 400,
    bold: 600,
    black: 800,
  },
  lineHeights: {
    small: "1.5",
    body: "1.334",
    heading: "1.25",
  },
  shadows: [
    "0 0.084rem 0.25rem rgba(0,0,0.12)",
    "0 0.25rem 0.5rem rgba(0,0,0,0.12)",
    "0 1rem 1rem -1rem rgba(0,0,0,0.12)",
  ],
  text: {
    body: {
      lineHeight: "body",
      fontSize: "body",
    },
    small: {
      lineHeight: "small",
      fontSize: "small",
    },
    subtitle: {
      lineHeight: "heading",
      fontSize: "subtitle",
    },
    title: {
      lineHeight: "heading",
      fontSize: "title",
    },
    headline: {
      lineHeight: "heading",
      fontSize: "headline",
    },
    hero: {
      lineHeight: "heading",
      fontSize: "hero",
      fontWeight: "light",
    },
    button: {
      lineHeight: "body",
      fontSize: "body",
      fontFamily: "body",
      fontWeight: "black",
      textTransform: "uppercase",
    },
  },
  buttonRadius: "0.25rem",
  containerWidth: "86rem",
}

export type BaseTheme = typeof baseTheme

export type CustomTheme = Partial<BaseTheme>
