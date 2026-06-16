import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoginFormSkeleton() {
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
            <Skeleton
              circle
              width={56}
              height={56}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <Skeleton width={220} height={36} />
            <Skeleton width={180} height={18} />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2 mb-5">
          <Skeleton width={60} height={18} />
          <Skeleton
            height={44}
            borderRadius={8}
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2 mb-5">
          <Skeleton width={80} height={18} />
          <Skeleton
            height={44}
            borderRadius={8}
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-5">
          <Skeleton width={110} height={16} />
        </div>

        {/* Submit Button */}
        <Skeleton
          height={44}
          borderRadius={8}
          className="mb-6"
        />

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200" />
          </div>

          <div className="relative flex justify-center">
            <Skeleton width={90} height={16} />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center">
          <Skeleton width={230} height={18} />
        </div>
      </div>
    </div>
  );
}

export default LoginFormSkeleton;