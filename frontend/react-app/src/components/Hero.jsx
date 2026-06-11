import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router";

function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        px-6
        pt-20
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div>
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
                Full Stack Developer • Backend Focused
              </p>

              <h1
                className="
                  text-5xl
                  font-black
                  leading-tight
                  text-white
                  md:text-7xl
                "
              >
                Building
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
                  scalable systems
                </span>
                <br />
                and modern web
                <br />
                applications.
              </h1>
            </div>

            <p
              className="
                max-w-2xl
                text-lg
                leading-relaxed
                text-slate-400
              "
            >
              Hi, I'm Rakesh. A  Full Stack Developer
              passionate about backend engineering, distributed
              systems, and building products that solve real-world
              problems.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                className="
                  h-12
                  rounded-xl
                  bg-gray-200
                  px-8
                  text-black
                  hover:bg-gray-100
                "
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                className="
                  h-12
                  rounded-xl
                  border-white/10
                  bg-white/5
                  px-8
                  text-white
                  backdrop-blur-xl
                  
                "
              >
                <Github /> Github
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  2+
                </h3>
                <p className="text-slate-400">
                  Years Learning & Building
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  10+
                </h3>
                <p className="text-slate-400">
                  Technologies Used
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  5+
                </h3>
                <p className="text-slate-400">
                  Full Stack Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div
              className="
                relative
                w-full
                max-w-lg
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
              "
            >
              <div className="mb-6 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <pre
                className="
                  overflow-x-auto
                  text-sm
                  text-slate-300
                "
              >
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