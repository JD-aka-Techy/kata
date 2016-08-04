import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';


import App from '../../src/components/app';

describe('App', () => {

  it('tests my tests', () => {

    expect(shallow(<App/>).is('.foo')).to.equal(true)
  });
});
