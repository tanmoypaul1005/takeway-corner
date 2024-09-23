export const dynamic = "force-dynamic";
import Appointment from "../../../../models/Appointment";
import Doctor from "../../../../models/Doctor";
import connectMongo from "../../../../util/connectMongo";
import mongoose from 'mongoose';


export async function POST(request) {
  try{
    const new_doctor = await request.json();

    await connectMongo();
   
    const newDoctor = new Doctor({...new_doctor});
    const response = await newDoctor.save();

    return Response.json({
      success: true,
      status: 200,
      message: "Doctor Created Successfully",
      data: response,
    });
  }catch (err) {
    console.error(err);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
}



// export async function GET(request) {
//   const searchParams = request.nextUrl.searchParams;
//   const doctorId = searchParams.get("doctor_id");
//   const objectId = new mongoose.Types.ObjectId(doctorId);
//   const date = searchParams.get("date");
//   const parsedDate = new Date(date);

//   try {
//    const availableTimeSlots= await Appointment.findOne({ doctor: objectId,appointmentDate: parsedDate });
//    if(availableTimeSlots){

//    }else{
//      const dc= await Doctor.findOne({_id:objectId});
     


//       return Response.json({
//         status: 200,
//         body: Doctor.findById(doctorId),
//       });
//    }

//   } catch (err) {
//     console.error(err);
//     return Response.json({
//       status: 500,
//       body: { error:err }
//     });
//   }
// }




// Function to get time slots for a given time range
function getTimeSlots(start, end, interval = 30) {
  const startTime = new Date(`1970-01-01T${start}:00`);
  const endTime = new Date(`1970-01-01T${end}:00`);
  const slots = [];

  while (startTime < endTime) {
    const slotEndTime = new Date(startTime.getTime() + interval * 60000);
    if (slotEndTime > endTime) break;

    const slot = {
      start: startTime.toTimeString().slice(0, 5),
      end: slotEndTime.toTimeString().slice(0, 5),
      available: true,
    };

    slots.push(slot);
    startTime.setMinutes(startTime.getMinutes() + interval);
  }

  return slots;
}

// Function to apply booked appointments to time slots
function applyAppointments(slots, appointments) {
  return slots.map((slot) => {
    const isBooked = appointments.some((appointment) => {
      const appointmentStart = new Date(`1970-01-01T${appointment.appointmentTime.start}:00`);
      const appointmentEnd = new Date(`1970-01-01T${appointment.appointmentTime.end}:00`);
      const slotStart = new Date(`1970-01-01T${slot.start}:00`);
      const slotEnd = new Date(`1970-01-01T${slot.end}:00`);

      return (
        (slotStart >= appointmentStart && slotStart < appointmentEnd) ||
        (slotEnd > appointmentStart && slotEnd <= appointmentEnd)
      );
    });

    return { ...slot, available: !isBooked };
  });
}

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const doctorId = searchParams.get("doctor_id");
  const date = searchParams.get("date");

  if (!doctorId || !date) {
    return Response.json({ error: "Doctor ID and date are required." }, { status: 400 });
  }

  try {
    // Convert the doctorId to a mongoose ObjectId
    const objectId = new mongoose.Types.ObjectId(doctorId);

    // Find the doctor by ID
    const doctor = await Doctor.findById(objectId);
    if (!doctor) {
      return Response.json({ error: "Doctor not found." }, { status: 404 });
    }

    // Check if the doctor is available on the given date
    const dayOfWeek = new Date(date).toLocaleString('en-US', { weekday: 'long' });
    if (!doctor.availableDays.includes(dayOfWeek)) {
      return Response.json({ error: "Doctor is not available on this day." }, { status: 400 });
    }

    // Fetch the doctor's available time
    const { start, end } = doctor.availableTime;

    // Generate 30-minute time slots
    let timeSlots = getTimeSlots(start, end);

    // Fetch all appointments for the doctor on the given date
    const appointments = await Appointment.find({
      doctor: objectId,
      appointmentDate: new Date(date),
    });

    // Apply appointments to the time slots to mark them as unavailable
    timeSlots = applyAppointments(timeSlots, appointments);

    // Return the available time slots
    return Response.json({ timeSlots });
  } catch (error) {
    console.error("Error fetching doctor time slots:", error);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}
