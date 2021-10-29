import React from 'react';
import Typography from './Typography';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../../theme/GlobalStyles';
import theme from '../../../theme/theme';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'inline-radio',
    },
    fontWeight: {
      control: 'inline-radio',
    },
    color: {
      control: 'inline-radio',
    },
  },
};

const Template = args => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ backgroundColor: '#d8d8d8' }}>
      <Typography {...args} />
    </div>
  </ThemeProvider>
);

export const H1 = Template.bind({});
H1.args = {
  fontSize: theme.font.size.xl,
  fontWeight: 'bold',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor',
  variant: 'h1',
  color: 'primary',
};

export const H2 = Template.bind({});
H2.args = {
  fontSize: theme.font.size.l,
  fontWeight: 'bold',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor',
  variant: 'h2',
  color: 'primary',
};

export const H3 = Template.bind({});
H3.args = {
  fontSize: theme.font.size.m,
  fontWeight: 'bold',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor',
  variant: 'h3',
  color: 'primary',
};

export const H4 = Template.bind({});
H4.args = {
  fontSize: theme.font.size.s,
  fontWeight: 'bold',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor',
  variant: 'h4',
  color: 'primary',
};

export const TextSmall = Template.bind({});
TextSmall.args = {
  fontSize: theme.font.size.s,
  fontWeight: 'normal',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor',
  variant: 'p',
  color: 'primary',
};

export const TextLarge = Template.bind({});
TextLarge.args = {
  fontSize: theme.font.size.m,
  fontWeight: 'bold',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor',
  variant: 'p',
  color: 'secondary',
};
