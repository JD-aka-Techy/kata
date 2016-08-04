import React from 'react';
import HotelListItem from './HotelListItem';

/*
  List Of hotels.
  @hotels: JSON style array ofhotel objects {Name,StarRating,Facilities}
*/
const HotelList = ({ hotels }) => {
  return hotels.length === 0 ?
    <ul>
      <li>Not found</li>
    </ul>
    : (
    <ul className="search-results-list">
    {
      hotels.map((hotel,i) => (
        <HotelListItem key={i} hotel={hotel}/>
      ))
    }
    </ul>
  );
};

export default HotelList;
