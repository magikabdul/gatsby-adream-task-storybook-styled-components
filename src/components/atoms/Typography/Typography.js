import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color, theme }) =>
    color === 'primary' ? `${theme.color.black}` : `${theme.color.white}`};
  white-space: pre-wrap;
  line-height: 72px;
`;

const Typography = ({ fontSize, fontWeight, text, variant, color }) => (
  <>
    {variant === 'h1' && (
      <Box as={'h1'} fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {text}
      </Box>
    )}

    {variant === 'h2' && (
      <Box as={'h2'} fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {text}
      </Box>
    )}

    {variant === 'h3' && (
      <Box as={'h3'} fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {text}
      </Box>
    )}

    {variant === 'h4' && (
      <Box as={'h4'} fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {text}
      </Box>
    )}

    {variant === 'p' && (
      <Box fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {text}
      </Box>
    )}
  </>
);

Typography.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOf(['normal', 'bold']),
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'p']),
  color: PropTypes.oneOf(['primary', 'secondary']),
};

Typography.defaultProps = {
  fontSize: '18px',
  fontWeight: 'normal',
  variant: 'p',
  color: 'primary',
};

export default Typography;
