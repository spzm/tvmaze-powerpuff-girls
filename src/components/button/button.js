import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const emptyHandler = () => {};

const Button = ({
  onClick = emptyHandler,
  children,
}) => (
  <button
    className="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default Button;
