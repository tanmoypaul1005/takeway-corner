"use client";
import React, { useState } from "react";
import CommonModal from "../../components/modal/ComonModal";
import CommonInput from "../../components/input/CommonInput";
import CommonDatePicker from "../../components/input/CommonDatePicker";
import Image from "next/image";
import { iCheck } from "../../../util/imageImports";

// Define the fetcher function
const fetcher = (url) => fetch(url).then((res) => res.json());

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

interface AppointmentModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectDoctor?: TimeSlot[];
  doctor_id?: string;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  open,
  setOpen,
  selectDoctor,
}) => {

  

  const [selectedIndex, setSelectedIndex] = useState(null);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    date: null,
    start: null,
    end: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setFormValues({
      ...formValues,
      date,
    });
  };

  return (
    <CommonModal
      setOpen={setOpen}
      open={open}
      content={
        <div className="">
          <div>
            <div className="text-3xl font-bold text-center text-white">
              Book Appointment
            </div>
            <div className="text-center text-white">
              Please enter your name to book an appointment
            </div>
          </div>
          <form className="flex flex-col my-5 gap-y-5">
            <div className="grid grid-cols-2 gap-x-4">
              <CommonInput
                placeHolder="Enter your Name"
                level="Name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
              />
              <CommonInput
                placeHolder="Enter your Email"
                level="Email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <CommonInput
                placeHolder="Enter your Phone"
                level="Phone"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              <CommonDatePicker
                // value={formValues.date}
                // onChange={handleDateChange}
              />
            </div>
          </form>

          <div className="mb-2 text-2xl font-bold text-center text-white">
            Available Time Slots
          </div>
          <div className="flex flex-wrap gap-3">
            {selectDoctor?.map((timeSlot: TimeSlot, index: number) => (
              <div
                onClick={() => {
                  if (!timeSlot.available) {
                    return;
                  }
                  setSelectedIndex(index);
                }}
                className={`py-2 rounded-md  px-2
                max-w-[135px] min-w-[135px]
                flex items-center justify-center gap-x-1 
                ${
                  timeSlot.available
                    ? `${
                        selectedIndex === index
                          ? "bg-green-400 text-white"
                          : "bg-white text-black cursor-pointer"
                      } `
                    : "bg-gray-200 cursor-not-allowed text-white "
                }`}
                key={index}
              >
                <div
                  className={`flex justify-center items-center  text-sm 
                  `}
                  style={{
                    pointerEvents: timeSlot.available ? "auto" : "none",
                  }}
                >
                  {timeSlot?.start} - {timeSlot?.end}
                </div>
                {selectedIndex === index && (
                  <Image
                    style={{
                      maxHeight: "20px",
                      maxWidth: "20px",
                      minWidth: "20px",
                      minHeight: "20px",
                    }}
                    src={iCheck}
                    alt=""
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default AppointmentModal;
