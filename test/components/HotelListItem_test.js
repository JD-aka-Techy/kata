import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import HotelListItem from '../../src/components/HotelListItem';

describe('The HotelListItem component', () => {

  // Structure
  const testHotel = {
    "Name": "Faulty Towers",
    "StarRating": 5,
    "Facilities": ["car park", "pool"]
  }

  const wrapper = shallow(<HotelListItem hotel={testHotel}/>);

  it('should render a li Item with the class hotel', () =>{
    expect(wrapper.is('li.hotel'))
    .to.equal(true)
  });

  it('should render a div with the classes hotel & __name, __rating, facilities', () =>{
    expect(wrapper.find('div.hotel__name')).to.be.length(1, 'div.hotel__name not found');
    expect(wrapper.find('div.hotel__rating')).to.be.length(1, 'div.hotel__rating not found');
    expect(wrapper.find('div.hotel__facilities')).to.be.length(1, 'div.hotel__facilities not found');
  });

  it('displays hotel information in its correct div', () => {
    // Name div
    expect(wrapper.find('div.hotel__name').text())
     .to.equal(testHotel.Name, 'hotel__name does not contain the expected text');
    // rating div
    expect(wrapper.find('div.hotel__rating').text())
     .to.equal('' + testHotel.StarRating, 'hotel__rating does not contain the expected text');
    // facilities div
    expect(wrapper.find('div.hotel__facilities').text())
     .to.equal(testHotel.Facilities.join(', '), 'hotel__facilities does not contain the expected text');
  });

});
