import * as React from 'react';
import {useTable,useGlobalFilter} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import {COLUMNS} from "./Columns";
import GlobalFilter from './GlobalFilter';


function FilteringTable() {
    const columns = React.useMemo(()=>COLUMNS,[])
    const data =React.useMemo(()=>MOCK_DATA,[])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    }=useTable({
        columns,
        data
    },
    useGlobalFilter)
    const {globalFilter} =state
    return (
          <div className="flex-col ">
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} className="flex flex-col justify-center" />
            <table {...getTableProps}className="w-screen items-center" >
            <thead className="items-center">
            {headerGroups.map((headerGroups)=>( 
                <tr {...headerGroups.getHeaderGroupProps}
                >
                    {headerGroups.headers.map((column)=>(
                         <th {...column.getHeaderProps()} className="bg-yellow-300  items-center p-4 font-xl">
                             {column.render("Header")}
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
   
    )
}

export default FilteringTable;
