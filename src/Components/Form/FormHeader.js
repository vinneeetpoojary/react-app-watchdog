import React from 'react'

function FormHeader(props) {
    const {h1,...rest}=props;
    console.log(h1);
    return (
        <div>
              <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center"{...rest}></h1>
        </div>
     
    )
}

export default FormHeader
