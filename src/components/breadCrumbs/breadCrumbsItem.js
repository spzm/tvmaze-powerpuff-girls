import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreadCrumbsItem = ({ to, children }) => {
  if (to) {
    return (
      <span className="breadcrumbs__item breadcrumbs__item_active">
        <Link alt="" to={to}>{children}</Link>
      </span>
    );
  }

  return (
    <span className="breadcrumbs__item">{children}</span>
  );
};

BreadCrumbsItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default BreadCrumbsItem;
