import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import App from '../../src/components/App';
import HotelList from '../../src/components/HotelList';
import FilterControls from '../../src/components/FilterControls';
import ListSortControl from '../../src/components/ListSortControl';


describe('Main <App /> application component', () => {

  // Structure
  const wrapper = shallow(<App hotelData={ [{"Facilities": []}]}/>)

  it('should render a HotelList component', () => {
    expect(wrapper.find('HotelList'))
    .to.have.length(1, 'App component should have a Hotel list component');
  });

  it('should render a FilterControls component', () => {
    expect(wrapper.find('FilterControls'))
    .to.have.length(1, 'App component should have a FilterControls component');
  });

  it('should have a ListSortControl component',() => {
    expect(wrapper.find('ListSortControl'))
    .to.have.length(1, 'App component should have a ListSortControl component');
  });

  it('should save hotels passed in as state.hotels', () => {

    expect(JSON.stringify( wrapper.state('hotels')))
    .to.equal('[{"Facilities":[]}]', 'App component did not store hotelData in state as hotels')

    let testState = [{"Name":"one", Facilities: []},{"Name": "two",  Facilities: []}]
    let nextTest = shallow(<App hotelData={testState}/>);

    expect(JSON.stringify( nextTest.state('hotels')))
    .to.equal(JSON.stringify(testState),
      'App component did not store hotelData in state as hotels');
  });

  // Methods
  it('should sort hotel state data when its handleSort method is called', () => {
    // sort ascending by rating
    let sortTestData = [
      {"Name":'1',"StarRating":'2',"Facilities": []},
      {"Name":'2',"StarRating":'3',"Facilities": []},
      {"Name":'2',"StarRating":'1',"Facilities": []}
    ];
    let sortTest = shallow(<App hotelData={sortTestData}/>);
    // sort ascending
    sortTest.instance().handleSort('ASC_RATING')
    sortTest.update()

    expect(JSON.stringify(sortTest.state('hotels')))
     .to.equal(JSON.stringify(sortTestData.sort((a, b) => a.StarRating - b.StarRating)),
       'hotels did not sort ascending by StarRating');
    // ascending
    sortTest.instance().handleSort('DESC_RATING')
    sortTest.update()
    expect(JSON.stringify(sortTest.state('hotels')))
     .to.equal(JSON.stringify(sortTestData.sort((a, b) => b.StarRating - a.StarRating)),
       'hotels did not sort descending by StarRating');
  });

  it('should add an item to Apps state.filters array when handleAddFilter is called', () => {
    let addFilterTestData = [ {"Name":'1',"StarRating":'2',"Facilities": []} ];
    let addFilterTest = shallow(<App hotelData={addFilterTestData}/>);
    // ensure filters is empty
    addFilterTest.setState({filters: []});
    addFilterTest.update();
    // add word
    addFilterTest.instance().handleAddFilter('test');
    addFilterTest.update();
    expect(addFilterTest.state('filters').indexOf('test')).to.equal(0,
    'filter word was not found in state.filters');
  });

  it('should remove an item from App state.filters when handleRemoveFilter is called', () => {
    const removeFilterTestData = [ {"Name":'1',"StarRating":'2',"Facilities": []} ];
    const removeFilterTest = shallow(<App hotelData={removeFilterTestData}/>);

    // add test data to filter array
    removeFilterTest.setState({filters: ['test']});
    removeFilterTest.update();
    // remove item from array
    removeFilterTest.instance().handleRemoveFilter('test');
    removeFilterTest.update();

    expect(removeFilterTest.state('filters').indexOf('test')).to.equal(-1,
    'filter word was not removed from state.filters');
  });

  it('should return a filtered hotel list passed into handleFilter dependant on state.filters', () => {
    const filterData = [
      {
      "Name": "Hotel3",
      "StarRating": 3,
      "Facilities": ["cafe", "pool"]
      },
      {
      "Name": "Hotel4",
      "StarRating": 2,
      "Facilities": ["car park", "pool"]
      },
      {
      "Name": "Hotel5",
      "StarRating": 5,
      "Facilities": ["car park"]
      }
    ];

    let filterTest = shallow(<App hotelData={filterData}/>);
    // ensure filters are empty
    filterTest.instance().setState({filters: []});
    filterTest.update();
    // should return the same data with empty
    expect(filterTest.instance().handleFilter(filterData))
    .to.equal(filterData, 'handleFilter method did not return the same data when app has no filters');
    // add a filter to the state.filters array
    filterTest.setState({filters: ['pool','cafe']});
    filterTest.update();
    // method should return Hotel3's data
    expect(filterTest.instance().handleFilter(filterData)[0].Name)
     .to.equal('Hotel3', 'handleFilter method did not return the correct data when app has filters');
  });



});
