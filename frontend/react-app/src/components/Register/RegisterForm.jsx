import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link, useNavigate } from "react-router";
import { useAuthStore } from "@/stores/auth.store";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

function RegisterForm() {
  const { signUp, isSigningUp } = useAuthStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const schema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters",
    }),

    email: z.string().email({
      message: "Please enter a valid email",
    }),

    password: z.string().min(5, {
      message: "Password must be at least 5 characters",
    }),

    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  });

  const form = useForm({
    resolver: zodResolver(schema),

    defaultValues: {
      username: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    const res = await signUp(data);

    if (res) {
      navigate("/login");
    }
  };

  // Calculate password strength
  const getPasswordStrength = (pwd) => {
    if (!pwd) return { strength: 0, label: "", color: "" };

    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;

    const strengths = [
      { strength: 0, label: "", color: "" },
      { strength: 1, label: "Weak", color: "bg-red-500" },
      { strength: 2, label: "Fair", color: "bg-orange-500" },
      { strength: 3, label: "Good", color: "bg-yellow-500" },
      { strength: 4, label: "Strong", color: "bg-lime-500" },
      { strength: 5, label: "Very Strong", color: "bg-green-500" },
    ];

    return strengths[Math.min(strength, 5)];
  };

  const passwordStrength = getPasswordStrength(password);

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
          <div
            className="
              mx-auto
              mb-4
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-blue-100
              text-2xl
            "
          >
            👋
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Create Account
          </h1>

          <p className="mt-2 text-slate-500">
            Sign up to continue and start building.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-slate-700">
                    Username
                  </FormLabel>

                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        {...field}
                        autoFocus
                        placeholder="Enter your username"
                        className="h-11 bg-white pl-10"
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-slate-700">
                    Email
                  </FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="h-11 bg-white pl-10"
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-slate-700">
                    Password
                  </FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="h-11 bg-white pl-10 pr-10"
                        onChange={(e) => {
                          field.onChange(e);
                          setPassword(e.target.value);
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Strength Indicator */}
            {password && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    Password Strength
                  </span>
                  <span className={`text-xs font-semibold ${
                    passwordStrength.color === "bg-red-500" ? "text-red-600" :
                    passwordStrength.color === "bg-orange-500" ? "text-orange-600" :
                    passwordStrength.color === "bg-yellow-500" ? "text-yellow-600" :
                    passwordStrength.color === "bg-lime-500" ? "text-lime-600" :
                    "text-green-600"
                  }`}>
                    {passwordStrength.label}
                  </span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        level <= passwordStrength.strength
                          ? passwordStrength.color
                          : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Terms & Conditions */}
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-slate-200 bg-white p-4 mt-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <div className="space-y-1 leading-none">
                    <p className="text-sm text-slate-600">
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="font-medium text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        Terms of Service
                      </Link>
                      {" "}and{" "}
                      <Link
                        to="/privacy"
                        className="font-medium text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              disabled={isSigningUp}
              type="submit"
              className="
                w-full
                h-11
                mt-4
                bg-blue-400
                text-white
                font-medium
                shadow-md
                hover:bg-blue-500
                disabled:opacity-70
                disabled:cursor-not-allowed
                transition-colors
              "
            >
              {isSigningUp ? "Creating Account..." : "Create Account"}
            </Button>

            {/* Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-indigo-50 px-3 text-slate-400">
                  Account Access
                </span>
              </div>
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="
                  font-medium
                  text-blue-500
                  transition-colors
                  hover:text-blue-600
                "
              >
                Sign In
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default RegisterForm;