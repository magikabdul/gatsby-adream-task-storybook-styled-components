import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto 32px;
  width: 90%;

  @media only screen and (min-width: 1920px) {
    width: 450px;
    margin: 0 auto;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 200px;

  @media only screen and (min-width: 1920px) {
    width: 450px;
    height: 334px;
  }
`;

const DateBox = styled.div`
  font-size: ${({ theme }) => theme.font.size.xs};
  margin-top: 10px;

  @media only screen and (min-width: 1920px) {
    font-size: ${({ theme }) => theme.font.size.s};
    margin-top: 33px;
  }
`;

const DescriptionBox = styled.h3`
  font-size: ${({ theme }) => theme.font.size.xs};

  @media only screen and (min-width: 1920px) {
    font-size: ${({ theme }) => theme.font.size.m};
    margin-top: 13px;
    line-height: 39px;
  }
`;

const MoreBox = styled.button`
  border: none;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;

  @media only screen and (min-width: 1920px) {
    margin-top: 29px;
    
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.5px;
    
  }
`;

const PostCard = ({ image, date, description, onClick }) => (
  <Container>
    <ImageBox>{image}</ImageBox>
    <DateBox>{date}</DateBox>
    <DescriptionBox>{description}</DescriptionBox>
    <MoreBox onClick={onClick}>Więcej</MoreBox>
  </Container>
);

PostCard.propTypes = {
  image: PropTypes.element.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

PostCard.defaultProps = {
  onClick: null,
};

export default PostCard;
