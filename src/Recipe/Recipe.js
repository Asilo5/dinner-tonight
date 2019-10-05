import React from 'react';

const Recipe = (props) => {
    return(
        <section>
          <img className='recipe-img' src='' alt=''/>
          <h3> Recipe name </h3>
          <p> Published: </p>
          <button className='view-recipe-btn'>View Recipe</button>
        </section>
    )
}

export default Recipe;