import foods from './foods.json';
import FoodBox from './FoodBox';
import React, { Component } from 'react';

class App extends Component {
  state = {
    foods: foods,
    showForm: false,
  };

  showFood = () => {
    return this.state.foods.map((eachFood) => {
      return <FoodBox {...eachFood} />;
    });
  };

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>Add Foods</button>
        {this.state.showForm ? (
          <form>
            <input />
          </form>
        ) : (
          'No form'
        )}
        {this.showFood()}
      </div>
    );
  }
}
export default App;
