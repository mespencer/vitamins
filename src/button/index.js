import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './button-styles';

const Button = ({
  children, onClick, type, disabled, display, styles,
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    {...css(styles[type], styles[display], disabled && styles[`disabled-${type}`])}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['outline', 'filled', 'text']),
  disabled: PropTypes.bool,
  display: PropTypes.oneOf(['block', 'inline']),
};

Button.defaultProps = {
  type: 'outline',
  disabled: false,
  display: 'inline',
};

export default style(Button);
