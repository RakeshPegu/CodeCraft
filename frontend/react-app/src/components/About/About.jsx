import AboutCard from "../card/AboutCard/AboutCard";
import TechContent from "@/subComponent/TechContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const pinRef = useRef(null);
  const parentContainerRef = useRef(null);
  const rightDivRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useLayoutEffect(() => {
    // Check if screen is large (1024px and above)
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useLayoutEffect(() => {
    // Only set up ScrollTrigger on large screens
    if (!isLargeScreen || !parentContainerRef.current || !pinRef.current) {
      return;
    }

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: parentContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: pinRef.current,
      onUpdate: (self) => {
        const rightDiv = rightDivRef.current;
        if (rightDiv) {
          const totalScrollableHeight =
            rightDiv.scrollHeight - rightDiv.clientHeight;
          rightDiv.scrollTop = self.progress * totalScrollableHeight;
        }
      },
    });

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, [isLargeScreen]);

  return (
    <div
      className="w-full bg-center text-white"
      id="about"
    >
      <div
        className="flex flex-col lg:h-[300vh] w-full lg:relative lg:flex-row lg:gap-0 pl-3"
        ref={parentContainerRef}
      >
        {/* Left Section - Pinned on LG+ */}
        <div
          className="w-full lg:w-2/5 lg:h-screen lg:relative lg:flex justify-center lg:items-center px-6 lg:px-8 py-12 lg:py-0 "
          ref={pinRef}
        >
          <div className="flex flex-col justify-center gap-4 max-w-md">
            <span className="text-sm font-semibold tracking-[0.25em] uppercase pt-10 text-blue-400">
              About Me
            </span>

            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              Building scalable web applications with modern technologies.
            </h2>

            <p className="text-slate-400 text-sm lg:text-lg leading-relaxed">
              I'm Rakesh, a self-taught full-stack developer focused on building
              reliable, performant, and user-friendly applications. My primary
              expertise lies in React, Node.js, Express, MongoDB, and modern
              backend architecture.
            </p>
          </div>
        </div>

        {/* Right Section - Scrollable on LG+ */}
        <div
          className="w-full lg:w-3/5 flex flex-col gap-15 lg:gap-20 px-6 lg:pl-[50px] lg:pr-8 pb-6 "
          ref={rightDivRef}
        >
          <div className="lg:pt-[450px] pt-0 ">
            <AboutCard
              heading={"WHO I AM ?"}
              content1={`I'm a Full-Stack Developer with close to 2 years of experience, but I'm currently transitioning into a more backend-focused role — because that's where I thrive.`}
              content2={`When I'm not coding, you'll probably find me playing gully cricket or losing track of time in a good game. I love solving problems — both on-screen and on the pitch!`}
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-3xl lg:text-4xl font-bold font-serif">
              What interest me in tech?
            </h3>

            <div>
              <TechContent />
            </div>
          </div>

          <div>
            <AboutCard
              heading={"Why Backend ?"}
              content1={`I've always been the kind of person who wants to know what's really happening under the hood. That's probably why I'm so drawn to backend development — it's like solving puzzles with code, and I enjoy every bit of it`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;