import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'components';

const IndexLink = ({ title }) => (
  <Link href={`#${title.replace(/ /g, '-')}`} button buttonType="text" display="block">{title}</Link>
);

IndexLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default IndexLink;
