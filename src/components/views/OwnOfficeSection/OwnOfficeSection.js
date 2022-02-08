import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const SectionOwnOfficeWrapper = styled.section`
  margin: 48px 0 0;

  @media only screen and (min-width: 1920px) {
    position: relative;
    margin: 140px 0 0 175px;
  }
`;

const Title = styled.h1`
  margin: 24px auto 24px;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.m};
  width: 70%;

  @media only screen and (min-width: 1920px) {
    font-size: ${({ theme }) => theme.font.size.xl};
    text-align: left;
    position: absolute;
    top: 291px;
    white-space: pre-wrap;
    line-height: 75px;
    background-color: ${({ theme }) => theme.color.white};
    width: unset;
    margin: unset;
  }
`;

const Line = styled.div`
  @media only screen and (min-width: 1920px) {
    position: absolute;
    top: 613px;
    width: 610px;
    border: ${({ theme }) => `10px solid ${theme.color.black}`};
  }
`;

const Bars = styled.div`
  display: none;

  @media only screen and (min-width: 1920px) {
    display: block;
    position: absolute;
    left: 1280px;
    width: 290px;
    height: 145px;
  }
`;

const ImageBoxPhone = styled.div`
  @media only screen and (min-width: 1920px) {
    display: none;
  }
`;

const ImageBoxDesktopLarge = styled.div`
  display: none;

  @media only screen and (min-width: 1920px) {
    display: block;
    position: absolute;
    top: 72px;
    left: 160px;
    width: 1585px;
    height: 642px;
    z-index: -1;

    background-color: ${({ theme }) => theme.color.white};
  }
`;

const OwnOfficeSection = () => (
  <SectionOwnOfficeWrapper name='own-office-section'>
    <Title>
      Lorem ipsum
      <br />
      vs własne biuro
    </Title>
    <Line />
    <Bars>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='290'
        height='144.99'
        viewBox='0 0 290 144.99'
      >
        <g transform='translate(-617.05 -357.725)'>
          <rect
            className='a'
            width='144.995'
            height='8.528'
            transform='translate(617.05 494.186)'
          />
          <rect
            className='a'
            width='144.995'
            height='8.528'
            transform='translate(617.05 477.13)'
          />
          <rect
            className='a'
            width='144.995'
            height='8.528'
            transform='translate(617.05 460.068)'
          />
          <rect
            className='a'
            width='144.995'
            height='8.528'
            transform='translate(617.05 443.012)'
          />
          <rect
            className='a'
            width='144.995'
            height='8.528'
            transform='translate(617.05 425.956)'
          />
          <rect
            className='a'
            width='144.995'
            height='8.533'
            transform='translate(617.05 408.894)'
          />
          <rect
            className='a'
            width='144.995'
            height='8.528'
            transform='translate(617.05 391.838)'
          />
          <rect
            className='a'
            width='144.995'
            height='8.528'
            transform='translate(617.05 374.782)'
          />
          <rect
            className='a'
            width='144.995'
            height='8.528'
            transform='translate(617.05 357.725)'
          />
          <rect
            className='a'
            width='8.528'
            height='144.99'
            transform='translate(762.06 357.725)'
          />
          <rect
            className='a'
            width='8.528'
            height='144.99'
            transform='translate(779.117 357.725)'
          />
          <rect
            className='a'
            width='8.528'
            height='144.99'
            transform='translate(796.173 357.725)'
          />
          <rect
            className='a'
            width='8.528'
            height='144.99'
            transform='translate(813.234 357.725)'
          />
          <rect
            className='a'
            width='8.528'
            height='144.99'
            transform='translate(830.291 357.725)'
          />
          <rect
            className='a'
            width='8.528'
            height='144.99'
            transform='translate(847.347 357.725)'
          />
          <rect
            className='a'
            width='8.523'
            height='144.99'
            transform='translate(864.409 357.725)'
          />
          <rect
            className='a'
            width='8.528'
            height='144.99'
            transform='translate(881.465 357.725)'
          />
          <rect
            className='a'
            width='8.528'
            height='144.99'
            transform='translate(898.522 357.725)'
          />
        </g>
      </svg>
    </Bars>
    <ImageBoxPhone>
      <StaticImage
        src='../../../assets/images/own-office-2.jpg'
        alt='office look small'
        placeholder='blurred'
      />
    </ImageBoxPhone>
    <ImageBoxDesktopLarge>
      <StaticImage
        src='../../../assets/images/own-office.png'
        alt='office look'
        placeholder='blurred'
      />
    </ImageBoxDesktopLarge>
  </SectionOwnOfficeWrapper>
);

export default OwnOfficeSection;
