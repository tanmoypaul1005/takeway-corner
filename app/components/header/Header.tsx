import Image from "next/image";
import React from "react";
import { iLogo } from "../../../util/imageImports";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";

const Header: React.FC = () => {
  const { data: session, status } = useSession();
  console.log("session", session);
  return (
    <div className="py-2 shadow-md shadow-cyan-500/50">
      <div className="flex justify-between common-class">
        <Link href="/">
          <Image src={iLogo} alt="Logo" />
        </Link>

        <div className="items-center justify-center hidden space-x-10 text-xl font-semibold md:flex">
          <div className="cursor-pointer whitespace-nowrap">Home</div>
          <div className="cursor-pointer whitespace-nowrap">Service</div>
          <div className="cursor-pointer whitespace-nowrap">Contact us</div>
          <div className="cursor-pointer whitespace-nowrap">Help</div>
          <div className="cursor-pointer whitespace-nowrap">Blogs</div>
          {session?.user ? (
            <>
<UserProfile session={session}/>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="cursor-pointer whitespace-nowrap"
              >
                Sign up
              </Link>
              <Link href="/login" className="cursor-pointer whitespace-nowrap">
                Sign in
              </Link>
            </>
          )}
        </div>
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
