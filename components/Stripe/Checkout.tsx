"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
}

export default function Page({ className }: { className: string }) {
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <form action="/api/stripe/checkout_sessions" method="POST">
      <button type="submit" className={className}>
        Get koolify
      </button>
    </form>
  );
}
