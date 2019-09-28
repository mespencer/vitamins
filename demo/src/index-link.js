import React from 'react';
import PropTypes from 'prop-types';
import { Link, Box } from 'components';

const IndexLink = ({ title }) => (
  <Box>
    <Link href={`#${title.replace(/ /g, '-')}`} button buttonType="text">{title}</Link>
  </Box>
);

IndexLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default IndexLink;
