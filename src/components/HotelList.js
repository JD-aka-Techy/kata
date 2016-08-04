import React from 'react';
import HotelListItem from './HotelListItem';

const HotelList = ({ hotels }) => (
  <ul>
    {
      hotels.map((hotel,i) => (
        <HotelListItem key={i} hotel={hotel}/>
      ))
    }

  </ul>
);

export default HotelList;
