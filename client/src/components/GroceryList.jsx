import React from 'react';

import GroceryItem from './GroceryItem';

const GroceryList = props => (
  <div className="groceries">
    {props.list.map(
      item => <GroceryItem key={item.id} item={item} />
    )}
  </div>
);

export default GroceryList;
