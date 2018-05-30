import React from 'react';
import PropTypes from 'prop-types';


const ShowDescription = ({ text }) => (
  <article className="show__description" dangerouslySetInnerHTML={{ __html: text }} />
);

ShowDescription.propTypes = {
  text: PropTypes.string,
};

export default ShowDescription;
