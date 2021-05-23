//import {format} from "date-fns"
export const COLUMNS =[
    {
        Header:"Id",
        accessor:"id"
    },
    {
        Header:"FullName",
        accessor:"fullName"
    },
    {
        Header:"Contact Number",
        accessor:"phoneNo"
    },
    {
        Header:"Address",
        accessor:"address"
    },
    {
        Header:"Wing",
        accessor:"wing"
    },
    {
        Header:"RoomNo",
        accessor:"roomNo"
    },
    {
        Header:"TimeIn",
        accessor:"timein",
       //Cell:(value)=>{return format(new Date(value),"dd/MM/yyyy")}
    },
    {
        Header:"TimeOut",
        accessor:"timeOut"
    },
]