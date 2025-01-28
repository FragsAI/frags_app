import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import { useAuth } from '@clerk/clerk-react';
import * as subscriptionService from './SubscriptionService';
import React from "react";
import {useEffect, useState} from "react";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function Subscription() {
    const [clientSecret, setClientSecret] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { getToken } = useAuth();
    useEffect(() => {
      const fetchStripePayment = async () => {
        const token = await getToken()
        const response = await subscriptionService.testService({ amount: 1000 }, token);
        setIsLoading(false)
        const data = await response.json();
        setClientSecret(data.client_secret)
      }
      fetchStripePayment()
    }, []);
    const appearance = {
      theme: 'stripe'
    }
    const options = {
      clientSecret: clientSecret,
      appearance
    }

    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
      clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
        )
    );
}
