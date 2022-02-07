import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContactForm from 'src/components/organisms/ContactForm/ContactForm';
import NavigationButton from 'src/components/atoms/NavigationButton/NavigationButton';
import Pagination from 'src/components/organisms/Pagination/Pagination';
import { StaticImage } from 'gatsby-plugin-image';
import {
  BoxDesktopLarge, BoxPhone,
  ContactFormBoxDesktopLarge, ContactFormBoxPhone, ControlBoxDesktopLarge,
  DescriptionBoxDesktopLarge, DescriptionBoxPhone,
  ImageBoxDesktopLarge, NaviLeftDesktopLarge, NaviRightDesktopLarge, PaginationBoxDesktopLarge,
  SliderDesktopLarge,
} from 'src/components/views/HeroSection/hero-section-styling';

const sliderTime = 5;

const SectionHeroWrapper = styled.section``;

const ContainerPhones = styled.div`
  display: none;

  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContainerTablets = styled.div`
  display: none;

  @media only screen and (min-width: 500px) and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContainerDesktopSmall = styled.div`
  display: none;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContainerDesktopLarge = styled.div`
  display: none;

  @media only screen and (min-width: 1920px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: bold;
  line-height: 98px;
  
  @media only screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.size.m};
    line-height: unset;
    text-align: center;
  }
`;
const Message = styled.div`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.font.size.l};
  line-height: 72px;
  
  @media only screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.size.s};
    line-height: unset;
    text-align: center;
  }
`;

const HeroSection = () => {
  const [timer, setTimer] = useState(1);
  const [imageNumber, setImageNumber] = useState(0);

  useEffect(() => {
    let t = timer;
    const intervalId = setInterval(() => {
      t < sliderTime ? t++ : (t = 0);
      t === 0 ? updateImage(true) : setTimer(t);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  const updateImage = doIncrease => {
    let number = imageNumber;
    doIncrease ? number++ : number--;

    if (number > 2) number = 0;
    else if (number < 0) number = 2;
    setTimer(0);
    setImageNumber(number);
  };

  return (
    <SectionHeroWrapper name='hero-section'>
      <ContainerPhones>
        <BoxPhone>
          <StaticImage
            style={{ filter: 'brightness(80%)' }}
            src='../../../assets/images/hero-image-1.png'
            alt='our office image'
            placeholder='blurred'
          />
          <DescriptionBoxPhone>
            <Title>Firma</Title>
            <Message>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit. Ut auctor
            </Message>
          </DescriptionBoxPhone>
        </BoxPhone>
        <ContactFormBoxPhone>
          <ContactForm />
        </ContactFormBoxPhone>
      </ContainerPhones>

      <ContainerTablets></ContainerTablets>

      <ContainerDesktopSmall></ContainerDesktopSmall>

      <ContainerDesktopLarge>
        <BoxDesktopLarge>
          <SliderDesktopLarge>
            <ImageBoxDesktopLarge imageNumber={imageNumber}>
              <StaticImage
                src='../../../assets/images/hero-image-1.png'
                alt='our office image'
                placeholder='blurred'
              />
              <StaticImage
                src='../../../assets/images/hero-image-2.png'
                alt='our office image'
                placeholder='blurred'
              />
              <StaticImage
                src='../../../assets/images/hero-image-3.png'
                alt='our office image'
                placeholder='blurred'
              />
            </ImageBoxDesktopLarge>

            <ContactFormBoxDesktopLarge>
              <ContactForm />
            </ContactFormBoxDesktopLarge>

            <DescriptionBoxDesktopLarge>
              <Title>Firma</Title>
              <Message>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit. Ut auctor
              </Message>
            </DescriptionBoxDesktopLarge>

            <ControlBoxDesktopLarge>
              <NaviLeftDesktopLarge onClick={() => updateImage()}>
                <NavigationButton direction='left' />
              </NaviLeftDesktopLarge>
              <NaviRightDesktopLarge onClick={() => updateImage(true)}>
                <NavigationButton direction='right' />
              </NaviRightDesktopLarge>
              <PaginationBoxDesktopLarge>
                <Pagination currentValue={timer} maxValue={sliderTime} />
              </PaginationBoxDesktopLarge>
            </ControlBoxDesktopLarge>
          </SliderDesktopLarge>
        </BoxDesktopLarge>
      </ContainerDesktopLarge>
    </SectionHeroWrapper>
  );
};

export default HeroSection;
