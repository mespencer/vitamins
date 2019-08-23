import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './link-styles';

const Link = ({
  children, href, openInNewTab, button, buttonType, styles,
}) => (
  <a
    href={href}
    target={openInNewTab ? '_blank' : null}
    rel={openInNewTab ? 'noopener' : null}
    {...css(button ? styles[`button-${buttonType}`] : styles.link)}
  >
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
  button: PropTypes.bool,
  buttonType: PropTypes.string,
};

Link.defaultProps = {
  openInNewTab: false,
  button: false,
  buttonType: 'outline',
};

export default style(Link);
