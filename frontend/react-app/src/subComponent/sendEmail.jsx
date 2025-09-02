import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/stores/auth.store"

import { useState } from "react"

function SendEmail({emailFormState, changeEmailFormState}){
    const initialFormState = {
        firstName:'',
        middleName:'',
        lastName:'',
        email:'',
        message:''
    }
     const [formData, setFormData] = useState(initialFormState)
    const {isSendingEmail, sendingEmail} = useAuthStore()
    const handleRemove = ()=>{        
        changeEmailFormState()

    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const result =  await sendingEmail(formData)
        if(result.success === true){
            setFormData(initialFormState)
        
        }



    }
    
    return(
        <div className={` w-[50%] flex flex-col text-black bg-gray-50 items-center absolute top-5 left-90 p-6 rounded-xl z-10 ${emailFormState? 'flex':"hidden"}`}>
            <div className="w-full flex justify-end cursor-pointer">
                <p className="text-3xl w-[50px] h-[50px] flex justify-center items-center  " onClick={handleRemove}> ×</p>
            </div>            
            <h3> Send email </h3>
            <form className=" flex flex-col items-center w-[93%] text-xl" onSubmit={handleSubmit}>
                <label className="w-full pl-13" > First name: </label>
                <input type="text" name="firstname" maxLength={30} value={formData.firstName} className="w-[85%] outline-1 pl-3 h-8 rounded-xl"  onChange={(e)=>{setFormData({...formData, firstName:e.currentTarget.value})}}  />
                <br/>
                <label className="w-full pl-13" > Middle name: </label>
                <input type="text" name="middlename" maxLength={30} value={formData.middleName} className="w-[85%] outline-1 h-8 pl-3 rounded-xl" onChange={(e)=>{setFormData({...formData, middleName:e.currentTarget.value})}}  />
                <br/>
                <label className="w-full pl-13" > Last name: </label>
                <input type="text"  className="w-[85%] outline-1 h-8 rounded-xl pl-3" value={formData.lastName} name="last name" onChange={(e)=>{setFormData({...formData, lastName:e.currentTarget.value})}} maxLength={30}  required />
                <br/>
                <label className="w-full pl-13"  > Email address: </label>
                <input type="email" className="w-[85%] outline-1 h-8 rounded-xl pl-3"  value={formData.email} required onChange={(e)=>{setFormData({...formData, email:e.currentTarget.value})}}  />
                <br/>
                <label  className="w-full pl-13" > Message: </label>
                <textarea name="message" className="w-[85%] outline-1 h-20 rounded-xl pl-3" value={formData.message} onChange={(e)=>{setFormData({...formData, message:e.currentTarget.value})}}></textarea>
                <br/>
                <Button className={'bg-blue-500'} disabled={isSendingEmail}>Submit</Button>
            </form>
        </div>
    )
}
export default SendEmail