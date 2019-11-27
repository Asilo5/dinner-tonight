import React, { Component } from 'react';
import './App.css';
import FormSearch from '../FormSearch/FormSearch';
import RecipeContainer from '../RecipeContainer/RecipeContainer';

const API_KEY = '2328b6e1ad7d799035a86bee44248fd1';

class App extends Component {
  constructor() { 
    super();
    this.state = {
      recipes: []
    }
  }

  getRecipe = async (ingredient) => {
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${ingredient}&count=12`);
    const data = await api_call.json(); 
    this.setState({ recipes : data.recipes });
  }

  render() {
    return (
      <section className='App'>
        <header className='App-header'>
          <h1> Dinner Tonight </h1>
        </header>
        <FormSearch getRecipe={this.getRecipe}/>
        { this.state.recipes.length === 0 ? <p className='empty-message'> Please search for your dinner first.. </p> : <RecipeContainer recipes={this.state.recipes}/>}
      </section>
    )
  }
}

export default App;
