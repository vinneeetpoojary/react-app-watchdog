import React from 'react'

function Label(children,...props) {
    return (
        <div>
            <label className="block text-base font-medium text-gray-700 uppercase mb-2">{children}</label>
        </div>
    )
}

export default Label
