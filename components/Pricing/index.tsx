/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Checkout from "@/components/Stripe/Checkout";

export default function Pricing() {
  const prices = [
    {
      name: "Starter",
      currency: "$",
      originalPrice: 69,
      price: 49,
      features: [
        "NextJS boilerplate Components & animations",
        "SEO & Blog",
        "Mailgun emails",
        "Stripe payments",
        "MongoDB / Supabase",
        "Google Oauth & Magic Links",
        "Components & animations",
      ],
      priceId: "price_1PH0ZcLpywe3DIzEY5rlssaI",
    },
    {
      name: "Plus",
      currency: "$",
      originalPrice: 169,
      price: 149,
      features: ["All features of Starter", "ChatGPT support", "Blogs"],
      priceId: "price_1PH0ZcLpywe3DIzEY5rlssaI",
    },
  ];

  return (
    <section
      className="flex flex-col items-center py-8 bg-component-pricing bg-cover"
      id="pricing"
    >
      <p className="text-secondary font-semibold text-xl">pricing</p>

      <h2 className="flex flex-col items-center text-5xl font-bold">
        <span>Save hours of repetitive code,</span>
        <span>ship fast, get profitable</span>
      </h2>

      <p className="mt-6 mb-8 text-sm bg-white">
        <span className="text-cyan">$100 off</span> for the first 3140 customers
        (10 left)
      </p>

      <div className="grid grid-cols-2 gap-10">
        {prices.map((e) => (
          <div
            key={e.name}
            className="flex flex-col rounded-xl border-2 border-secondary p-8 bg-primaryDark text-white"
          >
            <p className="text-2xl font-bold">{e.name}</p>
            <p className="my-5 font-bold">
              <span className="text-2xl line-through">
                {e.currency}
                {e.originalPrice}
              </span>
              <span className="ml-2 text-6xl">
                {e.currency}
                {e.price}
              </span>
            </p>

            <ul className="flex flex-col gap-4 mb-auto">
              {e.features.map((f, i) => (
                <li key={i}>{`- ${f}`}</li>
              ))}
            </ul>

            <Checkout className="mt-5 w-full rounded-md bg-secondary py-3 font-semibold" />

            <p className="text-center text-sm mt-2">
              <span>Pay once. Build unlimited projects!</span>
            </p>
            <p className="text-center text-sm mt-2">
              use card: <code>4242 4242 4242 4242</code> for testing
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
