import * as React from 'react';
import {useTable,useSortBy} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import {COLUMNS} from "./Columns";


function SortingTable() {
    const columns = React.useMemo(()=>COLUMNS,[])
    const data =React.useMemo(()=>MOCK_DATA,[])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }=useTable({
        columns,
        data,
    },
    useSortBy)

    return (
        <div className="bg-gray-100 flex mt-8">
            <div npm>
            <table {...getTableProps}className="w-screen items-center " >
            <thead className="items-center">
            {headerGroups.map((headerGroups)=>( 
                <tr {...headerGroups.getHeaderGroupProps}
                >
                    {headerGroups.headers.map((column)=>(
                         <th {...column.getHeaderProps(column.getSortByToggleProps())} className="bg-yellow-300  items-center p-4 font-xl">
                             {column.render("Header")}
                             <span>
                                 {
                                     column.isSorted ? (column.isSortedDesc ? 
                                     <div><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" /></svg>Ascending Order</div>
                                         :<div><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg>Descending order</div> ):null
                                 }
                             </span>
                         </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()} className="hover:bg-gray-300 bg-gray-100">
                            {
                                row.cells.map(cell=>{
                                return ( <td {...cell.getCellProps()} className="items-center text-center ">
                                {cell.render("Cell")}
                                </td>)
                            })}
                        </tr>
                        )
                        })
                }
            </tbody>
        </table>
            </div>
        </div>
    )
}

export default SortingTable;
