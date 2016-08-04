import React from 'react';
import { Component } from 'react';
import HotelList from './HotelList';
import FilterControls from './FilterControls';


/*
  Main application component.
*/
export default class App extends Component {
  constructor(props) {
    super(props)
    this.hotels = this.props.hotelData
    this.state = {
      filters: []
    }
    this.data = this.props.data;
  }
  render() {
    return (
      <div>
        <HotelList hotels = { this.hotels }/>
        <FilterControls/>
      </div>
    );
  }
}
