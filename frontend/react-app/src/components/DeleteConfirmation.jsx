import { useUserStore } from "@/stores/user.store";
import { Button } from "./ui/button";
import { useState } from "react";

function DeleteAccountConfirmation ({showDeleteForm, onChangeState}){
    const {deleteUserAccount} = useUserStore()
    const [password, setPassword] = useState({
        password:""
    })
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await deleteUserAccount(password)

    }
    
    return(
        <div className={`flex w-[390px] flex-col gap-5 items-center h-35 text-black bg-white absolute top-15 right-3 ${showDeleteForm? "flex":"hidden"}`}>
            <h3 className="text-xl pt-3">Delete Account Confirmation</h3>
            <div>
                <form  onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <input type="password" name="password" className="outline-1 pl-5" placeholder="enter your password" onChange={(e)=>{setPassword({password:e.currentTarget.value})}}/>
                   <div className="flex gap-5 w-full justify-center ">
                    <Button className="text-green-400 " type='button' onClick={onChangeState}> Cancel</Button>
                    <Button className='text-red-700 ' type="submit">Confirm </Button>
                   </div>
                </form>
            </div>

        </div>
    )
}
export default DeleteAccountConfirmation;