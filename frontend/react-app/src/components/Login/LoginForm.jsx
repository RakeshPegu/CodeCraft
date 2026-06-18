import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

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
  const { signIn, isSigningIn} = useAuthStore()
  const [showPassword, setShowPassword] = useState(false);


  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
     const res = await signIn(data)
     console.log('this is res', res)
     if(res){
        navigate('/')
     }

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
            🔐
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
      </div>
    </div>
  );
};

export default LoginForm;