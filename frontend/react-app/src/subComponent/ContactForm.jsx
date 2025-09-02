import { Github, Linkedin, Mails, LucideGithub} from "lucide-react";

function ContactForm ({formState, changeState, changeEmailFormState}){
    
    const handleClickX =()=>{
          changeState()
    }
    const handleEmailForm =()=>{
        changeEmailFormState()
    }

    return (
        <div className={`absolute top-15 right-90 w-[350px] items-center h-[250px] bg-gray-700 gap-10 text-white  flex flex-col rounded-xl ${formState?'flex':'hidden'}`}>

            <div className="flex justify-between w-full">            
            <h4 className="text-3xl text-center pl-25 pt-6">
                contact me
            </h4>
            <p className="text-3xl flex font-bold cursor-pointer justify-end pr-5  " onClick={handleClickX}>×</p>
            </div>
            <div className="flex flex-col  w-[91%] gap-3 text-xl">
                
                <a href={"https://www.linkedin.com/in/rakeshpegu/"} className="flex gap-10 justify-center"><Linkedin  color="#193cb8" /> LinkedIn</a>
                <a href={'#'} className="flex gap-10 justify-center" onClick={handleEmailForm}>  <Mails color="red" /> send mail</a>
                <a href={'https://github.com/RakeshPegu'} className="flex gap-15 justify-center"> <Github color="black"/>  Github</a>
        
            </div>
        </div>
    )
    
}
export default ContactForm;