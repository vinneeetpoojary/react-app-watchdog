import * as React from "react"
function UserDetailsForm2(){
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
    { formStep === 0 &&
        <section>
            <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center">Create Password</h1>
            <div className="">
<label className="block text-base font-medium text-gray-700 mb-2" for="Password">Create Password</label>
<input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" type="password" placeholder="Enter Your Password"/>
</div>
<div className="">
<label className="block text-base font-medium text-gray-700 mb-2" for="Password">Confirm Password</label>
<input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" type="password" placeholder="Enter Your Password"/>
</div>
        </section>
    }
    {formStep===1 && <section>
        <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center">Resident Members Details</h1>
    <div className="grid grid-cols-2 ">
    <label className="block text-base font-medium text-gray-700 uppercase mb-2" for="firstName">Enter Resident  Name</label>
    <label className="block text-base font-medium text-gray-700 uppercase mb-2" for="secondName">Enter Resident Contact Number</label>
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300 space-x-4" type="text" placeholder="Enter  member 1"/>   
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" type="tel" placeholder="Enter Contact Number"/>
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300 space-x-4 space-y-4" type="text" placeholder="Enter  member 2"/>   
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" type="tel" placeholder="Enter Contact Number"/>     
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300 space-x-4" type="text" placeholder="Enter  member 3"/>   
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" type="tel" placeholder="Enter Contact Number"/>     
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300 space-x-4" type="text" placeholder="Enter  member 4"/>   
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" type="tel" placeholder="Enter Contact Number"/>        
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300 space-x-4" type="text" placeholder="Enter  member 5"/>   
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" type="tel" placeholder="Enter Contact Number"/>        
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300 space-x-4" type="text" placeholder="Enter  member 6"/>   
    <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300" type="tel" placeholder="Enter Contact Number"/>                      
    </div>
        </section>
    }
 { formStep ===2 &&
        <section>
            <h1 className="text-3xl font-medium text-yellow-500 uppercase flex justify-center">Members Created </h1>
        </section>
    }
    {RenderButton()}
        </form>
        </div>
        </div>
    )
}
export default UserDetailsForm2;