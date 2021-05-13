import React from 'react';
import {Field,ErrorMessage}from "formik";
function Input(props) {
    const {label,name,...rest}=props;
    return (
        <div>
            <label htmlFor={name} className="block text-base font-medium text-gray-700 uppercase mb-2" >{label}</label>
            <Field id={name} name={name} {...rest} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300"/>
            <ErrorMessage name={name}>
            {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
            }
            </ErrorMessage>
        </div>
    )
}

export default Input
