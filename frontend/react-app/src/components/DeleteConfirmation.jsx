import { useState } from "react";
import { AlertTriangle, Lock, X } from "lucide-react";

import { useUserStore } from "@/stores/user.store";
import { Button } from "./ui/button";

function DeleteAccountConfirmation({
  showDeleteForm,
  onChangeState,
}) {
  const { deleteUserAccount } = useUserStore();

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await deleteUserAccount({
      password,
    });
  };

  if (!showDeleteForm) return null;

  return (
    <div
      className="
        fixed inset-0
        z-50
        flex items-center justify-center
        bg-black/40
        backdrop-blur-sm
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border border-red-500/20
          bg-slate-900/90
          backdrop-blur-xl
          shadow-2xl
          text-white
          overflow-hidden
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-red-500/10
              "
            >
              <AlertTriangle
                size={24}
                className="text-red-500"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Delete Account
              </h3>

              <p className="text-sm text-slate-400">
                This action cannot be undone
              </p>
            </div>
          </div>

          <button
            onClick={onChangeState}
            className="
              rounded-xl
              p-2
              text-slate-400
              hover:bg-white/10
              hover:text-white
              transition-colors
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Warning */}
        <div className="p-6 pb-0">
          <div
            className="
              rounded-2xl
              border border-red-500/20
              bg-red-500/5
              p-4
            "
          >
            <p className="text-sm text-slate-300">
              Deleting your account will permanently
              remove:
            </p>

            <ul className="mt-3 ml-5 list-disc text-sm text-red-300 space-y-1">
              <li>Your profile information</li>
              <li>Your saved account data</li>
              <li>Your account settings</li>
              <li>Access to your account</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 pt-5"
        >
          <label
            htmlFor="password"
            className="mb-2 block text-sm text-slate-400"
          >
            Confirm your password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-500
              "
            />

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                h-11
                w-full
                rounded-xl
                border border-white/10
                bg-white/5
                pl-10
                pr-4
                text-white
                placeholder:text-slate-500
                outline-none
                transition-all
                focus:border-red-500/50
                focus:ring-2
                focus:ring-red-500/20
              "
            />
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <Button
              type="button"
              onClick={onChangeState}
              className="
                flex-1
                bg-slate-800
                text-white
                hover:bg-slate-700
              "
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="
                flex-1
                bg-red-600
                text-white
                hover:bg-red-700
              "
            >
              Delete Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteAccountConfirmation;