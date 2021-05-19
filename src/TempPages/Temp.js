import * as React from "react";
import {Formik,Form} from "formik";
import * as Yup from "yup";
import FormikControl from '../Components/FormComponents/FormikControl';
import Button from '../Components/FormComponents/Button';
import FormHeader from '../Components/FormComponents/FormHeader';

const dropdownOptions=[
    {key:"select an Option", value:""},
    {key:"101", value:"101"},
    {key:"102", value:"102"},
    {key:"103", value:"103"},
    {key:"104", value:"104"},
    {key:"105", value:"105"},
]

const radioOptions=[
  
    {key:"Male", value:"Male"},
    {key:"Female", value:"Female"},
]

const initialValues={
    email:"",
    password:"",
    address:"",
    roomno:"",
    gender:"",
}
const validationSchema=Yup.object({
    email:Yup.string().required("Email ID is required").email("Invalid Email id"),
    password:Yup.string().required("Password is required"),
    address:Yup.string().required("Address is Required"),
    roomno:Yup.string().required("Room Number is Reqired"),
    gender:Yup.string().required("Required"),
})
const onSubmit=values=>{console.log("form data",values)}

function Temp() {
   const [formStep,setFormStep]=React.useState(0);
    const Next=()=>setFormStep(cur=>cur+1);
    const Back=()=>setFormStep(cur=>cur-1);
    const RenderNextButton=()=>{
        if (formStep === 3){
            return (
                <Button variant="primary" type="submit" >Next</Button>
            )
        }else{
            return(
                <Button variant="primary" type="button" onClick={Next} >Next</Button>
            )
        }
    }
    const RenderBackButton=()=>{
        if (formStep ===0){
            return undefined
        }else if (formStep < 4){
            return(
                <Button variant="secondary" type="button" onClick={Back} >Back</Button>
            )
        }
    }
    
    return (
        <div className="h-screen ">
            <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
        >
            {
                formik =>(
                    <div className="mt-10 flex justify-center items-center border-md shadow rounded-xl py-6 px-4 w-screen">
                    <Form className="grid justify-center border-md" >
                         <FormHeader>Login Form</FormHeader>
                        {
                            formStep===0 && <section>
                                 <FormikControl control="input" type="email" label="Enter Email ID" name="email" placeholder="Enter Email ID"/>
                                <FormikControl control="input" type="password" label="Enter Password " name="password" placeholder="Enter Password "/>
                            </section>
                        }
                        {
                             formStep===1 && <section>
                                 <FormikControl control="textarea" label="Enter Your Address" name="address" placeholder="Enter Your Address "/>
                             </section>
                        }
                        {
                             formStep===2 && <section>
                                  <FormikControl control="select" name="roomno" label="select room no " options={dropdownOptions}/>
                             </section>
                        }
                       {
                           formStep===3 && <section>
                               <FormikControl control="radio" name="gender" label="gender" options={radioOptions}/>
                               <FormikControl
                                                 control="input"
                                                 type="text"
                                                 label="Enter Contact Number of a Member"
                                                 placeholder="Enter Contact Number of a Member"
                                                 name={`familyMembers[${index}].Contact`}
                                                 />
                           </section>
                       }

                        <div>
                        {RenderNextButton()}{RenderBackButton()}
                       
                        </div>
                    </Form>
                    </div>
                )
            }
        </Formik>
        </div>
    )
}

export default Temp
 