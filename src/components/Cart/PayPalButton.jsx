import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";


const PayPalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AVrssN7XQ3aediwJECJu0kZCR83mv3lsNu9WItOnwaPXmIJ--18uW1aRtHjGwyWGRBTycO7MUxS14L3t",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }], // Replace with the total price of the cart
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
