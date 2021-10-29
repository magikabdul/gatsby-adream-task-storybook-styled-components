import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  padding: 15px 20px;
  border: ${({ theme }) => `1px solid ${theme.color.black}`};

  color: ${({ theme }) => theme.color.input};
  font-size: ${({ theme }) => theme.font.size.s};

  width: 100%;
`;

const InputField = ({ placeholder }) => (
  <>
    <Input type='text' placeholder={placeholder} />
  </>
);

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
