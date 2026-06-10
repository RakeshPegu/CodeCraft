import { useAuthStore } from "@/stores/auth.store";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Navigate, Outlet } from "react-router";



function Layout(){
   
    return(
        <>
            <Navbar/>   
            <Outlet/>        
            <Footer/>
        </>
    )
    
}
function AuthRequireLayout(){
    const {isAuthenticated} = useAuthStore()
    console.log(isAuthenticated)
    if(!isAuthenticated){
        return <Navigate to={'/login'}/>
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