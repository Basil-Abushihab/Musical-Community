import React, { useContext } from "react";
import {
  DialogBody,
  DialogFooter,
  Button,
  Input,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { context } from "../../../sharedComponents/Context-provider/context-provider";
import { StripeComponent } from "../../../sharedComponents/stripeComponent/stripeComponent";
import { useConfirmPayment } from "../../../../Custom-Hooks/paymentHooks/confirmPayment";
import { useGetClient } from "../../../../Custom-Hooks/paymentHooks/getClientSecretHook";
export const PaymentSection = () => {
  const [activeStep, setActiveStep] = useContext(context).activeStep;
  const [isLastStep, setIsLastStep] = useContext(context).isLastStep;
  const [isFirstStep, setIsFirstStep] = useContext(context).isFirstStep;

  const paymentAmount = useSelector((state) => state.payment.amount);
  const { clientSecret } = useGetClient(paymentAmount);
  const [formData, setFormData] = React.useState(new FormData());
  const { handlePaymentSubmition, status } = useConfirmPayment(formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = new FormData();

    newFormData.set(name, value);
    setFormData(newFormData);
  };

  return (
    <>
      <DialogBody divider className="h-[40rem] overflow-auto">
        <form className="flex flex-col gap-4" onSubmit={handlePaymentSubmition}>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Shipping Information
          </Typography>
          <Input
            type="text"
            label="Address Line"
            name="addressLine"
            value={formData.addressLine}
            onChange={handleInputChange}
            size="lg"
          />
          <Input
            type="text"
            label="Street"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
            size="lg"
          />
          <div className="flex gap-4">
            <Input
              type="text"
              label="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              size="lg"
            />
            <Input
              type="text"
              label="Apartment Number"
              name="apartmentNumber"
              value={formData.apartmentNumber}
              onChange={handleInputChange}
              size="lg"
            />
          </div>

          <Typography variant="h6" color="blue-gray" className="mt-6 mb-2">
            Payment Information
          </Typography>
          {clientSecret ? <StripeComponent clientSecret={clientSecret} /> : ""}
          <div className="flex gap-5 w-full justify-center items-center">
            <Button className="w-full" type="submit" color="green">
              Complete Order
            </Button>
            {status === "pending" ? <Spinner></Spinner> : ""}
          </div>
        </form>
      </DialogBody>
    </>
  );
};
