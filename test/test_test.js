import { expect } from 'chai';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils'
import React from 'react';


describe('Test framework', () => {

  it('loads chai', () => {
    expect(expect).to.exist
  });

  it('loads enzyme', () => {
    expect(shallow).to.exist
  });

  it('loads React test utils', () => {
    expect(TestUtils).to.exist
  });

});
