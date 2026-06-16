function SkillCard({ name, number, img, alt }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        
        {/* Number */}
        <span className="text-6xl font-bold tracking-tight text-white/20">
          {number}
        </span>

        {/* Image */}
        <div className="flex flex-1 items-center justify-center py-6">
          <img
            src={img || "/status-unknown-small-svgrepo-com.svg"}
            alt={alt}
            className="h-40 w-40 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Skill Name */}
        <h2 className="text-center text-2xl font-semibold tracking-tight text-white">
          {name}
        </h2>
      </div>
    </div>
  );
}

export default SkillCard;