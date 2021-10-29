import React from "react"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import theme from "src/theme/theme"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </>
)

export default Layout
