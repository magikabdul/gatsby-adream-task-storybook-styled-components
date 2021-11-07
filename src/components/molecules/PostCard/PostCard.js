import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 450px;
`;

const ImageBox = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  width: 450px;
  height: 334px;
`;

const DateBox = styled.div`
  font-size: ${({ theme }) => theme.font.size.s};
  margin-top: 33px;
`;

const DescriptionBox = styled.h3`
  margin-top: 13px;
  line-height:39px;
`;

const MoreBox = styled.button`
  margin-top: 29px;
  border: none;
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.5px;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;
`;

const PostCard = ({ image, date, description, onClick }) => (
  <Container>
    <ImageBox image={image} />
    <DateBox>{date}</DateBox>
    <DescriptionBox>{description}</DescriptionBox>
    <MoreBox onClick={onClick}>Więcej</MoreBox>
  </Container>
);

PostCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

PostCard.defaultProps = {
  onClick: null,
}

export default PostCard;
