import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import HotelListItem from '../../src/components/HotelListItem';

describe('The HotelListItem component', () => {

  const testHotel = {
    "Name": "Faulty Towers",
    "StartRating": 5,
    "Facilities": ["car park", "pool"]
  };
  const wrapper = shallow(<HotelListItem hotel={testHotel}/>);

  it('should render a HotelListItem for each hotel passed in', () => {
    expect(wrapper.find('li'))
    .to.have.length(1, 'HotelListItem component should render a li element');
  });








});
