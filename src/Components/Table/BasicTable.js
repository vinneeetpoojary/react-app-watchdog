import * as React from 'react';
import {useTable} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import {COLUMNS} from "./Columns";


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
        <div className="bg-gray-100 flex mt-8">
            <div npm>
            <table {...getTableProps}className="w-screen items-center " >
            <thead className="items-center">
            {headerGroups.map((headerGroups)=>( 
                <tr {...headerGroups.getHeaderGroupProps}
                >
                    {headerGroups.headers.map((column)=>(
                         <th {...column.getHeaderProps()} className="bg-yellow-300  items-center">
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
                                return ( <td {...cell.getCellProps()} className="items-center">
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

export default BasicTable
