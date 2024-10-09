import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../Redux/Thunks/authThunks/authThunk";
import { useNavigate, Navigate } from "react-router-dom";
const useAuth = (formData) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    if (auth.status === "fulfilled") {
      const authJSON = JSON.stringify({
        username: formData.get("username"),
        isLoggedIn: true,
      });
      sessionStorage.setItem("auth", authJSON);
      navigate("/");
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    if (auth.status === "fulfilled") {
      console.log("hello");
      const authJSON = JSON.stringify({
        username: formData.get("username"),
        isLoggedIn: true,
      });
      sessionStorage.setItem("auth", authJSON);
      navigate("/");
    }
  };

  return { auth, handleLogin, handleSignup };
};

export { useAuth };
