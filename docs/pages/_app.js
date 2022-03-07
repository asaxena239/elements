import { createGlobalStyle } from "styled-components"
import { DoorsProvider } from "@doors/core"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <DoorsProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </DoorsProvider>
  )
}
