import { useAuthStore } from "@/stores/auth.store";
import { Button } from "./ui/button";
import { X, User, Mail, Lock } from "lucide-react";

function UpdateUserInfo({ state, onchangeState }) {
  const { updateUserInfo, isUpdating } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const userInfo = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    await updateUserInfo(userInfo);
  };

  return (
    <div
      className={`
        absolute top-8
        w-[450px]
        max-w-[95vw]
        rounded-2xl
        border border-white/20
        bg-white/10
        backdrop-blur-xl
        shadow-2xl
        text-white
        p-6
        z-50
        ${state ? "block" : "hidden"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold">
            Update Profile
          </h3>
          <p className="text-sm text-gray-300">
            Change your account information.
          </p>
        </div>

        <button
          onClick={onchangeState}
          className="
            w-9 h-9
            rounded-full
            bg-white/10
            hover:bg-white/20
            flex items-center justify-center
            transition
          "
        >
          <X size={18} />
        </button>
      </div>

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {/* Username */}
        <div className="relative">
          <User
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            name="username"
            placeholder="New username"
            className="
              w-full h-11
              pl-10 pr-4
              rounded-xl
              bg-white/10
              border border-white/20
              outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="New email address"
            className="
              w-full h-11
              pl-10 pr-4
              rounded-xl
              bg-white/10
              border border-white/20
              outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="password"
            name="password"
            placeholder="New password"
            className="
              w-full h-11
              pl-10 pr-4
              rounded-xl
              bg-white/10
              border border-white/20
              outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        <Button
          type="submit"
          disabled={isUpdating}
          className="
            mt-2 h-11
            rounded-xl
            bg-gray-200
            hover:bg-gray-100
            text-black
            font-medium
          "
        >
          {isUpdating ? "Updating..." : "Update Profile"}
        </Button>
      </form>
    </div>
  );
}

export default UpdateUserInfo;