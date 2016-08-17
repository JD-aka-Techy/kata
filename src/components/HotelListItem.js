import React from 'react';

const phimg = 'https://placemat.imgix.net/placeholder_images/images/000/000/042/original/photo-1431538510849-b719825bf08b?ixlib=rb-1.0.0&w=150&h=150&fm=auto&crop=faces%2Centropy&fit=crop&txt=&txtclr=BFFF&txtalign=middle%2Ccenter&txtfit=max&txtsize=42&txtfont=Avenir+Next+Demi%2CBold&bm=multiply&blend=ACACAC&s=a88f8430a73da6b66336393f11a6e18f'
/*
  A single hotel item on a list
  @hotel: { Name: String, StarRating: Int, Facilities: [Strings] }
*/
const HotelListItem = ({ hotel }) => (
  <li className="hotel">
    <img src={phimg} alt="an image of the hotel"/>
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
