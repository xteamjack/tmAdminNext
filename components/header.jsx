import { checkUser } from "@/lib/checkUser";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = () => {
  // To Fix: Do not think this the right place to check for loggedIn user in db
  //  find a suitable place to insert this code
  checkUser();

  return (
    <header>
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href={"/"}>DigiHire</Link>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
