import * as React from "react";
function UserDetailsForm(){
    const [formStep,setFormStep]=React.useState(0);
    const Next=()=>{
        setFormStep(cur=>cur +1);
    }
    const RenderButton =()=>{
        if (formStep >1){
            return undefined;
        }else if (formStep === 1){
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
    return(
        <div className="h-screen">
        <div className="mt-10 flex  justify-center items-center  sm:mx-auto sm:max-w-md sm:w-full py-6 px-4 shadow rounded-xl sm:px-6">
    <form className="mb-6 space-y-6 grid justify-center">
 { formStep===0 && <section>
     <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center">Personal Details</h1>
    <div className="grid grid-cols-2 ">
    <label className="block text-base font-medium text-gray-700 uppercase mb-2" for="firstName">Enter Resident First Name</label>
    <label className="block text-base font-medium text-gray-700 uppercase mb-2" for="secondName">Enter Resident Second Name</label>
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300 space-x-4" type="text" placeholder="Enter First Name"/>   
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" type="text" placeholder="Enter Second Name"/>        
    </div>
    <div className="">
    <label className="block text-base font-medium text-gray-700 mb-2 uppercase" for="Email">Enter Resident Email id</label>
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" type="email" placeholder="Enter Email id"/>        
    </div>
    <div className="">
    <label className="block text-base font-medium text-gray-700 mb-2 uppercase" for="conatctNo">Enter Resident contact no.</label>
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300"type="tel" placeholder="Enter contact no."/>        
    </div>
    </section>}
    { formStep===1 && <section>
     <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center">Room Details</h1>
    <div>
    <label className="block text-base font-medium text-gray-700 mb-2 uppercase" for="conatctNo">Enter Resident Wing </label>
        <select name="wing" className="appearance-none w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300">
            <option value="">Please Select Wing</option>
            <option value="a">A</option>
            <option value="a">B</option>
            <option value="a">C</option>
            <option value="a">D</option>
            <option value="a">E</option>
        </select>
    </div>
    <div>
    <label className="block text-base font-medium text-gray-700 mb-2 uppercase" for="conatctNo">Enter Resident Room No. </label>
        <select name="wing" className="appearance-none w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300">
            <option value="">Please Select Room No.</option>
            <option value="a">101</option>
            <option value="a">102</option>
            <option value="a">103</option>
            <option value="a">104</option>
            <option value="a">105</option>
        </select>
    </div>
    </section>}
    { formStep ===2 &&
        <section>
            <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center"> User Created </h1>
        </section>
    }
    {RenderButton()}
</form>
</div>
</div>
    )
}
export default UserDetailsForm;