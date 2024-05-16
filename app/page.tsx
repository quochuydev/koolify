/* eslint-disable @next/next/no-img-element */
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
            <p className="py-14">
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
              <img src="/nextjs.png" alt="stripe" className="h-[60px]" />
            </div>

            <div className="flex gap-2 items-center">
              <img src="/stripe.png" alt="stripe" className="h-[60px]" />
              <div>
                <p className="text-3xl font-semibold">stripe</p>
                <p className="italic">checkout</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-2xl grid-cols-5">
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

        <section className="flex flex-col items-center py-14" id="pricing">
          <p className="text-secondary font-semibold text-xl">pricing</p>

          <h2 className="flex flex-col items-center text-5xl">
            <span>Save hours of repetitive code,</span>
            <span>ship fast, get profitable</span>
          </h2>

          <p className="mt-6 mb-14 text-sm">
            <span className="text-cyan">$100 off</span> for the first 3140
            customers (10 left)
          </p>

          <div className="flex gap-10">
            <div className="rounded-xl border border-gray-500 px-8 py-14">
              <p className="text-xl font-bold">Starter</p>
              <p className="py-5 font-bold">
                <span className="text-xl line-through">$169</span>
                <span className="text-4xl">$269</span>
                <span className="text-xs">USD</span>
              </p>
              <ul className="flex flex-col gap-2">
                <li>- NextJS boilerplate Components & animations</li>
                <li>- SEO & Blog</li>
                <li>- Mailgun emails</li>
                <li>- Stripe payments</li>
                <li>- MongoDB / Supabase</li>
                <li>- Google Oauth & Magic Links</li>
                <li>- Components & animations</li>
              </ul>

              <Checkout className="mt-5 w-full rounded-md bg-yellow-300 py-3 font-semibold" />

              <p className="text-center text-sm">
                Pay once. Build unlimited projects!
              </p>
            </div>

            <div className="rounded-xl border border-gray-500 px-8 py-14">
              <p className="text-xl font-bold">Plus</p>

              <p className="py-5 font-bold">
                <span className="text-xl line-through">$169</span>
                <span className="text-4xl">$269</span>
                <span className="text-xs">USD</span>
              </p>

              <ul className="flex flex-col gap-2">
                <li>- NextJS boilerplate Components & animations</li>
                <li>- SEO & Blog</li>
                <li>- Mailgun emails</li>
                <li>- Stripe payments</li>
                <li>- MongoDB / Supabase</li>
                <li>- Google Oauth & Magic Links</li>
                <li>- Components & animations</li>
              </ul>

              <Checkout className="mt-5 w-full rounded-md bg-yellow-300 py-3 font-semibold" />

              <p className="text-center text-sm">
                Pay once. Build unlimited projects!
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="flex flex-col m-auto py-14 max-w-3xl">
          <div className="text-center">
            <p className="text-secondary font-semibold text-xl">features</p>

            <h2 className="flex flex-col items-center text-5xl">
              Supercharge your app instantly, launch faster, make $
            </h2>

            <p className="mt-6 mb-14 text-lg">
              Login users, process payments and send emails at lightspeed. Spend
              your time building your startup, not integrating APIs. ShipFast
              provides you with the boilerplate code you need to launch, FAST
            </p>

            <div className="flex gap-40 ">
              <button className="flex flex-col items-center">
                <img src="/stripe.png" alt="stripe" className="h-[50px]" />
                <p>Payments</p>
              </button>
            </div>
          </div>

          <div className="py-16">
            <h3 className="font-bold text-lg">Payments</h3>

            <ul className="my-4">
              <li>- Create checkout sessions</li>
              <li>- Handle webhooks to update user's account</li>
              <li>- Tips to setup your account & reduce chargebacks</li>
              <li>- Time saved: 5 hours</li>
            </ul>

            <div className="flex items-center gap-2">
              <img src="/stripe.png" alt="stripe" className="h-[30px]" />
              <p>
                with{" "}
                <a
                  href="https://stripe.com/"
                  className="underline"
                  target="_blank"
                >
                  Stripe
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center py-14">
          <h2 className="text-5xl">Boost your app, launch, earn</h2>
          <p className="my-6">
            Don't waste time on Stripe subscriptions or designing a pricing
            section...
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
