import { expect } from 'chai';

import hotels from '../../src/reducers/hotels.js'

describe('hotels reducer', () => {

  it('should instantiate initial state to an empty array', () => {
    const expected = [];
    const actual = hotels(undefined, {});
    expect(actual).to.deep.equal(expected,
      `The hotels reducer should instantiate intial state to an empty array
      NOTE: tempData in hotels.js will cause this to fail. change to []
      `);
  });

  it('should handle SORT actions', () => {

    let testHotels = [
      {StarRating: 2},
      {StarRating: 1},
      {StarRating: 4},
      {StarRating: 3}
    ];
    // sort ascending by StarRating.
    let expected = testHotels.slice(0).sort((a,b) => a.StarRating - b.StarRating);
    let actual = hotels(
      testHotels,
      {
        type: 'SORT',
        direction: 'ASC',
        field: 'StarRating'
      }
    );
    expect(actual).to.deep.equal(expected,
      `hotels reducer should sort hotels ascending by rating given an action
      { type: 'SORT', direction: 'ASC', field: 'StarRating' } \n\n`);

    // sort descending by StarRating
    expected = testHotels.slice(0).sort((a,b) => b.StarRating - a.StarRating);
    actual = hotels(
      testHotels,
      {
        type: 'SORT',
        direction: 'DESC',
        field: 'StarRating'
      }
    );
    expect(actual).to.deep.equal(expected,
      `hotels reducer should sort hotels descending by rating given an action
      { type: 'SORT', direction: 'DESC', field: 'StarRating' } \n\n`);


  });




});
