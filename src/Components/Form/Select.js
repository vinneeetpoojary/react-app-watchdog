import React from 'react'
import {Field,ErrorMessage} from "formik";
function Select(props) {
    const {label,name,options,...rest}=props;
    return (
        <div>
           <label htmlFor={name} className="block text-base font-medium text-gray-700 uppercase mb-2">{label}</label>
           <Field as="select" id={name} name={name}{...rest}
            className="appearance-none w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300">
               {
                   options.map(option =>{
                       return(
                           <option key={option.value} value={option.value}>
                               {option.key}
                           </option>
                       )
                   })
               }
           </Field>
           <ErrorMessage name={name}>
            {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
            }
            </ErrorMessage>
        </div>
    )
}

export default Select
