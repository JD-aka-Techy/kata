import { expect } from 'chai';

import filterReducer from '../../src/reducers/filterReducer.js'

describe('filterReducer reducer', () => {

  it('should instantiate initial state ', () => {
    const expected = {
      allFilters: [],
      activeFilters: []
    };
    const actual = filterReducer(undefined, {});
    expect(actual).to.deep.equal(expected,
      `The filterReducer reducer should instantiate intial state to an object with two empty arrays,
       allFilters and activeFilters`);
  });

  it('should handle TOGGLE_FILTER actions', () => {

    // word does not already exist in state
    let expected = {
      allFilters: [],
      activeFilters: ['test filter']
    };
    let actual = filterReducer({allFilters: [], activeFilters: []},
      {
        type: 'TOGGLE_FILTER',
        payload: 'test filter'
      }
    );
    expect(actual).to.deep.equal(expected,
    `filterReducer should return state with an added filter when that filter does not already exist in state`);

    // word is already in state;
    expected = {
      allFilters: [],
      activeFilters: []
    };
    actual = filterReducer(
      {allFilters: [], activeFilters: ['test filter']},
      {
        type: 'TOGGLE_FILTER',
        payload: 'test filter'
      }
    );
    expect(actual).to.deep.equal(expected,
      `filterReducer should return state with a filter removed when that filter already exist in state`);

  });

  it('should handle FIND_FILTER actions', () => {

    const expected = {
      allFilters: ['one', 'two', 'three', 'four'],
      activeFilters: []
    };
    const actual = filterReducer(
      {allFilters: [], activeFilters: []},
      { type: 'FIND_FILTERS',
      payload: [
        { Facilities: ['one', 'two'] },
        { Facilities: ['three'] },
        { Facilities: ['three', 'four'] }
      ]
    }
    );
    expect(actual).to.deep.equal(expected,
      `filterReducer should have returned an array of unique filters`);

  });


});
