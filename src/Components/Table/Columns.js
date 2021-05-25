//import {format} from "date-fns"

import ColumnFilter from "./ColumnFilter";

export const COLUMNS =[
    {
        Header:"Id",
        accessor:"id",
        Filter:ColumnFilter,
        disableFilters:true
            },
    {
        Header:"FullName",
        accessor:"fullName",
        Filter:ColumnFilter
       
    },
    {
        Header:"Contact Number",
        accessor:"phoneNo",
        Filter:ColumnFilter
    },
    {
        Header:"Address",
        accessor:"address",
        Filter:ColumnFilter
    },
    {
        Header:"Wing",
        accessor:"wing",
        Filter:ColumnFilter
    },
    {
        Header:"RoomNo",
        accessor:"roomNo",
        Filter:ColumnFilter
    },
    {
        Header:"TimeIn",
        accessor:"timein",
        Filter:ColumnFilter
       //Cell:(value)=>{return format(new Date(value),"dd/MM/yyyy")}
    },
    {
        Header:"TimeOut",
        accessor:"timeOut",
        Filter:ColumnFilter
    },
]