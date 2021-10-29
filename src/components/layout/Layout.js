import React from "react"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import theme from "src/theme/theme"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  
  h1 {
    color: ${() => theme.color.black};
    font-size: ${() => theme.font.size.xl};
    font-weight: bold;
  }

  h2 {
    color: ${() => theme.color.black};
    font-size: ${() => theme.font.size.l};
    font-weight: bold;
  }

  h3 {
    color: ${() => theme.color.black};
    font-size: ${() => theme.font.size.m};
    font-weight: bold;
  }

  h4 {
    color: ${() => theme.color.black};
    font-size: ${() => theme.font.size.s};
    font-weight: bold;
  }
  
  p {
    color: ${() => theme.color.almostBlack};
    font-size: ${() => theme.font.size.s};
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
