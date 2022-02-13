import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationButton from 'src/components/atoms/NavigationButton/NavigationButton';
import { StaticImage } from 'gatsby-plugin-image';

const SectionGalleryWrapper = styled.section`
  margin: 24px 0 0 0;

  @media only screen and (min-width: 1920px) {
    position: relative;
    margin: 138px 0 0 0;
    width: 1920px;
    height: 888px;
    overflow: hidden;
  }
`;

const Slider = styled.div`
  @media only screen and (min-width: 1920px) {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    transform: ${({ galleryShift }) => galleryShift && `translateX(-800px)`};
  }
`;

const ButtonLeft = styled.div`
  display: none;

  @media only screen and (min-width: 1920px) {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    left: 15px;
    top: calc(50% - 65px);
  }
`;

const ButtonRight = styled.div`
  display: none;

  @media only screen and (min-width: 1920px) {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    right: 15px;
    top: calc(50% - 65px);
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.m};
  text-align: center;
  margin-bottom: 24px;

  @media only screen and (min-width: 1920px) {
    font-size: ${({ theme }) => theme.font.size.xl};
    text-align: left;
    margin-bottom: unset;
    transform: translate(1500px, 0);
  }
`;

const Line = styled.div`
  display: none;

  @media only screen and (min-width: 1920px) {
    display: block;
    position: relative;
    width: 450px;
    border: ${({ theme }) => `10px solid ${theme.color.black}`};
    transform: translate(1295px, 34px);
    z-index: 1;
  }
`;

const GalleryWrapperFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  
  @media only screen and (min-width: 1920px) {
    display: none;
  }
`;

const GalleryWrapper = styled.div`
  display: none;

  @media only screen and (min-width: 1920px) {
    display: grid;
    row-gap: 20px;
    transform: translate(0, -118px);
    column-gap: 30px;
    grid-template-columns: 625px 770px 1266px;
    width: 2721px;
    height: 100%;
  }
`;

const GalleryColumn1 = styled.div``;

const GalleryColumn2 = styled.div`
  display: grid;
  row-gap: 20px;

  @media only screen and (min-width: 1920px) {
    grid-template-rows: 547px 321px;
    row-gap: 20px;
  }
`;

const GalleryColumn3 = styled.div`
  display: grid;
  row-gap: 20px;

  @media only screen and (min-width: 1920px) {
    grid-template-rows: 288px 578px;
    row-gap: 20px;
  }
`;

const GalleryRow1 = styled.div`
  @media only screen and (min-width: 1920px) {
    display: grid;
    grid-template-columns: 436px 800px;
    column-gap: 30px;
  }
`;

const GalleryRow2 = styled.div`
  display: grid;
  row-gap: 20px;

  @media only screen and (min-width: 1920px) {
    grid-template-columns: 800px 436px;
    column-gap: 30px;
  }
`;

const ImageBox = styled.div`
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: 700px) {
    width: 45%;
  }

  @media only screen and (min-width: 1200px) {
    width: 30%;
  }

  @media only screen and (min-width: 1920px) {
    width: 100%;
    height: 100%;
    margin: unset;
    overflow: hidden;

    & > div img {
      transition: transform 0.3s ease-in-out !important;
    }

    &:hover > div img {
      transform: scale(1.2);
    }
  }
`;

const GallerySection = () => {
  const [galleryShift, setGalleryShift] = useState(false);
  return (
    <SectionGalleryWrapper name='gallery-section'>
      <ButtonLeft onClick={() => setGalleryShift(false)}>
        <NavigationButton direction='left' />
      </ButtonLeft>
      <ButtonRight onClick={() => setGalleryShift(true)}>
        <NavigationButton direction='right' />
      </ButtonRight>
      <Slider galleryShift={galleryShift}>
        <Title>Galeria</Title>
        <Line />
        <GalleryWrapperFlex>
          <ImageBox>
            <StaticImage
              src='../../../assets/images/gallery/gallery-1.png'
              alt='office image'
              objectPosition='23% 0'
              style={{ height: '100%' }}
              placeholder='blurred'
            />
          </ImageBox>
          <ImageBox>
            <StaticImage
              src='../../../assets/images/gallery/gallery-2.png'
              alt='office image'
              placeholder='blurred'
            />
          </ImageBox>
          <ImageBox>
            <StaticImage
              src='../../../assets/images/gallery/gallery-3.png'
              alt='office image'
              placeholder='blurred'
            />
          </ImageBox>
          <ImageBox>
            <StaticImage
              src='../../../assets/images/gallery/gallery-4.png'
              alt='office image'
              placeholder='blurred'
            />
          </ImageBox>
          <ImageBox>
            <StaticImage
              src='../../../assets/images/gallery/gallery-5.png'
              alt='office image'
              placeholder='blurred'
            />
          </ImageBox>
          <ImageBox>
            <StaticImage
              src='../../../assets/images/gallery/gallery-6.png'
              alt='office image'
              objectPosition='0 0'
              style={{ height: '100%' }}
              placeholder='blurred'
            />
          </ImageBox>
        </GalleryWrapperFlex>
        <GalleryWrapper>
          <GalleryColumn1>
            <ImageBox>
              <StaticImage
                src='../../../assets/images/gallery/gallery-1.png'
                alt='office image'
                objectPosition='23% 0'
                style={{ height: '100%' }}
                placeholder='blurred'
              />
            </ImageBox>
          </GalleryColumn1>
          <GalleryColumn2>
            <ImageBox>
              <StaticImage
                src='../../../assets/images/gallery/gallery-2.png'
                alt='office image'
                placeholder='blurred'
              />
            </ImageBox>
            <ImageBox>
              <StaticImage
                src='../../../assets/images/gallery/gallery-3.png'
                alt='office image'
                placeholder='blurred'
              />
            </ImageBox>
          </GalleryColumn2>
          <GalleryColumn3>
            <GalleryRow1>
              <div />
              <ImageBox>
                <StaticImage
                  src='../../../assets/images/gallery/gallery-4.png'
                  alt='office image'
                  placeholder='blurred'
                />
              </ImageBox>
            </GalleryRow1>
            <GalleryRow2>
              <ImageBox>
                <StaticImage
                  src='../../../assets/images/gallery/gallery-5.png'
                  alt='office image'
                  placeholder='blurred'
                />
              </ImageBox>
              <ImageBox>
                <StaticImage
                  src='../../../assets/images/gallery/gallery-6.png'
                  alt='office image'
                  objectPosition='0 0'
                  style={{ height: '100%' }}
                  placeholder='blurred'
                />
              </ImageBox>
            </GalleryRow2>
          </GalleryColumn3>
        </GalleryWrapper>
      </Slider>
    </SectionGalleryWrapper>
  );
};

export default GallerySection;
