import AboutSkeleton from "@/components/About/AboutSkeleton";
import HeroSectionSkeleton from "@/components/Hero/HeroSkeleton";
import OtherSkillsSkeleton from "@/components/OtherSkill/OtherSkillSkeleton";
import PortfolioSkeleton from "@/components/Portfolio/PortfolioSkeleton";
import SkillsSkeleton from "@/components/Skill/SkillSkeleton";
import LazyLoaderSection from "@/utils/LazyLoader";
import { lazy, } from "react";
const About = lazy(()=> import("@/components/About/About"))
const Introduction = lazy(()=> import("@/components/Hero/Hero"))
const OtherSkills = lazy(()=>import("@/components/OtherSkill/otherSkill"))
const Portfolio = lazy(()=>import("@/components/Portfolio/Portfolio"))
const Skill = lazy(()=>import("@/components/Skill/Skills"))
function Home(){
       return(
         <div className=" mt-[-60px]  h-full flex flex-col  gap-20 md:gap-[300px]  relative  bg-gray-700" id="home"> 
         <LazyLoaderSection Component={Introduction} Skeleton={HeroSectionSkeleton}/>         
         <LazyLoaderSection Component={About} Skeleton={AboutSkeleton}/>
         <LazyLoaderSection Component={OtherSkills} Skeleton={OtherSkillsSkeleton}/>
          <LazyLoaderSection Component={Portfolio} Skeleton={PortfolioSkeleton}/> 
          <LazyLoaderSection Component={Skill} Skeleton={SkillsSkeleton}/>
             
         </div>
    )
    
}
export default Home;