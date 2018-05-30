import React from 'react';
import PropTypes from 'prop-types';

import './mainSection.css';

const MainSection = ({ children }) => (
  <main className="main-section">{children}</main>
);

MainSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainSection;
