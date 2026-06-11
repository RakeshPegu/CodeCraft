import React, { Suspense} from "react";
const About = React.lazy(()=> import("@/components/About"))
const Introduction = React.lazy(()=> import("@/components/Hero"))
const OtherSkills = React.lazy(()=>import("@/components/otherSkill"))
const Portfolio = React.lazy(()=>import("@/components/Portfolio"))
const Skill = React.lazy(()=>import("@/components/Skills"))
function Home(){      
        
   
       return(
         <div className=" mt-[-60px]  h-full flex flex-col  md:gap-[300px]  relative  bg-gray-700" id="home"> 
         <Introduction/>
         <Suspense fallback={<div>... loading</div>}>
           <About/>
         </Suspense>
         <Suspense fallback={<div>... loading</div>}>
          <OtherSkills/>
         </Suspense>
         <Suspense fallback={<div>... loading</div>}>
          <Portfolio/>
         </Suspense>     
          <Suspense fallback={<div>...  loading</div>} >
          <Skill/>
         </Suspense>      
         </div>
    )
    
}
export default Home;