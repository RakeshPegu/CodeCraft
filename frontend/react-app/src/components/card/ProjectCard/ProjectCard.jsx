import { Button } from "../../ui/button";
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ name, description, src ,href, githubProjectRef}) {
  return (
    <div
      className="
      group
      w-[95%]
      sm:w-full
      relative
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-[0_20px_80px_rgba(0,0,0,0.25)]
    "
    >
      {/* Gradient Glow */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
      >
        <div
          className="
          absolute
          -top-24
          -right-24
          h-48
          sm:w-48
          rounded-full
          bg-blue-500/50
          blur-3xl

        "
        />
      </div>

      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={src || 'defaultProj.png'}
          alt={name}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white">
            {name}
          </h2>

          <div className="mt-2 h-1 w-12 rounded-full bg-blue-500 transition-all duration-500 group-hover:w-20" />
        </div>

        <p className="mb-6 leading-relaxed text-slate-300">
          {description}
        </p>

        <div className="flex gap-3">
          <Button
            className="
              flex-1
              rounded-xl
              bg-white
              text-black
              hover:bg-slate-200
              cursor-pointer
            "
          >
            <a href={href} className="flex flex-row">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
            </a>
          </Button>
          
          <Button
            variant="outline"
            className="
              flex-1
              rounded-xl
              border-white/20
              bg-white/5
              text-white
              hover:bg-white/10
              cursor-pointer
            "
          >
            <a href={githubProjectRef}  className="flex items-center justify-center" >
            
            <Github className="mr-2 h-4 w-4" />
            GitHub
            </a>
          </Button>
          
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;