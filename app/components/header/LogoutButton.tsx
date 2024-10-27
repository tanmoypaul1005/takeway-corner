"use client"
import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "next-auth/react";
import { Toastr } from '@util/utilityFunctions';

const LogoutButton = () => {
    const handleLogout = () => {
        Toastr({ message: "Logout successful!", type: "success" });
        signOut({ callbackUrl: '/auth/login' }); // Redirect to login page after logout
    };

    return (
        <div>
            <button onClick={handleLogout}>
                <IoIosLogOut className='w-7 h-7'/>
            </button>
        </div>
    )
}

export default LogoutButton