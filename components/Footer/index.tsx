/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function Headers() {
  return (
    <footer className="border-primary border-t-[2px] px-6 py-14">
      <div className="container mx-auto grid max-w-7xl grid-cols-3 justify-items-center">
        <div>
          <p>&copy; 2024 Koolify. All rights reserved.</p>
          <a className="text-primaryLight" href="mailto:quochuy.dev@gmail.com">
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
  );
}
