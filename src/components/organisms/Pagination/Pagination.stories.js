import React from 'react'
import Pagination from './Pagination'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../../theme/GlobalStyles'
import theme from '../../../theme/theme'

export default {
  title: 'Organisms/Pagination',
  component: Pagination,
  currentSlide: {
    control: 'number',
  },
}

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ backgroundColor: '#d8d8d8', position: 'relative' }}>
      <Pagination {...args} />
    </div>
  </ThemeProvider>
)

export const HeroSlider = Template.bind({})
HeroSlider.args = {
  currentSlide: 2,
  totalSlides: 3,
}
