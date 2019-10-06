import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'react-with-styles/lib/hooks/useStyles';
import style from './box-styles';

const Box = ({ children, display }) => {
  const { css, styles } = useStyles({ stylesFn: style });

  return (
    <div {...css(styles.box, styles[display])}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(['block', 'inline']),
};

Box.defaultProps = {
  display: 'block',
};

export default Box;
