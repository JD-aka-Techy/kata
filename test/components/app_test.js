import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import App from '../../src/components/App';
import HotelList from '../../src/components/HotelList';
import FilterControls from '../../src/components/FilterControls';

describe('Main <App /> application component', () => {
  const wrapper = shallow(<App hotelData={[{}]}/>)

  it('should render a HotelList component', () => {
    expect(wrapper.find('HotelList'))
    .to.have.length(1, 'App component should have a Hotel list component');
  });

  it('should render a FilterControls component', () => {
    expect(wrapper.find('FilterControls'))
    .to.have.length(1, 'App component should have a FilterControls component');
  });

  it('should have a hotelData prop',() => {
  //expect(wrapper.find({prop: 'hotelData'})).to.have.length(1);
  })
});
