import React from 'react';
import styles from './FilterBar.module.css';

type FilterBarProps = {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ search, category, onSearchChange, onCategoryChange }) => {
  return (
    <div className={styles.filterBar}>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
      </select>
    </div>
  );
};

export default FilterBar;
