import React from 'react'
import {Formik,Form} from "formik";
import * as Yup from "yup";
import FormikControl from './FormikControl';
import FormHeader from './FormHeader';
import Button from './Button';

function FormikContainer() {
    const initialValues={
        email:"",
        password:"",

    }
    const validationSchema=Yup.object({
        email:Yup.string().required("Email ID is required"),
        password:Yup.string().required("Password is required"),
    })
    const onSubmit=values=>{console.log("form data",values)}
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik =>(
                    <Form>
                        <FormHeader>Login Form</FormHeader>
                        <FormikControl control="input" type="email" label="Enter Email ID" name="email" placeholder="Enter Email ID"/>
                        <FormikControl control="input" type="password" label="Enter Password " name="password" placeholder="Enter Password "/>
                       <Button variant="primary" type="submit">Login</Button>
                       <Button variant="secondary" type="reset">Reset</Button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer
