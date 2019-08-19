import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './styles';

const Button = ({ children, styles }) => (
  <button type="button" {...css(styles.button)}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default style(Button);
