import React, { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentAmount } from "../../../../Redux/Slices/paymentSlice/paymentSlice";
import { BiCart, BiMinus, BiPlus } from "react-icons/bi";
import { useCart } from "../../../../Custom-Hooks/cartHooks/cartHooks";
import { context } from "../../../sharedComponents/Context-provider/context-provider";
import { useGetClient } from "../../../../Custom-Hooks/paymentHooks/getClientSecretHook";
export const CheckoutSection = () => {
  const [activeStep, setActiveStep] = React.useContext(context).activeStep;
  const [isLastStep, setIsLastStep] = React.useContext(context).isLastStep;
  const [isFirstStep, setIsFirstStep] = React.useContext(context).isFirstStep;
  const payment = useSelector((state) => state.payment);
  const { handleGetClientSecret } = useGetClient(payment.amount);
  const dispatch = useDispatch();

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const {
    cart,
    decreaseItemQuantityHandler,
    increaseItemQuantityHandler,
    removeItemFromCartHandler,
  } = useCart();

  const calculateSubtotal = () => {
    if (!cart.cart || cart.cart.length === 0) {
      return 0;
    }
    return cart.cart.reduce((sum, item) => {
      if (!item || !item.price || !item.quantity) return sum;
      const subtotal = sum + item.price * item.quantity;
      dispatch(setPaymentAmount(subtotal));
      return subtotal;
    }, 0);
  };

  const totalItems = cart.cart.reduce((sum, item) => {
    if (!item || !item.quantity) return sum;
    return sum + item.quantity;
  }, 0);

  return (
    <>
      <DialogBody divider className="h-[40rem] overflow-auto">
        {cart.cart && cart.cart.length > 0 ? (
          cart.cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-4 border-b"
            >
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  size="sm"
                  color="light-blue"
                  onClick={() => decreaseItemQuantityHandler(item)}
                >
                  <BiMinus />
                </Button>
                <span>{item.quantity}</span>
                <Button
                  size="sm"
                  color="light-blue"
                  onClick={() => increaseItemQuantityHandler(item)}
                >
                  <BiPlus />
                </Button>
              </div>
              <div className="w-24 text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </DialogBody>
      <DialogFooter className="flex-col items-stretch gap-4">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items):</span>
          <span className="font-semibold">
            ${calculateSubtotal().toFixed(2)}
          </span>
        </div>
        <Button
          color="green"
          fullWidth
          onClick={() => {
            handleGetClientSecret();
            if (payment.stage === "payment") {
              setActiveStep(activeStep + 1);
            }
          }}
        >
          Proceed to Checkout
        </Button>
      </DialogFooter>
    </>
  );
};
