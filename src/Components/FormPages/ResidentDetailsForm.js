import * as React from 'react';
import {Formik,Form,FieldArray,Field} from "formik";
import * as Yup from "yup";
import FormikControl from '../FormComponents/FormikControl';

const initialValues={
    firstName:"",
    lastName:"",
    emailId:"",
    phoneNo:"",
    wing:"",
    roomno:"",
    familyMembers:[""],
    password:"",
    cnfpassword:"",
}
const validationSchema=Yup.object({
    firstName:Yup.string().required("First Name is required"),
    lastName:Yup.string().required("Second Name is required"),
    emailId:Yup.string().email("Invalid Email Format").required("Email Id is Required"),
    phoneNo:Yup.number().typeError("Enter a Valid Phone Number").required("Phone Number is Required"),
    wing:Yup.string().required("Wing is Required"),
    roomno:Yup.string().required("Room Number is Required"),
    password:Yup.string().required("Password is Required"),
    cnfpassword:Yup.string().oneOf([Yup.ref("password"),""],"Password must match").required("Renter Your Password"),
})
const onSubmit=(values,onSubmitProps)=>{
    console.log("Form values",values)
}
function ResidentDetailsForm() {
    const [formStep,setFormStep]=React.useState(0);

    const WingOptions=[
        {key:"Select Your  Wing", value:""},
        {key:"A",value:"A"},
        {key:"B",value:"B"},
        {key:"C",value:"C"},
        {key:"D",value:"D"},
        {key:"E",value:"E"}
    ]
    const RoomNoOptions=[
        {key:"Select Your Room Number", value:""},
        {key:"101",value:"101"},
        {key:"102",value:"102"},
        {key:"103",value:"103"},
        {key:"104",value:"104"},
        {key:"105",value:"105"},
        {key:"201",value:"201"},
        {key:"202",value:"202"},
        {key:"203",value:"203"},
        {key:"204",value:"204"},
        {key:"205",value:"205"},
    ]
    
    const RenderNextButton=()=>{
        if (formStep===3)
            return <FormikControl
                    control="button"
                    variant={"primary"}
                    type="submit"
                    children="Submit"
                   // disabled={!formik.isValid ||formik.isSubmitting}
                    //onClick={Next}
                    />
        else
            return <FormikControl
                    control="button"
                    variant="primary"
                    type="button"
                    children="Next"
                    onClick={Next}
                    />
    }
    const RenderBackButton=()=>{
        if (formStep===0)
            return undefined
        else
            return  <FormikControl
                        control="button"
                        variant="secondary"
                        type="button"
                        children="Back"
                        onClick={Back}/>        
      }

    const Next=()=>{
        setFormStep(cur=>cur+1);
    }
    const Back=()=>{
        setFormStep(cur=>cur-1);
    }
    return (
        <div className="h-screen bg-gray-100 flex flex-cols justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="mt-4 bg-white border border-gray-300 max-w-md w-full mx-auto p-8">
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                >
                {
                    formik=>{
                        return <Form>
                             {formStep===0 && <section>
                                <div className="text-center font-medium text-3xl font-bold text-yellow-300 mt-2">
                                        Resident Personal Details
                                  </div>
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
                            </section>
                            }{
                                formStep===1 && <section>
                                        <div className="text-center font-medium text-3xl font-bold text-yellow-300 mt-2">
                                        Resident Room Details
                                        </div>
                                        <FormikControl
                                        control="select"
                                        name="wing"
                                        label="Select Your Wing" 
                                        options={WingOptions}
                                        />
                                        <FormikControl
                                        control="select"
                                        name="roomno"
                                        label="Enter Your Room Number"
                                        options={RoomNoOptions}
                                        />
                                </section>
                            }
                            {
                                formStep===2 && <section>
                                    <div className="text-center font-medium text-3xl font-bold text-yellow-300 mt-2">
                                        Resident Family Members Details
                                        </div>
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
                                </section>
                            }
                            {
                                formStep ===3 && <section>
                                        <div className="text-center font-medium text-3xl font-bold text-yellow-300 mt-2">
                                       Create Password
                                        </div>
                                        <FormikControl
                                        control="input"
                                        type="password"
                                        label="Enter Your Password"
                                        placeholder="Enter Your Password"
                                        name="password"
                                        />
                                        <FormikControl
                                        control="input"
                                        type="text"
                                        label="Confirm Password"
                                        placeholder="Confirm Password"
                                        name="cnfpassword"
                                        />
                                </section>
                            }
                            <div className="flex flex-cols justify-center mt-4">
                                {RenderNextButton()}
                                 {RenderBackButton()}
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

export default ResidentDetailsForm
