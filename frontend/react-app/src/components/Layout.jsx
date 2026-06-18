import { useAuthStore } from "@/stores/auth.store";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router";
import ScrollToTop from "@/utils/Scroll";
import { Navigate } from "react-router";



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
    const {isAuthenticated, } = useAuthStore()
 
    if(!isAuthenticated){
        return  <Navigate to={'/login'} replace />
     }
    return(
    <>
    <header>
        <Navbar/>
    </header>
    <main>
        <Outlet/>
        <Footer/>
    </main>
    </>
        

    

    )
}


export {Layout, AuthRequireLayout}