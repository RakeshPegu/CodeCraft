import { Button } from "../ui/button";

function ProjectCard({name, description}){
    return(
        <div className="outline-1 outline-blue-500 w-[92%] h-[100%] lg:h-[450px] flex flex-col items-center backdrop-blur-3xl text-white lg:w-[30%] ">
            <h1 className=" w-full text-center text-2xl h-[40px]">{name} </h1>
            <div className="flex flex-col justify-center items-center">
                <img src="./proj.png" alt={name+'photo'} className="w-[90%] pt-2"/>
            </div>
            
            <div  className=" lg:w-[98%] flex flex-col items-center">
                <p  className="lg:w-[90%]  text-center">{description} </p>
                <div className="flex w-full justify-evenly mt-2 text-black pb-8">
                <Button className='cursor-pointer bg-blue-50'>Visit here</Button>
                <Button className="cursor-pointer bg-blue-50">Github</Button>
                </div>
            </div>
      

        </div>
    )
}
export default ProjectCard;