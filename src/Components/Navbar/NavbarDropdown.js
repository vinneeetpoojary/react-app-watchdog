import React from 'react';
import {Link} from "react-router-dom"
function NavbarDropdown({isOpen,toggle}) {
    return (
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-yellow-500" : "hidden"} onClick={toggle}>
               <Link to="/" className="p-4">Home</Link>
                <Link to="/about" className="p-4">About us</Link>
                <Link to="/resform" className="p-4">Resident Form</Link>
                <Link to="/visform" className="p-4">Visitor Form </Link>
                <Link to="/login" className="p-4">Login</Link>
            <Link to="/signup" className="p-4">Sign Up</Link>
        </div>
    )
}

export default NavbarDropdown
