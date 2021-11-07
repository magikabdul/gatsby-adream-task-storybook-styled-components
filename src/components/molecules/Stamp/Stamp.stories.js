import React from 'react';
import Stamp from './Stamp';
import theme from '../../../theme/theme';
import GlobalStyles from '../../../theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import imgWallet from '../../../assets/images/stamp-wallet.png';
import imgCoffee from '../../../assets/images/stamp-coffee.png';
import imgCabinet from '../../../assets/images/stamp-cabinet.png';
import imgEmployee from '../../../assets/images/stamp-employee.png';
import imgTable from '../../../assets/images/stamp-table.png';
import imgRoom from '../../../assets/images/stamp-room.png';
import imgPeople from '../../../assets/images/stamp-people.png';

export default {
  title: 'Molecules/Stamp',
  component: Stamp,
  argTypes: {
    variant: {
      control: 'inline-radio',
    },
    icon: {
      control: 'none',
    },
  },
};

const Template = args => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div
      style={{
        width: '100%',
        height: '500px',
        padding: '50px',
        backgroundColor: '#d8d8d8',
      }}
    >
      <Stamp {...args} />
    </div>
  </ThemeProvider>
);

export const Wallet = Template.bind({});
Wallet.args = {
  icon: imgWallet,
  label: 'Lorem ipsum',
  variant: 'high',
};

export const Coffee = Template.bind({});
Coffee.args = {
  icon: imgCoffee,
  label: 'Lorem ipsum\ndolor sit amet conse',
  variant: 'high',
};

export const Cabinet = Template.bind({});
Cabinet.args = {
  icon: imgCabinet,
  label: 'Lorem ipsum\ndolor sit amet, conse',
  variant: 'high',
};

export const Employee = Template.bind({});
Employee.args = {
  icon: imgEmployee,
  label: 'Lorem ipsum\ndolor sit amet,',
  variant: 'short',
};

export const Table = Template.bind({});
Table.args = {
  icon: imgTable,
  label: 'Lorem ipsum dolor sit amet, conse lorem ipsum lorem',
  variant: 'short',
};

export const Room = Template.bind({});
Room.args = {
  icon: imgRoom,
  label: 'Lorem ipsum dolor sit amet, conse lorem ipsum lorem',
  variant: 'short',
};

export const People = Template.bind({});
People.args = {
  icon: imgPeople,
  label: 'Lorem ipsum dolor sit amet, conse lorem ipsum',
  variant: 'short',
};
