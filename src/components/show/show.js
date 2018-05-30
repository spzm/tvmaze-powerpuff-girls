import React from 'react';
import PropTypes from 'prop-types';

import Cover from '../cover';
import ShowDescription from './showDescription';

import './show.css';

const Show = ({
  name, description, mediumCover, largeCover,
}) => (
  <article className="show__container">
    <header className="show__header"><h2 className="show__header">{name}</h2></header>
    <section className="show__content">
      <Cover alt="Show cover" coverName={name} mediumCover={mediumCover} largeCover={largeCover} />
      <ShowDescription text={description} />
    </section>
  </article>
);

Show.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mediumCover: PropTypes.string,
  largeCover: PropTypes.string,
};

export default Show;
