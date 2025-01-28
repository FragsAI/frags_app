import stripe from "../../config/stripe";
import express from 'express';
import {requireAuth, clerkClient} from "@clerk/express";
const subscriptionRouter = express.Router()

subscriptionRouter.post('/test-payment-intent', async (req, res, next) => {
    const amount = req.body.amount;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });
        res.status(200).send(paymentIntent);
    } catch (error) {
        next(error);
    }
});

subscriptionRouter.post('/', async (req, res) => {
    try {
        const userId = req.auth.userId;

        if (!userId) {
            return res.status(401).send("User is not authorized");
        }

        const user = await clerkClient.users.getUser(userId);
        const customer = await stripe.customers.search({
            query: `email:${user.primaryEmailAddress.emailAddress}`
        }).data[0] || await stripe.customers.create({
            email: user.primaryEmailAddress.emailAddress,
            name: `${user.firstName} ${user.lastName}`,
        });

        const price = await stripe.prices.retrieve("price_1Qkq1jCMcuLX2RyD9ReWHWNm");
        return res.json({ customer, price });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

subscriptionRouter.get("/", (req, res) => {
    res.json({ message: "Hello from subscription" });
});

export default subscriptionRouter;