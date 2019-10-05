import React from 'react';
import Recipe from '../Recipe/Recipe';

const RecipeContainer = (props) => {
//   const recipes = props.map((recipe) => {
//       return <Recipe key={recipe.recipe_id} 
//                      id={recipe.recipe_id}
//                      title={recipe.title}
//                      />
//   })
  return (
    <section className='recipe-container'>
    {/* {recipes} */}
    <Recipe />
    </section>
  )
}

export default RecipeContainer;