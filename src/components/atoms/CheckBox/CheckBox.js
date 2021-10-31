import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
`;

const Input = styled.input`
  width: 22px;
  height: 22px;
`;

const Label = styled.div`
  margin-left: 16px;
  color: ${({ theme }) => theme.color.inputCheck};
  font-size: 10px;
  line-height: 16px;
`;

const CheckBox = ({ text }) => (
  <Container>
    <Input type='checkbox' />
    <Label>{text}</Label>
  </Container>
);

CheckBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CheckBox;
