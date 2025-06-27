import SkillCard from "./card/SkillCard";

function Skill(){
    return(
    <div>
        <div className="  h-[100vh] lg:flex lg:flex-row text-white">
        <div className="lg:flex-2 lg:flex lg:flex-col  lg:items-center ">
            <div className="lg:justify-center lg:items-center lg:w-[80%] lg:h-full lg:flex  lg:flex-col lg:gap-5">
            <h1 className="lg:text-8xl font-serif ">| TOOLS</h1>
            <p className="font-mono lg:w-[50%] lg:text-[1.1em] "> Here is the some of the tools and technologies I use</p>
            </div>
            
        </div>
        <div className=" lg:flex-3 lg:flex ">
            <div className=" lg:w-[70%] lg:h-[40%] lg:relative lg:flex lg:top-100 lg:left-50  lg:justify-center lg:items-center">
                <p className=" text-lg font-mono">From powerful frameworks to clever little libraries, these tools aren't just part of my workflow — they're my creative partners in crime. Whether it's building slick frontends, crafting efficient backends, or debugging at 2 AM with way too much coffee, each tool plays a role in bringing ideas to life. I believe in using the right tech for the right task — and having a little fun while doing it.</p>
            </div>
            

        </div>
        </div>
    <div className="flex flex-wrap gap-6 justify-center bg-gray-400 lg:justify-start  lg:h-[700px] lg:flex-nowrap lg:flex-row overflow-x-auto scroll-smooth lg:items-center lg:w-[100%]">
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
        
    </div>
    </div>
    )
}
export default Skill;