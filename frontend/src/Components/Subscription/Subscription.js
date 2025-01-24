import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import React from "react";
import {useEffect, useState} from "react";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function Subscription() {
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
      fetch("http://localhost:3000/api/subscription/test-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({amount: 999})
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setClientSecret(data.client_secret)
      })
    }, []);
    const appearance = {
      theme: 'stripe'
    }
    const options = {
      clientSecret: clientSecret
    }

  return (
    clientSecret && (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
    )
  );
}
