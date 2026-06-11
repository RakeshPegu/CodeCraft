import {
  User,
  FolderKanban,
  Code2,
  Mail,
} from "lucide-react";

function MenuCard({ showState , handleContactForm}) {
  const handleAboutClick = () => {
    const about = document.getElementById("about");

    if (about) {
      about.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleProjectClick = () => {
    const project = document.getElementById("project");

    if (project) {
      project.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleSkillClick = () => {
    const skill = document.getElementById("skill");

    if (skill) {
      skill.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  return (
    <div
      className={`
        absolute
        top-2
        overflow-x-hidden
        z-50
        w-64
        overflow-hidden
        rounded-2xl
        border
        border-white/15
        bg-slate-950/75
        backdrop-blur-2xl
        shadow-2xl
        transition-all
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]
        origin-top-right
        ${
          showState
            ? "translate-y-0 right-6 opacity-100 scale-100"
            : "pointer-events-none -translate-y-4 opacity-0 scale-95"
        }
      `}
    >
      <div className="p-2">
        <ul className="flex flex-col gap-1">
          <li
            onClick={handleAboutClick}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-slate-200
              cursor-pointer
              transition-all
              duration-200
              hover:bg-white/10
              hover:text-white
              hover:translate-x-1
            "
          >
            <User size={18} />
            <span>About Me</span>
          </li>

          <li
            onClick={handleProjectClick}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-slate-200
              cursor-pointer
              transition-all
              duration-200
              hover:bg-white/10
              hover:text-white
              hover:translate-x-1
            "
          >
            <FolderKanban size={18} />
            <span>Projects</span>
          </li>

          <li
            onClick={handleSkillClick}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-slate-200
              cursor-pointer
              transition-all
              duration-200
              hover:bg-white/10
              hover:text-white
              hover:translate-x-1
            "
          >
            <Code2 size={18} />
            <span>Skills</span>
          </li>

          <li
            onClick={handleContactForm}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-slate-200
              cursor-pointer
              transition-all
              duration-200
              hover:bg-white/10
              hover:text-white
              hover:translate-x-1
            "
          >
            <Mail size={18} />
            <span >Contact Me</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuCard;