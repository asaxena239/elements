import styled from "styled-components"
import { css } from "@styled-system/css"
import { variant } from "styled-system"
import { SXObject, Box } from "@doors/core"
import { PropsWithChildren } from "react"

interface ButtonProps {
  variant?: "primary" | "default" | "subtle" | "danger" | "success"
  sx?: SXObject
}

// export const Button = styled.button<ButtonProps>(
//   css({
//     appearance: "none",
//     position: "relative",
//     py: "1rem",
//     px: "2rem",
//     bg: "transparent",
//     border: "2px solid transparent",
//     borderRadius: ({ buttonRadius }) => buttonRadius,
//     fontFamily: "body",
//     fontSize: "body",
//     fontWeight: "black",
//     textTransform: "uppercase",
//     whiteSpace: "nowrap",
//     transition: "all 200ms ease-in-out, outline-width 1ms, outline-offset 1ms",
//     cursor: "pointer",
//     "&:disabled": {
//       bg: "ui_300",
//       color: "ui_700",
//       borderColor: "transparent",
//       cursor: "not-allowed",
//       "&:hover": { bg: "avail.uiSubtle", color: "avail.textDisabled" },
//     },
//     "&:focus": {
//       outline: "none",
//     },
//     "&:focus-visible": {
//       outline: (theme) => `2px solid ${theme.colors.focus}`,
//       outlineStyle: "inset",
//       outlineOffset: 1,
//     },
//   }),
//   variant({
//     variants: {
//       default: {
//         borderColor: "action",
//         color: "action",
//         "&:hover, &:active": {
//           bg: "action",
//           color: "ui",
//         },
//       },
//       primary: {
//         bg: "action",
//         color: "ui",
//         "&:hover, &:active": {
//           bg: "actionSecondary",
//           color: "ui",
//         },
//       },
//       subtle: {
//         color: "action",
//         "&:hover, &:active": {
//           bg: "actionSubtle",
//         },
//       },
//       success: {
//         color: "textSuccess",
//         bg: "successSecondary",
//         "&:hover, &:active": {
//           bg: "success",
//         },
//       },
//       danger: {
//         color: "error",
//         borderColor: "error",
//         "&:hover, &:active": {
//           bg: "errorSecondary",
//         },
//       },
//     },
//   }),
//   sx
// )

// Button.defaultProps = {
//   variant: "default",
// }

export function Button({
  as = "button",
  variant = "default",
  children,
}: PropsWithChildren<{ variant?: string; as?: any }>) {
  return <Box as={as}>{children}</Box>
}
