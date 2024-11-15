import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginAdmin } from "../../redux/thunkFunctions/authThunk";
import { useNavigate } from "react-router-dom";
export const useAdminAuth = (adminData) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admin = useSelector((state) => state.admin);
  useEffect(() => {
    if (admin.status === "fulfilled") {
      navigate("/Home");
    }
  }, [admin.status, navigate]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(adminData));
  };

  return { loginHandler, admin: admin };
};
