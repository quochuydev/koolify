/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Checkout from "@/components/Stripe/Checkout";

export default function Features() {
  return (
    <section className="flex flex-col items-center h-screen" id="pricing">
      <p className="text-secondary font-semibold text-xl">pricing</p>

      <h2 className="flex flex-col items-center text-5xl">
        <span>Save hours of repetitive code,</span>
        <span>ship fast, get profitable</span>
      </h2>

      <p className="mt-6 mb-14 text-sm">
        <span className="text-cyan">$100 off</span> for the first 3140 customers
        (10 left)
      </p>

      <div className="flex gap-10">
        <div className="rounded-xl border border-gray-500 p-14">
          <p className="text-xl font-bold">Starter</p>
          <p className="my-5 font-bold">
            <span className="text-2xl line-through">$49</span>
            <span className="text-6xl">$69</span>
            <span className="text-lg">USD</span>
          </p>
          <ul className="flex flex-col gap-4">
            <li>- NextJS boilerplate Components & animations</li>
            <li>- SEO & Blog</li>
            <li>- Mailgun emails</li>
            <li>- Stripe payments</li>
            <li>- MongoDB / Supabase</li>
            <li>- Google Oauth & Magic Links</li>
            <li>- Components & animations</li>
          </ul>

          <Checkout className="mt-5 w-full rounded-md bg-yellow-300 py-3 font-semibold" />

          <p className="text-center text-sm mt-2">
            Pay once. Build unlimited projects!
          </p>
        </div>
      </div>
    </section>
  );
}
