"use client";
import Image from "next/image";
import { iAppointmentBanner } from "../../util/imageImports";

const Appointment: React.FC = () => {
  return (
    <div className="relative ">
      {/* Background Image */}
      <Image
        src={iAppointmentBanner}
        alt="Appointment"
        className="object-cover w-full h-full"
      />

      {/* Text Overlay */}
      <div className="absolute text-white top-1/4 left-5 md:left-10 lg:left-20">
        <h1 className="text-xl font-bold sm:text-4xl md:text-5xl">Meet the Best</h1>
        <h2 className="text-xl font-bold sm:text-4xl md:text-5xl">Hospital</h2>
        <p className="hidden mt-4 text-sm sm:text-lg">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col mt-6 space-x-4 md:flex-row">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 sm:px-6 sm:py-3 sm:text-base">
            Get Quote Now
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-transparent border border-white rounded-lg hover:bg-white hover:text-black sm:px-6 sm:py-3 sm:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="absolute w-11/12 p-1 transform -translate-y-1/2 bg-white rounded-lg shadow-lg md:p-6 top-1/2 right-5 sm:w-96 md:right-10 lg:right-20">
        <h3 className="mb-6 text-lg font-semibold text-black sm:text-xl">Book Appointment</h3>
        <form>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded-lg sm:p-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Email address *
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-2 border rounded-lg sm:p-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Department *
            </label>
            <select className="w-full p-2 border rounded-lg sm:p-3">
              <option>Please Select</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Time *
            </label>
            <select className="w-full p-2 border rounded-lg sm:p-3">
              <option>4:00 Available</option>
              <option>4:30 Available</option>
              <option>5:00 Available</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 sm:py-3"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
