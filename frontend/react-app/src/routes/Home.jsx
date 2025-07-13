import React, { Suspense, useEffect } from "react";
const About = React.lazy(()=> import("@/components/About"))
const Introduction = React.lazy(()=> import("@/components/Introduction"))
const OtherSkills = React.lazy(()=>import("@/components/otherSkill"))
const Portfolio = React.lazy(()=>import("@/components/Portfolio"))
const Skill = React.lazy(()=>import("@/components/Skills"))
function Home(){
      
        
   
       return(
         <div className=" h-full flex flex-col gap-[300px] bg-gray-950 top-0 relative overflow-y-scroll " id="home"> 
         <Introduction/>
         <Suspense fallback={<div>... loading</div>}>
           <About/>
         </Suspense>
         <Suspense fallback={<div>...  loading</div>} >
          <Skill/>
         </Suspense>
         <Suspense fallback={<div>... loading</div>}>
          <OtherSkills/>
         </Suspense>
         <Suspense fallback={<div>... loading</div>}>
          <Portfolio/>
         </Suspense>           
         </div>
    )
    
}
export default Home;