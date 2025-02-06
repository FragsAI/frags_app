import stripe from '../../config/stripe'
import { clerkClient } from '@clerk/express';
import createSupabase from "../../config/supabase";

export const getOrCreateStripeUser = async (auth) => {
    const user = await clerkClient.users.getUser(auth.userId)
    let customer = await stripe.customers.search({
        query: `email:'${user.primaryEmailAddress.emailAddress}' metadata['clerk_id']:'${user.id}'`
    })
    if (customer.data.length === 0) {
        customer = await stripe.customers.create({
            name: user.fullName,
            email: user.primaryEmailAddress.emailAddress,
            metadata: {
               clerk_id: user.id 
            }
        })

        const supabase = await createSupabase(auth.sessionId)
        await supabase
            .from('users')
            .update({stripe_id: customer.id})
            .eq("clerk_user_id", user.id)

    } else customer = customer.data[0]
    return customer
}

export const createSubscription = async (customer, price) => {
    // const subscription = await stripe.subscriptionSchedules.create({
    //     customer: customer.id,
    //     start_date: currentDate,
    //     end_behavior: 'release',
    //     phases: [
    //         {
    //             items: [
    //                 {
    //                     price,
    //                     quantity: 1
    //                 }
    //             ],
    //             iterations: 1
    //         }
    //     ],
    //     expand: ["subscription.latest_invoice.payment_intent"]
    // })
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{
            price
        }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent']
    })
    return {subscriptionId: subscription.id, clientSecret: subscription.latest_invoice.payment_intent.client_secret}

}