import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProjectCardSkeleton() {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
      "
    >
      {/* Image */}
      <Skeleton
        height={256}
        width="100%"
      />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <Skeleton
          height={32}
          width="60%"
        />

        {/* Accent Line */}
        <div className="mt-3">
          <Skeleton
            height={4}
            width={48}
            borderRadius={9999}
          />
        </div>

        {/* Description */}
        <div className="mt-6 space-y-3">
          <Skeleton height={18} />
          <Skeleton height={18} />
          <Skeleton height={18} width="80%" />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Skeleton
            height={42}
            width="100%"
            borderRadius={12}
          />
          <Skeleton
            height={42}
            width="100%"
            borderRadius={12}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCardSkeleton;