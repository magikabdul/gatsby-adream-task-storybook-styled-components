import React from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

export default Layout;
