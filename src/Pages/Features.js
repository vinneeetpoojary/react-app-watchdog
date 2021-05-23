import React from 'react'
import { Link } from 'react-router-dom'

function Features() {
    return (
        <div className="h-screen">
            <div className="flex flex-col ">
             <Link to="./table1"> Table 1</Link> 
             <Link to="./table2"> Table 2</Link> 
             <Link to="./table3"> Table 3</Link> 
            </div>
        </div>
    )
}

export default Features
