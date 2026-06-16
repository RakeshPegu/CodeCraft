import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkillCardSkeleton from "../card/SkillCard/SkillCardSkeleton";

const SkillsSkeleton = () => {
  return (
    <section
      className="
        relative
        w-full
        mt-16
        md:mt-24
        lg:mt-40
        py-16
        md:py-24
        lg:py-32
        px-4
        sm:px-6
        lg:px-12
        overflow-hidden
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 md:mb-20 lg:mb-24 text-center">
          {/* Subtitle */}
          <div className="flex justify-center mb-4">
            <Skeleton width={180} height={16} />
          </div>

          {/* Title */}
          <div className="flex flex-col items-center gap-3">
            <Skeleton height={50} width="60%" />
            <Skeleton height={50} width="45%" />
          </div>

          {/* Description */}
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            <Skeleton height={18} />
            <Skeleton height={18} />
            <Skeleton height={18} width="75%" />
          </div>
        </div>

        {/* Skills Grid */}
        <div
          className="
            grid
            gap-3
            sm:gap-4
            md:gap-6
            lg:gap-8
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {Array.from({ length: 15 }).map((_, index) => (
            <SkillCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSkeleton;