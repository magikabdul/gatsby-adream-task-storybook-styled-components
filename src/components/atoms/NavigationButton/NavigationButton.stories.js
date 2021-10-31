import React from 'react';
import NavigationButton from './NavigationButton';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme/theme';
import GlobalStyles from '../../../theme/GlobalStyles';

export default {
  title: 'Atoms/NavigationButton',
  component: NavigationButton,
  argTypes: {
    direction: {
      control: 'inline-radio',
      options: ['right', 'left'],
    },
  },
};

const Template = args => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ width: '145px', height: '118px', margin: '20px' }}>
      <NavigationButton {...args} />
    </div>
  </ThemeProvider>
);

export const Right = Template.bind({});
Right.args = {
  direction: 'right',
};

export const Left = Template.bind({});
Left.args = {
  direction: 'left',
};
