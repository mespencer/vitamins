import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './box-styles';

const Box = ({ children, display, styles }) => (
  <div {...css(styles.box, styles[display])}>
    {children}
  </div>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.string,
};

Box.defaultProps = {
  display: 'block',
};

export default style(Box);
