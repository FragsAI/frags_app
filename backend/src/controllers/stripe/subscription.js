import stripe from "../../config/stripe";
import express from 'express';
import supabase from "../../config/supabase";
import { clerkMiddleware, requireAuth, clerkClient } from "@clerk/express";
const subscriptionRouter = express.Router();

subscriptionRouter.post('/test-payment-intent', async (req, res) => {
    const amount = req.body.amount;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });
        res.status(200).send(paymentIntent);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

subscriptionRouter.use(clerkMiddleware());
subscriptionRouter.use(requireAuth());

subscriptionRouter.post('/', async (req, res) => {
    const user = await clerkClient.users.getUser(req.body.user_id);
    const customer = await stripe.customers.search({
        query: `email:${user.primaryEmailAddress.emailAddress}`
    }).data[0] || await stripe.customers.create({
        email: user.primaryEmailAddress.emailAddress,
        name: `${user.firstName} ${user.lastName}`,
    })

    const price = await stripe.prices.retrieve(req.body);
    
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: req.body }]
    });
    return res.json(subscription);
});

subscriptionRouter.get("/test", (req, res) => {
    res.send("Hello from subscription");
});

export default subscriptionRouter