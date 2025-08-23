import ProjectCard from "./card/ProjectCard";

function Portfolio(){
    return(
          <div className="flex flex-col h-full d gap-[50px] pb-[150px] bg-gray-400 lg:pt-30" id="project">
            <div className="text-pink-50 h-[100%]  just flex flex-col justify-center ml-5  gap-3 " >
                <h1 className="text-5xl sm:text-6xl font-bold ">| BUILDING SOMETHING INTERESTING</h1>
                <p className="text-xl font-bold lg:font-mono lg:pl-5">
                    Still on the journey to build something interesting and  accessible to large users
                </p>
                <p className="font-medium lg:font-mono lg:text-2xl  lg:pt-25"> HERE IS THE OVERVIEW OF MY WORK  —</p>
               
            </div>
            <div className="flex flex-col items-center  gap-15 lg:flex-row lg:flex-wrap  lg:justify-center  ">
                 
                <ProjectCard name='chat101' description={'this is real time chat application built using socket.io for real time data where users can have better messaging experience '} />
                <ProjectCard name="tradivibe" description={'this is an applicatin whose the backend is based on microservice architecture and use cache and other advanced system design concepts for scalability purposes'}/>
                    
            </div>
        </div>
    );
}
export default Portfolio;