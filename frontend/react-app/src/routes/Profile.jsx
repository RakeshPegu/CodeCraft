import SettingMenu from "@/components/SettingMenu";
import { useState } from "react";
import { Link } from "react-router";
import {
  Settings,
  Mail,
  User,
  ShieldCheck,
  Calendar,
} from "lucide-react";

function Profile() {
  const [showMenu, setShowMenu] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const handleSettingClick = () => {
    if (!buttonDisable) {
      setShowMenu((prev) => !prev);
    }
  };

  const handleDisable = () => {
    setButtonDisable((prev) => !prev);
  };

  return (
    <div className="mt-[-60px] min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 px-4 flex justify-center items-start relative">
      <div className="w-full max-w-4xl relative">
        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">
                My Account
              </h1>

              <p className="mt-1 text-sm text-slate-400">
                Manage your profile and account settings
              </p>
            </div>

            <Link
              onClick={handleSettingClick}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl border border-white/10
                bg-white/5
                hover:bg-white/10
                transition-all duration-300
                cursor-pointer
              "
            >
              <Settings
                size={20}
                className="text-slate-300"
              />
            </Link>
          </div>

          {/* Profile Hero */}
          <div className="px-8 py-10">
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div
                className="
                  rounded-full
                  bg-gradient-to-br
                  from-violet-500
                  via-blue-500
                  to-cyan-500
                  p-[3px]
                "
              >
                <div
                  className="
                    flex h-32 w-32
                    items-center justify-center
                    rounded-full
                    bg-slate-900
                  "
                >
                  <img
                    src="./unknown2-svgrepo-com.svg"
                    alt="Profile"
                    className="h-20 w-20 opacity-90"
                  />
                </div>
              </div>

              <h2 className="mt-5 text-3xl font-bold text-white">
                Rakesh Pegu
              </h2>

              <p className="mt-2 text-slate-400">
                rpegu0651@gmail.com
              </p>

              <div className="mt-4">
                <span
                  className="
                    rounded-full
                    border border-green-500/20
                    bg-green-500/10
                    px-4 py-1.5
                    text-sm
                    text-green-400
                  "
                >
                  Active Account
                </span>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="border-t border-white/10 px-8 py-8">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Account Information
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Username */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <User
                    size={18}
                    className="text-slate-400"
                  />
                  <span className="text-sm text-slate-400">
                    Username
                  </span>
                </div>

                <p className="text-lg font-medium text-white">
                  rakeshpegu
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Mail
                    size={18}
                    className="text-slate-400"
                  />
                  <span className="text-sm text-slate-400">
                    Email Address
                  </span>
                </div>

                <p className="text-lg font-medium text-white break-all">
                  rpegu0651@gmail.com
                </p>
              </div>

              {/* Account Status */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <ShieldCheck
                    size={18}
                    className="text-slate-400"
                  />
                  <span className="text-sm text-slate-400">
                    Account Status
                  </span>
                </div>

                <p className="font-medium text-green-400">
                  Active
                </p>
              </div>

              {/* Member Since */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Calendar
                    size={18}
                    className="text-slate-400"
                  />
                  <span className="text-sm text-slate-400">
                    Member Since
                  </span>
                </div>

                <p className="font-medium text-white">
                  June 2026
                </p>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="border-t border-white/10 px-8 py-8">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Security
            </h3>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Password
                </p>

                <p className="mt-1 text-lg font-medium text-white">
                  ••••••••••••
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Email Verification
                </p>

                <p className="mt-1 font-medium text-green-400">
                  Verified
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Menu */}
        <SettingMenu
          showMenu={showMenu}
          buttonDisable={handleDisable}
        />
      </div>
    </div>
  );
}

export default Profile;