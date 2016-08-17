import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import FilterControls from '../../src/containers/FilterControls';


/*
describe('The <FilterControls /> component', () => {
  const activeFilters = ['pool'];
  const StructureTester = shallow(<FilterControls currentFilters = { activeFilters} />)

  // Structure
  it('should render a class filter-panel div', () => {
    expect(StructureTester.is('div.filter-panel'))
    .to.equal(true, 'filter-panel div not found');
  });

  it('should render a filter-panel--open div when state.open is true', () => {
    StructureTester.setState({open: true});
    StructureTester.update();
    expect(StructureTester.is('div.filter-panel--open'))
    .to.equal(true, 'filter-panel--open div not found when state.open is set');
  });

  it('should render a ul element with class availible-filters', () => {
    expect(StructureTester.find('ul.availible-filters'))
    .to.be.length(1, '.availible-filters div not found in FilterControls component');
  });

  it('should render a li element with class availible-filters__option for each option', () => {
    // currently 2 due to hardcoded options
    expect(StructureTester.find('li.availible-filters__option'))
    .to.be.length(2, 'did not find 2 li.availible-filters__option elements in FilterControls component');
  });

  it(`should render a li element with class availible-filters__option--active for
    each option currently in currentFilters`, () => {
    // currently 1 due to hardcoded options
    expect(StructureTester.find('li.availible-filters__option--active'))
    .to.be.length(1, 'did not find 2 li.availible-filters__option elements in FilterControls component');
  });

  // Methods
  it('should return correctly when isActive is called with an option dependant on currentFilters passed in', () => {
    const activeFilters = ['pool'];
    const isActiveTester = shallow(<FilterControls currentFilters = { activeFilters} />);
    expect(isActiveTester.instance().isActive('pool')).to.equal(true,
       'isActive did not return true when called with a word in its current filters' );
    expect(isActiveTester.instance().isActive('impossible')).equal(false,
     'isActive did not return false when called with a word not in its current filters');
  });

  it('should toggle state.open when handleOpen is called', () => {
    const activeFilters = ['pool'];
    const isOpenTester = shallow(<FilterControls currentFilters = { activeFilters} />);
    isOpenTester.instance().handleOpen();
    expect(isOpenTester.state('open')).to.equal(true, 'state.open did not toggle to true when calling handleOpen')
  });




});*/
