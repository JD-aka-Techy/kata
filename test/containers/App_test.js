import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import {_App} from '../../src/containers/App';

const mockStore = {
  actions: {
    findFilters: () => [],
    sortHotels: () => [],

  },
  filters: {
    allFilters: [],
    activeFilters: ['test2']
  },
  hotels: [
    { Facilities: ['test1'] },
    { Facilities: ['test2'] },
    { Facilities: ['test3'] }
  ]
}

describe('Main <App /> application component', () => {

  // Structure
  const wrapper = shallow(<_App {...mockStore}/>);

  it('should render a HotelList component', () => {
    const expected = 1;
    const actual = wrapper.find('HotelList').length;
    expect(actual).to.equal(expected,
      'App component should render a <Hotellist /> component');
  });

  it('should render a FilterControls component', () => {
    const expected = 1;
    const actual = wrapper.find('Connect(FilterControls)').length;
    expect(actual).to.equal(expected,
      'App component should render a FilterControls component -> shallow rendered as Connect(FilterControls)');
  });

  it('should have a ListSortControl component',() => {
    const expected = 1;
    const actual = wrapper.find('ListSortControl').length;
    expect(actual).to.have.equal(1,
      'App component should render a ListSortControl component');
  });

  // methods
  it('has a getFilteredHotels method that filters a hotel list by state.activeFilters', () => {
    const expected = [{ Facilities: ['test1'] }];
    const actual = wrapper.instance().getFilteredHotels(mockStore.hotels, ['test1']);
    expect(actual).to.deep.equal(expected,
      'getFilteredHotels should return array of hotels that meet the filter requirements.');
  });

  it('passes a filtered array of hotels to HotelList as a prop', () => {
    // TODO: find more robust way of targetting HotelList
    const expected = [{ Facilities: ['test2'] }]; // based on mockStore's state
    const actual = wrapper.find('HotelList').node.props.hotels;
    expect(expected).to.deep.equal(actual);
    console.log(actual)
  });




});
