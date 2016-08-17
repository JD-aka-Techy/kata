import { expect } from 'chai';

import * as types from '../../src/constants/ActionTypes';
import * as actions from '../../src/actions';

describe('action creators', () => {

  it('sortHotels action creator should create a SORT action', () => {
    const expected = { type: 'SORT', direction: 'ASC', field: 'StarRating' };
    const actual = actions.sortHotels('ASC', 'StarRating');
    expect(actual).to.deep.equal(expected,
      `sortHotels action should have created a SORT action.`)
  });

  it('findFilters action creator should create a FIND_FILTERS action', () => {
    const expected = { type: 'FIND_FILTERS', payload: [] };
    const actual = actions.findFilters([]);
    expect(actual).to.deep.equal(expected,
      `findFilters action should have created a FIND_FILTERS action.`)
  });

  it('toggleFilter action creator should create a TOGGLE_FILTER action', () => {
    const expected = { type: 'TOGGLE_FILTER', payload: 'test' };
    const actual = actions.toggleFilter('test');
    expect(actual).to.deep.equal(expected,
      `toggleFilter action should have created a TOGGLE_FILTER action.`)
  });

})
