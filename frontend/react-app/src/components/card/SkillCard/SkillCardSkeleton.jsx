import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkillCardSkeleton() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        p-6
        backdrop-blur-md
      "
    >
      <div className="flex h-full flex-col">
        
        {/* Number */}
        <Skeleton
          width={80}
          height={60}
        />

        {/* Image */}
        <div className="flex flex-1 items-center justify-center py-6">
          <Skeleton
            circle
            width={140}
            height={140}
          />
        </div>

        {/* Skill Name */}
        <div className="flex justify-center">
          <Skeleton
            width={140}
            height={32}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillCardSkeleton;