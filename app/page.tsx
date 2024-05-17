/* eslint-disable @next/next/no-img-element */
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
import Pricing from "@/components/Pricing";
import Checkout from "@/components/Stripe/Checkout";

export default async function Page() {
  return (
    <div>
      <Headers />

      <main>
        <section className="grid grid-cols-2 gap-4 py-10 mx-auto container max-w-7xl">
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
              <img src="/tailwind.png" alt="tailwind" className="h-[60px]" />
              <div>
                <p className="text-3xl font-semibold">tailwind</p>
                <p className="italic">components</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <img src="/stripe.png" alt="stripe" className="h-[60px]" />
              <div>
                <p className="text-3xl font-semibold">stripe</p>
                <p className="italic">checkout</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <img src="/next-auth.png" alt="tailwind" className="h-[60px]" />
              <div>
                <p className="text-3xl font-semibold">next-auth</p>
                <p className="italic">authenticate with zitadel</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black text-white py-4">
          <div className="mx-auto grid max-w-4xl grid-cols-4 items-center bg-black text-white">
            <a
              href="#"
              className="hover:text-gray-300 flex items-center gap-2 justify-center"
            >
              <img
                src="/hackernews.png"
                alt="hacker news"
                className="h-[40px]"
              />
              {"Hacker news"}
            </a>
            <a
              href="#"
              className="hover:text-gray-300 flex items-center gap-2 justify-center"
            >
              <img
                src="/product-hunt.png"
                alt="Product hunt"
                className="h-[40px]"
              />
              {"Product hunt"}
            </a>
            <a
              href="#"
              className="hover:text-gray-300 flex items-center gap-2 justify-center"
            >
              <img src="/twitter.png" alt="twitter" className="h-[40px]" />
              {"Twitter"}
            </a>
            <a
              href="#"
              className="hover:text-gray-300 flex items-center gap-2 justify-center"
            >
              <img src="/reddit.png" alt="reddit" className="h-[40px]" />
              {"Reddit"}
            </a>
          </div>
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

      <Footer />
    </div>
  );
}
