import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function IntroText(){
    return(
        <div className="flex flex-col gap-8">
            <p className="text-lg font-sans font-bold text-pink-50 pl-6"> I'M RAKESH, A PASSIONATE FULLSTACK DEVELOPER FOCUSED ON BUILDING EFFICIENT, USER-CENTRIC WEB APPLICATIONS.</p>
            <div className="flex flex-col gap-4 text-pink-50 justify-center items-center">
                <Link to={'https://github.com/RakeshPegu' } ><Button  className='bg-gray-950 rounded-none w-[400px] cursor-pointer h-[50px] ' >Github</Button></Link>
                <Link to={'https://www.linkedin.com/in/rakeshpegu/'}><Button className='bg-gray-950 cursor-pointer w-[400px] h-[50px]'>LinkedIn</Button></Link>
            </div>
        </div>
    );
}
export default IntroText;