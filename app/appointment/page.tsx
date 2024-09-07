
import Image from "next/image";
import { iAppointmentBanner } from "../../util/imageImports";
import AppointmentForm from "./AppointmentForm";
import { findAvailableTimeSlots } from "../action/appointment";

const Appointment: React.FC =async () => {
  const data=await findAvailableTimeSlots("66dbcc299e81670a77c8b0e6");
  console.log("data",data);
  return (
    <>
      <div className="relative ">
        {/* Background Image */}
        <Image
          src={iAppointmentBanner}
          alt="Appointment"
          className="object-cover w-full h-full"
        />

        {/* Text Overlay */}
        <div className="absolute text-white top-1/4 left-5 md:left-10 lg:left-20">
          <h1 className="text-xl font-bold sm:text-4xl md:text-5xl">
            Meet the Best
          </h1>
          <h2 className="text-xl font-bold sm:text-4xl md:text-5xl">
            Hospital
          </h2>
          <p className="mt-4 text-sm sm:text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex mt-6 space-x-4">
            <button className="px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 sm:px-6 sm:py-3 sm:text-base">
              Get Quote Now
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-transparent border border-white rounded-lg hover:bg-white hover:text-black sm:px-6 sm:py-3 sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="absolute hidden transform -translate-y-1/2 md:flex top-1/2 right-5 md:right-10 lg:right-20">
          <AppointmentForm />
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <AppointmentForm />
      </div>
    </>
  );
};

export default Appointment;
