import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../../theme/GlobalStyles';
import theme from '../../../theme/theme';

export default {
  title: 'Molecules/Navbar',
  component: Navbar,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template = args => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ width: '1920px', height: '200px', backgroundColor: 'brown' }}>
      <Navbar {...args} />
    </div>
  </ThemeProvider>
);

export const Main = Template.bind({});
