import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  registerUser,
} from "../../Redux/Thunks/authThunks/authThunk";
import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
const useAuth = (formData) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.status === "fulfilled") {
      const authJSON = JSON.stringify({
        username: auth.username,
        isLoggedIn: true,
      });
      sessionStorage.setItem("auth", authJSON);
      navigate("/");
    }
    return;
  }, [auth.status, formData, navigate, auth.username]);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };
  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return { auth, handleLogin, handleSignup };
};

export { useAuth };
