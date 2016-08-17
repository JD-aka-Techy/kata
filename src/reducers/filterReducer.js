// import action types

const initialState = {
  allFilters: [],
  activeFilters: []
};

/*
  @hotels: array of hotel objects.
  @returns: array containing all unique Facilities in array of hotels
*/
function findFilters(hotels) {
  if(hotels.length < 1) {
    return [];
  }
  let all = hotels.reduce( (acc,curr) => [...acc, ...curr.Facilities ], []);
  return Array.from(new Set(all));
}

function filterReducer( state = initialState, action ) {
  switch(action.type) {
    case 'TOGGLE_FILTER':
      return state.activeFilters.indexOf(action.payload) === -1
        ? { ...state, activeFilters: [ ...state.activeFilters, action.payload ] }
        : { ...state, activeFilters: [ ...state.activeFilters.filter( (a) => a !== action.payload ) ] };
    case 'FIND_FILTERS':
      return { ...state, allFilters: findFilters(action.payload) };
    default:
      return state;
  }

}

export default filterReducer;
