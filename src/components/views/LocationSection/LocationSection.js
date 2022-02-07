import React from 'react';
import styled from 'styled-components';
import Stamp from 'src/components/molecules/Stamp/Stamp';
import iconWallet from 'src/assets/images/stamp-wallet.png';
import iconCoffee from 'src/assets/images/stamp-coffee.png';
import iconCabinet from 'src/assets/images/stamp-cabinet.png';
import iconEmployee from 'src/assets/images/stamp-employee.png';
import iconTable from 'src/assets/images/stamp-table.png';
import iconRoom from 'src/assets/images/stamp-room.png';
import iconPeople from 'src/assets/images/stamp-people.png';
import Button from 'src/components/atoms/Button/Button';

const stamps = [
  {
    padding: '88px 0 0 34px',
    variant: 'high',
    label: 'Lorem ipsum',
    icon: iconWallet,
  },
  {
    padding: '88px 0 0 69px',
    variant: 'high',
    label: 'Lorem ipsum\ndolor sit amet conse',
    icon: iconCoffee,
  },
  {
    padding: '88px 0 0 103px',
    variant: 'high',
    label: 'Lorem ipsum\ndolor sit amet,',
    icon: iconCabinet,
  },
  {
    padding: '52px 0 0 0',
    variant: 'short',
    label: 'Lorem ipsum\ndolor sit amet,',
    icon: iconEmployee,
  },
  {
    padding: '46px 0 0 34px',
    variant: 'short',
    label: 'Lorem ipsum dolor\nsit amet, conse\nlorem ipsum lorem',
    icon: iconTable,
  },
  {
    padding: '45px 0 0 67px',
    variant: 'short',
    label: 'Lorem ipsum dolor\nsit amet, conse\nlorem ipsum lorem',
    icon: iconRoom,
  },
  {
    padding: '44px 0 0 103px',
    variant: 'short',
    label: 'Lorem ipsum dolor\nsit amet, conse\nlorem ipsum',
    icon: iconPeople,
  },
];

const SectionLocationWrapper = styled.section`
  margin: 140px 175px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 24px 0 0;
    gap: 10px;
    
    & div:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    & div:nth-child(8) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    & div:last-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

const TitleBox = styled.div`
  margin-top: 5px;

  @media only screen and (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.l};
  width: 250px;
  font-weight: bold;
  white-space: pre-wrap;
  line-height: 58px;

  @media only screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.size.m};
    width: 70%;
    white-space: unset;
    line-height: unset;
    margin: 24px auto 0;
  }
`;

const Line = styled.div`
  border: ${({ theme }) => `5px solid ${theme.color.black}`};
  width: 130px;
  margin-top: 48px;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const StampBox = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1920px) {
    display: block;
    padding: ${({ padding }) => padding};
  }
`;

const ButtonBox = styled.div`
  width: 60%;
  margin: 24px auto 0;

  @media only screen and (min-width: 1920px) {
    margin: 96px 0 0 0;
    width: 380px;
    height: 78px;
  }
`;

const LocationSection = () => {
  return (
    <SectionLocationWrapper name='location-section'>
      <TitleBox>
        <Title>Lorem ipsum dolor sit amet, conse</Title>
        <Line />
      </TitleBox>
      {stamps.map((stamp, i) => (
        <StampBox key={i} padding={stamp.padding}>
          <Stamp
            label={stamp.label}
            variant={stamp.variant}
            icon={stamp.icon}
          />
        </StampBox>
      ))}
      <ButtonBox>
        <Button
          text='dowiedz się więcej'
          icon={
            <svg viewBox='0 0 448 512'>
              <path
                fill='currentColor'
                d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'
              />
            </svg>
          }
        />
      </ButtonBox>
    </SectionLocationWrapper>
  );
};

export default LocationSection;
