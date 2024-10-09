import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { useAuth } from "../../../Custom-Hooks/authHooks";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState(new FormData());
  const { handleLogin, auth } = useAuth(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const newFormData = formData;
    newFormData.set(name, value);

    setFormData(newFormData);
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4 pt-20">
      <Card className="bg-gray-900 dark:bg-gray-200 flex items-center shadow-xl dark:shadow-pink-400 transition-all duration-700 w-full max-w-md">
        <Typography className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text mt-6">
          Login
        </Typography>

        <CardBody className="w-full">
          <form className="w-full space-y-4" onSubmit={handleLogin}>
            <Input
              label="Email"
              color="pink"
              className="w-full"
              name="email"
              onChange={handleInputChange}
            />
            <Input
              label="Password"
              color="pink"
              className="w-full"
              type="password"
              name="password"
              onChange={handleInputChange}
            />
            <div className="flex justify-center items-center gap-4">
              {auth.status === "pending" && <Spinner />}
              <Button
                type="submit"
                className="bg-gradient-to-r from-pink-300 via-purple-400 to-pink-500 w-full text-base md:text-lg"
              >
                Login
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center justify-center sm:justify-end mt-4 text-sm">
              <span>Don't Have an Account?</span>
              <Link to="/Signup" className="text-pink-400 font-semibold">
                Click here to Signup
              </Link>
            </div>

            <div className="w-full border-b-2 border-pink-400 my-4"></div>

            <Button className="bg-gray-300 shadow-xl text-gray-900 w-full sm:w-3/4 md:w-2/3 flex items-center justify-center gap-3 m-auto text-sm md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                className="w-6 h-6 md:w-8 md:h-8"
              ></svg>
              Login with Google
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
