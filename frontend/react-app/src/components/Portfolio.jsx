import ProjectCard from "./card/ProjectCard";

function Portfolio(){
    return(
          <div className="flex flex-col h-full d gap-[50px] pb-[150px] lg:pt-30" id="project">
            <div className=" h-[100%]  just flex flex-col justify-center gap-3 relative left-2 lg:left-0" >
                <div className=" lg:bg-gray-900 lg:text-gray-50 flex flex-col gap-5 lg:gap-0">
                <h1 className="text-5xl sm:text-6xl font-bold lg:pb-10  lg:pl-15 ">| BUILDING SOMETHING INTERESTING</h1>
                <p className="text-xl font-bold lg:font-mono lg:pl-30">
                    Still on the journey to build something interesting and  accessible to large users
                </p>

                </div>

                <p className="font-medium lg:font-mono  lg:text-5xl lg:font-extrabold lg:text-center text-2xl  lg:pt-25"> Select work of mine</p>
               
            </div>
            <div className="flex flex-col items-center  gap-15 lg:flex-row lg:flex-wrap  lg:justify-center  ">
                 
                <ProjectCard name='chat101' description={'this is real time chat application built using socket.io for real time data where users can have better messaging experience '} />
                <ProjectCard name="tradivibe" description={'this is an applicatin whose the backend is based on microservice architecture and use cache and other advanced system design concepts for scalability purposes'}/>
                    
            </div>
        </div>
    );
}
export default Portfolio;