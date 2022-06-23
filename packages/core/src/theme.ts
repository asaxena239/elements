/**
 * DO NOT USE
 *
 * Realtor.com design system uplift.
 */
export const baseColors = {
  gray_00: "#FFFFFF",
  gray_01: "#FDFDFD",
  gray_02: "#F7F7F7",
  gray_03: "#F2F2F2",
  gray_04: "#DFDFDF",
  gray_05: "#CACACA",
  gray_06: "#A0A0A0",
  gray_07: "#757575",
  gray_08: "#646464",
  gray_09: "#4B4B4B",
  gray_10: "#444444",
  gray_11: "#3C3C3C",
  gray_12: "#2B2B2B",
  gray_13: "#000000",

  red_01: "#FBE9EA",
  red_02: "#F6CACB",
  red_03: "#EFA0A3",
  red_04: "#E77478",
  red_05: "#E04A4F",
  red_06: "#D92228", // primary
  red_07: "#B81D22",
  red_08: "#9A181C",
  red_09: "#7C1317",
  red_10: "#620F12",

  orange_01: "#FDEFE7",
  orange_02: "#682B09",
  orange_03: "#F9D9C6",
  orange_04: "#F5BA9A",
  orange_05: "#F19A6A",
  orange_06: "#EC7C3D",
  orange_07: "#E85F13",
  orange_08: "#C55110",
  orange_09: "#A5430D",
  orange_10: "#84360B",

  yellow_01: "#FEF8EA",
  yellow_02: "#6E5216",
  yellow_03: "#FCEDCD",
  yellow_04: "#FAE0A6",
  yellow_05: "#F8D17D",
  yellow_06: "#F6C355",
  yellow_07: "#F4B630",
  yellow_08: "#CF9B29",
  yellow_09: "#AD8122",
  yellow_10: "#8B681B",

  green_01: "#E7F5E9",
  green_02: "#054411",
  green_03: "#C5E6CB",
  green_04: "#97D2A1",
  green_05: "#66BD76",
  green_06: "#38AA4C",
  green_07: "#0C9725",
  green_08: "#0A801F",
  green_09: "#096B1A",
  green_10: "#075615",

  blue_01: "#0D2C62",
  blue_02: "#11377C",
  blue_03: "#15459A",
  blue_04: "#1A52B8",
  blue_05: "#1E61D9",
  blue_06: "#477DE0", // primary
  blue_07: "#719BE7",
  blue_08: "#9EBBEF",
  blue_09: "#C9D9F6",
  blue_10: "#E9EFFB",

  violet_01: "#F2EAFD",
  violet_02: "#36156B",
  violet_03: "#DFCDFB",
  violet_04: "#C5A6F7",
  violet_05: "#AB7CF4",
  violet_06: "#9154F0",
  violet_07: "#792FED",
  violet_08: "#6728C9",
  violet_09: "#5621A8",
  violet_10: "#451B87",
}

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
    brand: baseColors.red_06,
    brandSecondary: baseColors.blue_06,
    brandSecondaryDark: baseColors.blue_08,
    ui: baseColors.gray_00,
    uiSecondary: baseColors.gray_04,
    uiContrast: baseColors.gray_06,
    uiSubtle: baseColors.gray_02,
    text: baseColors.gray_12,
    textSecondary: baseColors.gray_07,
    textContrast: baseColors.gray_08,
    textSubtle: baseColors.gray_05,
    textInverted: baseColors.gray_00,
    action: baseColors.blue_06,
    actionSecondary: baseColors.blue_08,
    actionSubtle: baseColors.blue_03,
    error: baseColors.red_08,
    errorSecondary: baseColors.red_03,
    success: baseColors.green_06,
    successSecondary: baseColors.green_08,
    overlay: baseColors.gray_07,
    focus: baseColors.blue_08,
    link: baseColors.blue_06,
    linkSecondary: baseColors.blue_08,
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
    textInverted: colors.ui_100,
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
    legal: "1rem",
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
    legal: {
      fontSize: "legal",
      lineHeight: "2",
    },
  },
  buttonRadius: "0.25rem",
  containerWidth: "86rem",
}

export type BaseTheme = typeof baseTheme

export type CustomTheme = Partial<BaseTheme>
