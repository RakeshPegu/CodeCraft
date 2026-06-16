import ContactForm from "@/subComponent/ContactForm";
import MenuCard from "@/subComponent/menu";
import SendEmail from "@/subComponent/sendEmail";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { Menu } from "lucide-react";

function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
   const handleAbout = () => {  
      if(location.pathname === '/'){
        const about = document.getElementById('about')?.scrollIntoView({behavior:'smooth'})
        return;
      }
      navigate('/')
      const timer = setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({behavior:'smooth'})
        
      }, 500);
      return ()=> clearTimeout(timer)
    
  };

  const handleProject = () => {
     if(location.pathname === '/'){
       document.getElementById('project')?.scrollIntoView({behavior:"smooth"})
     }
     navigate('/')
     const timer = setTimeout(()=>{
       document.getElementById('project')?.scrollIntoView({behavior:"smooth"})

     }, 500)
     return ()=>clearTimeout(timer)
     
  };

  const handleSkill = () => {
    if(location.pathname === '/'){
      document.getElementById('skill')?.scrollIntoView({behavior:"smooth"})
    }
    navigate('/')
    const timer = setTimeout(() => {
      document.getElementById('skill')?.scrollIntoView({behavior:"smooth"})
      
    }, 500);
    return ()=>clearTimeout(timer)
  };

  const handleContactClick = () => {
    setShowContactForm((prev) => !prev);
    setShowEmailForm(false)
  };
  const handleEmailFormState = ()=>{
    setShowEmailForm((prev)=>!prev)
    setShowContactForm(false)
  }

  return (
    <>
      <nav
        className="
          sticky top-1  
          z-40     
          w-[99%]
          flex h-16 
          items-center justify-between
          rounded-2xl
          border border-white/10
          bg-white/5
          px-5
          lg:px-9
          backdrop-blur-2xl
          shadow-lg
        "
      >
        {/* Logo */}
        <Link to="/">
          <h1
            className="
              text-3xl
              font-bold
              cursor-pointer
              text-gray-200
              bg-clip-text
              
            "
          >
            Rakesh <span className="text-fuchsia-600 text-4xl">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-2 lg:gap-4">
          <button
            onClick={handleAbout}
            className="
              rounded-xl
              px-4 py-2
              text-slate-300
              transition-all
              duration-300
              hover:bg-white/10
              hover:text-white
              cursor-pointer
            "
          >
            About
          </button>

          <button
            onClick={handleProject}
            className="
              rounded-xl
              px-4 py-2
              text-slate-300
              transition-all
              duration-300
              hover:bg-white/10
              hover:text-white
              cursor-pointer
            "
          >
            Projects
          </button>

          <button
            onClick={handleSkill}
            className="
              rounded-xl
              px-4 py-2
              text-slate-300
              transition-all
              duration-300
              hover:bg-white/10
              hover:text-white
              cursor-pointer
            "
          >
            Skills
          </button>

          {/* Contact CTA */}
          <div className="relative">
            <button
              onClick={handleContactClick}
              className="
                rounded-xl
              bg-gray-200
                px-5 py-2
                transition-all
                duration-300
                hover:bg-gray-100
                hover:shadow-lg
                hover:shadow-blue-500/30
                cursor-pointer
                text-black
              "
            >
              Contact Me
            </button>


          </div>

          {/* Profile */}
          <NavLink to="/profile">
            <div
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-white/10
                bg-white/5
                transition-all
                duration-300
                hover:bg-white/10
                hover:scale-105
              "
            >
              <span className="material-symbols-outlined text-slate-300">
                account_circle
              </span>
            </div>
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setMenuState((prev) => !prev)}
            className="
              rounded-xl
              bg-white/10
              p-2
              text-white
            "
          >
            <span className="material-symbols-outlined                
             ">
              <Menu/>
            </span>
          </button>

          {menuState && (
            <div className="absolute left-20">
              <MenuCard showState={setMenuState} handleContactForm={handleContactClick}/>
            </div>
          )}
        </div>
      </nav>
      {/*Contact menu */}
      <ContactForm
          formState={showContactForm}
          changeState={handleContactClick}
          changeEmailFormState = {handleEmailFormState}
        />
          
      {/* Email Form */}
      <SendEmail
        emailFormState={showEmailForm}
        changeEmailFormState={handleEmailFormState}
        
      
        
      />
    </>
  );
}

export default Navbar;