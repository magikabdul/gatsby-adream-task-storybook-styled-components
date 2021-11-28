import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const linksColumnOne = [
  { name: 'Strona główna' },
  { name: 'Poznaj przestrzeń' },
  { name: 'Oferta' },
];

const linksColumnTwo = [
  { name: 'Lokalizacja' },
  { name: 'Własne biuro' },
  { name: 'Kontakt' },
];

const Container = styled.div`
  margin-top: 170px;
  padding: 0 173px;
  height: 548px;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
`;

const FirstColumn = styled.div`
  margin-top: 78px;

  & p {
    font-size: 16px;
    color: inherit;
  }

  & > p:first-child {
    font-size: 65px;
    font-weight: bold;
  }

  & > p:nth-child(2) {
    margin: 34px 0 0 3px;
    line-height: 26px;
  }

  & > p:last-child {
    margin: 139px 0 0 3px;
    font-size: 12px;
    line-height: 28px;
  }
`;

const LinksColumn = styled.div`
  margin-top: 200px;

  & p {
    margin: 11px 0;
    font-size: 16px;
    line-height: 28px;
    color: inherit;
    cursor: pointer;
  }
`;

const FourthColumn = styled.div`
  & > div:last-child {
    margin-top: 408px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > p {
      padding: 3px 10px 0 0;
      color: inherit;
      font-size: 12px;
      line-height: 28px;
    }
  }
`;

const FooterSection = () => (
  <Container>
    <FirstColumn>
      <p>LOGO</p>
      <p>
        ul. Towarowa 5/6
        <br />
        31-000 Kraków
        <br />
        <br />
        <strong>+48 999 999 999</strong> <br />
        <strong>email@email.com</strong>
      </p>
      <p>Polityka prywatności</p>
    </FirstColumn>
    <div />
    <LinksColumn>
      {linksColumnOne.map((link, i) => (
        <p key={i}>{link.name}</p>
      ))}
    </LinksColumn>
    <LinksColumn>
      {linksColumnTwo.map((link, i) => (
        <p key={i}>{link.name}</p>
      ))}
    </LinksColumn>
    <FourthColumn>
      <StaticImage
        src='../../../assets/images/footer/footer-bars.png'
        alt='bars'
        style={{ transform: 'translateY(-30px)' }}
      />
      <div>
        <p>Proudly designed by</p>
        <StaticImage
          src='../../../assets/images/footer/logo-adream.png'
          alt='adream logo'
          width={70}
        />
      </div>
    </FourthColumn>
  </Container>
);

export default FooterSection;
