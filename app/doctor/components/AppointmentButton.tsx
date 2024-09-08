"use client";
import React, { useState } from "react";
import AppointmentModal from "../modal/AppointmentModal";



interface AppointmentButtonProps {
  doctor_id: string; // Replace `any` with the appropriate type for the doctor prop if available
}

const AppointmentButton: React.FC<AppointmentButtonProps> = ({ doctor_id }) => {

  const [isShow, setShow] = useState<boolean>(false);
  const [selectDoctor, setSelectDoctor] = useState<object>(null);
  console.log("selectDoctor", selectDoctor);

  return (
    <div>
      <button
        className="mt-5 cursor-pointer outline-none focus:outline-none bg-[#007E85] h-fit text-[14px] font-semibold text-white rounded-md px-8 py-1.5 w-fit"
        onClick={async(e) => {
          // e.preventDefault();
          // e.stopPropagation();
          // if(!doctor_id){
          //   return
          // }
          // const data=await findAvailableTimeSlots(doctor_id?.toString());
          // await setSelectDoctor(data);
          // setShow(!isShow);
        }}
      >
        Book Appointment
      </button>
      <AppointmentModal open={isShow} setOpen={setShow} />
    </div>
  );
};

export default AppointmentButton;