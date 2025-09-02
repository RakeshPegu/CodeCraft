import ContactForm from "@/subComponent/ContactForm";
import MenuCard from "@/subComponent/menu";
import SendEmail from "@/subComponent/sendEmail";
import { useState } from "react";
import { Link, NavLink } from "react-router";
function Navbar(){
   const [menuState, setMenuState] = useState(false)
   const [showContactForm, setShowContactForm] = useState(false)
   const [showEmailForm, setShowEmailForm] = useState(false)
   
   const handleAbout = ()=>{
      const about = document.getElementById('about')
      if(about){
         about.scrollIntoView({behavior:"smooth"})
      }
   }
   const handleProject = ()=>{
      const project = document.getElementById('project')
      if(project){
         project.scrollIntoView({behavior:"smooth"})
      }
   }
   const handleSkill = ()=>{
      const skills = document.getElementById('skill')
      if(skills){
         skills.scrollIntoView({behavior:"smooth"})
      }
   }
   const handleContactClick = ()=>{
      setShowContactForm((prev)=>!prev)
   }
   const handleEmailForm =()=>{
      setShowEmailForm((prev)=> !prev)
   }

  
    return (
       <nav className="flex flex-row  z-20 pt-2 top-0 items-center justify-between h-[50px] backdrop-blur-xl fixed w-full font-serif">
         <div className="pl-5">
            <Link to={'/'}>
            <h1 style={{fontFamily:"'Blaka Ink', system-ui",fontWeight: 400}} className="text-5xl cursor-pointer pb-2" >C2 </h1>
            </Link>
         </div>
         <div className="flex flex-row gap-10   lg:gap-25  text-xl pr-8 text-amber-500  lg:text-2xl lg:mr-8">
            <div>
               <NavLink className={`sm:hidden`} onMouseEnter={()=>setMenuState(true)} onClick={()=>setMenuState(prev => !prev)}  >
                 menu
              
              </NavLink>
               <div className={`sm:hidden  flex justify-center items-center ${menuState?'flex':'hidden'}`} >
                 <MenuCard  showState={setMenuState}/>
               </div> 
               <div className="flex justify-center w-full"> <SendEmail emailFormState={showEmailForm} changeEmailFormState={handleEmailForm}/> </div>

            </div>


            <NavLink className="hidden sm:inline hover:rounded-4xl hover:bg-white/50 backdrop-blur-xl pl-2 pr-2" onClick={handleAbout}>
                about me
             </NavLink>
            
            <NavLink className="hidden sm:inline hover:rounded-4xl hover:bg-white/50 backdrop-blur-xl pl-2 pr-2" onClick={handleProject}>
                project
             </NavLink>
            <NavLink className="hidden sm:inline hover:rounded-4xl hover:bg-white/50 backdrop-blur-xl pl-2 pr-2" onClick={handleSkill}>
                skill
             </NavLink>
            <div className="hidden sm:inline ">
             <NavLink className='hover:rounded-4xl  hover:bg-white/50 backdrop-blur-xl pr-2 pl-2' onMouseEnter={()=>setShowContactForm(true)} onClick={handleContactClick}>
                contact me
             </NavLink>
             <div className=" w-[300px] bg-pink-600">
               <ContactForm  formState={showContactForm} changeState={handleContactClick}  changeEmailFormState={handleEmailForm}/>
             </div>
            </div>
            <NavLink to={'/profile'}>
                <span className="material-symbols-outlined text-black  ">account_circle</span>
            </NavLink>
         </div>
                 
       </nav>
    )
}
export default Navbar;