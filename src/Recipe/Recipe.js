import React from 'react';
import './Recipe.css'

const Recipe = ({title, publisher, image, recipeLink}) => {
    return(
        <section className='recipe'>
          <h3> {title} </h3>
          <img className='recipe-img' src={image} alt={title}/>
          <p> Publisher: {publisher}</p>
          <button className='view-recipe-btn'><a href={recipeLink}>View Recipe</a></button>
        </section>
    )
}

export default Recipe;