"use client";
import { usePathname } from "next/navigation";

import React from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";

const CustomLayout = (props) => {
    
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/login" || pathname === "/register" ? (
        <div className="">{props?.children}</div>
      ) : (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 bg-black ">
            <Header />
          </div>
          <div className="h-screen pt-[110px] overflow-y-auto">
            <div className="w-full common-class">{props?.children}</div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default CustomLayout;
