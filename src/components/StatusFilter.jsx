import React from "react";

function StatusFilter({ filterStatus, setFilterStatus }) {
  return (
    <div>
      <h3>Filter by Status</h3>
      <select
        value={filterStatus} 
        onChange={(e) => setFilterStatus(e.target.value)} 
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

export default StatusFilter;
