import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './box-styles';

const Box = ({ children, styles }) => (
  <div {...css(styles.box)}>
    {children}
  </div>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default style(Box);
