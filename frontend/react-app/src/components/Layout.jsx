import { useAuthStore } from "@/stores/auth.store";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Navigate, Outlet, useNavigate } from "react-router";
import ScrollToTop from "@/utils/Scroll";
import { useEffect } from "react";



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
    const {isAuthenticated} = useAuthStore()
    console.log(isAuthenticated)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isAuthenticated){
            navigate('/login')
        }
    }, [isAuthenticated, navigate])
    if(!isAuthenticated)return null;
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