import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ children }) => (
  <div className="error">
    <h3>There is an error happend</h3>
    {children}
  </div>
);

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ErrorMessage;
