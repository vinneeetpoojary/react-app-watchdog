import React from 'react';
import{FieldArray,Field} from "formik";

function FieldArray(props) {
    const {label,name,...rest}=props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <FieldArray name={name}>
                {
                    fieldarrayprops=>{
                        const{push,remove,form}=fieldarrayprops;
                        const{values}=form;
                        const{name}=values;
                        return(
                            <div>
                                {
                                    name.map((name,index)=>(
                                        <div key={index}>
                                            <Field name={`name[${index}]`} {...rest}/>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                }
            </FieldArray>
        </div>
    )
}

export default FieldArray
