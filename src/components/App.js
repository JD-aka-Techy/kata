import React from 'react';
import { Component } from 'react';
import HotelList from './HotelList';
import FilterControls from './FilterControls';
import ListSortControl from './ListSortControl';


/*
  Main application component.
  @requires Array of Objects representing Hotels
*/
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      hotels: this.props.hotelData
    }
    this.sortFunctions = {
      'DESC_RATING': (a, b) => b.StarRating - a.StarRating,
      'ASC_RATING': (a, b) => a.StarRating - b.StarRating
    }

    this.handleSort = this.handleSort.bind(this);
    this.handleAddFilter = this.handleAddFilter.bind(this);
    this.handleRemoveFilter = this.handleRemoveFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.parseFacilities = this.parseFacilities.bind(this)
  }


  /*
    @hotels: JSON Array of hotel objects
  */
  parseFacilities(hotels) {
    if(!hotels) {
      return [];
    }
    const all = hotels.reduce((acc,curr) => {
      return [...acc, ...curr.Facilities];
    },[]);
    return Array.from(new Set(all));
  }

  /*
    @sortFn: Name of sort function to sort this.state.hotels
  */
  handleSort(sortFn) {
    //console.log(this.state.hotels.sort(this.sort))
    this.setState({
      hotels: [...this.state.hotels.sort(this.sortFunctions[sortFn])]
    });
  }

  /*
    @toFilter: Array of hotel Obects containing a Facilities array
    @returns array with those hotels that meet all filter tag requirements
      of this.state.filters
  */
  handleFilter(toFilter) {
    let filtered = toFilter;
    if(toFilter.length > 0) {
      this.state.filters.forEach((filterWord) => {
        filtered = filtered.filter((hotel) => {
          return hotel.Facilities.indexOf(filterWord) != -1;
        });
      });
    }
    return filtered;
  }
  /*
    removes a filter word from Apps state.filter array
    @toRemove: String filter word
  */
  handleRemoveFilter(toRemove) {
    this.setState({
      filters: this.state.filters
                .filter((word) => word !== toRemove)
    });
  }

  /*
    adds a filter word to Apps state.filter array
    @toAdd: String filter word
  */
  handleAddFilter(toAdd) {
    this.setState({
      filters: [...this.state.filters, toAdd]
    });
  }

  render() {
    const hotels = this.handleFilter(this.state.hotels);
    const activeFilters = this.state.filters;

    return (
      <div className="app">
        <FilterControls
          addFilter={this.handleAddFilter.bind(this) }
          removeFilter={this.handleRemoveFilter.bind(this)}
          currentFilters = { activeFilters} />
        <div>
          <ListSortControl
            sortFunc={ this.handleSort }
          />
          <HotelList hotels = { hotels } />
        </div>
      </div>
    );
  }
}

App.propTypes = {

}
