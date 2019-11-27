import React from 'react';
import { shallow } from 'enzyme';
import Recipe from './Recipe';

describe('Recipe', () => {

    let wrapper;
    

    beforeEach(() => {
        wrapper = shallow(<Recipe id='ed9409'
                                  title='Gluten-Free Vegan Banana Peanut Butter Chocolate Chip Cookies'
                                  publisher='Two Peas and Their Pod'
                                  image='http://static.food2fork.com/BananaPeanutButterChocolateChipCookies13e87.jpg'
                                  recipeLink='http://www.twopeasandtheirpod.com/gluten-free-vegan-banana-peanut-butter-chocolate-chip-cookies/' />)
    })

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})