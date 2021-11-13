import React from 'react';
import styled from 'styled-components';
import MenuButton from '../../atoms/MenuButton/MenuButton';

const buttons = [
  {
    label: 'Poznaj przestrzeń',
    left: '0',
  },
  {
    label: 'Oferta',
    left: '63px',
  },
  {
    label: 'Lokalizacja',
    left: '65px',
  },
  {
    label: 'Własne biuro',
    left: '110px',
  },
  {
    label: 'Kontakt',
    left: '110px',
  },
];

const icons = [
  {
    id: 'facebook',
    icon: (
      <svg viewBox='0 0 320 512'>
        <path
          fill='currentColor'
          d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
        />
      </svg>
    ),
    left: '0',
  },
  {
    id: 'instagram',
    icon: (
      <svg viewBox='0 0 448 512'>
        <path
          fill='currentColor'
          d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
        />
      </svg>
    ),
    left: '24px',
  },
];

const Container = styled.div`
  position: absolute;
  top: 0;
  padding-top: 42px;
  margin: 0 175px;

  display: flex;
  color: ${({ theme }) => theme.color.white};
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: bold;
`;

const Navigation = styled.ul`
  margin: 25px 0 0 184px;
  flex: 1;
  display: flex;
  list-style: none;
`;

const SocialIcons = styled.div`
  margin: 22px 0 0 400px;
  display: flex;
`;

const IconBox = styled.div`
  padding: 5px;

  display: flex;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
`;

const Navbar = () => (
  <Container>
    <Logo>LOGO</Logo>
    <Navigation>
      {buttons.map(b => (
        <li key={b.label} style={{ marginLeft: `${b.left}` }}>
          <MenuButton label={b.label} />
        </li>
      ))}
    </Navigation>
    <SocialIcons>
      {icons.map(icon => (
        <IconBox key={icon.id} style={{ marginLeft: `${icon.left}` }}>
          {icon.icon}
        </IconBox>
      ))}
    </SocialIcons>
  </Container>
);

export default Navbar;
