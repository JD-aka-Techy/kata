import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import { _FilterControls } from '../../src/containers/FilterControls';


const mockStore = {
  activeFilters: [2],
  allFilters: [1,2,3],
  actions: {
    findFilters: () => '',
    sortHotels: () => '',
    toggleFilter: () => ''
  }
};


describe('The <FilterControls /> component', () => {
  const activeFilters = ['pool'];
  const wrapper = shallow(<_FilterControls {...mockStore} />)

  // Structure
  it('should render a class filter-panel div', () => {
    const expected = true;
    const actual = wrapper.is('div.filter-panel');
    expect(actual).to.equal(true,
      'filter-panel div not found');
  });

  it('should render a filter-panel__title div', () => {
    const expected = 1;
    const actual = wrapper.find('div.filter-panel__title').length;
    expect(actual).to.equal(expected,
      'FilterControls should render a filter-panel__title div')
  });

  it('should render a ul with class availible-filters', () => {
    const expected = 1;
    const actual = wrapper.find('ul.availible-filters').length;
    expect(actual).to.equal(expected,
      'FilterControls should render a ul element with the class availible-filters');
  });

  it('should render a FilterControlsItem for each member of allFilters', () => {
    const expected = 3;
    const actual = wrapper.find('ul.availible-filters FilterControlsItem').length;
    expect(actual).to.equal(expected,
      'FilterControls should render a FilterControlsItem for each member of allFilters');
  });

  it('should pass the correct props to each FilterControlsItem', () => {
    let expected, actual;
    //{ item: 1, toggleFilter: () => '', active: true };
    const props = wrapper.find('FilterControlsItem').nodes[0].props;
    expected = 1;
    actual = props.item;
    expect(actual).to.equal(expected, 'FilterControlsItem did not recieve the correct item prop');

    expected = 'function'
    actual = typeof props.toggleFilter
    expect(actual).to.equal(expected,
      'FilterControlsItem did not recieve a function as toggleFilter prop');

    expected = false
    actual = props.active
    expect(actual).to.equal(expected, 'FilterControlsItem did not recieve the correct active prop')

    // active should alter if item is in activeFilters in this case 2
    expected = true;
    actual = wrapper.find('FilterControlsItem').nodes[1].props.active;
    expect(actual).to.equal(expected,
      'FilterControlsItem did not recieve the correct active prop when item was active')
  });

  // Methods
  it('should have internal state property Open initialised to false', () => {
    const expected = false
    const actual = wrapper.state().open
    expect(actual).to.equal(expected,
      'FilterControls internal state.open should initialise to false');
  });

  it('should toggle its internal state to when handleOpen is called', () => {
    let expected, actual;
    const toggleIt = () => {
      wrapper.instance().handleOpen();
      wrapper.update();
    };
    expected = true;
    toggleIt();
    actual = wrapper.state().open;
    expect(actual).to.equal(expected,
      'FilterControls state.open should be toggled false to true when handleToggle is called on false');

    expected = false;
    toggleIt();
    actual = wrapper.state().open;
    expect(actual).to.equal(expected,
      'FilterControls state.open should be toggled true to false when handleToggle is called on true');
  });

  // interaction
  it('should toggle open the filter-panel when filter-panel__title is clicked', () => {
    let expected, actual;
    const click = () => wrapper.find('.filter-panel__title').simulate('click');

    // should start closed
    expected = 0
    actual = wrapper.find('.filter-panel--open').length;
    expect(actual).to.equal(expected,
      '.filter-panel--open should not be found on instantiation');

    click();
    
    // now open
    expected = 1;
    actual = wrapper.find('.filter-panel--open').length;
    expect(actual).to.equal(expected,
      'filter-panel--open should have been found when filter-panel__title was clicked');

    click();

    // close again
    expected = 0;
    actual = wrapper.find('.filter-panel--open').length;
    expect(actual).to.equal(expected,
      '.filter-panel--open should not be found after filter-panel__title is clicked while open');

  });



});
