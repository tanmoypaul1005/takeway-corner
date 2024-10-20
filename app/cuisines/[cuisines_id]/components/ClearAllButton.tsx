"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ClearAllButton = () => {
  const router = useRouter();

  return (
    <div onClick={()=>{router.push("/")}} className="p-2 rounded-md cursor-pointer hover:bg-gray-500">
      Clear all
    </div>
  );
};

export default ClearAllButton;
