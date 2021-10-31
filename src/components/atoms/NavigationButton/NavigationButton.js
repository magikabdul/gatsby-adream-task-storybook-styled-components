import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};

  &:after {
    position: absolute;
    z-index: -1;
    content: '';
    top: 0;
    left: ${({ direction }) => direction === 'right' && '0'};
    right: ${({ direction }) => direction === 'left' && '0'};
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.color.black};
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &:after {
      width: 100%;
    }

    > div {
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  color: ${({ theme }) => theme.color.black};
  transition: all 0.3s ease-in-out;
`;

const NavigationButton = ({ direction }) => (
  <Container direction={direction}>
    <IconBox>
      {direction === 'right' ? (
        <svg viewBox='0 0 448 512'>
          <path
            fill='currentColor'
            d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'
          />
        </svg>
      ) : (
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='arrow-left'
          className='svg-inline--fa fa-arrow-left fa-w-14'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            fill='currentColor'
            d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z'
          />
        </svg>
      )}
    </IconBox>
  </Container>
);

NavigationButton.propTypes = {
  direction: PropTypes.oneOf(['right', 'left']),
};

NavigationButton.defaultProps = {
  direction: 'right',
};

export default NavigationButton;
