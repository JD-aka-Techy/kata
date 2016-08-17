import React from 'react';

/*
  Menu bar handles Sorting hotel list
*/
const ListSortControl = ({ sortFunc }) => (
  <div className="list-sort-control">
    <h3>Order By</h3>
    <div
      className="list-sort-control__button"
      onClick={ () => sortFunc('ASC', 'StarRating') }>
      Rating Asc
    </div>
    <div
      className="list-sort-control__button"
      onClick={ () => sortFunc('DESC', 'StarRating') }>
      Rating Desc
    </div>
  </div>
);

export default ListSortControl;
