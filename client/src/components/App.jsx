import React from 'react';
import axios from 'axios';

import GroceryList from './GroceryList';
import GroceryAdd from './GroceryAdd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    }

    this.addGrocery = this.addGrocery.bind(this);
  }

  componentDidMount() {
    this.getAllGroceries();
  }

  getAllGroceries() {
    axios.get('/groceries')
      .then(results => this.setState({ groceries: results.data }))
      .catch(err => console.log('error fetching groceries:', err));
  }

  addGrocery(grocery) {
    axios.post('/groceries', grocery)
      .then(results => this.getAllGroceries())
      .catch(err => console.log('error posting grocery:', err));
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <GroceryAdd 
          handleAddGrocery={this.addGrocery}
        />
        <GroceryList list={this.state.groceries} />
      </div>
    )
  }
}

export default App;