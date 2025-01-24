import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import React, { useMemo } from "react";
import SubscriptionService from "./SubscriptionService"

// Load Stripe with the public key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PROMISE);

export default async function Subscription() {
    const clientSecret = await SubscriptionService.testService()
    console.log(clientSecret)
    const options = useMemo(() => ({
        clientSecret: process.env.REACT_APP_CLIENT_SECRET
      }), []);

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}
