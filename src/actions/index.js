import * as types from '../constants/ActionTypes';

export function sortHotels(direction, field) {
  return { type: types.SORT, direction, field };
}

export function findFilters(hotels) {
  return { type: types.FIND_FILTERS, payload: hotels};
}

export function toggleFilter(hotels) {
  return { type: types.TOGGLE_FILTER, payload: hotels };
}
