import { createGlobalStyle } from "styled-components"
import { themeGet } from "@styled-system/theme-get"

const getLegibleFontSize = ({ theme: { space } }) => {
  // Find the first size set by the theme base that's legible on screens.
  return space.find((el: number) => el >= 12)
}

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --base-grid: ${({ theme: { baseSize } }: any) => baseSize}px;
    font-size: var(--base-grid);
  }

  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  u,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${themeGet("fonts.body")};
    font-size: ${themeGet("fontSizes.body")};
    font-weight: ${themeGet("fontWeights.regular")};
    line-height: ${themeGet("lineHeights.body")};
    color: ${themeGet("colors.textPrimary")};
  }

  h1 {
    font-size: ${themeGet("fontSizes.hero")};
    font-weight: ${themeGet("fontWeights.light")};
    line-height: ${themeGet("lineHeights.heading")};
  }
  h2 {
    font-size: ${themeGet("fontSizes.headline")};
    font-weight: ${themeGet("fontWeights.regular")};
    line-height: ${themeGet("lineHeights.heading")};
  }
  h3 {
    font-size: ${themeGet("fontSizes.title")};
    font-weight: ${themeGet("fontWeights.regular")};
    line-height: ${themeGet("lineHeights.heading")};
  }
  h4 {
    font-size: ${themeGet("fontSizes.subtitle")};
    font-weight: ${themeGet("fontWeights.regular")};
    line-height: ${themeGet("lineHeights.heading")};
  }
  h5 {
    font-size: ${themeGet("fontSizes.body")};
    font-weight: ${themeGet("fontWeights.black")};
    line-height: ${themeGet("lineHeights.heading")};
  }

  pre,
  code {
    font-family: ${themeGet("fonts.monospace")};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .link {
    box-shadow: inset 0 -6px 0 ${themeGet("colors.link")};
    font-weight: ${themeGet("fontWeights.black")};
    transition: box-shadow 250ms;
    &:hover {
      box-shadow: inset 0 -12px 0 ${themeGet("colors.link")};
    }
    &:focus {
      box-shadow: inset 0 -12px 0 ${themeGet("colors.link")};
      outline: 2px solid ${themeGet("colors.focus")};
    }
    &:visited {
      box-shadow: inset 0 -6px 0 ${themeGet("colors.linkVisited")};
    }
  }
  .visually-hidden:not(:focus, :active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`
