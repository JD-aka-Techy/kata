import React from 'react';
import HotelList from '../components/HotelList';
import FilterControls from './FilterControls';
import ListSortControl from '../components/ListSortControl';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/*
  Main application component.
*/
class App extends React.Component {

  constructor(props) {
    super(props);
    // populate filters with facilities from hotels list
    props.actions.findFilters(props.hotels);
  }

  getFilteredHotels(hotels, filters) {
    let filtered = hotels;
    if(hotels.length > 0 && filters.length > 0) {
      filters.forEach( (item) => {
        filtered = filtered.filter( (hotel) => {
          return hotel.Facilities.indexOf(item) != -1;
        });
      })
    }
    return filtered;
  }

  render() {
    const { hotels, filters, actions } = this.props;
    return (
      <div className="app">
        <FilterControls />
        <ListSortControl sortFunc={ actions.sortHotels } />
        <HotelList hotels={ this.getFilteredHotels(hotels, filters.activeFilters) }/>
      </div>
    )
  }
};

App = connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)(App);

export default App;
