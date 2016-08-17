import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import HotelListItem from '../../src/components/FilterControlsItem';

describe('The FilterControlsItem component', () => {

  const props = {
    item: 1,
    toggleFilter: () => '',
    active: false
  }
  //item, toggleFilter, active
  const wrapper = shallow(<HotelListItem {...props}/>)
  // Structure
  it('should render a li element', () => {
    const expected = true;
    const actual = wrapper.is('li');
    expect(actual).to.equal(expected,
      'HotelListItem should be a li element');
  });

  it('have a conditional class based on active prop', () => {
    let expected, actual;
    expected = true;
    actual = wrapper.is('li.availible-filters__option');
    expect(actual).to.equal(expected,
      '.availible-filters__option should be found if active is false');

    wrapper.setProps({active: true})
    wrapper.update();
    actual = wrapper.is('li.availible-filters__option--active');
    expect(actual).to.equal(expected,
      '.availible-filters__option--active should be found if active is false')



  });

});
