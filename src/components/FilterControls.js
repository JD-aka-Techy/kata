import React from 'react';
const {Component} = React;

// TODO: generate filter words from words in input array
class FilterControls extends Component {

  //props {addFilter, activeFilters,removeFilter}
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    // Temporary filter inputs TODO: replace this wth a prop based on facilities
    this.options = ['pool','car park', 'cafe'];
    this.isActive = this.isActive;
    this.handleOpen = this.handleOpen;
  }

  /*
    - Hadles Filter menu open and close
  */
  handleOpen() {
    this.setState({
      open: !this.state.open
    })
  }

  /*
    @filterWord: String
    Compares filterWord to list of current filters
    - used to display currently selected filters
  */
  isActive(filterWord) {
    if(!this.props.currentFilters || this.props.currentFilters.length < 1) {
      return false;
    }
    return this.props.currentFilters
      .indexOf(filterWord) !== -1;
  }

  render(){
    return (
      <div className={this.state.open ? "filter-panel--open" : "filter-panel" }>
        <div
          onClick={() => this.handleOpen() }
          className="filter-panel__title">
          Filter Results
        </div>
        <ul className="availible-filters">
          {
            this.options.map((option,i) => {
              // TODO: can probably have filter alteration functions toggle.
              if (this.isActive(option)) {
                return (
                  <li key={i}
                      onClick={()=> this.props.removeFilter(option)}
                      className="availible-filters__option--active">
                    {option}
                  </li>
                );
              } else {
                return (
                  <li key={i}
                      onClick={()=> this.props.addFilter(option)}
                      className="availible-filters__option">
                    {option}
                  </li>
                )
              }
            })
          }
        </ul>
      </div>)
  }
};

export default FilterControls;
