import React from 'react';
import './RecipeContainer.css';
import Recipe from '../Recipe/Recipe';
import PropTypes from 'prop-types';

const RecipeContainer = ({ recipes }) => {
  const recipe = recipes.map((recipe) => {
      return <Recipe key={recipe.recipe_id} 
                     id={recipe.recipe_id}
                     title={recipe.title}
                     publisher={recipe.publisher}
                     image={recipe.image_url}
                     recipeLink={recipe.source_url}
                     />
    })
  return ( 
    <section className='recipe-container'>
    {recipe}
    </section>
  )
}

Recipe.propTypes = {
  recipes: PropTypes.array
}

export default RecipeContainer;