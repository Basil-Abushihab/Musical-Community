import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClientSecret } from "../../Redux/Thunks/paymentThunks/getClientSecret";
import { context } from "../../Views/sharedComponents/Context-provider/context-provider";
import { useContext } from "react";
let alreadyCalled = false;
export const useGetClient = (amount, elements) => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useContext(context).activeStep;
  const payment = useSelector((state) => state.payment);
  useEffect(() => {
    if (payment.stage === "payment") {
      if (alreadyCalled) return;
      else {
        setActiveStep(activeStep + 1);
        alreadyCalled = true;
      }
    }
  }, [payment]);

  const handleGetClientSecret = () => {
    dispatch(getClientSecret(amount));
  };

  return { clientSecret: payment.clientSecret, handleGetClientSecret };
};
