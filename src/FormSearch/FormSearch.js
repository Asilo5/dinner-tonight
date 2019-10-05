import React from 'react';


const FormSearch = (props) => {
 
    return(
        <form onSubmit={props.getRecipe}>
            <input 
               className='search-recipe'
               placeholder='Search for recipe here'
               type='text'
               name='recipeName' 
               />
            <button className='search-btn'>Search</button>
        </form>
    )
        
}


export default FormSearch;