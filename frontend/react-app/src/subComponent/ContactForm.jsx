import { Github, Linkedin, Mail, X } from "lucide-react";
import { useEffect } from "react";

function ContactForm({
  formState,
  changeState,
  changeEmailFormState
}) {
  useEffect(()=>{
    if(formState){
      document.body.style.overflowY = 'hidden'
      document.body.style.paddingRight= '15px'
    }else{
      document.body.style.overflowY = 'auto'
      document.body.style.paddingRight ='0'
    }
    return ()=>{
      document.body.style.overflowY = 'auto'
      document.body.style.paddingRight = '0'
    }
  },[ formState])
  return (
    <div
      className={`fixed right-20 top-20 z-50 w-80  rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
        formState
          ? "opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 -translate-y-4"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          Contact Me
        </h3>

        <button
          onClick={changeState}
          className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        <a
          href="https://www.linkedin.com/in/rakeshpegu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl p-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>

        <button
          onClick={changeEmailFormState}
          
          
          className="flex items-center gap-4 rounded-xl p-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          <Mail size={20} />
          <span>Send Email</span>
        </button>

        <a
          href="https://github.com/RakeshPegu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl p-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          onClick={changeState}
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default ContactForm;