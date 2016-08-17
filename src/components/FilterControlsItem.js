import React from 'react';

/*
  item in FilterControls Component
  @item: filter item Name
  @ toggleFilter: functions
  @ active: bool - wether or not the item is in activeFilters
*/
const FilterControlsItem = ({item, toggleFilter, active}) => (
  <li
    className= { active ? "availible-filters__option" : "availible-filters__option--active"}
    onClick={ () => toggleFilter(item) } >
    { item }
  </li>
)

export default FilterControlsItem;
