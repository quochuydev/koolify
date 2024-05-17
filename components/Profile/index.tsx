/* eslint-disable @next/next/no-img-element */
"use client";
import { SessionProvider, useSession, signOut, signIn } from "next-auth/react";

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
      <div className="flex gap-4">
        <span>{session.user.name}</span>

        <a onClick={() => signOut()} className="hover:underline cursor-pointer">
          Signout
        </a>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <p>My profile</p>
      <a onClick={() => signIn()} className="hover:underline cursor-pointer">
        Signin
      </a>
    </div>
  );
}
