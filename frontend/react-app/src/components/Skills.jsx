import SkillCard from "./card/SkillCard";

const Skills = () => {
  const skills = [
    { name: "Express.js", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751859400/express_llojex.svg", alt: "express logo" },
    { name: "Node.js", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751859203/node-js-svgrepo-com_sey10o.svg", alt: "node logo" },
    { name: "MongoDB", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751857488/mongodb-svgrepo-com_kmy8nt.svg", alt: "mongodb logo" },
    { name: "TypeScript", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751857699/typescript-svgrepo-com_ulrz4l.svg", alt: "typescript logo" },
    { name: "MySQL", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751857517/mysql-svgrepo-com_evafyj.svg", alt: "mysql logo" },
    { name: "Prisma", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751859562/prisma_vepqzy.svg", alt: "prisma logo" },
    { name: "Docker", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751857554/docker-svgrepo-com_b4tedh.svg", alt: "docker logo" },
    { name: "Redis", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751857648/redis-svgrepo-com_tfnnd1.svg", alt: "redis logo" },
    { name: "React", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751857647/react-javascript-js-framework-facebook-svgrepo-com_y54gyi.svg", alt: "react logo" },
    { name: "JavaScript", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751857935/js-svgrepo-com_vo4ziq.svg", alt: "javascript logo" },
    { name: "Tailwind CSS", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751857749/tailwindcss-icon-svgrepo-com_pt8mhg.svg", alt: "tailwind logo" },
    { name: "Socket.IO", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751859397/socketdotio_meyjex.svg", alt: "socket io logo" },
    { name: "GitHub", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751859392/github_ov0tmx.svg", alt: "github logo" },
    { name: "Postman", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751857731/postman-icon-svgrepo-com_d6uoiv.svg", alt: "postman logo" },
    { name: "Razorpay", img: "https://res.cloudinary.com/rakeshcloud/image/upload/v1751857842/razorpay-icon_alnqap.svg", alt: "razorpay logo" },
  ];

  return (
    <section
      id="skill"
      className="
        relative
        py-32
        px-6
        lg:px-12
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute
            left-1/2
            top-24
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 text-center">
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
            Skills & Technologies
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              text-white
              leading-tight
            "
          >
            Building Modern Apps With
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
              Powerful Tools
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-slate-400
            "
          >
            I focus on building scalable backend systems,
            modern web applications, and reliable user
            experiences using industry-standard technologies.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            gap-8
            grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
          "
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              img={skill.img}
              name={skill.name}
              number={String(index + 1).padStart(2, "0")}
              alt={skill.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;