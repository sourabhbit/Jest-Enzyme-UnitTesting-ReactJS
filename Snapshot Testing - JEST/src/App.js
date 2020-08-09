import React, { Component } from 'react';
import Items from './Components/Items';

class App extends Component {
  render() {
    const items = [
      'Sourabh',
      'Alpana',
      'Sagar'
    ];
    return (
      <Items items={items} />
    );
  }
}

export default App;