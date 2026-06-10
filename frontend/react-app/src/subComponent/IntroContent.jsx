export function IntroContent() {
  return (
    <div className="flex flex-col gap-6 text-center lg:text-right">
      <p
        className="
          text-sm
          uppercase
          tracking-[0.3em]
          text-blue-400
          font-semibold
        "
      >
        Full Stack Developer
      </p>

      <h1
        className="
          text-6xl
          sm:text-7xl
          md:text-8xl
          lg:text-9xl
          font-black
          leading-none
          bg-gradient-to-r
          from-white
          via-slate-200
          to-slate-400
          bg-clip-text
          text-transparent
        "
      >
        CODECRAFT
      </h1>

      <h2
        className="
          text-lg
          sm:text-xl
          md:text-2xl
          text-slate-400
          max-w-2xl
          lg:ml-auto
        "
      >
        Building scalable web applications,
        modern user experiences, and reliable
        backend systems.
      </h2>
    </div>
  );
}

export default IntroContent;