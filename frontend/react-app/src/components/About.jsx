import List from "@/subComponent/List";
import AboutCard from "./card/AboutCard";
import TechContent from "@/subComponent/TechContent";
function About(){
    return(
        <div className="sm:bg-[url(/comp.jpg)]  bg-cover bg-no-repeat h-full w-full bg-center flex flex-col text-pink-50 gap-[60px] pl-3">
            <div className=" flex flex-col gap-3  ">
                <h1 className="text-4xl font-bold font-serif">| ABOUT ME </h1>
                <p className="text-xl font-mono"> Everyone brings something different to the table — here’s mine</p>
               
            </div>
            <div className="flex flex-col gap-15">
                <AboutCard heading={'WHO I AM ?'} content1={`I'm a Full-Stack Developer with close to 2 years of experience, but I’m currently transitioning into a more backend-focused role — because that’s where I thrive.` } content2={`When I’m not coding, you’ll probably find me playing gully cricket or losing track of time in a good game. I love solving problems — both on-screen and on the pitch!`}/>
                <div className="flex flex-col gap-10">
                    <h1 className="text-4xl font-bold font-serif">What interest me in tech?</h1>
                    <div>
                        <TechContent/>
                    </div>
                </div>
                <AboutCard heading={'Why Backend ?'} content1={`I’ve always been the kind of person who wants to know what’s really happening under the hood. That’s probably why I’m so drawn to backend development — it’s like solving puzzles with code, and I enjoy every bit of it`}/>
              
            </div>          
        </div>
    );
}
export default About;