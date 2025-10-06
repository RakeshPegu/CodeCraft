import { useAuthStore } from "@/stores/auth.store";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Navigate, Outlet } from "react-router";



function Layout(){
   
    return(
        <div >
            <Navbar/>
            <div className="bg-blue-100">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    )
    
}
function AuthRequireLayout(){
    const {isAuthenticated,refreshToken} = useAuthStore()
    if(!isAuthenticated){
        refreshToken()
        
    }else{
    return(
    <div>
        <Navbar/>
        <div><Outlet/></div>
        <div><Footer/></div>
    </div>

    )
}

}
export {Layout, AuthRequireLayout}