import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger)
function OtherSkills(){
    const parentContainerRef = useRef(null)
    const pinRef = useRef(null)
    const rightDivRef = useRef(null)
    useLayoutEffect(()=>{
        if(!parentContainerRef.current ||!pinRef.current ||!rightDivRef.current){
            return;
        }
       const scrollInstance =  ScrollTrigger.create({
            trigger:parentContainerRef.current,
            start:"top top",
            end:'bottom bottom',
            scrub:true,
            markers:true,
            pin:pinRef.current,
        
            onUpdate: (self)=>{
                const rightDiv = rightDivRef.current
                if(rightDiv){
                    const totalScrollableHeight = rightDiv.scrollHeight - rightDiv.clientHeight;
                    rightDiv.scrollTop = self.progress * totalScrollableHeight
            }
            }

        });
        return ()=>{
            if(scrollInstance){
                scrollInstance.kill()
            }
        }

    }, [])
    return(
        <div className=" flex flex-col gap-10 font-medium lg:relative lg:bg-gray-200 lg:flex lg:h-[300vh] lg:flex-row-reverse lg:gap-0" ref={parentContainerRef} >
            <div className=" lg:flex lg:flex-row h-[100vh]  lg:items-center  lg:w-2/5 lg:bg-gray-500" ref={pinRef}>
                <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-3 lg:absolute ">
                    <h1 className=" lg:text-8xl lg:text-center font-serif">| Skills</h1>
                    <p className=" lg:w-[40%]  font-mono"> Here’s a quick overview of the technologies and tools I've been able to learn so far</p>
                </div>           
               
            </div>
            <div className="lg:flex lg:flex-col lg:w-4/5 lg:gap-50 lg:pb-60 " ref={rightDivRef}>               
        
            <div className=" lg:w-[500px]  lg:pt-100 lg:ml-20">
                <p className="text-xl lg:font-mono lg:lg:text-4xl">
                    Turning ideas into scalable solutions — one line of code at a time.
                    Through hands-on projects and continuous learning, I've gained experience in the following areas:
                </p>

            </div>
            
            <div className="flex flex-col gap-2  lg:w-[100%] lg:flex lg:items-center  ">
            <div className=" lg:w-[100%] lg:flex lg:flex-col lg:gap-6 lg:pr-10 lg:pl-10" >
            <h2 className="text-2xl font-bold underline underline-offset-10 pb-2 lg:text-4xl ">
                backend :
            </h2>
            <div className="lg:flex lg:flex-row lg:gap-10">
            <p className="text-xl font-mono">
                Experienced in containerization using Docker and implementing secure authentication with JWT, cookie-parser, cookie-session, express-session, and Google Auth. Utilized bcrypt for password hashing to enhance application security.
            </p>
            <p className="text-xl font-mono">
                Implemented caching and rate limiting using Redis, express-rate-limit, and slow-down. Built and deployed microservices architecture with API Gateway integration. Integrated Razorpay for payment systems.
                Developed real-time chat applications using Socket.IO. Worked with MongoDB using both Mongoose and Prisma ORM. Also have experience working with MySQL through MySQL Workbench and Deploy applications on Internet using Render.


            </p>
            </div>
            </div>
            </div>
            <div className="flex flex-col gap-2 lg:w-[100%] lg:flex lg:flex-col lg:justify-start">
                <div className="lg:w-[60%] lg:ml-80 lg:gap-6 " >
                <h2 className="text-2xl font-bold underline underline-offset-10 pb-2 lg:text-4xl">
                    frontend: 
                </h2>
                <div className="">
                <p className="lg:text-xl font-mono">
                    Built fully responsive web applications using Vanilla JavaScript, React, HTML, and styled them using CSS, SASS, TailwindCSS, ShadCN/UI, GSAP, and more.
                   
                </p>
                <p className="lg:text-xl lg:font-mono">Followed Atomic Design principles for component structuring. To improve UX and performance, used code splitting, lazy loading, and CDN services.</p>
                <p className="lg:text-xl lg:font-mono">Implemented form validation using Zod and React Hook Form. Used Zustand for state management and SweetAlert2 for user-friendly alerts.</p>
                <p className="lg:text-xl lg:font-mono">For real-time features, integrated Socket.IO, and leveraged browser localStorage for lightweight data persistence.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )

}
export default OtherSkills;