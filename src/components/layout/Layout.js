import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme/theme';
import GlobalStyles from 'src/theme/GlobalStyles';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Layout;
