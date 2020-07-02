import foods from './foods.json';
import FoodBox from './FoodBox';
import React, { Component } from 'react';

class App extends Component {
  state = {
    foods: foods
  };

  showFood = () => {
    return this.state.foods.map(eachFood => {
      return <FoodBox {...eachFood} />;
    });
  };
  render() {
    return <div>{this.showFood()}</div>;
  }
}

export default App;
