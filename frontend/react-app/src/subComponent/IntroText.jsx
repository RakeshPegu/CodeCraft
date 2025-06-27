import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function IntroText(){
    return(
        <div className="flex flex-col gap-8  md:flex-row lg:gap-[90px] lg:justify-around ">
            <p className="text-lg font-sans font-bold text-pink-50 pl-6   lg:text-xl  lg:w-[400px] "> I'M RAKESH, A PASSIONATE FULLSTACK DEVELOPER FOCUSED ON BUILDING EFFICIENT, USER-CENTRIC WEB APPLICATIONS.</p>
            <div className="flex flex-col gap-4 text-pink-50 justify-center items-center lg:flex-row lg:gap-20">
                <Link to={'https://github.com/RakeshPegu' } ><Button  className='bg-gray-950  w-[400px] cursor-pointer h-[50px]  lg:w-[350px] lg:h-[50px] lg:text-[1em]' >Github</Button></Link>
                <Link to={'https://www.linkedin.com/in/rakeshpegu/'}><Button className='bg-gray-950  cursor-pointer w-[400px] h-[50px]  lg:w-[350px] lg:h-[50px] lg:text-[1em] '>LinkedIn</Button></Link>
            </div>
        </div>
    );
}
export default IntroText;