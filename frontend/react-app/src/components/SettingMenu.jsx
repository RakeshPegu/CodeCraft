import { useState } from "react";
import UpdateUserInfo from "./UpdateUserInfo";
import DeleteAccountConfirmation from "./DeleteConfirmation";
import LogoutConfirmation from "./LogoutConfirmation";

function SettingMenu ({showMenu, buttonDisable}){
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [showDeleteForm, setShowDeleteForm] = useState(false)
    const [showLogoutForm, setShowLogoutForm] = useState(false)
    const onchangeState = ()=>{
        setShowUpdateForm((prev) =>!prev)
        buttonDisable()
    }
    const handleDeleteClick = ()=>{
        setShowDeleteForm((prev)=>!prev)
        buttonDisable()

    }
    const handleLogoutClick = ()=>{
        setShowLogoutForm((prev)=>!prev)
        buttonDisable()
    }
    
    return ( 
        <div className={`flex flex-col  items-center text-pink-50 rounded-2xl gap-6 bg-gray-800 h-[220px]  w-[200px] absolute top-50 ${ showMenu? 'flex':'hidden'} `}>
            <h4 className="text-2xl "> setting </h4>
           <ul className="flex flex-col gap-5 font-mono ">
            <li className="hover:text-lg cursor-pointer " onClick={handleLogoutClick}>
                logout
            
            </li>
            <li className="hover:text-lg cursor-pointer " onClick={handleDeleteClick}>
                delete
            </li>
            <li className="hover:text-lg cursor-pointer" onClick={onchangeState}>
                update
            </li>
           </ul>
           <div className="w-[100%] flex justify-center"><UpdateUserInfo  state={showUpdateForm} onchangeState={onchangeState}/></div>
           <div className="w-[100%] flex justify-center"><DeleteAccountConfirmation showDeleteForm={showDeleteForm} onChangeState={handleDeleteClick}/></div>
           <div className="w-[100%] flex justify-center"><LogoutConfirmation showLogoutForm={showLogoutForm} onChangeState={handleLogoutClick}/></div>
           
        </div>
    )
}
export default SettingMenu;