import { useAuthStore } from "@/stores/auth.store";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Navigate, Outlet } from "react-router";
import ScrollToTop from "@/utils/Scroll";



function Layout(){
   
    return(
        <>
          <header>
            <Navbar/>
          </header>
          <main>
            <ScrollToTop/>
            <Outlet/>        
            <Footer/>
          </main>
          

        </>
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