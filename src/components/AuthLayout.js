"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/componentsShacdn/ui/button";
import { Card, CardContent } from "@/componentsShacdn/ui/card";
import { Input } from "@/componentsShacdn/ui/input";
import { Label } from "@/componentsShacdn/ui/label";
import { usePathname } from "next/navigation";

const AuthLayout = ({
  className,
  errorMessageLogin,
  errorMessageRegister,
  successMessageLogin,
  successMessageRegister,
  email,
  password,
  passwordRepeat,
  loading,
  handleSubmit,
  setEmail,
  setPassword,
  setPasswordRepeat,
  name,
  setName,
  role,
  setRole,
  ...props
}) => {
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="overflow-hidden shadow-xl rounded-2xl border-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            {/* Form Section */}
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-12 bg-white/90 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-col items-center text-center space-y-2">
                  <h1 className="text-2xl font-bold text-green-500">
                    <span className="text-orange-400">Welcome to Dimas</span>
                    akin.
                  </h1>
                  <p className="text-gray-600 text-sm">
                    {pathname === "/login"
                      ? "Sign in to explore delicious foods"
                      : "Register to explore delicious foods"}
                  </p>
                </div>

                {/* Message Error/Success */}
                {pathname === "/login" && (
                  <>
                    {errorMessageLogin && (
                      <div className="flex items-center gap-3 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl shadow-sm animate-fade-in">
                        <span className="text-xl">❌</span>
                        <p className="text-sm font-medium">
                          {errorMessageLogin}
                        </p>
                      </div>
                    )}

                    {successMessageLogin && (
                      <div className="flex items-center gap-3 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl shadow-sm animate-fade-in">
                        <span className="text-xl">✅</span>
                        <p className="text-sm font-medium">
                          {successMessageLogin}
                        </p>
                      </div>
                    )}
                  </>
                )}

                {pathname === "/register" && (
                  <>
                    {errorMessageRegister && (
                      <div className="flex items-center gap-3 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl shadow-sm animate-fade-in">
                        <span className="text-xl">❌</span>
                        <p className="text-sm font-medium">
                          {errorMessageRegister}
                        </p>
                      </div>
                    )}

                    {successMessageRegister && (
                      <div className="flex items-center gap-3 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl shadow-sm animate-fade-in">
                        <span className="text-xl">✅</span>
                        <p className="text-sm font-medium">
                          {successMessageRegister}
                        </p>
                      </div>
                    )}
                  </>
                )}

                {/* Name Input */}
                {pathname === "/register" && (
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="username"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                )}

                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@dimasakin.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    required
                  />
                </div>

                {/* Repeat Password (only for register) */}
                {pathname === "/register" && (
                  <div className="space-y-2">
                    <Label htmlFor="repeatPassword" className="text-gray-700">
                      Password Repeat
                    </Label>
                    <Input
                      id="repeatPassword"
                      type="password"
                      value={passwordRepeat}
                      minLength={6}
                      onChange={(e) => setPasswordRepeat(e.target.value)}
                      required
                    />
                  </div>
                )}

                {/* Role (only for register) */}
                {pathname === "/register" && (
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option value="">Pilih Role</option>
                      <option value="admin">Admin</option>
                      <option value="customer">Customer</option>
                    </select>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={
                    !email ||
                    !password ||
                    (pathname === "/register" &&
                      (!passwordRepeat || !role || password !== passwordRepeat))
                  }
                  className={cn(
                    "w-full text-white rounded-lg py-2 text-lg shadow-md transition-all",
                    pathname === "/login"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500"
                      : "bg-gradient-to-r from-green-500 to-emerald-500",
                    !(
                      !email ||
                      !password ||
                      (pathname === "/register" &&
                        (!passwordRepeat ||
                          !role ||
                          password !== passwordRepeat))
                    ) &&
                      (pathname === "/login"
                        ? "hover:from-orange-600 hover:to-amber-600"
                        : "hover:from-green-600 hover:to-emerald-600"),
                    "disabled:cursor-not-allowed disabled:opacity-50"
                  )}
                >
                  {loading
                    ? "Loading..."
                    : pathname === "/login"
                    ? "Let's Eat! 🍴"
                    : "Register & Dine! 🥗"}
                </Button>

                {/* Toggle Link */}
                <div className="text-center text-sm text-gray-600">
                  {pathname === "/login" ? "New here?" : "Have an account?"}{" "}
                  <Link
                    href={pathname === "/login" ? "/register" : "/login"}
                    className="font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-4"
                  >
                    {pathname === "/login" ? "Create account" : "Login here"}
                  </Link>
                </div>
              </div>
            </form>

            {/* Image Section */}
            <div className="relative hidden bg-gradient-to-br from-orange-400 to-amber-400 md:block">
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
              <Image
                src="/images/ImageAlwaysReadyToServe.png"
                alt="Food Preparation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthLayout;
