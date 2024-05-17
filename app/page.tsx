/* eslint-disable @next/next/no-img-element */
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Checkout from "@/components/Stripe/Checkout";
import React from "react";

export default function Page() {
  return (
    <div>
      <header className="px-6 py-4 ">
        <div className="container mx-auto flex max-w-7xl items-center">
          <h1 className="mr-24 text-2xl font-bold">koolify</h1>

          <nav>
            <ul className="flex gap-14">
              <li>
                <a href="#pricing" className="hover:underline">
                  {"Pricing"}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:underline">
                  {"Features"}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl">
        <section className="grid grid-cols-2 gap-4 py-10">
          <div className="flex flex-col items-start justify-center">
            <h1 className="flex flex-col text-6xl">
              <span>Ship your startup</span>
              <span>in days,not weeks</span>
            </h1>
            <p className="my-14">
              The NextJS boilerplate with all you need to build your SaaS, AI
              tool, or any other web app and make your first $ online fast.
            </p>

            <Checkout className="rounded-md bg-yellow-300 px-20 py-3 font-semibold" />

            <p className="mt-4 text-sm">
              <span className="text-cyan">$100 off</span> for the first 3140
              customers (10 left)
            </p>
          </div>

          <div className="grid grid-cols-2 p-10">
            <div className="flex items-center">
              <img src="/nextjs.png" alt="nextjs" className="h-[60px]" />
            </div>

            <div className="flex gap-2 items-center">
              <img src="/stripe.png" alt="stripe" className="h-[60px]" />
              <div>
                <p className="text-3xl font-semibold">stripe</p>
                <p className="italic">checkout</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <img src="/tailwind.png" alt="tailwind" className="h-[60px]" />
              <div>
                <p className="text-3xl font-semibold">tailwind</p>
                <p className="italic">components</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <img src="/next-auth.png" alt="tailwind" className="h-[60px]" />
              <div>
                <p className="text-3xl font-semibold">next-auth</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-2xl grid-cols-5 mb-14 ">
          <p>Featured on</p>
          <a href="#" className="hover:text-gray-300">
            {"Hacker news"}
          </a>
          <a href="#" className="hover:text-gray-300">
            {"Product hunt"}
          </a>
          <a href="#" className="hover:text-gray-300">
            {"Twitter"}
          </a>
          <a href="#" className="hover:text-gray-300">
            {"Reddit"}
          </a>
        </section>

        <Pricing />

        <Features />

        <section className="flex flex-col items-center py-14">
          <h2 className="text-5xl">Boost your app, launch, earn</h2>

          <p className="my-6">
            {`Don't waste time on Stripe subscriptions or designing a pricing section...`}
          </p>

          <Checkout className="rounded-md bg-yellow-300 px-20 py-3 font-semibold" />
        </section>
      </main>

      <footer className="border-primaryLight border-t-[1px] px-6 py-14">
        <div className="container mx-auto grid max-w-7xl grid-cols-3">
          <div className="">
            <p>&copy; 2024 Koolify. All rights reserved.</p>
            <a
              className="text-primaryLight"
              href="mailto:quochuy.dev@gmail.com"
            >
              {`Email: quochuy.dev@gmail.com`}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-primaryDark">LINKS</p>
            <a href="#pricing" className="hover:underline text-sm">
              {"Pricing"}
            </a>
            <a href="#" className="hover:underline text-sm">
              {"Documentation"}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-primaryDark">LEGAL</p>
            <a href="/tos" className="hover:underline text-sm">
              {"Terms of services"}
            </a>
            <a href="/privacy-policy" className="hover:underline text-sm">
              {"Privacy policy"}
            </a>
            <a href="/license" className="hover:underline text-sm">
              {"License"}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
