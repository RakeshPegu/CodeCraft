import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Portfolio from "@/components/Portfolio";
import Skill from "@/components/Skills";
function Home(){
    return(
         <div className=" h-full flex flex-col gap-[100px] bg-gray-800 top-0 relative overflow-y-scroll" > 
         <Introduction/>
         <About/>
         <Skill/>
         <Portfolio/>
         </div>
    )
    
}
export default Home;