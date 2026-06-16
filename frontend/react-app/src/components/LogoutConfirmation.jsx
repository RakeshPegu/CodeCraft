import { LogOut, X } from "lucide-react";
import { Button } from "./ui/button";
import { useAuthStore } from "@/stores/auth.store";

function LogoutConfirmation({
  showLogoutForm,
  onChangeState,
}) {
  const { isLoggingOut, logOut } = useAuthStore();

  const handleLogout = async () => {
    await logOut();
  };

  if (!showLogoutForm) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-md
          mx-4
          rounded-3xl
          border border-white/20
          bg-white/10
          backdrop-blur-xl
          shadow-2xl
          text-white
          overflow-hidden
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-red-500/20
              "
            >
              <LogOut
                size={20}
                className="text-red-400"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Logout
              </h3>
              <p className="text-sm text-white/60">
                Confirm your action
              </p>
            </div>
          </div>

          <button
            onClick={onChangeState}
            className="
              p-2
              rounded-xl
              hover:bg-white/10
              transition-colors
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-white/80 leading-relaxed">
            Are you sure you want to logout from your
            account? You'll need to sign in again to
            access your dashboard.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 p-5 pt-0">
          <Button
            onClick={onChangeState}
            variant="ghost"
            className="
              flex-1
              border
              border-white/20
              text-white
              hover:bg-white/10
            "
          >
            Cancel
          </Button>

          <Button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="
              flex-1
              bg-red-500
              text-white
              hover:bg-red-600
            "
          >
            {isLoggingOut
              ? "Logging out..."
              : "Logout"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirmation;