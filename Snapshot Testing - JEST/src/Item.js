import React from 'react';
import PropTypes from 'prop-types';
function Items(props) {
    const { items = [] } = props;
  
    if (!items.length) {
      return <span className="empty-message">No items in list</span>;
    }
  
    if (items.length === 1) {
      return <span className="item-message">{items[0]}</span>;
    }
  
    return (
      <ul>
        {items.map(item => <li key={item} className="item-message">{item}</li>)}
      </ul>
    );
  }

Items.propTypes = {
  items: PropTypes.array,
};

Items.defaultProps = {
  items: [],
};

export default Items;