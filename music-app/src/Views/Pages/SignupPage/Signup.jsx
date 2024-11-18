import { useState } from "react";
import { useAuth } from "../../../Custom-Hooks/authHooks/authHooks";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const { handleSignup, auth } = useAuth(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(formData);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
      <div className="flex w-full max-w-4xl px-6 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-14">
        {/* Form Section */}
        <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center space-y-6">
          <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 pb-2 mb-6 text-center">
            Signup
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                name: "username",
                type: "text",
                label: "Username",
                example: "e.g., basilramzi123",
              },
              {
                name: "phone",
                type: "text",
                label: "Phone Number",
                example: "e.g., o79-1234-123",
              },
              {
                name: "email",
                type: "email",
                label: "Email",
                example: "e.g., basil.doe@example.com",
              },
              {
                name: "password",
                type: "password",
                label: "Password",
                example: "e.g., *******",
              },
              {
                name: "repeatPassword",
                type: "password",
                label: "Repeat Password",
                example: "e.g., *******",
              },
            ].map(({ name, type, label, example }) => (
              <div key={name} className="relative">
                <label
                  htmlFor={name}
                  className="absolute left-3 -top-3 text-sm text-orange-500 bg-white dark:bg-gray-800 px-1 transition-all pointer-events-none"
                >
                  {label}
                </label>
                <input
                  required
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  placeholder={example}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:ring-2 focus:ring-orange-400 focus:placeholder-gray-500 peer"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 text-white text-xl rounded-md hover:bg-gradient-to-l transition-all duration-300 dark:from-orange-600 dark:via-orange-700 dark:to-orange-800"
              aria-label="Signup Button"
            >
              <div className="flex items-center justify-center gap-2">
                {auth.status === "pending" && (
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
                    ></path>
                  </svg>
                )}
                Signup
              </div>
            </button>
            {/* Already Have an Account? and Login Link */}
            <div className="flex justify-between items-center text-sm mt-4 w-[350px]">
              <span className="text-sm">Already Have an Account?</span>
              <br />
              <Link
                to="/Login"
                className="text-orange-400 dark:text-orange-500 font-semibold text-xs"
              >
                Login
              </Link>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden sm:block w-1/2 ml-6">
          <img
            src={require("./assets/Animated-music-gif.gif")}
            alt="Signup Illustration"
            className="w-full h-full object-cover rounded-lg dark:hidden"
          />
          <img
            src={require("./assets/Animated-music-gif-dark.gif")}
            alt="Signup Dark Mode Illustration"
            className="w-full h-full object-cover rounded-lg hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};
