import React from 'react';
import {Formik,Form} from "formik";
import * as Yup from "yup";
import FormikControl from '../FormComponents/FormikControl';

const initialValues={
    userName:"",
    password:"",
    rememberMe:""
}
const validationSchema=Yup.object({
    userName:Yup.string().required("Enter Your Username"),
    password:Yup.string().required("Enter Your Password")}
)
const onSubmit=(values,onSubmitProps)=>{
    //console.log("form data",values);
    //console.log("submit props",onSubmitProps)    
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}
const rememberMe=[
    {key:"Remember me",value:"1"}
]
  
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
            //validateOnMount
            >
                {
                    formik=>{
                       // console.log("form props",formik);
                       
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
                               <FormikControl
                               control="checkbox"
                               name="rememberMe"
                               options={rememberMe}
                               />
                            </div>

                            <div className="flex flex-cols justify-center">
                            <FormikControl
                            control="button"
                            variant={!formik.isValid ||formik.isSubmitting ? "disabled":"primary"}
                            type="submit"
                            children="Submit"
                            disabled={!formik.isValid ||formik.isSubmitting}
                            />
                            <FormikControl
                            control="button"
                            variant="secondary"
                            type="reset"
                            children="Reset"
                            />
                            </div>
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
