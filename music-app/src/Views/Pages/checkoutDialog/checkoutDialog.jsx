import React, { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Button,
  Stepper,
  Step,
} from "@material-tailwind/react";
import {
  BiCart,
  BiMinus,
  BiPlus,
  BiNote,
  BiCheck,
  BiMusic,
} from "react-icons/bi";
import { AiFillPayCircle } from "react-icons/ai";
import { CheckoutSection } from "./checkoutSections/checkoutSection";
import { PaymentSection } from "./checkoutSections/paymentSection";
import { useContext } from "react";
import { context } from "../../sharedComponents/Context-provider/context-provider";
import { useCart } from "../../../Custom-Hooks/cartHooks/cartHooks";
import { PaymentCompleteSection } from "./checkoutSections/paymentComplete";
export const CheckoutDialog = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = React.useContext(context).activeStep;
  const [isLastStep, setIsLastStep] = React.useContext(context).isLastStep;
  const [isFirstStep, setIsFirstStep] = React.useContext(context).isFirstStep;
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const { cart } = useCart();

  const totalItems = cart.cart.reduce((sum, item) => {
    if (!item) {
      console.log(item);
      return 0;
    }
    return item.quantity && sum + item.quantity;
  }, 0);

  const handleOpen = () => {
    setOpen(!open);
    setIsLastStep(false);
    setIsFirstStep(true);
    setActiveStep(0);
  };

  return (
    <>
      <Button onClick={handleOpen} className="flex items-center gap-2">
        <BiCart className="h-5 w-5" />
        <span>{totalItems}</span>
      </Button>
      <Dialog open={open} handler={handleOpen} size="xl">
        <DialogHeader>
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step>
              <BiNote className="text-pink-300"></BiNote>
            </Step>
            <Step>
              <AiFillPayCircle></AiFillPayCircle>
            </Step>
            <Step>
              <BiMusic></BiMusic>
            </Step>
          </Stepper>
        </DialogHeader>
        {activeStep === 0 ? (
          <CheckoutSection />
        ) : activeStep === 1 ? (
          <PaymentSection />
        ) : (
          <PaymentCompleteSection />
        )}
      </Dialog>
    </>
  );
};
