import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger)
function OtherSkills(){
    const parentContainerRef = useRef(null)
    const pinRef = useRef(null)
    const rightDivRef = useRef(null)
    useLayoutEffect(()=>{
        
       const mm = gsap.matchMedia()
       mm.add({
        isLarge : '(min-width: 992px)',


       },
       (context)=>{
        let {isLarge} = context.conditions
        if(isLarge){
            if(!parentContainerRef.current ||!pinRef.current ||!rightDivRef.current){
            return;
        }
         ScrollTrigger.create({
            trigger:parentContainerRef.current,
            start:"top top",
            end:'bottom bottom',
            scrub:true,
            pin:pinRef.current,
        
            onUpdate: (self)=>{
                const rightDiv = rightDivRef.current
                if(rightDiv){
                    const totalScrollableHeight = rightDiv.scrollHeight - rightDiv.clientHeight;
                    rightDiv.scrollTop = self.progress * totalScrollableHeight
            }
            }

        });

        }

       }
    )

       
        return ()=>{
            mm.revert()
        }

    }, [])
    return(
<div
  className="relative flex flex-col lg:flex-row-reverse  text-white min-h-screen"
  ref={parentContainerRef}
  id="experience"
>
  {/* Left Pinned Section */}
  <div
    className={`flex h-[300px] lg:h-screen lg:w-2/5 items-center justify-center `}
    ref={pinRef}
  >
    <div className="max-w-lg px-6 flex flex-col ">
      <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-widest text-gray-400">
        Expertise
      </span>

      <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">
        Skills &
        <span className="block text-gray-400">Technologies</span>
      </h1>

      <p className="mt-6 text-lg text-gray-400 leading-relaxed">
        A collection of technologies, tools, and architectural patterns I've
        used to build scalable full-stack applications.
      </p>
    </div>
  </div>

  {/* Right Content */}
  <div
    className="flex flex-col gap-16 lg:gap-28 lg:w-3/5 px-5 lg:px-10 pb-24"
    ref={rightDivRef}
  >
    {/* Intro */}
    <div className="lg:pt-40">
      <p className="text-2xl lg:text-4xl font-light leading-relaxed text-gray-200">
        Turning ideas into scalable digital products through modern web
        technologies, performance-focused architecture, and continuous
        learning.
      </p>
    </div>

    {/* Backend Card */}
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 lg:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <h2 className="text-3xl font-semibold">Backend Development</h2>
      </div>

      <p className="text-gray-300 leading-relaxed text-lg">
        Building secure, scalable, and high-performance backend systems using
        modern technologies and architectural patterns.
      </p>

      <div className="flex flex-wrap gap-3 mt-8">
        {[
          "Node.js",
          "Express.js",
          "MongoDB",
          "MySQL",
          "Prisma",
          "Mongoose",
          "Redis",
          "Docker",
          "JWT",
          "Google Auth",
          "Socket.IO",
          "Microservices",
          "API Gateway",
          "Razorpay",
          "Render",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Frontend Card */}
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 lg:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
        <h2 className="text-3xl font-semibold">Frontend Development</h2>
      </div>

      <p className="text-gray-300 leading-relaxed text-lg">
        Creating responsive, interactive, and user-focused interfaces with
        modern frontend technologies and performance optimization techniques.
      </p>

      <div className="flex flex-wrap gap-3 mt-8">
        {[
          "React",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "TailwindCSS",
          "SASS",
          "ShadCN/UI",
          "GSAP",
          "React Hook Form",
          "Zod",
          "Zustand",
          "Socket.IO",
          "Atomic Design",
          "Code Splitting",
          "Lazy Loading",
          "CDN",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>
    )

}
export default OtherSkills;