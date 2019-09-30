import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './image-styles';

const Image = ({
  src, alt, shape, display, styles,
}) => (
  <img src={src} alt={alt} {...css(styles.image, styles[display], styles[shape])} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['rounded', 'circle', 'square']),
  display: PropTypes.oneOf(['block', 'inline']),
};

Image.defaultProps = {
  shape: 'rounded',
  display: 'inline',
};

export default style(Image);
