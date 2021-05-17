import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray} from "formik";
import * as Yup from "yup";

const initialValues ={
    visitorsName:{
        firstName:"",
        lastName:""
    },
    visitorContact:"",
    visitorAddress:"",
    visitingWing:"",
    visitingRoomNo:""
}
const onSubmit =values=>{
    console.log(values)
}
const validationSchema = Yup.object({
    
    visitorsName.firstName:Yup.string().required("First Name Required"),
    secondName:Yup.string().required("Second Name Required"),
    email:Yup.string().email("Invalid Email").required("Email ID Required"),
    contact:Yup.number().typeError("Invalid Contact Number ").required("Contact Number Required"),
    wing:Yup.string().required("Required Wing"),
    room:Yup.string().required("Required Room Number"),
    password:Yup.string().required("Required Password"),
})
function VisitorForm() {
    return (
        <div>
            
        </div>
    )
}

export default VisitorForm
