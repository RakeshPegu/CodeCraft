import { Link, NavLink } from "react-router";
import { LogInIcon} from 'lucide-react'

function Navbar(){
    return (
       <nav className="flex flex-row justify-between z-20 pt-2 top-0 items-center  h-[50px] backdrop-blur-xl fixed w-full">
         <div className="pl-5">
            <h1 style={{fontFamily:"'Blaka Ink', system-ui",fontWeight: 400}} className="text-5xl cursor-pointer pb-2" >C2cd </h1>
         </div>
         <ul className="flex flex-row gap-10  text-xl pr-8">
            <li className="">
                <Link>  menu</Link>
              
            </li>
            <NavLink className="hidden sm:inline ">
                About me
             </NavLink>
            
            <NavLink className="hidden sm:inline ">
                Portfolio
             </NavLink>
            <NavLink className="hidden sm:inline ">
                Skills
             </NavLink>
            
             <NavLink className="hidden sm:inline ">
                CONTACT ME
             </NavLink>
            <li>
                <Link><LogInIcon/></Link>
            </li>
         </ul>
         
       </nav>
    )
}
export default Navbar;