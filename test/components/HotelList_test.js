import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import HotelList from '../../src/components/HotelList';

describe('The HotelList component', () => {
  const testHotels = [{
    "Name": "Faulty Towers",
    "StartRating": 5,
    "Facilities": ["car park", "pool"]
  }]

  const wrapper = shallow(<HotelList hotels={testHotels}/>)

  it('should render an unordered list', () => {
    expect(wrapper.find('ul'))
    .to.have.length(1, 'Hotel list should render an unordered list');
  });


  it('should render a li element for each hotel passed in including 0', () => {
    let testData = [
      [],
      [
        {"Name":'1',"StarRating":'2',"Facilities": ['']},
        {"Name":'2',"StarRating":'2',"Facilities": ['']}
      ],
      [
        {"Name":'1',"StarRating":'2',"Facilities": ['']},
        {"Name":'2',"StarRating":'2',"Facilities": ['']},
        {"Name":'2',"StarRating":'2',"Facilities": ['']}
      ]
    ];
    testData.forEach((mockHotels) => {
      let liTester = shallow(<HotelList hotels={mockHotels} />);
      expect(liTester.find('HotelListItem')).to.be.length(mockHotels.length);
    });
  });

});
