import Image from "next/image";
import React from "react";
import { iLogo } from "../../../util/imageImports";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="">
      <div className="flex justify-between common-class">

      <Link href="/"><Image src={iLogo} alt="Logo" /></Link>

      <div className="items-center justify-center hidden space-x-10 text-xl font-semibold md:flex">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">Service</div>
        <div className="cursor-pointer">Contact us</div>
        <div className="cursor-pointer">Help</div>
        <div className="cursor-pointer">Blogs</div>
        <div className="cursor-pointer">Sign up</div>
        <div className="cursor-pointer">Sign in</div>
      </div>
      <div className="flex md:hidden">
        <MobileNav />
      </div>
      </div>
    </div>
  );
};

export default Header;
