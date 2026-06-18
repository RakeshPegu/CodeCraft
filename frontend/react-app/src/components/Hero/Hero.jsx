import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

function HeroSection() {
  const handleProjectClick = () => {
    const projectElement = document.getElementById("project");
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen top-10 flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-16 sm:pt-20">
      {/* Background Glow (reduced on mobile) */}
      <div className="absolute inset-0 -z-10 opacity-70 sm:opacity-100">
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px] sm:blur-[150px]" />
        <div className="absolute right-0 top-0 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full bg-purple-500/10 blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl w-full">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 sm:gap-8 text-center lg:text-left">
            
            <div>
              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gray-200">
                Full Stack Developer • Backend Focused
              </p>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
                Building{" "}
                <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-purple-200 bg-clip-text text-transparent">
                  scalable systems
                </span>
                <br />
                and modern web applications.
              </h1>
            </div>

            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-slate-400">
              Hi, I'm Rakesh. A Full Stack Developer passionate about backend
              engineering, distributed systems, and building products that solve
              real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleProjectClick}
                className="h-11 sm:h-12 rounded-xl bg-gray-200 px-6 sm:px-8 text-black hover:bg-gray-100"
              >
                View Projects
              </Button>

              <Button className="h-11 sm:h-12 rounded-xl border-white/10 bg-white/5 px-6 sm:px-8 text-white backdrop-blur-xl">
                <a
                  href="https://github.com/RakeshPegu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center w-full"
                >
                  <Github size={18} /> GitHub
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 pt-6 sm:pt-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">2+</h3>
                <p className="text-sm text-slate-400">Years Learning & Building</p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">10+</h3>
                <p className="text-sm text-slate-400">Technologies Used</p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">5+</h3>
                <p className="text-sm text-slate-400">Full Stack Projects</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (HIDDEN ON SMALL SCREENS) */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              
              <div className="mb-6 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <pre className="overflow-x-auto text-sm text-slate-300">
{`const developer = {
  name: "Rakesh",
  role: "Full Stack Developer",

  backend: [
    "Node.js",
    "Express",
    "Redis",
    "MongoDB",
    "MySQL"
  ],

  frontend: [
    "React",
    "TypeScript",
    "Tailwind"
  ],

  currentFocus: [
    "System Design",
    "Microservices",
    "Scalability"
  ]
};`}
              </pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;