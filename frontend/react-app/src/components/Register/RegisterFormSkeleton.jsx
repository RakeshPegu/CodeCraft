import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SignUpSkeleton = () => {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-10
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          bg-indigo-50
          border
          border-blue-200
          shadow-xl
          p-8
        "
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <Skeleton circle width={56} height={56} />
          </div>

          <Skeleton
            height={36}
            width="70%"
            className="mx-auto mb-3"
          />

          <Skeleton
            height={18}
            width="85%"
            className="mx-auto"
          />
        </div>

        <div className="space-y-5">
          {/* Username */}
          <div>
            <Skeleton height={18} width="30%" className="mb-2" />
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Skeleton width={20} height={20} circle />
              </div>
              <Skeleton height={44} borderRadius={8} />
            </div>
          </div>

          {/* Email */}
          <div>
            <Skeleton height={18} width="25%" className="mb-2" />
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Skeleton width={20} height={20} circle />
              </div>
              <Skeleton height={44} borderRadius={8} />
            </div>
          </div>

          {/* Password */}
          <div>
            <Skeleton height={18} width="28%" className="mb-2" />
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Skeleton width={20} height={20} circle />
              </div>
              <Skeleton height={44} borderRadius={8} />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Skeleton width={20} height={20} circle />
              </div>
            </div>
          </div>

          {/* Password Strength */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Skeleton height={14} width={130} />
              <Skeleton height={14} width={70} />
            </div>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Skeleton
                  key={i}
                  height={4}
                  className="flex-1"
                />
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="flex gap-3 rounded-md border border-slate-200 bg-white p-4">
            <div className="flex-shrink-0 mt-1">
              <Skeleton width={20} height={20} borderRadius={4} />
            </div>

            <div className="flex-1 space-y-2">
              <Skeleton height={14} width="100%" />
              <Skeleton height={14} width="85%" />
            </div>
          </div>

          {/* Submit Button */}
          <Skeleton
            height={44}
            borderRadius={8}
            className="mt-4"
          />

          {/* Divider */}
          <div className="relative py-2">
            <Skeleton height={1} />
          </div>

          {/* Footer */}
          <div className="flex justify-center">
            <Skeleton height={16} width="75%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSkeleton;