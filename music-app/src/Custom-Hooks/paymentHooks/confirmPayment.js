import { useDispatch, useSelector } from "react-redux";
import { confirmPayment } from "../../Redux/Thunks/paymentThunks/confirmPaymentThunk";
import { context } from "../../Views/sharedComponents/Context-provider/context-provider";
import { useContext, useEffect } from "react";

let isAlreadyCalled = false;
export const useConfirmPayment = (billingInformation) => {
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = useContext(context).activeStep;
  const payment = useSelector((state) => state.payment);
  useEffect(() => {
    if (payment.stage === "completed") {
      if (isAlreadyCalled) return;
      else {
        setActiveStep(activeStep + 1);
        isAlreadyCalled = true;
      }
    }
  }, [payment.stage, setActiveStep]);
  const handlePaymentSubmition = (e) => {
    e.preventDefault();
    dispatch(confirmPayment(billingInformation));
  };
  return {
    status: payment.status,
    order: payment.order,
    handlePaymentSubmition,
  };
};
