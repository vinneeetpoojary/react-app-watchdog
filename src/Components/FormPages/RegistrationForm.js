import * as React from 'react';
import{Formik,Form} from "formik";
import * as Yup from "yup";
import FormikControl from '../FormComponents/FormikControl';

const initialValues={
    firstName:"",
    lastName:"",
    emailId:"",
    phoneNo:"",
    buldingName:"",
    address:"",
    termsAndConditions:[]

}
const validationSchema=Yup.object({
    firstName:Yup.string().required("First Name is required"),
    lastName:Yup.string().required("Second Name is required"),
    emailId:Yup.string().email("Invalid Email Format").required("Email Id is Required"),
    phoneNo:Yup.number().typeError("Enter a Valid Phone Number").required("Phone Number is Required"),
    buldingName:Yup.string().required("Building Name is Required"),
    address:Yup.string().required("Building Address is Required"),
})
const onSubmit=(values,onSubmitProps)=>{
    console.log("form values",values);
    console.log("fSubmitProps",onSubmitProps);
    onSubmitProps.resetForm()
}


function RegistrationForm() {
  
    return (
        <div className="min-h-screen bg-gray-100 flex flex-cols justify-center">
            <div className="max-w-md w-full mx-auto">
            <div className="text-center font-medium text-3xl font-bold text-yellow-300 mt-2">
                    Register Form For Your Building
                </div>
                <div className="bg-white border border-gray-300 p-8 max-w-md w-full mx-auto mt-4">
                <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                {
                    formik=>{

                    return <Form>
                        <div className="grid grid-cols-2">
                        <FormikControl
                            control="input"
                            type="text"
                            label="Enter Your First Name"
                            placeholder="Enter Your First Name"
                            name="firstName"
                            />
                            <FormikControl
                            control="input"
                            type="text"
                            label="Enter Your Last Name"
                            placeholder="Enter Your Last Name"
                            name="lastName"
                            />
                        </div>
                            <FormikControl
                            control="input"
                            type="email"
                            label="Enter Your Email Id"
                            placeholder="Enter Your Email Id"
                            name="emailId"
                            />
                            <FormikControl
                            control="input"
                            type="tel"
                            label="Enter Your Phone Number"
                            placeholder="Enter Your Phone Number"
                            name="phoneNo"
                            />
                            
                             <FormikControl
                            control="input"
                            type="text"
                            label="Enter Your Building Name"
                            placeholder="Enter Your Building Name"
                            name="buldingName"
                            />
                            <FormikControl
                            control="textarea"
                            type="text"
                            label="Enter Your Building Address"
                            placeholder="Enter Your Building Address"
                            name="address"
                            />
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

export default RegistrationForm
