import ProjectCard from "./card/ProjectCard";

function Portfolio() {
  return (
    <section
      id="project"
      className="
        relative
        overflow-hidden
        py-32
        px-6
        lg:px-12
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <p
            className="
              mb-4
              text-sm
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
            Building products that solve
            <span
              className="
                bg-gradient-to-r
                from-blue-500
                via-cyan-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              real problems
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
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
            gap-8
            grid-cols-[repeat(auto-fit,minmax(350px,1fr))]
          "
        >
          <ProjectCard
            name="Horizon"
            src={'./horizon.png'}
            description="A web platform that helps businesses and professionals establish their online presence through custom websites and portfolio solutions."
          />

          <ProjectCard
            name="Tradivibe"
            description="A scalable application built using microservices architecture, Redis caching, and modern system design patterns to ensure reliability and performance at scale."
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;