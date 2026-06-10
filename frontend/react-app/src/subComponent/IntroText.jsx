
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function IntroText() {
  return (
    <div
      className="
        flex
        flex-col
        gap-10
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Description */}
      <div className="max-w-2xl">
        <p
          className="
            text-lg
            md:text-xl
            leading-relaxed
            text-slate-300
          "
        >
          I'm <span className="font-semibold text-white">Rakesh</span>,
          a full-stack developer focused on building scalable backend
          systems, modern web applications, and products that deliver
          real value to users.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          to="https://github.com/RakeshPegu"
          target="_blank"
        >
          <Button
            className="
              h-12
              min-w-[180px]
              rounded-xl
              border
              border-white/10
              bg-white/10
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/20
              hover:-translate-y-1
            "
          >
            GitHub
          </Button>
        </Link>

        <Link
          to="https://www.linkedin.com/in/rakeshpegu/"
          target="_blank"
        >
          <Button
            className="
              h-12
              min-w-[180px]
              rounded-xl
              bg-blue-600
              text-white
              transition-all
              duration-300
              hover:bg-blue-500
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-blue-500/30
            "
          >
            LinkedIn
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default IntroText;