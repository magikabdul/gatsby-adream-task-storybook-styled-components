import React from 'react'
import CheckBox from './CheckBox'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme/theme'
import GlobalStyles from '../../../theme/GlobalStyles'

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
}

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{width: '383px'}}>
      <CheckBox {...args} />
    </div>
  </ThemeProvider>
)

export const Example = Template.bind({})
Example.args = {
  text: 'Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...'
}
