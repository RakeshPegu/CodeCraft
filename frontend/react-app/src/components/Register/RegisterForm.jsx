import { useState } from "react";
import "./style.css"
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
import { googleClient } from "@/lib/googleClient";

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
  
  const handleGoogleSign = () => {
  
      try {
        const client = googleClient();
        client.requestCode();
      } catch (error) {
        console.error(error.message);
        alert("Sign-in is still loading. Please try again in a second.");
      }
    };
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
              mb-4
              flex
              h-14
              items-center
              justify-center
              text-3xl
              font-bold
            "
          >
            Rakesh <span className="text-fuchsia-600 text-4xl">.</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Create Account
          </h1>

          <p className="mt-2 text-slate-500">
            Sign up to continue.
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
            <div className="flex justify-center mt-2">
            <button className="gsi-material-button "  onClick={handleGoogleSign}>
             <div className="gsi-material-button-state"></div>
                  <div className="gsi-material-button-content-wrapper">
                  <div className="gsi-material-button-icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display:'block'}}>
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                  </div>
                  <span className="gsi-material-button-contents">Sign in with Google</span>
                  <span style={{display:"none"}}>Sign in with Google</span>
                </div>
              </button>
          </div>  
      </div>
    </div>
  );
}

export default RegisterForm;