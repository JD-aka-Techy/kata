import React from 'react';

/*
  A single hotel item on a list
  @hotel: { Name: String, StarRating: Int, Facilities: [Strings] }
*/
const HotelListItem = ({ hotel }) => (
  <li className="hotel">
    <div className="hotel__name">
      { hotel.Name }
    </div>
    <div className="hotel__rating">
      { hotel.StarRating }
    </div>
    <div className="hotel__facilities">
      { hotel.Facilities.join(', ')}
    </div>
  </li>
);

export default HotelListItem;
