import React from 'react';
import {DateView} from "react-datepicker";
import {Field,ErrorMessage} from "formik";
import "react-datepicker/dist/react-datepicker.css";
function Datepicker(props) {
    const{label,name,...rest}=props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {({form,field})=>{
                        const {setFieldValue}=form
                        const {value}=field
                        return (
                            <DateView
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={(val)=>{setFieldValue(name,val)}}
                            />
                            )}}
            </Field>
            <ErrorMessage>
                {
                    errmsg=><div className="text-red-500">{errmsg}</div>
                }
            </ErrorMessage>
        </div>
    )
}

export default Datepicker
