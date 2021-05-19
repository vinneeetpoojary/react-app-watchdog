import React from 'react'

function FormHeader(props) {
    const {h1,...rest}=props;

    return (
              <h1 className="text-center font-medium text-3xl font-bold text-yellow-500 mt-2"{...rest}/>
    )
}

export default FormHeader
