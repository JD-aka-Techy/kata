// import action types

function sorter(state, direction, field) {
  const sortFuncs = {
    'ASC': () =>  [ ...state.sort((a,b) => a[field] - b[field]) ],
    'DESC': () =>  [ ...state.sort((a,b) => b[field] - a[field]) ]
  };
  return sortFuncs[direction]();
}

// temp data
import tempData from '../tempData';

const initialState = tempData;

function hotels( state = initialState, action ) {
  switch(action.type) {
    case 'SORT':
      return sorter(state, action.direction, action.field);
    default:
      return state;
  }
}

export default hotels;
