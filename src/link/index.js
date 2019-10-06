import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'react-with-styles/lib/hooks/useStyles';
import style from './link-styles';

const Link = ({
  children, href, openInNewTab, button, buttonType, display,
}) => {
  const { css, styles } = useStyles({ stylesFn: style });

  return (
    <a
      href={href}
      target={openInNewTab ? '_blank' : null}
      rel={openInNewTab ? 'noopener' : null}
      {...css(button ? styles[`button-${buttonType}`] : styles.link, styles[display])}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
  button: PropTypes.bool,
  buttonType: PropTypes.oneOf(['outline', 'filled', 'text']),
  display: PropTypes.oneOf(['block', 'inline']),
};

Link.defaultProps = {
  openInNewTab: false,
  button: false,
  buttonType: 'outline',
  display: 'inline',
};

export default Link;
