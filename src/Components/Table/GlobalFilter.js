import React from 'react'
function GlobalFilter({filter,setFilter}) {
    return (
        <span>
            <label className="text-sm font-bold text-gray-700 uppercase" htmlFor="search">Search</label>
           <input
           type="text"
           value={filter || ""}
           onChange={e=>setFilter(e.target.value)}
           className="w-64 border border-gray-300 p-2 rounded mt-1 shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300"
           placeholder="Search"/>
           
        </span>
    )
}

export default GlobalFilter
