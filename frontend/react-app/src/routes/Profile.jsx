import { useAuthStore } from "@/stores/auth.store"
import { useEffect } from "react"
import { Link } from "react-router";

function Profile(){
    const {userInfo} = useAuthStore()
      
    return(
        <div className="bg-cyan-300 h-[100vh] relative flex  flex-col justify-center items-center">
            <h1 className="font-extrabold text-6xl mt-10" style={{fontFamily:"'Libertinus Mono',monospace"}}> Welcome to Dashboard</h1>
            <div className="bg-gray-400 w-[30%] h-[500px] mt-10 flex flex-col gap-4 rounded-2xl">
            <div className=" flex justify-end pr-3 pt-2"><Link className="cursor-pointer"><img src="./setting-5-svgrepo-com.svg" style={{width:'30px'}} alt="setting"/></Link></div>
            <div className=" flex flex-col justify-center items-center mt-8">
               <img src="./unknown2-svgrepo-com.svg" style={{width:"200px", height:"200px"}} alt="default profile"/>
            </div>
            <div className=" flex justify-center items-center bg-gray-600 rounded-b-2xl h-[200px]">
                <div className="flex flex-col gap-5 text-2xl font-bold font-mono text-pink-50">
                    <p>Name: {userInfo.username}</p>
                    <p>Email:{userInfo.email}</p>                 
                    
                </div>

            </div>
        </div>

        </div>
    )
}
export default Profile;