import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'react-with-styles/lib/hooks/useStyles';
import style from './image-styles';

const Image = ({
  src, alt, shape, display,
}) => {
  const { css, styles } = useStyles({ stylesFn: style() });

  return (
    <img src={src} alt={alt} {...css(styles.image, styles[display], styles[shape])} />
  );
};

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

export default Image;
