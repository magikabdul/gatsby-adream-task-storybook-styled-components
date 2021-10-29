import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.black};
  border: none;

  &:hover {
    & > div > span {
      color: ${({ theme }) => theme.color.black};
    }

    & > div:after {
      width: 100%;
      right: auto;
    }
  }
`;

const LabelBox = styled.div`
  position: relative;
  height: 100%;
  flex: 1;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  z-index: 1;

  transition: all 0.3s ease-in-out;

  &:after {
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.color.yellow};
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: bold;
  letter-spacing: 3.6px;

  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};

  transition: all 0.3s ease-in-out;
`;

const IconBox = styled.div`
  width: 78px;
  height: 78px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  width: 26px;
  height: 26px;

  color: ${({ theme }) => theme.color.white};
`;

const Button = ({ text, icon, onClick }) => (
  <Container onClick={onClick}>
    <LabelBox>
      <Label>{text}</Label>
    </LabelBox>
    {icon && (
      <IconBox>
        <Icon icon={icon}>{icon}</Icon>
      </IconBox>
    )}
  </Container>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  icon: null,
  onClick: undefined,
};

export default Button;
