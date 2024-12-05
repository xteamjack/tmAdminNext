// import { logoutAccount } from '@/lib/actions/user.actions'
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    // ToDo - Set the logout process
    const loggedOut = false; //await logoutAccount();

    if (loggedOut) router.push("/sign-in");
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        {/* <p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p> */}
        <SignedIn>
          <UserButton className=" bg-blue-600" />
        </SignedIn>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <SignOutButton>
          <Image src="icons/logout.svg" fill alt="jsm" />
        </SignOutButton>
      </div>
    </footer>
  );
};

export default Footer;
