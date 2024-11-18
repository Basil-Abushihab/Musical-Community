import { useState } from "react";
import { useAuth } from "../../../Custom-Hooks/authHooks/authHooks";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState(new FormData());
  const { handleLogin, auth } = useAuth(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const newFormData = formData;
    newFormData.set(name, value);

    setFormData(newFormData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h1 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Login
            </h1>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    name: "email",
                    type: "email",
                    label: "Email",
                    placeholder: "e.g., basil.doe@example.com",
                  },
                  {
                    name: "password",
                    type: "password",
                    label: "Password",
                    placeholder: "Enter your password",
                  },
                ].map(({ name, type, label, placeholder }) => (
                  <div key={name} className="relative">
                    <label
                      htmlFor={name}
                      className="absolute -top-2 left-2 bg-white dark:bg-gray-800 px-1 text-xs text-orange-500"
                    >
                      {label}
                    </label>
                    <input
                      required
                      type={type}
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={handleInputChange}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {auth.status === "pending" && (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                <span>Login</span>
              </button>

              <div className="flex justify-between items-center text-sm mt-6">
                <span className="text-gray-600 dark:text-gray-300">
                  Don't have an account?
                </span>
                <Link
                  to="/signup"
                  className="text-orange-500 hover:text-orange-600 font-semibold"
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden md:block w-1/2 bg-orange-100 dark:bg-gray-700">
            <div className="h-full flex items-center justify-center p-6">
              <img
                src="./assets/Animated-music-gif.gif"
                alt="Login illustration"
                className="rounded-lg object-cover w-full h-auto dark:hidden"
              />
              <img
                src="./assets/Animated-music-gif-dark.gif"
                alt="Login illustration dark"
                className="rounded-lg object-cover w-full h-auto hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
