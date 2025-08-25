import { Button } from "../ui/button";

function ProjectCard({name, description}){
    return(
        <div className=" shadow-md/20 bg-gray-50   w-[92%] hover:shadow-xl/25 hover:bg-white h-[100%] lg:h-[550px] flex flex-col items-center backdrop-blur-3xl lg:w-[20%] lg:gap-10 ">
            <h1 className=" w-full text-center text-2xl h-[40px]">{name} </h1>
            <div className="flex flex-col justify-center items-center">
                <img src="./proj.png" alt={name+'photo'} className="w-[90%] pt-2"/>
            </div>
            
            <div  className=" lg:w-[98%] flex flex-col items-center lg:gap-15">
                <p  className="lg:w-[90%]  text-center">{description} </p>
                <div className="flex w-full justify-evenly mt-2 text-black pb-8">
                <Button className='cursor-pointer bg-gray-950 text-white hover:shadow-xl'>View the project</Button>
                <Button className="cursor-pointer bg-blue-200 hover:shadow-xl">Github</Button>
                </div>
            </div>
      

        </div>
    )
}
export default ProjectCard;