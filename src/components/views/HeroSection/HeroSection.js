import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContactForm from 'src/components/organisms/ContactForm/ContactForm';
import NavigationButton from 'src/components/atoms/NavigationButton/NavigationButton';
import Pagination from 'src/components/organisms/Pagination/Pagination';
import { StaticImage } from 'gatsby-plugin-image';
import {
  BoxDesktopLarge,
  BoxPhone,
  BoxTablets,
  ContactFormBoxDesktopLarge, ContactFormBoxDesktopSmall,
  ContactFormBoxPhone,
  ContactFormBoxTablets,
  ControlBoxDesktopLarge,
  DescriptionBoxDesktopLarge, DescriptionBoxDesktopSmall,
  DescriptionBoxPhone,
  DescriptionBoxTablets,
  ImageBoxDesktopLarge,
  NaviLeftDesktopLarge,
  NaviRightDesktopLarge,
  PaginationBoxDesktopLarge,
  SliderDesktopLarge,
} from 'src/components/views/HeroSection/hero-section-styling';

const sliderTime = 5;

const SectionHeroWrapper = styled.section``;

const ContainerPhones = styled.div`
  display: none;

  @media only screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContainerTablets = styled.div`
  display: none;

  @media only screen and (min-width: 720px) and (max-width: 1199px) {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

const ContainerDesktopSmall = styled.div`
  display: none;

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 650px;
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
  font-size: ${({ theme }) => theme.font.size.m};
  text-align: center;

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    font-size: ${({ theme }) => theme.font.size.l};
    font-weight: bold;
    text-align: left;
  }

  @media only screen and (min-width: 1920px) {
    font-size: ${({ theme }) => theme.font.size.xl};
    text-align: left;
    font-weight: bold;
    line-height: 98px;
  }
`;
const Message = styled.div`
  font-size: ${({ theme }) => theme.font.size.s};
  text-align: center;

  @media only screen and (min-width: 500px) {
    text-align: left;
  }
  
  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    font-size: ${({ theme }) => theme.font.size.m};
  }

  @media only screen and (min-width: 1920px) {
    font-size: ${({ theme }) => theme.font.size.l};
    margin-top: 5px;
    line-height: 72px;
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

      <ContainerTablets>
        <StaticImage
          style={{ filter: 'brightness(50%)' }}
          src='../../../assets/images/hero-image-2.png'
          alt='our office image'
          placeholder='blurred'
        />
        <BoxTablets>
          <DescriptionBoxTablets>
            <Title>Firma</Title>
            <Message>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
            </Message>
          </DescriptionBoxTablets>
          <ContactFormBoxTablets>
            <ContactForm />
          </ContactFormBoxTablets>
        </BoxTablets>
      </ContainerTablets>

      <ContainerDesktopSmall>
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
          <DescriptionBoxDesktopSmall>
            <Title>Firma</Title>
            <Message>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit. Ut auctor
            </Message>
          </DescriptionBoxDesktopSmall>
          <ContactFormBoxDesktopSmall>
            <ContactForm />
          </ContactFormBoxDesktopSmall>
        </SliderDesktopLarge>
      </ContainerDesktopSmall>

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
