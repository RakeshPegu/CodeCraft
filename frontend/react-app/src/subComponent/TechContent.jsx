import List from "./List"

function TechContent (){
    return(
    <ul className="flex flex-col gap-3 ">
        <li><List techname={'System Design'} content={` I like figuring out how to make things scale without breaking everything`}/></li>
        <li><List techname={'APIs & Microservices'} content={`Clean, modular, and doing one job really well`}/></li>
        <li><List techname={'Databases'} content={'Whether it’s MongoDB or SQL, I enjoy modeling data and making it not slow'}/></li>
       <li><List techname={'Real-time Stuff '} content={`Chat apps, live updates, WebSockets — if it moves fast, I’m interested`}/></li>
       <li><List techname={'Responsive UI'} content={`Making sure apps look good and work well across all devices`}/> </li>
       <li><List techname={'UI/UX Animations '} content={` I enjoy subtle motion that adds life without getting in the way`}/></li>
    </ul>)
}
export default TechContent