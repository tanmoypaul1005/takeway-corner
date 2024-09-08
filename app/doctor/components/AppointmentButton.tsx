"use client";
import React, { useState } from "react";
import AppointmentModal from "../modal/AppointmentModal";

interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

interface AppointmentButtonProps {
  availableTimeSlots: TimeSlot[];
}

const AppointmentButton: React.FC<AppointmentButtonProps> = ({ availableTimeSlots }) => {

  const [isShow, setShow] = useState<boolean>(false);
  const [selectDoctor, setSelectDoctor] = useState<TimeSlot[]>([]);
  console.log("selectDoctor", selectDoctor);

  return (
    <div>
      <button
        className="mt-5 cursor-pointer outline-none focus:outline-none bg-[#007E85] h-fit text-[14px] font-semibold text-white rounded-md px-8 py-1.5 w-fit"
        onClick={async(e) => {
          e.preventDefault();
          e.stopPropagation();
          if(!availableTimeSlots){
            return
          }
         
          await setSelectDoctor(availableTimeSlots);
          setShow(!isShow);
        }}
      >
        Book Appointment
      </button>
      <AppointmentModal selectDoctor={selectDoctor} open={isShow} setOpen={setShow} />
    </div>
  );
};

export default AppointmentButton;