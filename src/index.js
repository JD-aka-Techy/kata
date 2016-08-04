require('./styles/style.sass') // root stylesheeet - .css, .scss or .sass


import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App';

// mock data
let hotels = [
  {
    "Name": "Faulty Towers",
    "StartRating": 5,
    "Facilities": ["car park", "pool"]
  },
  {
    "Name": "Marigold",
    "StartRating": 4,
    "Facilities": ["car park", "cafe", "pool"]
  },
  {
    "Name": "Hotel3",
    "StartRating": 3,
    "Facilities": ["cafe", "pool"]
  },
  {
    "Name": "Hotel4",
    "StartRating": 2,
    "Facilities": ["car park", "pool"]
  },
  {
    "Name": "Hotel5",
    "StartRating": 1,
    "Facilities": ["car park"]
  }
];

ReactDOM.render(<App hotelData = { hotels }/>,
  document.getElementById('root'));
