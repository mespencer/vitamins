import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './image-styles';

const Image = ({
  src, alt, circle, styles,
}) => (
  <img src={src} alt={alt} {...css(styles.image, circle ? styles.circle : false)} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  circle: PropTypes.bool,
};

Image.defaultProps = {
  circle: false,
};

export default style(Image);
