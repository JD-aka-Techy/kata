import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import FilterControls from '../../src/components/FilterControls';

describe('The FilterControls component', () => {
  const wrapper = shallow(<FilterControls/>)

  it('should render a div with class filter-panel ', () => {
    expect(wrapper.find('div.filter-panel'))
    .to.have.length(1, 'FilterControls component should render a div with the .filter-panel class');
  });



});
