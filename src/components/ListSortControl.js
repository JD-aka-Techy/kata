import React from 'react';

/*
  Menu bar handles Sorting hotel list
  @ sortAsc, sortDesc: Sort functions bound to parent
  // TODO: Decouple function input, generate sortlinks from name and function
*/
const ListSortControl = ({ sortAsc, sortDesc }) => (
  <div className="list-sort-control">
    <h3>Order By</h3>
    <div className="list-sort-control__button"
    onClick={ sortAsc }>
      Rating Asc
    </div>
    <div className="list-sort-control__button"
    onClick={ sortDesc }>
      Rating Desc
    </div>
  </div>
);

export default ListSortControl;
