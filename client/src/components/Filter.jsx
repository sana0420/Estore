import React, { useState } from 'react';
import './Filter.css';

function Filter() {
  const [selected,setSelected]=useState({})
  handleOptionChange = (event) => {
    setSelected({
      selected: event.target.value
    });
  };

  handleFilterClick = () => {
    // Perform filtering logic based on the selected option
    // Update the filtered data in the component's state or trigger an API call
  }
    return (
      <div>
        <button onClick={this.handleFilterClick}>Filter</button>
        <select value={this.state.selected} onChange={this.handleOptionChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {/* Render filtered data */}
      </div>
    );
  }

export default Filter