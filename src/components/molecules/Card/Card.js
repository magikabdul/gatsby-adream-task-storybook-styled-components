import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationButton from '../../atoms/NavigationButton/NavigationButton';
import { GatsbyImage } from 'gatsby-plugin-image';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  position: relative;

  @media only screen and (min-width: 1920px) {
    margin: unset;
    width: 770px;
    height: ${({ variant }) => (variant === 'big' ? `495px` : `362px`)};
  }

  & > div img {
    @media only screen and (min-width: 1920px) {
      transition: transform 0.3s ease-in-out !important;
    }
  }

  &:hover > div img {
    @media only screen and (min-width: 1920px) {
      transform: scale(1.2);
    }
  }

  &:hover > div:last-child {
    @media only screen and (min-width: 1920px) {
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
  top: ${({ variant }) => variant === 'big' && '29px'};
  bottom: ${({ variant }) => variant === 'small' && '29px'};
  left: 29px;

  min-width: 223px;
  min-height: 159px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};

  z-index: 1;
  
  @media only screen and (max-width: 500px) {
    top: 8px;
    left: 8px;
    bottom: unset;
    min-width: unset;
    min-height: unset;
  }
`;

const TextBox = styled.div`
  margin: 25px;
  height: 100%;

  @media only screen and (max-width: 500px) {
    margin: 8px;
  }
`;

const YellowSquare = styled.div`
  width: 42px;
  height: 42px;
  background-color: ${({ theme }) => theme.color.yellow};

  @media only screen and (max-width: 500px) {
    width: 24px;
    height: 24px;
  }
`;

const Title = styled.h3`
  margin: -35px 0 0 10px;
  color: inherit;
  white-space: pre-wrap;
  line-height: 38px;

  @media only screen and (max-width: 500px) {
    margin: -28px 0 0 10px;
    font-size: ${({ theme }) => theme.font.size.xs};
    white-space: unset;
  }
`;

const Divider = styled.div`
  margin: 22px 0 0 10px;
  width: 49px;
  height: 5px;

  background-color: ${({ theme }) => theme.color.black};

  @media only screen and (max-width: 500px) {
    margin: -5px 0 0 10px;
  }
`;

const Info = styled.div`
  margin: 7px 0 0 10px;
  color: ${({ theme }) => theme.color.almostBlack};
  font-size: ${({ theme }) => theme.font.size.s};

  @media only screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;

  bottom: 0;
  right: 0;

  @media only screen and (max-width: 500px) {
    display: none;
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
