import { Link, useLocation, useNavigate } from "react-router";

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const scrollToSection = (id) => {
    if(location.pathname === '/'){
      const section = document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

    }
    navigate('/')
    const timer = setTimeout(()=>{
      document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
    },500)
    return ()=>{
      clearInterval(timer)
    }
    
  

  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Rakesh Pegu
            </h2>

            <p className="mt-4 leading-relaxed text-slate-400">
              Full-Stack Developer focused on building scalable backend
              systems, modern web applications, and reliable digital
              experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Navigation
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("project")}
                  className="transition-colors hover:text-cyan-400"
                >
                  Projects
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="transition-colors hover:text-cyan-400"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("skill")}
                  className="transition-colors hover:text-cyan-400"
                >
                  Skills
                </button>
              </li>

           </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Connect
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/RakeshPegu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-400"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/rakeshpegu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-400"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-cyan-400"
                >
                  Fiverr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Rakesh Pegu. All rights reserved.
          </p>

          <p>
            Built with React, Tailwind CSS & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;