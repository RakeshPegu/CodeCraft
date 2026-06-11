import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth.store";
import { useState } from "react";

function SendEmail({ emailFormState, changeEmailFormState }) {
  const initialFormState = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const { isSendingEmail, sendingEmail } = useAuthStore();

  const handleRemove = () => {
    changeEmailFormState();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await sendingEmail(formData);

    if (result.success === true) {
      setFormData(initialFormState);
    }
  };

  return (
    <div
      className={`
        absolute top-20 left-1/2 -translate-x-1/2
        w-[500px] max-w-[95vw]
        bg-white/90 backdrop-blur-md
        shadow-2xl rounded-2xl
        border border-gray-200
        p-6 z-50
        text-black
        ${emailFormState ? "block" : "hidden"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            Contact Me
          </h3>
          <p className="text-sm text-gray-500">
            I'd love to hear from you.
          </p>
        </div>

        <button
          onClick={handleRemove}
          className="
            w-9 h-9 rounded-full
            flex items-center justify-center
            bg-gray-100 hover:bg-gray-200
            transition-all duration-200
            cursor-pointer
          "
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* First + Middle Name */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              maxLength={30}
              value={formData.firstName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  firstName: e.target.value,
                })
              }
              className="
                w-full h-10 mt-1 px-3
                rounded-lg border border-gray-300
                focus:outline-none
                focus:ring-2 focus:ring-blue-500
              "
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              maxLength={30}
              value={formData.middleName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  middleName: e.target.value,
                })
              }
              className="
                w-full h-10 mt-1 px-3
                rounded-lg border border-gray-300
                focus:outline-none
                focus:ring-2 focus:ring-blue-500
              "
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            maxLength={30}
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName: e.target.value,
              })
            }
            className="
              w-full h-10 mt-1 px-3
              rounded-lg border border-gray-300
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="
              w-full h-10 mt-1 px-3
              rounded-lg border border-gray-300
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            className="
              w-full mt-1 p-3
              rounded-lg border border-gray-300
              resize-none
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSendingEmail}
          className="
            h-11 mt-2
            bg-gray-700
            hover:bg-gray-500
            rounded-lg
            text-white
            font-medium
            transition-all duration-200
          "
        >
          {isSendingEmail ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

export default SendEmail;