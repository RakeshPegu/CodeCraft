import { useUserStore } from "@/stores/user.store";
import { Button } from "./ui/button";
import { useState } from "react";
import { AlertTriangle, X, Lock } from "lucide-react";

function DeleteAccountConfirmation({
  showDeleteForm,
  onChangeState,
}) {
  const { deleteUserAccount } = useUserStore();

  const [password, setPassword] = useState({
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteUserAccount(password);
  };

  return (
    <div
      className={`
        absolute top-10
        w-[450px]
        max-w-[95vw]
        rounded-2xl
        border border-red-500/20
        bg-slate-900/95
        backdrop-blur-xl
        shadow-2xl
        p-6
        text-white
        z-50
        ${showDeleteForm ? "block" : "hidden"}
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full
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
              This action cannot be undone.
            </p>
          </div>
        </div>

        <button
          onClick={onChangeState}
          className="
            rounded-lg
            p-2
            text-slate-400
            hover:bg-slate-800
            hover:text-white
            transition
          "
        >
          <X size={18} />
        </button>
      </div>

      {/* Warning Message */}
      <div
        className="
          rounded-xl
          border border-red-500/20
          bg-red-500/5
          p-4
          mb-5
        "
      >
        <p className="text-sm text-slate-300">
          Deleting your account will permanently remove:
        </p>

        <ul className="mt-2 ml-5 list-disc text-sm text-red-300">
          <li>Your profile information</li>
          <li>Your saved account data</li>
          <li>All account settings</li>
        </ul>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div>
          <label className="mb-2 block text-sm text-slate-400">
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
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) =>
                setPassword({
                  password: e.target.value,
                })
              }
              className="
                h-11
                w-full
                rounded-xl
                border border-white/10
                bg-white/5
                pl-10 pr-4
                outline-none
                focus:border-red-500/50
                focus:ring-2
                focus:ring-red-500/20
              "
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-2">
          <Button
            type="button"
            onClick={onChangeState}
            className="
              bg-slate-800
              hover:bg-slate-700
              text-white
            "
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="
              bg-red-600
              hover:bg-red-700
              text-white
            "
          >
            Delete Account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default DeleteAccountConfirmation;