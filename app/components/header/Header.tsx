import Image from "next/image";
import React, { useEffect, useState } from "react";
import { iLogo } from "../../../util/imageImports";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { useSession } from "next-auth/react";
import UserProfile from "./UserProfile";
import { FaCartPlus } from "react-icons/fa";
import { getCart } from "@app/action/cart";

const Header: React.FC = () => {
  
  const { data: session, status } = useSession();

  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      if (session?.user?.email) {
        try {
          const data = await getCart(session.user.email);
          setCartData(data);
          console.log("dataa", data);
        } catch (error) {
          
        } finally {
        }
      }
    };

    fetchCartData();
  }, [session]);

  console.log("cartData", cartData);

  return (
    <div className="py-2 shadow-md shadow-cyan-500/50">
      <div className="flex justify-between common-class">
        <Link className="outline-none" href="/">
          <Image className="outline-none" src={iLogo} alt="Logo" />
        </Link>
        <div className="flex gap-x-3">
          <div className="items-center justify-center hidden space-x-10 text-xl font-semibold md:flex">
            <div className="cursor-pointer whitespace-nowrap">Home</div>
            <div className="cursor-pointer whitespace-nowrap">Service</div>
            <div className="cursor-pointer whitespace-nowrap">Contact us</div>
            <div className="cursor-pointer whitespace-nowrap">Help</div>
            <div className="cursor-pointer whitespace-nowrap">Blogs</div>
            {session?.user ? (
              <>
                <UserProfile session={session} />
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  className="cursor-pointer whitespace-nowrap"
                >
                  Sign up
                </Link>
                <Link
                  href="/login"
                  className="cursor-pointer whitespace-nowrap"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
          <Link href="/cart" className="relative flex items-center justify-center">
            <FaCartPlus className="w-6 h-5" />
            <div className="absolute top-[8px] text-[12px] flex justify-center items-center right-[-8px] font-bold rounded-full w-4 h-4  bg-red-500">
              {cartData?.data?.length}
            </div>
          </Link>
        </div>
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
