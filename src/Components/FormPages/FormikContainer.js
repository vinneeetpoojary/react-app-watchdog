import React from 'react'
import {Formik,Form} from "formik";
import * as Yup from "yup";
import FormikControl from '../FormComponents/FormikControl';
import FormHeader from '../FormComponents/FormHeader';
import Button from '../FormComponents/Button';

function FormikContainer() {
    const dropdownOptions=[
        {key:"select an Option", value:""},
        {key:"101", value:"101"},
        {key:"102", value:"102"},
        {key:"103", value:"103"},
        {key:"104", value:"104"},
        {key:"105", value:"105"},
    ]

    const radioOptions=[
      
        {key:"male", value:"male"},
        {key:"female", value:"femaile"},
    ]

    const checkBoxOptions=[
        {key:"101", value:"101"},
        {key:"102", value:"102"},
        {key:"103", value:"103"},
        {key:"104", value:"104"},
        {key:"105", value:"105"},
    ]
    
    const initialValues={
        email:"",
        password:"",
        address:"",
        roomno:"",
        gender:"",
        checkBox:[],
        date:null
    }
    const validationSchema=Yup.object({
        email:Yup.string().required("Email ID is required").email("invalid Email id"),
        password:Yup.string().required("Password is required"),
        address:Yup.string().required("Address Required"),
        roomno:Yup.string().required("Room Number is Reqired "),
        gender:Yup.string().required("Required"),
        chechBox:Yup.array().required("Required"),
        date:Yup.date().required("Required").nullable()
    })
    const onSubmit=values=>{console.log("form data",values)}
    return (
        <div className="h-screen">
            <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik =>(
                    <Form className="grid justify-center border-md">
                        <FormHeader>Login Form</FormHeader>
                        <FormikControl control="input" type="email" label="Enter Email ID" name="email" placeholder="Enter Email ID"/>
                        <FormikControl control="input" type="password" label="Enter Password " name="password" placeholder="Enter Password "/>
                        <FormikControl control="textarea" label="Enter Your Address" name="address" placeholder="Enter Your Address "/>
                        <FormikControl control="select" name="roomno" label="select room no " options={dropdownOptions}/>
                        <FormikControl control="radio" name="gender" label="gender" options={radioOptions}/>
                        <FormikControl control="checkbox" name="checkBox" label="checkbox" options={checkBoxOptions} />
                        <FormikControl control="date" name="date" label="pick a date"/>
                        <div className="grid grid-cols-2"> 
                        <Button variant="primary" type="submit">Login</Button>
                        <Button variant="secondary" type="reset">Reset</Button>
                        </div>
                    </Form>
                )
            }
        </Formik>
        </div>
        
    )
}

export default FormikContainer;
