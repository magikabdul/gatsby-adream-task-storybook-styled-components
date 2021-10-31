import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center
`

const Number = styled.div`
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: bold;
  
  color: ${({ theme }) => theme.color.white};
`

const Bar = styled.div`
  position: relative;
  margin: 0 18px;
  width: 209px;
  height: 6px;
  
  background-color: ${({ theme }) => theme.color.black};
  
  &:after {
    position: absolute;
    background-color: ${({ theme }) => theme.color.white};
    transition: all 0.3s ease-in-out;
    content: '';
    height: 100%;
    width: ${({ currentSlide, totalSlides }) => `calc(${currentSlide} / ${totalSlides} * 100%)`};
  }
`

const getNumber = (x) => x < 10 ? `0${x}` : `${x}`;

const Pagination = ({currentSlide, totalSlides}) => (
  <Container>
    <Number>{getNumber(currentSlide)}</Number>
    <Bar currentSlide={currentSlide} totalSlides={totalSlides} />
    <Number>{getNumber(totalSlides)}</Number>
  </Container>
)

Pagination.propTypes = {
  currentSlide: PropTypes.number,
  totalSlides: PropTypes.number,
}

Pagination.defaultProps = {
  currentSlide: 1,
  totalSlides: 3
}

export default Pagination;
