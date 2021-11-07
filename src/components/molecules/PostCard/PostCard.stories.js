import React from 'react'
import PostCard from './PostCard'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../../theme/GlobalStyles'
import theme from '../../../theme/theme'
import imgOne from '../../../assets/images/post-image-1.png'
import imgTwo from '../../../assets/images/post-image-2.png'
import imgThree from '../../../assets/images/post-image-3.png'

export default {
  title: 'Molecules/PostCard',
  component: PostCard,
  argTypes: {
    image: {
      control: 'none',
    }
  }
}

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{padding: '50px', backgroundColor: '#d8d8d8'}}>
      <PostCard {...args} />
    </div>
  </ThemeProvider>
)

export const One = Template.bind({});
One.args = {
  image: imgOne,
  date: '01.01.2021',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

export const Two = Template.bind({});
Two.args = {
  image: imgTwo,
  date: '01.01.2021',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

export const Three = Template.bind({});
Three.args = {
  image: imgThree,
  date: '01.01.2021',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}
