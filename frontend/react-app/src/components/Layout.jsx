import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router";


function Layout(){
    return(
        <div>
            <Navbar/>
            <div className="">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    )
    
}
export default Layout;