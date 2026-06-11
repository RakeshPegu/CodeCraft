import { useState } from "react";
import {
  Settings,
  LogOut,
  Trash2,
  UserPen,
} from "lucide-react";

import UpdateUserInfo from "./UpdateUserInfo";
import DeleteAccountConfirmation from "./DeleteConfirmation";
import LogoutConfirmation from "./LogoutConfirmation";

function SettingMenu({ showMenu, buttonDisable }) {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showLogoutForm, setShowLogoutForm] = useState(false);

  const onchangeState = () => {
    setShowUpdateForm((prev) => !prev);
    buttonDisable();
  };

  const handleDeleteClick = () => {
    setShowDeleteForm((prev) => !prev);
    buttonDisable();
  };

  const handleLogoutClick = () => {
    setShowLogoutForm((prev) => !prev);
    buttonDisable();
  };

  return (
    <>
      <div
        className={`
          absolute top-20
          right-5
          w-[260px]
          rounded-2xl
          border border-white/20
          bg-white/10
          backdrop-blur-xl
          shadow-2xl
          p-5
          text-white
          transition-all duration-300
          ${showMenu ? "flex" : "hidden"}
          flex-col gap-4
        `}
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Settings size={20} />
          <h4 className="text-lg font-semibold">
            Settings
          </h4>
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-2">
          <li
            onClick={onchangeState}
            className="
              flex items-center gap-3
              px-3 py-3
              rounded-xl
              hover:bg-white/10
              cursor-pointer
              transition-all duration-200
            "
          >
            <UserPen size={18} />
            <span>Update Profile</span>
          </li>

          <li
            onClick={handleLogoutClick}
            className="
              flex items-center gap-3
              px-3 py-3
              rounded-xl
              hover:bg-white/10
              cursor-pointer
              transition-all duration-200
            "
          >
            <LogOut size={18} />
            <span>Logout</span>
          </li>

          <li
            onClick={handleDeleteClick}
            className="
              flex items-center gap-3
              px-3 py-3
              rounded-xl
              hover:bg-red-500/20
              text-red-400
              cursor-pointer
              transition-all duration-200
            "
          >
            <Trash2 size={18} />
            <span>Delete Account</span>
          </li>
        </ul>
      </div>

      {/* Modals */}
      <div className="w-full flex justify-center">
        <UpdateUserInfo
          state={showUpdateForm}
          onchangeState={onchangeState}
        />
      </div>

      <div className="w-full flex justify-center">
        <DeleteAccountConfirmation
          showDeleteForm={showDeleteForm}
          onChangeState={handleDeleteClick}
        />
      </div>

      <div className="w-full flex justify-center">
        <LogoutConfirmation
          showLogoutForm={showLogoutForm}
          onChangeState={handleLogoutClick}
        />
      </div>
    </>
  );
}

export default SettingMenu;