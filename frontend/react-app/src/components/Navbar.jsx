import ContactForm from "@/subComponent/ContactForm";
import MenuCard from "@/subComponent/menu";
import SendEmail from "@/subComponent/sendEmail";
import { useState } from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleAbout = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProject = () => {
    const project = document.getElementById("project");
    if (project) {
      project.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkill = () => {
    const skills = document.getElementById("skill");
    if (skills) {
      skills.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    setShowContactForm((prev) => !prev);
  };

  const handleEmailForm = () => {
    setShowEmailForm((prev) => !prev);
  };

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
              bg-gradient-to-r
              from-purple-400
              via-blue-600
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            C2
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

            <div className="absolute right-0 top-14">
              <ContactForm
                formState={showContactForm}
                changeState={handleContactClick}
                changeEmailFormState={handleEmailForm}
              />
            </div>
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
            <span className="material-symbols-outlined">
              // menu logo
            </span>
          </button>

          {menuState && (
            <div className="absolute right-0 top-14">
              <MenuCard showState={setMenuState} />
            </div>
          )}
        </div>
      </nav>

      {/* Email Form */}
      <SendEmail
        emailFormState={showEmailForm}
        changeEmailFormState={handleEmailForm}
      />
    </>
  );
}

export default Navbar;