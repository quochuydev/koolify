/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function Headers() {
  return (
    <header className="p-6">
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
  );
}
