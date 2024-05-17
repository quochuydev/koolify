/* eslint-disable @next/next/no-img-element */

"use client";
import clsx from "clsx";
import React from "react";

export default function Features() {
  const [feature, setFeature] = React.useState("stripe");

  const features = [
    {
      key: "stripe",
      name: "Stripe",
      image: "/stripe.png",
      details: [
        "Create checkout sessions",
        "Handle webhooks to update user's account",
        "Tips to setup your account & reduce chargebacks",
      ],
      link: "https://stripe.com",
    },
    {
      key: "next-auth",
      name: "next-auth",
      image: "/next-auth.png",
      details: [
        "Security authentication",
        "Multiple authenticate providers (Zitadel, Google)",
        "Protect private router",
      ],
      link: "https://next-auth.js.org/",
    },
    {
      key: "more",
      name: "More",
      image: "/next-auth.png",
      details: [
        "Tips to write copy that sells",
        "Discord community to stay accountable",
        "Crisp customer support (auto show/hide, variables...)",
        "Collect emails for a waitlist if your product isn't ready",
        "Prompts to generate terms & privacy policy with ChatGPT",
        "Copy paste code templates",
        "Dead simple tutorials",
      ],
      link: "https://next-auth.js.org/",
    },
  ];

  return (
    <section
      id="features"
      className="flex flex-col m-auto py-14 bg-black text-white"
    >
      <div className="text-center m-auto container max-w-3xl">
        <p className="text-secondary font-semibold text-xl">features</p>

        <h2 className="flex flex-col items-center text-5xl">
          Supercharge your app instantly, launch faster, make $
        </h2>

        <p className="mt-6 mb-14 text-lg">
          Login users, process payments and send emails at lightspeed. Spend
          your time building your startup, not integrating APIs. ShipFast
          provides you with the boilerplate code you need to launch, FAST
        </p>

        <div className="flex justify-between">
          {features.map((e) => (
            <button
              key={e.key}
              className="flex flex-col items-center gap-2"
              onClick={() => setFeature(e.key)}
            >
              <img src={e.image} alt={e.name} className="h-[50px]" />
              <p
                className={clsx({
                  "text-secondary": feature === e.key,
                })}
              >
                {e.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      {features
        .filter((e) => e.key === feature)
        .map((feat) => (
          <div
            key={feat.key}
            className="pt-14 mx-auto container max-w-3xl min-h-[250px]"
          >
            <h3 className="font-bold text-lg">{feat.name}</h3>

            <ul className="my-4">
              {feat.details.map((e) => (
                <li key={e}>{`- ${e}`}</li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <img src={feat.image} alt={feat.name} className="h-[30px]" />
              <p>
                {"with "}
                <a href={feat.link} className="underline" target="_blank">
                  {feat.name}
                </a>
              </p>
            </div>
          </div>
        ))}
    </section>
  );
}
