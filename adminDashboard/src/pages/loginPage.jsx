import React, { useState } from "react";
import { EyeIcon, EyeOffIcon, Lock, UserIcon } from "lucide-react";
import { useAdminAuth } from "../customHooks/adminAuth/useAdminAuth";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { admin, loginHandler } = useAdminAuth(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-b from-pink-50 to-white p-4 sm:p-6 md:p-8">
      <div className="max-w-[90%] w-full sm:max-w-[440px] space-y-6 sm:space-y-8 p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Admin Dashboard
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Please sign in to your account
          </p>
        </div>

        <form className="space-y-5 sm:space-y-6" onSubmit={loginHandler}>
          <div className="relative">
            <label
              htmlFor="email"
              className="text-sm sm:text-base font-medium text-gray-700 mb-1 block"
            >
              Email address
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-colors"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="text-sm sm:text-base font-medium text-gray-700 mb-1 block"
            >
              Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="block w-full pl-9 sm:pl-10 pr-10 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-colors"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-500" />
                ) : (
                  <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-pink-300 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300 transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
