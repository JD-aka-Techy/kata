require('./styles/style.sass') // root stylesheeet - .css, .scss or .sass


import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App';

// mock data
let hotels = [
  {
    "Name": "Faulty Towers",
    "StarRating": 4,
    "Facilities": ["car park", "pool"]
  },
  {
    "Name": "Marigold",
    "StarRating": 1,
    "Facilities": ["car park", "cafe", "pool"]
  },
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

ReactDOM.render(<App hotelData = { hotels }/>,
  document.getElementById('root'));
