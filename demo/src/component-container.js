import React from 'react';
import PropTypes from 'prop-types';

const ComponentContainer = ({ title, children, isVariation }) => {
  const Element = isVariation ? 'h3' : 'h2';
  return (
    <div>
      <Element id={title.replace(/ /g, '-')}>{title}</Element>
      {children}
    </div>
  );
};

ComponentContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isVariation: PropTypes.bool,
};

ComponentContainer.defaultProps = {
  isVariation: false,
};

export default ComponentContainer;
