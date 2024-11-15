import { Elements, PaymentElement, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Q77Qq2Ml7AgTWt42oVvIbK8ChNQPuBuD1s9WKaGFLpwATIA9zSqsQGVeJQTqp671an7PUiDkf5LcFNAdAPMZ9pm00WXOPDTFA"
);

export const StripeComponent = ({ clientSecret }) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret: clientSecret,
      }}
    >
      <PaymentElement />
    </Elements>
  );
};
