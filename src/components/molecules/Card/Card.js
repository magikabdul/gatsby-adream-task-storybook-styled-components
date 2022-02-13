import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationButton from '../../atoms/NavigationButton/NavigationButton';
import { GatsbyImage } from 'gatsby-plugin-image';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  position: relative;

  @media only screen and (min-width: 500px) and (max-width: 1199px) {
    width: 100%;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    width: unset;
  }
  
  @media only screen and (min-width: 1920px) {
    margin: unset;
    width: 770px;
    height: ${({ variant }) => (variant === 'big' ? `495px` : `362px`)};
  }

  & > div img {
    @media only screen and (min-width: 1200px) {
      transition: transform 0.3s ease-in-out !important;
    }
  }

  &:hover > div img {
    @media only screen and (min-width: 1200px) {
      transform: scale(1.2);
    }
  }

  &:hover > div:last-child {
    @media only screen and (min-width: 1200px) {
      & div:last-child {
        &:after {
          width: 100%;
        }

        color: ${({ theme }) => theme.color.white};
      }
    }
  }
}
`;

const DescriptionBox = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};

  @media only screen and (min-width: 1920px) {
    top: ${({ variant }) => (variant === 'big' ? '29px' : 'unset')};
    bottom: ${({ variant }) => variant === 'small' && '29px'};
    left: 29px;
    min-width: 223px;
    min-height: 159px;
  }
`;

const TextBox = styled.div`
  margin: 8px;

  @media only screen and (min-width: 1920px) {
    margin: 25px;
  }
`;

const YellowSquare = styled.div`
  background-color: ${({ theme }) => theme.color.yellow};
  width: 24px;
  height: 24px;

  @media only screen and (min-width: 1200px) {
    width: 42px;
    height: 42px;
  }
`;

const Title = styled.h3`
  margin: -18px 0 0 10px;
  font-size: ${({ theme }) => theme.font.size.xs};

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    font-size: ${({ theme }) => theme.font.size.m};
  }

  @media only screen and (min-width: 1920px) {
    margin: -35px 0 0 10px;
    font-size: ${({ theme }) => theme.font.size.m};
    white-space: pre-wrap;
    line-height: 38px;
  }
`;

const Divider = styled.div`
  margin: 0 0 0 10px;
  width: 49px;
  height: 5px;
  background-color: ${({ theme }) => theme.color.black};

  @media only screen and (min-width: 1920px) {
    margin: 22px 0 0 10px;
  }
`;

const Info = styled.div`
  color: ${({ theme }) => theme.color.almostBlack};
  font-size: ${({ theme }) => theme.font.size.xs};
  margin: 7px 0 0 10px;

  @media only screen and (min-width: 1200px) {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

const ButtonBox = styled.div`
  display: none;

  @media only screen and (min-width: 1920px) {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    bottom: 0;
    right: 0;
  }
`;

const Card = ({ variant, title, info, image, onClick }) => (
  <Container variant={variant} onClick={onClick}>
    <GatsbyImage image={image} alt='office image' />
    <DescriptionBox variant={variant}>
      <TextBox>
        <YellowSquare />
        <Title>{title}</Title>
        <Divider />
        <Info>{info}</Info>
      </TextBox>
    </DescriptionBox>
    <ButtonBox>
      <NavigationButton direction='right' />
    </ButtonBox>
  </Container>
);

Card.propTypes = {
  variant: PropTypes.oneOf(['big', 'small']),
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  variant: 'big',
  onClick: undefined,
};

export default Card;
