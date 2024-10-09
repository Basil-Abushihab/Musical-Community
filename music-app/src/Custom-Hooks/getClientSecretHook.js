import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClientSecret } from "../Redux/Thunks/paymentThunks/getClientSecret";
export const useGetClient = (amount) => {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  useEffect(() => {
    dispatch(getClientSecret(amount));
  }, []);

  return payment;
};
