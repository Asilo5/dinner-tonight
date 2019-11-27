import React from 'react';
import { shallow } from 'enzyme';
import FormSearch from './FormSearch';

describe('FormSearch', () => {

    let wrapper;
    let mockGetRecipe = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<FormSearch getRecipe={mockGetRecipe}/>);
    })

    it('should match snapshot with all data passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it.skip('should call handleChange when input changes', () => {
        expect(wrapper.find('input').props().value).toEqual('');
        const mockEvent = {
            target : {
                value: 'vegan'
            }
        };
        wrapper.find('input').simulate('change', mockEvent);
        expect(wrapper.find('input').props().value).toEqual('vegan');
    })

    it('should update state when handleChange is invoked', () => {
        const mockEvent = {
            target : {
               name: 'ingredient',
               value: 'vegan'
            }
        };

        const expected = 'vegan';
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state('ingredient')).toEqual(expected);
    })

    it('should call submitRecipe when button is clicked', () => {
        wrapper.instance().submitRecipe = jest.fn();
        wrapper.instance().forceUpdate();
        const mockEvent = {
            preventDefault: jest.fn()
        };
        wrapper.find('button').simulate('click', mockEvent);
        expect(wrapper.instance().submitRecipe).toHaveBeenCalledWith(mockEvent);
    })

    it('should call getRecipe and emptyInputs when submitRecipe is called', () => {
        const mockEvent = {
            preventDefault: jest.fn()
        };
        wrapper.instance().emptyInputs = jest.fn();
        wrapper.instance().submitRecipe(mockEvent);

        expect(mockGetRecipe).toHaveBeenCalled();
        expect(wrapper.instance().emptyInputs).toHaveBeenCalled();
    })

    it('should update state when emptyInputs is called', () => {
        wrapper.setState({
            ingredient : 'vegan'
        })
  
        wrapper.instance().emptyInputs();
  
        const expected = '';
  
        expect(wrapper.state('ingredient')).toEqual(expected);
    })
})