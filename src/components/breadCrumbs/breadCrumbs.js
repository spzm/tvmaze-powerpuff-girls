import React from 'react';
import PropTypes from 'prop-types';

/**
 * Simple BreadCrumbs implementation that requires
 * manual set of crumbs item.
 */
const BreadCrumbs = ({ children }) => {
  const crumbsItems = React.Children.toArray(children);
  const lastIndex = crumbsItems.length - 1;

  return (
    <div className="breadscrumbs">
      {crumbsItems
        .map((item, index) => {
          const delimeter = index !== lastIndex ? ' > ' : '';

          return (
            <span key={`crumbitem-${index}`}>{item}{delimeter}</span>
          );
        })
      }
    </div>
  );
};

BreadCrumbs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default BreadCrumbs;
