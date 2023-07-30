// components/BotFilterSort.js
import React from 'react';

const BotFilterSort = ({ filterBy, sortBy, onFilterChange, onSortChange }) => {
  return (
    <div className="bot-filter-sort">
      <label htmlFor="filter">Filter by Class:</label>
      <select
        id="filter"
        value={filterBy}
        onChange={(e) => onFilterChange(e.target.value)}
        multiple
      >
      
    </div>
  );
};

export default BotFilterSort;
