import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function OtherSkillsSkeleton() {
  return (
    <div className="relative flex flex-col lg:flex-row-reverse text-white min-h-screen">
      
      {/* Left Section */}
      <div className="flex h-[300px] lg:h-screen lg:w-2/5 items-center justify-center">
        <div className="max-w-lg px-6 flex flex-col w-full">

          {/* Badge */}
          <Skeleton
            height={40}
            width={120}
            borderRadius={9999}
          />

          {/* Heading */}
          <div className="mt-6 space-y-4">
            <Skeleton height={70} width="90%" />
            <Skeleton height={70} width="65%" />
          </div>

          {/* Description */}
          <div className="mt-6 space-y-3">
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} width="75%" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-16 lg:gap-28 lg:w-3/5 px-5 lg:px-10 pb-24">

        {/* Intro */}
        <div className="lg:pt-40">
          <Skeleton height={36} />
          <Skeleton height={36} />
          <Skeleton height={36} width="70%" />
        </div>

        {/* Backend Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Skeleton circle width={12} height={12} />
            <Skeleton width={250} height={36} />
          </div>

          <div className="space-y-3">
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} width="75%" />
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {Array.from({ length: 15 }).map((_, index) => (
              <Skeleton
                key={index}
                width={90}
                height={36}
                borderRadius={9999}
              />
            ))}
          </div>
        </div>

        {/* Frontend Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Skeleton circle width={12} height={12} />
            <Skeleton width={260} height={36} />
          </div>

          <div className="space-y-3">
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} width="75%" />
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {Array.from({ length: 17 }).map((_, index) => (
              <Skeleton
                key={index}
                width={95}
                height={36}
                borderRadius={9999}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default OtherSkillsSkeleton;