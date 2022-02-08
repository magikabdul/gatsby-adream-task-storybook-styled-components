import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'src/theme/theme';
import GlobalStyles from 'src/theme/GlobalStyles';

const Container = styled.div`
  margin: 0 auto;

  @media only screen and (min-width: 1920px) {
    width: 1920px;
  }
`;

const Layout = ({ children }) => (
  <Container>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Container>
);

export default Layout;
