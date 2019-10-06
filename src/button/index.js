import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'react-with-styles/lib/hooks/useStyles';
import style from './button-styles';

const Button = ({
  children, onClick, type, disabled, display,
}) => {
  const { css, styles } = useStyles({ stylesFn: style });

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...css(styles[type], styles[display], disabled && styles[`disabled-${type}`])}
    >
      {children}
    </button>
  );
};

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

export default Button;
