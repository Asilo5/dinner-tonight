import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper;

  let mockRecipe = [
    {
      image_url: "http://static.food2fork.com/BananaPeanutButterChocolateChipCookies13e87.jpg",
      publisher: "Two Peas and Their Pod",
      publisher_url: "http://www.twopeasandtheirpod.com",
      recipe_id: "ed9409",
      source_url: "http://www.twopeasandtheirpod.com/gluten-free-vegan-banana-peanut-butter-chocolate-chip-cookies/",
      title: "Gluten-Free Vegan Banana Peanut Butter Chocolate Chip Cookies",
    }
  ]

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match snapshot with all information getting passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  // come back to this test when we go over testing async await

  it.skip('should update state when getRecipe is called', () => {
    expect(wrapper.state('recipes')).toEqual([])
    wrapper.instance().getRecipe('vegan');
    expect(wrapper.state('recipes')).toEqual(mockRecipe);
  })

})
