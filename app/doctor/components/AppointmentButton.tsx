"use client";
import React, { useState } from "react";
import AppointmentModal from "../modal/AppointmentModal";

const AppointmentButton: React.FC = () => {
  const [isShow, setShow] = useState(false);

  return (
    <div>
      <button
        className="mt-5 cursor-pointer outline-none focus:outline-none bg-[#007E85] h-fit text-[14px] font-semibold text-white rounded-md px-8 py-1.5 w-fit"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShow(!isShow);
        }}
      >
        Book Appointment
      </button>
      <AppointmentModal open={isShow} setOpen={setShow} />
    </div>
  );
};

export default AppointmentButton;
