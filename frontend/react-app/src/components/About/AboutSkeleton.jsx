import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AboutSkeleton() {
  return (
    <div className="w-full text-white" id="about">
      <div className="flex flex-col lg:h-[300vh] w-full lg:flex-row pl-3">

        {/* Left Section */}
        <div className="w-full lg:w-2/5 lg:h-screen px-6 lg:px-8 py-12 flex justify-center lg:items-center">
          <div className="flex flex-col gap-4 max-w-md w-full">
            <Skeleton width={100} height={16} />

            <Skeleton height={60} />
            <Skeleton height={60} width="85%" />

            <div className="space-y-2 mt-2">
              <Skeleton height={18} />
              <Skeleton height={18} />
              <Skeleton height={18} width="80%" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/5 flex flex-col gap-16 lg:gap-20 px-6 lg:pl-[50px] lg:pr-8 pb-6">

          {/* WHO I AM Card */}
          <div className="lg:pt-[450px]">
            <div className="rounded-3xl border border-slate-700 p-8">
              <Skeleton width={180} height={32} />

              <div className="mt-6 space-y-3">
                <Skeleton height={18} />
                <Skeleton height={18} />
                <Skeleton height={18} width="85%" />
              </div>

              <div className="mt-6 space-y-3">
                <Skeleton height={18} />
                <Skeleton height={18} />
                <Skeleton height={18} width="70%" />
              </div>
            </div>
          </div>

          {/* Tech Section */}
          <div className="flex flex-col gap-6">
            <Skeleton width={280} height={42} />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-700 p-5"
                >
                  <Skeleton circle width={40} height={40} />
                  <Skeleton
                    height={18}
                    width="80%"
                    className="mt-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Why Backend Card */}
          <div>
            <div className="rounded-3xl border border-slate-700 p-8">
              <Skeleton width={200} height={32} />

              <div className="mt-6 space-y-3">
                <Skeleton height={18} />
                <Skeleton height={18} />
                <Skeleton height={18} />
                <Skeleton height={18} width="75%" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutSkeleton;