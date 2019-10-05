import React from 'react';
import './Recipe.css'

const Recipe = ({title, publisher, image, recipeLink}) => {
    return(
        <section className='recipe'>
          <img className='recipe-img' src={image} alt={title}/>
          <h3> {title} </h3>
          <p> Publisher: {publisher}</p>
          <button className='view-recipe-btn'><a href={recipeLink}>View Recipe</a></button>
        </section>
    )
}

export default Recipe;