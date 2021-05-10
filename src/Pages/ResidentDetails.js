import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray} from "formik";
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
    familyMembers:[""]
}
const onSubmit =values=>{
    console.log(values)
}
const validationSchema = Yup.object({
    
    firstName:Yup.string().required("First Name Required"),
    secondName:Yup.string().required("Second Name Required"),
    email:Yup.string().email("Invalid Email").required("Email ID Required"),
    contact:Yup.number().typeError("Invalid Contact Number ").required("Contact Number Required"),
    wing:Yup.string().required("Required Wing"),
    room:Yup.string().required("Required Room Number"),
    password:Yup.string().required("Required Password"),
})
function ResidentDetails() {
    const [formStep,setFormStep]=React.useState(0);
    const Next=()=>{
        setFormStep(cur=>cur +1);
    }
    const Back=()=>{
        setFormStep(cur=>cur-1);
    }
    const RenderBackButton =()=>{
        if (formStep === 0){
            return undefined
        }else{
            return(
                <div className="flex items-center justify-center">
                    <button
                    onClick={Back}
                    type="button"
                    className="py-2 px-4 border rounded bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-gray-700 focus:ring-offset-2">
                      Back
                        </button>
                </div>
            )
        }
    }
    const RenderButton =()=>{
        if (formStep >3){
            return undefined;
        }else if (formStep === 3){
            return(
                <div className="flex items-center justify-center">
                    <button
                    onClick={Next}
                    type="button"
                    className="py-2 px-4 border rounded bg-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:bg-yellow-700 focus:ring-offset-2">
                       Create User
                        </button>
                </div>
            )
        }
        else{
            return(
                <div className="flex items-center justify-center">
                    <button
                    onClick={Next}
                    type="button"
                    className="py-2 px-4 border rounded bg-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:bg-yellow-700 focus:ring-offset-2">
                       Next
                        </button>
                </div>
            )
        }
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={values=>onSubmit}>
        <div className="h-screen">
        <div className="mt-10 flex  justify-center items-center  sm:mx-auto sm:max-w-md sm:w-full py-6 px-4 shadow rounded-xl sm:px-6">
        <Form >
        { formStep===0 && <section>
     <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center">Personal Details</h1>
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
        </section>}
        { formStep===1 && <section>
     <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center">Room Details</h1>
    <div>
    <label className="block text-base font-medium text-gray-700 mb-2 uppercase" htmlFor="conatctNo">Enter Resident Wing </label>
        <select name="wing" className="appearance-none w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300">
            <option value="">Please Select Wing</option>
            <option value="a">A</option>
            <option value="a">B</option>
            <option value="a">C</option>
            <option value="a">D</option>
            <option value="a">E</option>
        </select>
        <ErrorMessage name="wing">
       {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
          }
       </ErrorMessage>
    </div>
    <div>
    <label className="block text-base font-medium text-gray-700 mb-2 uppercase" htmlFor="conatctNo">Enter Resident Room No. </label>
        <select name="room" className="appearance-none w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300">
            <option value="">Please Select Room No.</option>
            <option value="a">101</option>
            <option value="a">102</option>
            <option value="a">103</option>
            <option value="a">104</option>
            <option value="a">105</option>
        </select>
        <ErrorMessage name="room">
       {
              errorMsg=><div className="text-red-500">{errorMsg}</div>
          }
       </ErrorMessage>
    </div>
    </section>}
    { formStep ===2 && <section>
        <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center">Resident Members Details</h1>
        <div>
        <label className="block text-base font-medium text-gray-700 mb-2 uppercase" htmlFor="familyMembers">Enter Family Members </label>
            <FieldArray name="familyMembers">
                {
                    (fieldArrayProps)=>{
                            
                            const {push,remove,form}=fieldArrayProps
                            const {values}=form
                            const{familyMembers}=values
                            return (
                                <div>
                                    
                                    {
                                        familyMembers.map((familyMembers,index)=>(
                                            <div key={index}>
                                                <Field name={`familyMembers[${index}]`} 
                                                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300"
                                                type="text"/>
                                                {
                                                    index > 0 && 
                                                    <button type="button" onClick={()=>{remove(index)}}
                                                    className="py-2 px-4 border rounded bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-gray-700 focus:ring-offset-2"
                                                   >-</button>
                                                }
                                               
                                                <button type="button" onClick={()=>{push('')}}
                                                 className="py-2 px-4 border rounded bg-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:bg-yellow-700 focus:ring-offset-2"
                                                >Add a Member</button>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                    }
                }
            </FieldArray>

        </div>
        </section>}
        {
            formStep===3 && <section>
                 <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center">Create Password</h1>
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
                    <div className="">
                    <label className="block text-base font-medium text-gray-700 mb-2" htmlFor="Password">Confirm Password</label>
                    <Field className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" 
                    type="password"
                    id="cnfpassword" 
                    placeholder="Confirm password"
                    name="cnfpassword"
                    />
                    <ErrorMessage name="cnfpassword">
                    {
                        errorMsg=><div className="text-red-500">{errorMsg}</div>
                        }
                    </ErrorMessage>
                    </div>
            </section>
        }
    { formStep ===4 &&
        <section>
            <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center"> User Created </h1>
        </section>
    }
    <div className="flex items-center justify-center">
    {RenderBackButton()}
    {RenderButton()}
    </div>
    
        </Form>
        </div>
        </div>
        </Formik>
    )
}

export default ResidentDetails
