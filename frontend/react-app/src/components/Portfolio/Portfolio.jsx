
import ProjectCard from '../card/ProjectCard/ProjectCard';

function Portfolio() {
  const projects = [
    {
      name:'HORIZON',
      imgeUrl:'./horizon.png',
      live:'https://service-website-lemon.vercel.app/',
      description:"A webite agency that helps businesses and professionals establish their online presence through custom websites and portfolio solutions.",
      githubProjectRef:'https://github.com/RakeshPegu/ServiceWebsite'
    },
    {
      name:'Serene Smile',
      imgeUrl:'./serene.png',
      live:'https://dental-clinic-website-zeta-opal.vercel.app/',
      description:"A web application built for a dental clinic where user can book appointment or contact the clinic through this site.",
      githubProjectRef:'https://github.com/RakeshPegu/Tradi-Vibe'
    }

  ]
  return (
    <section
      id="project"
      className="
        relative
        overflow-hidden
        py-16 sm:py-24 lg:py-32
        lg:px-12
        min-h-screen
        flex
        flex-col

        "
    >


      <div>
        {/* Section Header */}
        <div className="mb-24 text-center flex flex-col items-center">
          <p
            className="
              mb-4
              text-base
              sm:text-xl
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-400
            "
          >
            Portfolio
          </p>

          <h2
            className="
              text-4xl
              font-bold
              leading-tight
              text-white
              md:text-6xl
            "
          >
            Building products that solve real problems
            
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-md
              sm:text-lg
              leading-relaxed
              text-slate-400
            "
          >
            I enjoy building scalable web applications,
            backend systems, and products that deliver
            meaningful value to users while maintaining
            performance, reliability, and great user
            experiences.
          </p>
        </div>

        {/* Projects Heading */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />

          <h3
            className="
              whitespace-nowrap
              text-2xl
              font-semibold
              text-white
            "
          >
            Featured Projects
          </h3>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Projects Grid */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]
            gap-6 sm:gap-8
          ">
            
          {projects.map((project, index)=>(
            <div key={index}>
              <ProjectCard name={project.name} href={project.live} src={project.imgeUrl} description={project.description} githubProjectRef={project.githubProjectRef}/>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Portfolio;