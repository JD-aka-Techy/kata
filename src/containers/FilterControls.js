import React from 'react';
import FilterControlsItem from '../components/FilterControlsItem';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/*
  Filter Controls component.
  @activeFilters: array
  @allFilters: array
  @toggleFilter: function
*/
class FilterControls extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  /*
    Handles Filter menu open and close
  */
  handleOpen() {
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    let { allFilters, activeFilters, actions } = this.props;
    return (
      <div className={this.state.open ? "filter-panel--open" : "filter-panel" }>
        <div
          onClick={ () => this.handleOpen() }
          className="filter-panel__title">
          Filter Results
        </div>
        <ul className="availible-filters">
          {
            allFilters.map( (item, i) => (
              <FilterControlsItem
                key={i}
                item={item}
                toggleFilter={ actions.toggleFilter }
                active={ activeFilters.indexOf(item) === -1 }
                />
            ))
          }
        </ul>
      </div>
    )
  }
};

FilterControls = connect(
  state => ({ allFilters: state.filters.allFilters, activeFilters: state.filters.activeFilters}),
  dispatch => ({
    actions: bindActionCreators(Actions ,dispatch)
  })
)(FilterControls);

export default FilterControls;
