import React, { Component } from 'react';
import './App.css';
import FormSearch from './FormSearch/FormSearch';
import RecipeContainer from './RecipeContainer/RecipeContainer';

const API_KEY = '2328b6e1ad7d799035a86bee44248fd1';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }


  getRecipe = async (e) => {
    e.preventDefault(); 
    const recipeName = e.target.elements.recipeName.value;
    console.log(recipeName)

    const api_call= await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken%20breast&page=2`);

    const data= await
  }


  render() {
    return (
      <section className='App'>
        <header className='App-header'>
          <h1> Recipe App </h1>
        </header>
        <FormSearch getRecipe={this.getRecipe}/>
        <RecipeContainer recipes={this.state}/>
      </section>
    )
  }
}

export default App;
