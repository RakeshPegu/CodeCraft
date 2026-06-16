function AboutCard({ heading, content1, content2 }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-white md:text-3xl">
        {heading}
      </h2>

      <div className="space-y-4 text-base leading-8 text-gray-300 md:text-lg">
        <p>{content1}</p>
        <p>{content2}</p>
      </div>
    </div>
  );
}

export default AboutCard;