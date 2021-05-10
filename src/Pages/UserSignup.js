import * as React from "react";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";

const initialValues ={
    firstName:"",
    secondName:"",
    email:"",
    contact:["",""],
    buildingCode:"",
    password:"",
    fullName:{
        firstName:"",
        secondName:""
    },
}
const onSubmit =values=>{
    console.log(values)
}
const validationSchema = Yup.object({
    
    firstName:Yup.string().required("First Name Required"),
    secondName:Yup.string().required("Second Name Required"),
    email:Yup.string().email("Invalid Email").required("Email ID Required"),
    contact:Yup.number().typeError("Invalid Contact Number ").required("Contact Number Required"),
    buildingCode:Yup.string().required("Required Building Code"),
    password:Yup.string().required("Required Password"),
})
function UserSignup(){
    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
 <div className="h-screen">
        <div className="mt-10 flex  justify-center items-center  sm:mx-auto sm:max-w-md sm:w-full py-6 px-4 shadow rounded-xl sm:px-6">
    <Form className="mb-6 space-y-6 grid justify-center">
    <div className="grid grid-cols-2 ">
    <label className="block text-base font-medium text-gray-700 uppercase mb-2" htmlFor="firstName">Enter First Name</label>
    <label className="block text-base font-medium text-gray-700 uppercase mb-2" htmlFor="secondName">Enter Second Name</label>
    <Field className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300 space-x-4"
     type="text"
      id="firstname"
       name="firstName"
       placeholder="Enter First Name"
       />    
    <Field className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300"
     type="text"
      id="secondname"
       placeholder="Enter Second Name" 
       name="secondName"
       />      
      <ErrorMessage name="firstName">
          {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
          }
      </ErrorMessage>
      <ErrorMessage name="secondName">
      {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
          }
      </ErrorMessage>
    </div>
    <div className="">
    <label className="block text-base font-medium text-gray-700 mb-2 uppercase" htmlFor="Email">Enter Email id</label>
    <Field className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" 
    type="email" 
    id="email" 
    placeholder="Enter Email id" 
    name="email"
    />        
      <ErrorMessage name="email">
      {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
          }
      </ErrorMessage>
    </div>
    <div className="">
    <label className="block text-base font-medium text-gray-700 mb-2 uppercase" htmlFor="conatctNo">Enter Primary contact no.</label>
    <Field className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300"
    type="tel" 
    id="contactno1"
     placeholder="Enter contact no." 
     name="contact[0]"
     />     
       <ErrorMessage name="contact">
       {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
          }
       </ErrorMessage>
    </div>
    <div className="">
    <label className="block text-base font-medium text-gray-700 mb-2 uppercase" htmlFor="conatctNo">Enter Secondary contact no.</label>
    <Field className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300"
    type="tel" 
    id="contactno2"
     placeholder="Enter contact no." 
     name="contact[1]"
     />     
       <ErrorMessage name="contact">
       {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
          }
       </ErrorMessage>
    </div>
    <div className="">
    <label className="block text-base font-medium text-gray-700 mb-2 uppercase" htmlFor="buildingCode">Enter Building Code </label>
    <Field  as="textarea" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" 
    type="text" 
    id="buildingCode" 
    placeholder="Enter Building Code" 
    name="buildingCode"
    />        
      <ErrorMessage name="buildingCode">
      {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
          }
      </ErrorMessage>
    </div>
    
    <div className="">
<label className="block text-base font-medium text-gray-700 mb-2" htmlFor="Password">Password</label>
<Field className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" 
type="password"
 id="password" 
 placeholder="Enter password"
  name="password"
  />
     <ErrorMessage name="password">
     {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
          }
     </ErrorMessage>
</div>
<div className="flex items-center justify-center">
    <button className="py-2 px-4 border rounded bg-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:bg-yellow-700 focus:ring-offset-2" type="submit">signup</button>
    <button className="py-2 px-4 border rounded bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-gray-700 focus:ring-offset-2" type="reset">Reset</button>
</div>
</Form>
</div>
       </div>
        </Formik>
      
    )
    }
    export default UserSignup;