import { Link, NavLink } from "react-router";
function Navbar(){
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
  
    return (
       <nav className="flex flex-row  z-20 pt-2 top-0 items-center justify-between lg:justify-normal h-[50px] backdrop-blur-xl fixed w-full font-serif">
         <div className="pl-5">
            <Link to={'/'}>
            <h1 style={{fontFamily:"'Blaka Ink', system-ui",fontWeight: 400}} className="text-5xl cursor-pointer pb-2" >C2 </h1>
            </Link>
         </div>
         <div className="flex flex-row gap-6 lg:gap-25  text-xl pr-8 text-gray-900 lg:relative lg:left-150 lg:text-2xl">
            <NavLink className="sm:hidden ">
                 <span>Menu</span>
              
            </NavLink>
            <NavLink className="hidden sm:inline hover:rounded-4xl hover:bg-white/50 backdrop-blur-xl pl-2 pr-2" onClick={handleAbout}>
                about me
             </NavLink>
            
            <NavLink className="hidden sm:inline hover:rounded-4xl hover:bg-white/50 backdrop-blur-xl pl-2 pr-2" onClick={handleProject}>
                project
             </NavLink>
            <NavLink className="hidden sm:inline hover:rounded-4xl hover:bg-white/50 backdrop-blur-xl pl-2 pr-2" onClick={handleSkill}>
                skill
             </NavLink>
            
             <NavLink className="hidden sm:inline hover:rounded-4xl hover:bg-white/50 backdrop-blur-xl pl-2 pr-2">
                contact me
             </NavLink>
            <NavLink to={'/profile'}>
                <span className="material-symbols-outlined text-black  ">account_circle</span>
            </NavLink>
         </div>
         
       </nav>
    )
}
export default Navbar;