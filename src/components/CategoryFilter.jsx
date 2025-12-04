import React from "react";

function CategoryFilter({ categories, filterCategory, setFilterCategory }) {
  return (
    <div>
      <h3>Filter by Category</h3>
      <select
        value={filterCategory} 
        onChange={(e) => setFilterCategory(e.target.value)} 
      >
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
