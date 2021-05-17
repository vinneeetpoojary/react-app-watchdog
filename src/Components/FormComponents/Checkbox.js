import React from 'react'
import {Field,ErrorMessage} from "formik";

function Checkbox(props) {
    const {label,name,options, ...rest}=props;
    return (
        <div>
             <label className="block text-base font-medium text-gray-700 uppercase mb-2">{label}</label>
            <Field name={name} {...rest}>
            {
                ({field})=>{
                    return options.map(option=>{
                        return(
                            <React.Fragment key={option.key}>
                                    <input
                                     type="checkbox"
                                     id={option.value}
                                      {...field}
                                       value={option.value}
                                       checked={field.value.includes(option.value)}
                                       className=""
                                        />
                                    <label htmlFor={option.key} className=" text-base text-gray-700 checked:bg-yellow-500 box-shadow ">{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }
            }
            </Field>
            <ErrorMessage name={name}>
                {
                    errormsg=><div className="text-red-500">{errormsg}</div>
                }
            </ErrorMessage>
        </div>
    )
}

export default Checkbox
