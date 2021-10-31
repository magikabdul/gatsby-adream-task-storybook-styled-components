import React from 'react';
import ContactForm from './ContactForm';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../../theme/GlobalStyles';
import theme from '../../../theme/theme';

export default {
  title: 'Organisms/ContactForm',
  component: ContactForm,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template = args => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div
      style={{
        width: '100%',
        height: '650px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8d8d8',
      }}
    >
      <ContactForm {...args} />
    </div>
  </ThemeProvider>
);

export const Example = Template.bind({});
