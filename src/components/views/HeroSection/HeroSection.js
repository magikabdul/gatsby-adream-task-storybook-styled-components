import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from 'src/components/molecules/Navbar/Navbar';
import ContactForm from 'src/components/organisms/ContactForm/ContactForm';
import NavigationButton from 'src/components/atoms/NavigationButton/NavigationButton';
import Pagination from 'src/components/organisms/Pagination/Pagination';
import { StaticImage } from 'gatsby-plugin-image';

const sliderTime = 5;

const Section = styled.section`
  height: 941px;
  position: relative;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageBox = styled.div`
  position: absolute;
  z-index: -1;
  width: calc(3 * 1920px);
  height: 100%;
  display: flex;
  transform: ${({ imageNumber }) => `translateX(${-1920 * imageNumber}px)`};
  transition: transform 0.5s ease-in-out;
`;

const ContactFormBox = styled.div`
  position: absolute;
  top: 178px;
  left: 1295px;
`;

const DescriptionBox = styled.div`
  position: absolute;
  top: 515px;
  left: 175px;
  color: ${({ theme }) => theme.color.white};
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: bold;
  line-height: 98px;
`;
const Info = styled.div`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.font.size.l};
  line-height: 72px;
`;

const ControlBox = styled.div`
  position: absolute;
  bottom: 0;
  height: 118px;
  width: 100%;

  display: flex;
`;

const NaviLeft = styled.div`
  width: 160px;
  height: 100%;
`;

const NaviRight = styled.div`
  width: 145px;
  height: 100%;
`;

const PaginationBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 30px;
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
    <Section name='hero-section'>
      <Slider>
        <ImageBox imageNumber={imageNumber}>
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
        </ImageBox>
      </Slider>
      <Navbar />
      <ContactFormBox>
        <ContactForm />
      </ContactFormBox>
      <DescriptionBox>
        <Title>Firma</Title>
        <Info>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit. Ut auctor
        </Info>
      </DescriptionBox>
      <ControlBox>
        <NaviLeft onClick={() => updateImage()}>
          <NavigationButton direction='left' />
        </NaviLeft>
        <NaviRight onClick={() => updateImage(true)}>
          <NavigationButton direction='right' />
        </NaviRight>
        <PaginationBox>
          <Pagination currentValue={timer} maxValue={sliderTime} />
        </PaginationBox>
      </ControlBox>
    </Section>
  );
};

export default HeroSection;
