import { Button } from "../ui/button";

function ProjectCard({name}){
    return(
        <div className="outline-1 outline-blue-500 w-[92%] h-[100%] flex flex-col items-center backdrop-blur-3xl text-white lg:w-[30%] ">
            <h1 className=" w-full text-center text-2xl h-[40px]">{name} </h1>
            <div className="flex flex-col justify-center items-center">
                <img src="./proj.png" className="w-[90%] pt-2"/>
            </div>
            
            <div >
                <p className="text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur eius maiores perferendis quisquam eos expedita neque, perspiciatis ipsam fugit iure adipisci distinctio, rerum tempora ullam ea, natus at esse? </p>
                <div className="flex  justify-evenly mt-2 text-black pb-8">
                 <Button className='cursor-pointer bg-blue-50'>view more</Button>
                <Button className="cursor-pointer bg-blue-50">Github</Button>
                </div>
            </div>
      

        </div>
    )
}
export default ProjectCard;