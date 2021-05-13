import React from 'react'

function Button(props) {
    const {variant,...rest}=props
    switch (variant) {
        case "primary":
            return (
                <button
                className="py-2 px-4 border rounded bg-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:bg-yellow-700 focus:ring-offset-2"
                {...rest}/>
              
            )
        case "secondary":
            return(
                <button
                    className="py-2 px-4 border rounded bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-gray-700 focus:ring-offset-2" {...rest}/> 
            )
        default:
            return (
                <button className="py-2 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-gray-500 focus:ring-offset-2" {...rest}/>
            )
    }
    
}

export default Button
