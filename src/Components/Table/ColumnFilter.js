import React from 'react'
function ColumnFilter({column}) {
    const {filterValue,setFilter}=column
    return (
        <span>
                      <input
           type="text"
           value={filterValue || ""}
           onChange={e=>setFilter(e.target.value)}
           className="w-64 border border-gray-300 p-2 rounded mt-1 shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300"
          />

        </span>
    )
}

export default ColumnFilter;
