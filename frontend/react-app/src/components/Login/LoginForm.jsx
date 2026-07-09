import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { googleClient } from "@/lib/googleClient";
import './style.css'

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuthStore } from "@/stores/auth.store";

const LoginForm = () => {
  const navigate = useNavigate()
  const { signIn, isSigningIn, accessToken} = useAuthStore()
  const [showPassword, setShowPassword] = useState(false);

const handleGoogleSign = () => {

    try {
      const client = googleClient();
      client.requestCode();
      console.log('accessToken in login form', accessToken)
    } catch (error) {
      console.error(error.message);
      alert("Sign-in is still loading. Please try again in a second.");
    }
  };

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
     await signIn(data)
    

  };
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
              rounded-2xl
              text-4xl
              font-bold
            "
          >
             Rakesh <span className="text-fuchsia-600 text-4xl">.</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to continue your journey.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
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
                      <Mail
                        className="
                          absolute
                          left-3
                          top-1/2
                          -translate-y-1/2
                          w-5
                          h-5
                          text-slate-400
                        "
                      />

                      <Input
                        {...field}
                        autoFocus
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
                      <Lock
                        className="
                          absolute
                          left-3
                          top-1/2
                          -translate-y-1/2
                          w-5
                          h-5
                          text-slate-400
                        "
                      />

                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="h-11 bg-white pl-10 pr-10"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        className="
                          absolute
                          right-3
                          top-1/2
                          -translate-y-1/2
                          text-slate-400
                          hover:text-slate-600
                          transition-colors
                        "
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

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormLabel className="cursor-pointer text-sm font-normal text-slate-600">
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Link
                to="/forgot-password"
                className="
                  text-sm
                  font-medium
                  text-blue-500
                  hover:text-blue-600
                  transition-colors
                "
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <Button
              disabled={isSigningIn}
              type="submit"
              className="
                w-full
                h-11
                bg-blue-400
                text-white
                font-medium
                shadow-md
                hover:bg-blue-500
                hover:shadow-lg
                transition-all
                duration-300
                disabled:opacity-70
                disabled:cursor-not-allowed
              "
            >
              {isSigningIn ? "Signing In..." : "Sign In"}
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
              Don't have an account?{" "}
              <Link
                to="/register"
                className="
                  font-medium
                  text-blue-500
                  hover:text-blue-600
                  transition-colors
                "
              >
                Create Account
              </Link>
            </p>  
          </form>
        </Form>  
         <div className="flex justify-center mt-2">
            <button className="gsi-material-button " onClick={handleGoogleSign}>
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
};

export default LoginForm;