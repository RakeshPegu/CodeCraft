import { Link } from "react-router";

function MenuCard({showState}){
    const handleAboutClick  = ()=>{
        const about = document.getElementById('about')
        if(about){
            about.scrollIntoView({behavior:'smooth'})
        }
    }
    const handleProjectClick = ()=>{
        const project = document.getElementById('project')
        if(project){
            project.scrollIntoView({behavior:"smooth"})
        }
    }
    const handleSkillClick = ()=>{
        const skill = document.getElementById('skill')
        if(skill){
            skill.scrollIntoView({behavior:"smooth"})
        }
    }

    return (
        <div className={`absolute bg-blue-50 top-13 right-18 flex p-5 justify-center rounded-xl w-[200px] ${showState?'flex':"hidden"}`}>
                <ul className="flex flex-col gap-2 w-full items-center justify-center">
                    <li onClick={handleAboutClick} className="cursor-pointer">
                        about me
                    </li>
                    <li onClick={handleProjectClick} className="cursor-pointer">project</li>
                    <li onClick={handleSkillClick} className="cursor-pointer">skill</li>
                    <li className="cursor-pointer">contact me</li>
                </ul>
        </div>
    )
}
export default MenuCard;