import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  cursor: pointer;

  &:hover > div {
    &:after,
    &:before {
      width: 50%;
    }
  }
`;

const Button = styled.div`
  border: none;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  letter-spacing: -0.32px;
`;

const Underline = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  display: block;
  margin-top: 12px;

  &:before,
  &:after {
    position: absolute;
    background-color: white;
    width: 0;
    height: 1px;
    content: '';
    transition: all 0.3s ease-in-out;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

const MenuButton = ({ label }) => {
  return (
    <Container>
      <Button>{label}</Button>
      <Underline />
    </Container>
  );
};

MenuButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default MenuButton;
