import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './styles';

const Button = ({
  children, onClick, type, disabled, styles,
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    {...css(styles[type], disabled && styles[`disabled-${type}`])}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'outline',
  disabled: false,
};

export default style(Button);
