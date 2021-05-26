import React from 'react'
import { Link } from 'react-router-dom'

function Features() {
    return (
        <div className="h-screen">
            <div className="grid grid-rows-5 justify-center space-y-4">
             <Link to="./table1">  Basic Table </Link> 
             <Link to="./table2"> Filter Table </Link> 
             <Link to="./table3"> Sorting Table </Link> 
             <Link to="./resform">Register Form</Link>
             <Link to="./visform">Visitor Form</Link>
            </div>
        </div>
    )
}

export default Features
