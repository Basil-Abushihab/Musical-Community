import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  Spinner,
  Alert,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../Custom-Hooks/authHooks/authHooks";

export const Signup = () => {
  const [formData, setFormData] = useState(new FormData());
  const [open, setOpen] = useState(false);
  const { handleSignup, auth } = useAuth(formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const newFormData = formData;
    newFormData.set(name, value);

    setFormData(newFormData);
  };
  return (
    <div className="flex justify-center items-center w-full h-[100vh] pt-20">
      <Card className="bg-gray-900 dark:bg-gray-200 flex items-center shadow-xl dark:shadow-pink-400 transition-all duration-700 w-[30%]">
        <Typography className="text-[4rem] bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text ">
          Signup
        </Typography>

        <CardBody className="w-full">
          <form className="w-full" onSubmit={handleSignup}>
            <Input
              required
              label="username"
              size="lg"
              color="pink"
              className="w-[100%]"
              name="username"
              onChange={handleInputChange} // Handle input change for firstName
            />
            <br />
            <Input
              required
              size="lg"
              label="Phone Number"
              color="pink"
              className="w-[100%]"
              name="phone"
              onChange={handleInputChange} // Handle input change for phoneNumber
            />
            <br />
            <Input
              required
              label="Email"
              color="pink"
              className="w-[100%]"
              name="email"
              onChange={handleInputChange} // Handle input change for email
            />
            <br />
            <Input
              required
              label="Password"
              size="lg"
              color="pink"
              className="w-[100%] text-[1.5rem]"
              type="password"
              name="password"
              onChange={handleInputChange}
            />
            <br />
            <Input
              required
              label="Repeat-Password"
              size="lg"
              color="pink"
              className="w-[100%] text-[1.5rem]"
              type="password"
              name="repeatPassword"
              onChange={handleInputChange}
            />
            <br />
            <Button
              type="submit"
              className="bg-gradient-to-r from-pink-300 via-purple-400 to-pink-500 w-full text-[1.2rem] flex items-center justify-center gap-10"
            >
              {auth.status === "pending" ? <Spinner /> : ""}
              Signup
            </Button>

            <div className="flex gap-5 items-center justify-end mt-4">
              Already Have an Account?
              <Link
                to="/Login"
                className="text-pink-400 text-[1.2rem] font-semibold"
              >
                Click here to Login
              </Link>
            </div>

            <div className="w-full border-b-2 border-pink-400 mt-5"></div>
            <br />

            <Button className="bg-gray-300 shadow-xl text-gray-900 w-[50%] flex items-center gap-5 m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>{" "}
              Signup with Google
            </Button>
          </form>
        </CardBody>
      </Card>
      <Alert
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        An Error accord while signing up
      </Alert>
    </div>
  );
};
