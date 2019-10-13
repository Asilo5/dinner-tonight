import React from 'react';
import './RecipeContainer.css';
import Recipe from '../Recipe/Recipe';

const RecipeContainer = (props) => {
  const recipes = props.recipes.map((recipe) => {
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
    {recipes}
    </section>
  )
}

export default RecipeContainer;