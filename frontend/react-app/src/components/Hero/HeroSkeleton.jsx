import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HeroSectionSkeleton = () => {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        px-6
        pt-20
      "
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            
            {/* Badge */}
            <Skeleton width={280} height={16} />

            {/* Heading */}
            <div className="space-y-4">
              <Skeleton height={70} />
              <Skeleton height={70} width="90%" />
              <Skeleton height={70} width="75%" />
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Skeleton height={20} />
              <Skeleton height={20} width="95%" />
              <Skeleton height={20} width="80%" />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Skeleton height={48} width={170} borderRadius={12} />
              <Skeleton height={48} width={170} borderRadius={12} />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-8">
              {[1, 2, 3].map((item) => (
                <div key={item}>
                  <Skeleton width={60} height={36} />
                  <Skeleton width={120} height={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Code Card */}
          <div className="flex justify-center">
            <div
              className="
                w-full
                max-w-lg
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
              "
            >
              {/* Browser Dots */}
              <div className="mb-6 flex gap-2">
                <Skeleton circle width={12} height={12} />
                <Skeleton circle width={12} height={12} />
                <Skeleton circle width={12} height={12} />
              </div>

              {/* Code Lines */}
              <div className="space-y-3">
                <Skeleton height={18} width="85%" />
                <Skeleton height={18} width="75%" />
                <Skeleton height={18} width="90%" />
                <Skeleton height={18} width="65%" />
                <Skeleton height={18} width="80%" />
                <Skeleton height={18} width="70%" />
                <Skeleton height={18} width="95%" />
                <Skeleton height={18} width="60%" />
                <Skeleton height={18} width="75%" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionSkeleton;