import React from 'react';
import {Formik,Form} from "formik";
import * as Yup from "yup";
import FormikControl from '../FormComponents/FormikControl';
import Button from '../FormComponents/Button';

const initialValues={
    userName:"",
    password:""
}
const validationSchema=Yup.object({
    userName:Yup.string().required("Enter Your Username"),
    password:Yup.string().required("Enter Your Password")}
)
const onSubmit=values=>{
    console.log("form data",values)
}
function LoginForm() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-cols justify-center">
            <div className="max-w-md w-full mx-auto ">
                <div className="text-center font-medium text-3xl font-bold text-yellow-300 mt-2">
                    Login Form
                </div>
                <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            
            >
                {
                    formik=>{
                        return <Form>
                            <FormikControl 
                            control="input"
                            type="text"
                            name="userName"
                            label="Enter Your Username" 
                            placeholder="Enter Your Username"/>

                             <FormikControl 
                            control="input"
                            type="password"
                            name="password"
                            label="Enter Your Password" 
                            placeholder="Enter Your Password"/>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                               <input type="checkbox" className="h-4 w-4 text-blue-300 rounded"/>
                               <label htmlFor="" className="ml-2 text-sm text-gray-600">Remember me</label>
                                </div>
                            </div>
                           


                            <Button 
                            variant="primary"
                            type="submit"
                            >
                                Login
                            </Button>
                            <Button 
                            variant="secondary"
                            type="submit"
                            >
                                Reset
                            </Button>
                        </Form>
                    }
                }
            </Formik>
                </div>
            </div>
        </div>
            
    )
}

export default LoginForm
