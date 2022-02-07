import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`

  @media only screen and (min-width: 1920px) {
    width: 100%;
    height: 310px;
    background-color: ${({ theme }) => theme.color.white};
    padding: 10px 0;
  }
`;

const IconBox = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & img {
    height: 100%;
  }

  @media only screen and (min-width: 1920px) {
    height: 136px;
    width: 136px;
    position: relative;
    display: block;
    
    & img {
      position: absolute;
      bottom: 0;
      width: unset;
      height: unset;
    }
  }
`;

const Label = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xs};
  width: 80%;
  margin: 10px auto 0;

  @media only screen and (min-width: 1920px) {
    text-align: left;
    margin-top: ${({ variant }) => (variant === 'high' ? '45px' : '36px')};
    font-size: ${({ theme }) => theme.font.size.m};
    line-height: 38px;
    white-space: pre-wrap;
    width: unset;
  }
`;

const Stamp = ({ icon, label, variant }) => (
  <Container>
    <IconBox>
      <img
        src={icon}
        alt='stamp icon'
      />
    </IconBox>
    <Label variant={variant}>{label}</Label>
  </Container>
);

Stamp.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['high', 'short']),
};

Stamp.defaultProps = {
  variant: 'high',
};

export default Stamp;
