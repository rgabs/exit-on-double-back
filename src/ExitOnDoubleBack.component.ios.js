import React from 'react';
import PropTypes from 'prop-types';

const EmptyWrapperComponent = ({children}) => children;

EmptyWrapperComponent.propTypes = {
  children: PropTypes.element.isRequired //accepts single child
};

export default EmptyWrapperComponent;
