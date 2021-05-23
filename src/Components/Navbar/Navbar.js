import * as React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    const [showMenu,setShowMenu]=React.useState(false);
    const toggle=()=>{
        setShowMenu(!showMenu);
        console.log(showMenu)
    }
  
    return (
        <nav className="bg-gray-300 sticky top-0 ">
            <div className="w-full  max-auto p-4">

                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* logo */}
                    <div className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-700 hover:text-blue-900"
                     viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                    </svg>
                               <span className="font-bold hover:text-blue-900 text-blue-700">Watchdogs</span>
                    </div>
                    {/* primary nav */}
                    <div className="md:flex items-center space-x-1 hidden">
                      <Link to="./"> <span className="px-3 py-5 text-gray-700 hover:text-gray-900">Home</span></Link>
                      <Link to="./features"><span className="px-3 py-5 text-gray-700 hover:text-gray-900">Features</span></Link>
                        <Link to="/about"><span className="px-3 py-5 text-gray-700 hover:text-gray-900">About Us</span></Link>
                        <Link to="./contact"> <span className="px-3 py-5 text-gray-700 hover:text-gray-900">Contact Us</span></Link>
                    </div>
                    </div>
                    {/* secondary Nav */}
                    <div className="md:flex items-center space-x-3 hidden">
                    <Link to="./login"> <span className="px-3 py-5 text-gray-700 hover:text-gray-900">Login</span></Link>
                    <Link to="./signup">  <span className="px-3 py-2 text-gray-700 hover:text-gray-900 bg-yellow-500 rounded hover:bg-yellow-300 transition duration-300">Sign Up</span></Link>
                    </div>
                    {/* Mobile hidden hamburger*/}
                    <div className="md:hidden flex items-center">
                   <button className="focus:outline-none focus:ring-0" onClick={toggle}>
                  { showMenu?<svg className="w-6 h-6 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      :
                      <svg className="w-6 h-6 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
                   </button>
                    </div>

                    </div>
                    {/* Mobile menu */}
                    <div className={showMenu?"md:flex items-center":"hidden" }>
                        <Link to="./"> <span className="block px-2 py-3 items-centertext-gray-700 text-sm  hover:text-gray-900">Home</span></Link>
                      <Link to="./features"><span className="block px-2 py-3 items-center text-sm text-gray-700 hover:text-gray-900">Features</span></Link>
                        <Link to="/about"><span className="block px-2 py-3 items-center text-sm text-gray-700 hover:text-gray-900">About Us</span></Link>
                        <Link to="./contact"> <span className="block px-2 py-3 items-center text-sm text-gray-700 hover:text-gray-900">Contact Us</span></Link>
                        <Link to="./login"> <span className="block px-2 py-3 items-center text-gray-700 text-sm  hover:text-gray-900">Login</span></Link>
                        <Link to="./signup"> <span className="block px-2 py-3 items-center text-gray-700 text-sm  hover:text-gray-900">SIgn Up</span></Link>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar
