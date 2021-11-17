import { createGlobalStyle } from 'styled-components';
import theme from '../theme/theme';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 1920px;
    margin: 0 auto;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
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
`;

export default GlobalStyles;
