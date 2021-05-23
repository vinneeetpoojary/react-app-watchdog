import * as React from 'react'
import {Formik,Form} from "formik";
import * as Yup from "yup"
import FormikControl from '../FormComponents/FormikControl';

const initialValues={
    fullName:"",
    contact:"",
    address:"",
    wing:"",
    roomNo:"",
    timeIn:"",
    timeOut:"",
    visitorType:[""]
}
const validationSchema=Yup.object({
    fullName:Yup.string().required("Visitor Name is Required"),
    contact:Yup.number().typeError("Invalid Contact Number").required("Contact Number is Required"),
    address:Yup.string().required("Address is Required"),
    wing:Yup.string().required("Wing is Required"),
    roomNo:Yup.string().required("Room No. is Required"),
    timeIn:Yup.string().required("Time In is Required"),
    timeOut:Yup.string().required("Time Out is Required"),
    visitorType:Yup.array().required("Visitor Type is Required"),
})
const onSubmit=(values,onSubmitProps)=>{
    console.log("Form values",values)
}
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
const VisitorOptions=[
    {key:"Guest",value:"Guest"},
    {key:"Delivery Guy",value:"Delivery Guy"},
    {key:"Domestic Worker",value:"Domestic Worker"},
]
function VisitorDetailsForm() {
    const [formStep,setFormStep]=React.useState(0);
    const RenderNextButton=()=>{
        if (formStep===1)
            return <FormikControl
                    control="button"
                    variant={"primary"}
                    type="Submit"
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
        <div className="h-screen flex flex-cols justify-center bg-gray-100">
            <div className="max-w-md w-full mx-auto">
            <div className="text-center  text-3xl font-bold text-yellow-300 mt-2">
                Visitors Form
            </div>
                <div className="bg-white border border-gray-300 max-w-md w-full mx-auto mt-4 p-8">
                   <Formik
                   initialValues={initialValues}
                   validationSchema={validationSchema}
                   onSubmit={onSubmit}
                   >
                       {
                           (formik)=>{
                                return <Form>
                                    { formStep===0 && <section>
                                        <FormikControl
                                         control="checkbox"
                                          name="visitorType"
                                           label="Select Visitor Type" options={VisitorOptions} />
                                        <FormikControl
                                        control="input"
                                        type="text"
                                        label="Enter Visitors Full Name"
                                        placeholder="Enter Visitors Full Name"
                                        name="fullName"
                                        />
                                         <FormikControl
                                        control="input"
                                        type="tel"
                                        label="Enter Your Phone Number"
                                        placeholder="Enter Your Phone Number"
                                        name="contact"
                                        />
                                        <FormikControl
                                        control="input"
                                        type="text"
                                        label="Enter Visitors Address"
                                        placeholder="Enter Visitors Address"
                                        name="address"
                                        />
                                        </section>}
                                        {
                                formStep===1 && <section>
                                        
                                        <FormikControl
                                        control="select"
                                        name="wing"
                                        label="Select Your Wing" 
                                        options={WingOptions}
                                        />
                                        <FormikControl
                                        control="select"
                                        name="roomNo"
                                        label="Enter Your Room Number"
                                        options={RoomNoOptions}
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

export default VisitorDetailsForm
