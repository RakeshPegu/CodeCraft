import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProjectCardSkeleton from "../card/ProjectCard/ProjectSkeleton";


function PortfolioSkeleton() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32
        px-6
        lg:px-12
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-24 text-center">
          {/* Portfolio Badge */}
          <div className="flex justify-center mb-4">
            <Skeleton width={100} height={16} />
          </div>

          {/* Main Heading */}
          <div className="flex flex-col items-center gap-4">
            <Skeleton height={60} width="70%" />
            <Skeleton height={60} width="50%" />
          </div>

          {/* Description */}
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} width="75%" />
          </div>
        </div>

        {/* Featured Projects Divider */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />

          <Skeleton width={180} height={32} />

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Projects Grid */}
        <div
          className="
            grid
            gap-8
            grid-cols-[repeat(auto-fit,minmax(350px,1fr))]
          "
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSkeleton;