import React from 'react';

const GroceryItem = ({ item }) => {
  // do some thing here;
  return (
    <div>
      <span> {item.name} </span>
      <span> {item.quantity} </span>
    </div>
  );
};

export default GroceryItem;