import React from 'react';
import {Link} from 'react-router-dom';

function Navbar({toggle,isOpen}) {
    return (
       <nav className="flex justify-between item-center h-16 bg-yellow-500 text-black relative shadow-sm "role="navigation">
            <div className="px-4 cursor-pointer md:hidden py-4" onClick={toggle}>  
            {
                !toggle ? (
                    <svg className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round"
                      strokeLinejoin="round" 
                      strokeWidth={2}
                       d="M6 18L18 6M6 6l12 12" />
                       </svg> 
                )
                
                       :(
                        <svg className="w-6 h-6"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round"
                             strokeLinejoin="round"
                              strokeWidth={2}
                               d="M4 6h16M4 12h16M4 18h16"
                                />
                                </svg>
                       )
                       
            }
            
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/" className="p-4">Home</Link>
                <Link to="/about" className="p-4">About us</Link>
                <Link to="/resform" className="p-4">Resident Form</Link>
                <Link to="/visform" className="p-4">Visitor Form </Link>
            </div>
            <div className="pr-8 md:block hidden">
            <Link to="/login" className="p-4">Login</Link>
            <Link to="/signup" className="p-4">Sign Up</Link>
            </div>
       </nav>
    )
}

export default Navbar
