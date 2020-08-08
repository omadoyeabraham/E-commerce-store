import React from "react";
import StripeCheckout from "react-stripe-checkout";

const handlePaymentSubmission = (data) => {
  console.log(data);
  alert("Payment Successful");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripePublicKey =
    "pk_test_51HDzRhLE3y3AC5cjTn0zIZixX13FXX7mn1u8Sm7AQokDo2nrbbASrmtaJAmkoCVpRh5B3Wz1LlCUmxPIWvVYyo3e00VM7D9alV";

  return (
    <StripeCheckout
      name="The Shop LTD"
      description={`Your total price is $${price}`}
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      ComponentClass="div"
      label="Pay Now"
      panelLabel="Buy"
      amount={priceForStripe}
      stripeKey={stripePublicKey}
      email="contact@test.com"
      token={handlePaymentSubmission}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
