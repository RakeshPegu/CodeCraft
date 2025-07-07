
function Footer(){
    return(
        <div className="bg-[url(/cod.jpg)] bg-gray-400 bg-blend-overlay h-full bg-no-repeat bg-cover bg-center text-amber-50">
         <div className="flex flex-col gap-10 backdrop-brightness-40">
             <div className="flex flex-row justify-evenly pt-6">
             <div>
                <h1 className="text-2xl font-serif">Import links</h1>
                <ul className="flex flex-col items-center gap-1 pt-2">                
                <li>
                    HOME
                </li>
                <li>
                    PROJECTS
                </li>
                <li>
                    ABOUT
                </li>
                <li>
                    SKILLS
                </li>
                <li>
                    CONTAC ME
                </li>
               </ul>
               </div>
               <div className=" pb-12">
                <h1 className="text-2xl font-serif"> Social platforms </h1>
               <ul className="flex flex-col items-center gap-1 pt-2">
                
                <li className="">
                    <a href='https://github.com/RakeshPegu'> GitHub</a>
                   
                </li>
                <li>
                     <a href='https://www.linkedin.com/in/rakeshpegu/'>LinkedIn</a>                
                </li>
                <li>
                    Fiverr
                </li>
               </ul>
               </div>

             </div>
             <div className="pb-8" >
                
                <h3 className="font-semibold text-white text-center">&copy; 2025 CodeCraft</h3>
             </div>
         </div>
   
        </div>
    );
}
export default Footer;