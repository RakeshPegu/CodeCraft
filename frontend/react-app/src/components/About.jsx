import List from "@/subComponent/List";
import AboutCard from "./card/AboutCard";
import TechContent from "@/subComponent/TechContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const pinRef = useRef(null);
  const parentContainerRef = useRef(null)
  const rightDivRef = useRef(null)

  useLayoutEffect(() => {
    if (!parentContainerRef.current || !pinRef.current) {
        return;
    }
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)":() =>{

      

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: parentContainerRef.current,
      start: "top top",
      end:"bottom bottom",
      scrub: true,
      markers: true,
      pin: pinRef.current,
      
      onUpdate: (self)=>{
        const rightDiv = rightDivRef.current
        if(rightDiv){
          const totalScrollableHeight = rightDiv.scrollHeight - rightDiv.clientHeight;
          rightDiv.scrollTop =self.progress * totalScrollableHeight

        }
      } 
    });
    
     return () => {
            // Kill the ScrollTrigger instance to prevent memory leaks
            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
            }
        };
        }})
  }, []);

  return (
    <div className="h-full w-full bg-center bg-blue-600 flex flex-col  gap-[60px] pl-3 lg:bg-amber-400">    
       <div className="flex  h-screen flex-col lg:h-[300vh]  lg:relative lg:flex-row  lg:w-full bg-pink-500 "  ref={parentContainerRef}>  
        {/*this left div to be pinned*/}
        <div className=" lg:relative lg w-2/5  lg:p-8 lg:h-screen " ref={pinRef}>    
          <div
            className="lg:absolute  lg:inset-y-0 lg:flex items-center justify-center flex-col "
            
          >
            <h1 className="text-4xl font-bold font-serif lg:text-6xl">| ABOUT ME</h1>
            <p className="text-xl font-mono lg:text-[1em] lg:w-[200px]">
              Everyone brings something different to the table — here’s mine
            </p>
          </div>
          </div>  

          {/* this is the right div with scrollable content*/}
          <div className="flex flex-col gap-15 lg:w-3/5 lg:pl-[50px]  lg:gap-70 " ref={rightDivRef}>
            <div className="lg:w-[87%] lg:pt-[450px]">
              <AboutCard
                heading={"WHO I AM ?"}
                content1={`I'm a Full-Stack Developer with close to 2 years of experience, but I’m currently transitioning into a more backend-focused role — because that’s where I thrive.`}
                content2={`When I’m not coding, you’ll probably find me playing gully cricket or losing track of time in a good game. I love solving problems — both on-screen and on the pitch!`}
              />
            </div>

            <div className="flex flex-col gap-10 lg:w-[87%]">
              <h1 className="text-4xl font-bold font-serif">What interest me in tech?</h1>
              <div>
                <TechContent />
              </div>
            </div>

            <div className=" lg:w-[87%]">
              <AboutCard
                heading={"Why Backend ?"}
                content1={`I’ve always been the kind of person who wants to know what’s really happening under the hood. That’s probably why I’m so drawn to backend development — it’s like solving puzzles with code, and I enjoy every bit of it`}
              />
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default About;
