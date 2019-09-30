import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './image-styles';

const Image = ({
  src, alt, shape, styles,
}) => (
  <img src={src} alt={alt} {...css(styles.image, styles[shape])} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  shape: PropTypes.string,
};

Image.defaultProps = {
  shape: 'rounded',
};

export default style(Image);
