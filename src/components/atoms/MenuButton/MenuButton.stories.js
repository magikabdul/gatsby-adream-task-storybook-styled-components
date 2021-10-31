import React from 'react';
import MenuButton from './MenuButton';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../../theme/GlobalStyles'
import theme from '../../../theme/theme'

export default {
  title: 'Atoms/MenuButton',
  component: MenuButton,
  argTypes: {
    label: {
      control: 'text',
    },
    href: {
      control: 'text',
    }
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{backgroundColor: 'lightgrey', padding: '20px'}}>
      <MenuButton {...args} />
    </div>
  </ThemeProvider>
)

export const Example = Template.bind({})
Example.args = {
  label: 'Poznaj przestrzeń',
  href: '',
}
