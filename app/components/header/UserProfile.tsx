"use client"
import { Toastr } from "@util/utilityFunctions";
import Image from "next/image";
import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserProfile = ({ session }) => {

    const router=useRouter();

    const handleLogout = (e) => {
        e.preventDefault();
        e.stopPropagation();
        Toastr({ message: "Logout successful!", type: "success" });
        signOut({ callbackUrl: '/login' }); // Redirect to login page after logout
    };

  return (
    <div>
      <div 
      onClick={(e)=>{
        e.preventDefault();
        e.stopPropagation();
        router.push("/profile")
      }}
      className="cursor-pointer whitespace-nowrap">
        <div className="flex space-x-2">
          <Image
            width={30}
            height={30}
            src={session?.user.image}
            alt="Profile"
            className="rounded-full"
          />
          <div>{session?.user.name}</div>
          <button onClick={handleLogout}>
                <IoIosLogOut className='w-7 h-7'/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
