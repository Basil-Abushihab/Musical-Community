import {
  Elements,
  PaymentElement,
  AddressElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useGetClient } from "../../../Custom-Hooks/getClientSecretHook";
import { Currency } from "lucide-react";

const stripePromise = loadStripe(
  "pk_test_51Q77Qq2Ml7AgTWt42oVvIbK8ChNQPuBuD1s9WKaGFLpwATIA9zSqsQGVeJQTqp671an7PUiDkf5LcFNAdAPMZ9pm00WXOPDTFA"
);

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
};

export const StripeComponent = ({ amount }) => {
  const [loading, setLoading] = useState(false);
  const clientSecret = useGetClient(100);
  console.log(clientSecret);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  const options = {};
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret:
          "pi_3Q7Xve2Ml7AgTWt40AII8vZY_secret_O7WypvfgPqPNssJUraoGdTdQl",
      }}
    >
      <div className="pt-96">
        <form action=""></form>
        <PaymentElement />
      </div>
    </Elements>
  );
};
