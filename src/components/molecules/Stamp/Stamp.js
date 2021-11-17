import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 310px;
  background-color: ${({ theme }) => theme.color.white};

  padding: 10px 0;
`;

const IconBox = styled.div`
  height: 136px;
  width: 136px;
  position: relative;
`;

const Label = styled.div`
  margin-top: ${({ variant }) => (variant === 'high' ? '45px' : '36px')};
  font-size: ${({ theme }) => theme.font.size.m};
  line-height: 38px;
  white-space: pre-wrap;
`;

const Stamp = ({ icon, label, variant }) => (
  <Container>
    <IconBox>
      <img
        style={{ position: 'absolute', bottom: 0 }}
        src={icon}
        alt='stamp icon'
      />
    </IconBox>
    <Label variant={variant}>{label}</Label>
  </Container>
);

Stamp.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['high', 'short']),
};

Stamp.defaultProps = {
  variant: 'high',
};

export default Stamp;
