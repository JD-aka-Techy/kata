import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import ListSortControl from '../../src/components/ListSortControl';

describe('The ListSortControl component', () => {

  // Structure
  const wrapper = shallow(<ListSortControl />);

  it('should render a div with class list-sort-control', () => {
    expect(wrapper.is('div.list-sort-control'))
    .to.equal(true, 'list-sort-control div not found');
  });

  it('should render two inner divs with the class list-sort-control__button, ',() => {
    expect(wrapper.find('.list-sort-control__button'))
      .to.be.length(2, 'ListSortControl needs two .list-sort-control__button elements');
  });


});
