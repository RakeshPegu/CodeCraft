import OtherSkills from "@/subComponent/otherSkill";
import SkillCard from "./card/SkillCard";

function Skill(){
    return(
    <div className="flex flex-wrap gap-6 justify-center">
        <SkillCard name='express.js' img='./express.svg' number="01"/>
        <SkillCard name="node.js" img='./node-js-svgrepo-com.svg' number="02"/>
        <SkillCard name="mongodb"img={'./mongodb-svgrepo-com.svg'} number="03"/>
        <SkillCard name="TypeScript" img={'./typescript-svgrepo-com.svg'} number="04"/>   
        <SkillCard name="sql" img={'./sql-database-generic-svgrepo-com.svg'} number="05"/>
        <SkillCard name="mySql" img={'./mysql-svgrepo-com.svg'} number="06"/>
        <SkillCard name="Prisma" img={'./prisma.svg'} number="07"/>
        <SkillCard name="Docker" img={'./docker-svgrepo-com.svg'} number="08"/>
        <SkillCard name="redis" img={'./redis-svgrepo-com.svg'} number="09"/>
        <SkillCard name="javascript" img={'./js-svgrepo-com.svg'} number="10"/>
        <SkillCard name="auth2.0" img={'./auth0.svg'} number="11"/>
        <SkillCard name="React" img={'./react-javascript-js-framework-facebook-svgrepo-com.svg'} number="12"/>
        <SkillCard name="HTML" img={'./html-5-svgrepo-com.svg'} number="13"/>
        <SkillCard name="CSS" img={'./css-3-svgrepo-com.svg'} number="14"/>
        <SkillCard name="SASS" img={'./sass-svgrepo-com.svg'} number="15"/>
        <SkillCard name="Python"  img={'./html-5-svgrepo-com.svg'} number="16"/>
        <SkillCard name="tailwindscss"  img='./tailwindcss-icon-svgrepo-com.svg' number="17"/>
        <SkillCard name="Shadc.ui" img={'./shadcn-ui-seeklogo.svg'} number="18"/>
        <SkillCard name="gsap" img={'./gsap-black.svg'} number="19"/>
        <SkillCard name="socket.io" img={'./socketdotio.svg'} number="20"/>
        <SkillCard name='Postman' img={'./postman-icon-svgrepo-com.svg'} number={'21'}/>
        <SkillCard name="GitHUB" img={'./github.svg'} number="22"/>
        <SkillCard name="Render" img={'./render.svg'} number="23"/>
        <SkillCard name="razorPay" img={'./razorpay-icon.svg'} number="24"/>
        <SkillCard name="C" img={'./icons8-c-programming.svg'} number="25"/>
        <SkillCard name="JWT" img={'./json-web-tokens-jwt-io-seeklogo.svg'} number="26"/>
    
        
        
        <div className="flex flex-col justify-center w-[95%] pt-[100px] text-white gap-15">
            <h1 className="text-4xl font-sans font-bold ">| FEW OF MY SKILLS:</h1>
            <OtherSkills/>

        </div>
   
        
    </div>)
}
export default Skill;