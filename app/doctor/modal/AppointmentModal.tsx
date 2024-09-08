"use client";
import React, { useState } from "react";
import CommonModal from "../../components/modal/ComonModal";
import CommonInput from "../../components/input/CommonInput";
import CommonDatePicker from "../../components/input/CommonDatePicker";

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

interface AppointmentModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectDoctor?: TimeSlot[];
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  open,
  setOpen,
  selectDoctor,
}) => {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    date: null,
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
          <>
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
                value={formValues.date}
                onChange={handleDateChange}
              />
            </div>
          </form>
    
          <div className="mb-2 text-2xl font-bold text-center text-white">
            Available Time Slots
          </div>
          <div className="flex flex-wrap gap-3">
            {selectDoctor?.map((timeSlot: TimeSlot, index: number) => (
              <div
                key={index}
                className={`flex max-w-[120px] min-w-[120px] justify-center items-center py-2 text-sm text-white rounded-md ${
                  timeSlot.available
                    ? "bg-cPrimary"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                style={{
                  pointerEvents: timeSlot.available ? "auto" : "none",
                }}
              >
                {timeSlot.start} - {timeSlot.end}
              </div>
            ))}
          </div>
        </>
        }
      />
  );
};

export default AppointmentModal;



