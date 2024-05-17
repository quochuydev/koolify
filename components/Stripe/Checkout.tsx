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
    <button
      type="submit"
      className={className}
      onClick={async () => {
        const result: any = await fetch("/api/stripe/checkout", {
          method: "post",
          body: JSON.stringify({
            priceId: "price_1PH0ZcLpywe3DIzEY5rlssaI",
          }),
        })
          .then((e) => e.json())
          .catch(console.log);

        if (result?.url) window.location.replace(result?.url);
      }}
    >
      Get koolify
    </button>
  );
}
