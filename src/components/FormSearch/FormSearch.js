import React, { Component } from 'react';
import './FormSearch.css'


class FormSearch extends Component {
    constructor() {
      super();
      this.state = { 
        ingredient: '' 
      }
    }

    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value})
    }

    submitRecipe = (e) => {
      e.preventDefault();

      this.props.getRecipe(this.state.ingredient);

      this.emptyInputs();
    }

    emptyInputs = () => {
      this.setState({ ingredient : ''});
    }

    render() {
        return(
            <form>
                <input 
                   className='search-recipe'
                   placeholder='What ingredient do you fancy tonight?..'
                   type='text' 
                   name='ingredient'
                   value={this.state.ingredient}
                   onChange={(e) => this.handleChange(e)}
                   />
                <button className='search-btn' onClick={(e) => this.submitRecipe(e)}>Search</button>
            </form>
        )
    }
}

export default FormSearch;