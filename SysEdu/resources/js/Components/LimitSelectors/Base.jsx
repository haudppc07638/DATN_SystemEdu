import React from 'react'

function Base({ limit, onLimitChange }) {
  return (
    <div className="flex items-center">
    <label htmlFor="limit" className="mr-2">Hiển thị:</label>
    <select
      id="limit"
      value={limit}
      onChange={(e) => onLimitChange(parseInt(e.target.value))} // Chuyển đổi thành số nguyên
      className="border border-gray-300 rounded-md p-2"
    >
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
  );
}

export default Base