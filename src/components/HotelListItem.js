import React from 'react';


const HotelListItem = ({ hotel }) => (
  <li>
    { hotel.Name }
    { hotel.StarRating }
    { hotel.Facilities }
  </li>
);

export default HotelListItem;
