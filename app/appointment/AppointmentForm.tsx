import React from 'react'

const AppointmentForm:React.FC = () => {
    return (
        <div className="w-11/12 p-6 bg-white rounded-lg shadow-lg right-5 sm:w-96">
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
    )
}

export default AppointmentForm