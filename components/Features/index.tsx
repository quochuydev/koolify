/* eslint-disable @next/next/no-img-element */

"use client";
import clsx from "clsx";
import React from "react";

export default function Features() {
  const [feature, setFeature] = React.useState("stripe");

  return (
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
          <button
            className="flex flex-col items-center"
            onClick={() => setFeature("stripe")}
          >
            <img src="/stripe.png" alt="stripe" className="h-[50px]" />
            <p
              className={clsx({
                "text-secondary": feature === "stripe",
              })}
            >
              Payments
            </p>
          </button>
          <button
            className="flex flex-col items-center"
            onClick={() => setFeature("mailgun")}
          >
            <img src="/mailgun.png" alt="mailgun" className="h-[50px]" />
            <p
              className={clsx({
                "text-secondary": feature === "mailgun",
              })}
            >
              Mail
            </p>
          </button>
        </div>
      </div>

      {feature === "stripe" && (
        <div className="py-16">
          <h3 className="font-bold text-lg">Payments</h3>

          <ul className="my-4">
            <li>- Create checkout sessions</li>
            <li>{`- Handle webhooks to update user's account`}</li>
            <li>- Tips to setup your account & reduce chargebacks</li>
            <li>- Time saved: 5 hours</li>
          </ul>

          <div className="flex items-center gap-2">
            <img src="/stripe.png" alt="stripe" className="h-[30px]" />
            <p>
              {"with "}
              <a
                href="https://stripe.com"
                className="underline"
                target="_blank"
              >
                Stripe
              </a>
            </p>
          </div>
        </div>
      )}

      {feature === "mailgun" && (
        <div className="py-16">
          <h3 className="font-bold text-lg">Mail</h3>

          <ul className="my-4">
            <li>- Create checkout sessions</li>
            <li>{`- Handle webhooks to update user's account`}</li>
          </ul>

          <div className="flex items-center gap-2">
            <img src="/mailgun.png" alt="mailgun" className="h-[30px]" />
            <p>
              {"with "}
              <a
                href="https://www.mailgun.com"
                className="underline"
                target="_blank"
              >
                Mailgun
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
