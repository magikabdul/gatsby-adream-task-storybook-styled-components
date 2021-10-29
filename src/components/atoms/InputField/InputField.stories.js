import React from 'react';
import InputField from './InputField';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme/theme';
import GlobalStyles from '../../../theme/GlobalStyles';

export default {
  title: 'Atoms/InputField',
  component: InputField,
};

const Template = args => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ width: '383px' }}>
      <InputField {...args} />
    </div>
  </ThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Imię i nazwisko',
};
