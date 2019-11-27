import React from 'react';
import './Recipe.css';
import PropTypes from 'prop-types';

const Recipe = ({title, publisher, image, recipeLink}) => {
    return(
        <section className='recipe'>
          <h3> {title} </h3>
          <img className='recipe-img' src={image} alt={title}/>
          <p> By: {publisher}</p>
          <button className='view-recipe-btn'><a href={recipeLink}>View Recipe</a></button>
        </section>
    ) 
}

Recipe.propTypes = {
  title: PropTypes.string, 
  publisher: PropTypes.string, 
  image: PropTypes.string, 
  recipeLink: PropTypes.string
}

export default Recipe;