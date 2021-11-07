import React from 'react';
import Card from './Card';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../../theme/GlobalStyles';
import theme from '../../../theme/theme';
import cardImage1 from '../../../assets/images/card-image-1.png';
import cardImage2 from '../../../assets/images/card-image-2.png';
import cardImage3 from '../../../assets/images/card-image-3.png';
import cardImage4 from '../../../assets/images/card-image-4.png';

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    image: {
      control: 'none',
    },
    variant: {
      control: 'inline-radio',
    },
  },
};

const Template = args => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ padding: '50px', backgroundColor: '#d8d8d8' }}>
      <Card {...args} />
    </div>
  </ThemeProvider>
);

export const BigLeft = Template.bind({});
BigLeft.args = {
  variant: 'big',
  title: 'Biuro',
  info: 'od 1000 zł/msc',
  image: cardImage1,
};

export const BigRight = Template.bind({});
BigRight.args = {
  variant: 'big',
  title: 'Lorem\nipsum',
  info: 'od 500 zł/msc',
  image: cardImage2,
};

export const SmallLeft = Template.bind({});
SmallLeft.args = {
  variant: 'small',
  title: `Biuro\nlorem`,
  info: 'od 100 zł/h',
  image: cardImage3,
};

export const SmallRight = Template.bind({});
SmallRight.args = {
  variant: 'small',
  title: `Biuro lorem ipsum\nLorem`,
  info: 'od 100 zł/h',
  image: cardImage4,
};
