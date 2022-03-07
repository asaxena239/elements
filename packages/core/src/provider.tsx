import { Fragment, PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"
import { useTheme } from "./core-hooks"
import { CustomTheme } from "./theme"
import { Reset } from "./reset"

export function DoorsProvider({
  theme: customTheme,
  children,
}: PropsWithChildren<{ theme: CustomTheme }>) {
  const theme = useTheme(customTheme || {})
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  )
}
