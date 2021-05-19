import * as React from 'react';
import {useTable} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import {COLUMNS, Columns} from "./Columns";

function BasicTable() {
    const columns = React.useMemo(()=>COLUMNS,[])
    const data =React.useMemo(()=>MOCK_DATA,[])

    const tableInstance=useTable({
        columns:columns,
        data:data
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }=tableInstance

    return (
        <table {...getTableProps} className="table w-full px-3 p-3 mx-auto">
            <thead>
            {headerGroups.map((headerGroups)=>( 
                <tr {...headerGroups.getHeaderGroupProps}
                className="table-row px-2 py-2 text-center"
                >
                    {headerGroups.headers.map((column)=>(
                         <th {...column.getHeaderProps()}>
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
                            <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell=>{
                                return ( <td {...cell.getCellProps()}className="table-cell bg-gray-400 text-center">
                                {cell.render("Cell")}
                                </td>)
                            })}
                        </tr>
                        )
                        })
                }
            </tbody>
        </table>
    )
}

export default BasicTable
