import Stripe from "stripe";

export const stripe = new Stripe(
    Deno.env.get("STRIP_SECRET") ?? "",
    {
        apiVersion: "2022-11-15",
        httpClient: Stripe.createFetchHttpClient(),
    },
);