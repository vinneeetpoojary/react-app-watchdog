import React from 'react'
import DateView from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {Field,ErrorMessage} from "formik"

function DatePicker(props) {
    const {label,name,...rest}=props
    return (
       <div>
           <label htmlFor={name}
           className="block text-base font-medium text-gray-700 uppercase mb-2"
           >{label}</label>
           <Field name={name}>
                {
                    ({form,field})=>{
                        const{setFieldValue}=form;
                        const{value}=field;
                        return <DateView
                        id={name}
                        {...field}
                        {...rest}
                        selected={value}
                        onChange={val=>setFieldValue(name,val)}
                        />
                    }
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

export default DatePicker
