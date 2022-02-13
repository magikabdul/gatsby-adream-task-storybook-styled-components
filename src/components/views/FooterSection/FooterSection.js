import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'react-scroll';

const linksColumnOne = [
  { name: 'Strona główna', to: 'hero-section' },
  { name: 'Poznaj przestrzeń', to: 'location-section' },
  { name: 'Oferta', to: 'offer-section' },
];

const linksColumnTwo = [
  { name: 'Lokalizacja', to: 'gallery-section' },
  { name: 'Własne biuro', to: 'own-office-section' },
  { name: 'Kontakt', to: 'footer-section' },
];

const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  display: grid;
  gap: 30px;
  margin-top: 48px;
  padding: 24px;

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: 1920px) {
    margin-top: 170px;
    padding: 0 173px;
    height: 548px;
  }
`;

const FirstColumn = styled.div`
  & p {
    color: inherit;
    font-size: 16px;
  }

  & > p:first-child {
    display: none;
  }

  @media only screen and (min-width: 1200px) {

    & > p:first-child {
      display: block;
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
  }

  @media only screen and (min-width: 1920px) {
    margin-top: 78px;

    & > p:first-child {
      display: block;
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
  }
`;

const LinksColumn = styled.div`
  display: none;

  @media only screen and (min-width: 1200px) {
    display: block;
    margin-top: 200px;

    & p {
      margin: 11px 0;
      font-size: 16px;
      line-height: 28px;
      color: inherit;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 1920px) {
    display: block;
    margin-top: 200px;

    & p {
      margin: 11px 0;
      font-size: 16px;
      line-height: 28px;
      color: inherit;
      cursor: pointer;
    }
  }
`;

const FourthColumn = styled.div`
  & div:first-child {
    display: none;
  }

  & > div:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    > p {
      padding: 3px 10px 0 0;
      line-height: 28px;
      color: inherit;
      font-size: 12px;
      display: block;
    }
  }

  @media only screen and (min-width: 1200px) {
    & div:first-child {
      display: none;
    }

    & > div:last-child {
      margin-top: 408px;

      > p {
        padding: 3px 10px 0 0;
        line-height: 28px;
      }
    }
  }
  
  @media only screen and (min-width: 1920px) {
    & div:first-child {
      display: block;
    }
    
    & > div:last-child {
      margin-top: 408px;

      > p {
        padding: 3px 10px 0 0;
        line-height: 28px;
      }
    }
  }
`;

const FooterSection = () => (
  <FooterWrapper name='footer-section'>
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
        <Link key={i} to={link.to} smooth={true} duration={1000}>
          <p>{link.name}</p>
        </Link>
      ))}
    </LinksColumn>
    <LinksColumn>
      {linksColumnTwo.map((link, i) => (
        <Link key={i} to={link.to} smooth={true} duration={1000}>
          <p>{link.name}</p>
        </Link>
      ))}
    </LinksColumn>
    <FourthColumn>
      <div>
        <StaticImage
          src='../../../assets/images/footer/footer-bars.png'
          alt='bars'
          style={{ transform: 'translateY(-30px)' }}
        />
      </div>
      <div>
        <p>Proudly designed by</p>
        <StaticImage
          src='../../../assets/images/footer/logo-adream.png'
          alt='adream logo'
          width={70}
        />
      </div>
    </FourthColumn>
  </FooterWrapper>
);

export default FooterSection;
