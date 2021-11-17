import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import NavigationButton from '../../atoms/NavigationButton/NavigationButton'
import { GatsbyImage } from 'gatsby-plugin-image'

const Container = styled.div`
  position: relative;
  width: 770px;
  height: ${({ variant }) => (variant === 'big' ? `495px` : `362px`)};

  & > div img {
    transition: transform 0.3s ease-in-out !important;
  }

  &:hover > div img {
    transform: scale(1.2);
  }

  &:hover > div:last-child {
    & div:last-child {
      &:after {
        width: 100%;
      }

      color: ${({ theme }) => theme.color.white};
    }
  }
}
`

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
`

const TextBox = styled.div`
  margin: 25px;
  height: 100%;
`

const YellowSquare = styled.div`
  width: 42px;
  height: 42px;
  background-color: ${({ theme }) => theme.color.yellow};
`

const Title = styled.h3`
  margin: -35px 0 0 10px;
  color: inherit;
  white-space: pre-wrap;
  line-height: 38px;
`

const Divider = styled.div`
  margin: 22px 0 0 10px;
  width: 49px;
  height: 5px;

  background-color: ${({ theme }) => theme.color.black};
`

const Info = styled.div`
  margin: 7px 0 0 10px;
  color: ${({ theme }) => theme.color.almostBlack};
  font-size: ${({ theme }) => theme.font.size.s};
`

const ButtonBox = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;

  bottom: 0;
  right: 0;
`

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
)

Card.propTypes = {
  variant: PropTypes.oneOf(['big', 'small']),
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  onClick: PropTypes.func,
}

Card.defaultProps = {
  variant: 'big',
  onClick: undefined,
}

export default Card
