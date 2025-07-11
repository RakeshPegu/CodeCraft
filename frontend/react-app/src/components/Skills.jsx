import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SkillCard from './card/SkillCard'; // Ensure correct path

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);

  panelRefs.current = []; 

  const addToPanels = (el) => {
    if (el && !panelRefs.current.includes(el)) {
      panelRefs.current.push(el);
    }
  };
  const screenWidth = window.innerWidth;
 let heightMultiplier;

if (screenWidth >= 1024) {
  heightMultiplier = 62; 
} else if (screenWidth >= 768) {
  heightMultiplier = 33; 
} else {
  heightMultiplier = 64; }

  useLayoutEffect(() => {
    
    let mm = gsap.matchMedia();

    
    mm.add(
      {
        
        isLarge: '(min-width: 992px)',
       
      },
      (context) => {
        

        let { isLarge } = context.conditions;

        // Only run the animation if 'isLarge' is true
        if (isLarge) {
          if (!containerRef.current || panelRefs.current.length === 0) return;

          const panels = panelRefs.current;
          const container = containerRef.current;

          // Your existing ScrollTrigger animation
          gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: () => `+=${panels[0].offsetWidth * panels.length}`,
              scrub: 1,
              pin: true,
              id: "horizontal-skills-scroll"
            },
          });

          console.log('GSAP animations applied for large screen!');
        } 
       
      }
    );
  return () => {
      mm.revert(); 
      console.log('GSAP MatchMedia context reverted.');
    };
  }, []);


  const skills = [
    { name: 'express.js', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751859400/express_llojex.svg', number: '01', alt:'express.js logo' },
    { name: 'node.js', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751859203/node-js-svgrepo-com_sey10o.svg', number: '02', alt:'node.js log' },
    { name: 'mongodb', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857488/mongodb-svgrepo-com_kmy8nt.svg', number: '03', alt:"typescript logo" },
    { name: 'TypeScript', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857699/typescript-svgrepo-com_ulrz4l.svg', number: '04', alt:"sql logo" },
    { name: 'sql', img:'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857747/sql-database-generic-svgrepo-com_puia0d.svg', number: '05', alt:"sql database logo" },
    { name: 'mySql', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857517/mysql-svgrepo-com_evafyj.svg', number: '06', alt:"mysql database logo" },
    { name: 'Prisma', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751859562/prisma_vepqzy.svg', number: '07' , alt:"prisma logo"},
    { name: 'Docker', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857554/docker-svgrepo-com_b4tedh.svg', number: '08' , alt:"docker logo"},
    { name: 'redis', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857648/redis-svgrepo-com_tfnnd1.svg', number: '09', alt:"redis logo" },
    { name: 'javascript', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857935/js-svgrepo-com_vo4ziq.svg', number: '10' , alt:"javascript logo"},
    { name: 'auth2.0', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751859445/auth0_erukn2.svg', number: '11', alt:"auth0 logo" },
    { name: 'React', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857647/react-javascript-js-framework-facebook-svgrepo-com_y54gyi.svg', number: '12' , alt:"react logo"},
    { name: 'HTML', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857630/html-5-svgrepo-com_am7wuo.svg', number: '13' , alt:"html logo"},
      { name: 'CSS', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857590/css-3-svgrepo-com_vi2pce.svg', number: '14' , alt:"css logo"},
    { name: 'SASS', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857650/sass-svgrepo-com_biolu7.svg', number: '15' , alt:"sass logo"},
    { name: 'Python', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857732/python-svgrepo-com_qpqmzz.svg', number: '16', alt:"python logo" },
    { name: 'tailwindscss', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857749/tailwindcss-icon-svgrepo-com_pt8mhg.svg', number: '17', alt:"tailwincss logo" },
    { name: 'Shadc.ui', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857871/shadcn-ui-seeklogo_gquthd.svg', number: '18' , alt:"shadcn ui logo"},
    { name: 'gsap', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751859279/gsap-black_lcgjom.svg', number: '19' , alt:"gsap logo"},
    { name: 'socket.io', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751859397/socketdotio_meyjex.svg', number: '20' , alt:"socketio loog"},
    { name: 'Postman', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857731/postman-icon-svgrepo-com_d6uoiv.svg', number: '21', alt:"postman logo" },
    { name: 'GitHUB', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751859392/github_ov0tmx.svg', number: '22', alt:"github logo" },
    { name: 'Render', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857649/render_lpjwst.svg', number: '23' , alt:" render logo"},
    { name: 'razorPay', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857842/razorpay-icon_alnqap.svg', number: '24', alt:"razor pay logo" },
    { name: 'C', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857632/icons8-c-programming_jp6rje.svg', number: '25', alt:"c logo" },
    { name: 'JWT', img: 'https://res.cloudinary.com/rakeshcloud/image/upload/v1751857812/json-web-tokens-jwt-io-seeklogo_1_bbyulp.svg', number: '26' , alt:"json web token logo"},
  ];

  return (
    <div className='h-full flex flex-col gap-20  text-pink-50' id='skill'>
      <div className='flex flex-col items-center py-10 gap-10 lg:flex-row '>
        <div className='h-full flex flex-col justify-center items-center p-4 w-[98%] lg:w-[60%] gap-3'>
          <h1 className='text-8xl font-bold font-serif text-center'>|Tools</h1>
          <p className='text-xl font-mono lg:w-[40%] text-center '>
            Here are some of the tools and technologies I use.
          </p>
        </div>
        <div className='w-[98%] flex justify-center items-center font-mono lg:w-[70%] pl-3 '>
          <p className='text-xl text-center'>
            From powerful frameworks to clever little libraries, these tools aren't just part of my
            workflow — they're my creative partners in crime. Whether it's building slick frontends,
            crafting efficient backends, or debugging at 2 AM with way too much coffee, each tool
            plays a role in bringing ideas to life. I believe in using the right tech for the right
            task — and having a little fun while doing it.
          </p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className=' lg:overflow-hidden ' style={{ height: `${skills.length * heightMultiplier}vh` }}>
        <div ref={containerRef} className='h-full lg:h-screen   lg:pl-15  lg:overflow-hidden '>
          <div className='flex flex-col sm:flex-row  flex-nowrap sm:flex-wrap lg:flex-nowrap  lg:flex-row items-center justify-center lg:justify-start  gap-10 pt-10  pb-10 lg:pt-30  lg:pb-50 '>
            {skills.map((skill, index) => (
              <div
                key={index}
                ref={addToPanels} // Ensure this ref callback is only added to the direct panel elements
                className=' w-[400px] shrink-0  flex justify-center items-center '
              >
                <SkillCard img={skill.img} name={skill.name} number={skill.number} alt={skill.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;