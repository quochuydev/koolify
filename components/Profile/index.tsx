/* eslint-disable @next/next/no-img-element */
"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function ProfileWrapper() {
  return (
    <SessionProvider basePath={"/auth"}>
      <Profile />
    </SessionProvider>
  );
}

function Profile() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="flex gap-2">
        <p>{session.user.name}</p>
        <a onClick={() => signOut()} className="hover:underline cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <a onClick={() => signIn()} className="hover:underline cursor-pointer">
      Signin
    </a>
  );
}
