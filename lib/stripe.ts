import configuration from "@/configuration";
import Stripe from "stripe";

const stripe = new Stripe(configuration.stripe.secretKey);

export { stripe };
