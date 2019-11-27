import React from 'react';
import { shallow } from 'enzyme';
import RecipeContainer from './RecipeContainer';

describe('RecipeContainer', () => {

    let wrapper;
    let mockRecipes = [
        {
            image_url: "http://static.food2fork.com/BananaPeanutButterChocolateChipCookies13e87.jpg",
            publisher: "Two Peas and Their Pod",
            publisher_url: "http://www.twopeasandtheirpod.com",
            recipe_id: "ed9409",
            source_url: "http://www.twopeasandtheirpod.com/gluten-free-vegan-banana-peanut-butter-chocolate-chip-cookies/",
            title: "Gluten-Free Vegan Banana Peanut Butter Chocolate Chip Cookies",
          }
    ];

    beforeEach(() => {
        wrapper = shallow(<RecipeContainer recipes={mockRecipes}/>)
    })

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})