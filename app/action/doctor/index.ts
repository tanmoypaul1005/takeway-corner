import mongoose from 'mongoose';
import connectMongo from '../../../util/connectMongo';
import Appointment from '../../../models/Appointment';
import Doctor from '../../../models/Doctor';

interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

const generateTimeSlots = (intervalMinutes: number = 30): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const workingStart = new Date();
  workingStart.setHours(9, 0, 0, 0); // Set start time to 09:00 AM
  const workingEnd = new Date();
  workingEnd.setHours(17, 0, 0, 0); // Set end time to 05:00 PM

  let currentTime = new Date(workingStart);

  while (currentTime < workingEnd) {
    let nextTime = new Date(currentTime.getTime() + intervalMinutes * 60000); // Add interval minutes
    slots.push({
      start: currentTime.toTimeString().slice(0, 5), // Format as HH:mm
      end: nextTime.toTimeString().slice(0, 5),
      available: true
    });
    currentTime = nextTime;
  }

  return slots;
};

const findAvailableTimeSlots = async (doctorId: string): Promise<TimeSlot[]> => {
  await connectMongo();
  const objectId = new mongoose.Types.ObjectId(doctorId);

  // Generate all possible 30-minute time slots within working hours
  let timeSlots = generateTimeSlots();

  // Retrieve all appointments for the doctor (regardless of date)
  const appointments = await Appointment.find({ doctor: objectId });

  // Mark time slots as unavailable if they overlap with existing appointments
  timeSlots = timeSlots.map((slot) => {
    const slotStart = new Date();
    const [startHour, startMinute] = slot.start.split(':').map(Number);
    slotStart.setHours(startHour, startMinute, 0); // Create a Date object for slot start time

    const slotEnd = new Date();
    const [endHour, endMinute] = slot.end.split(':').map(Number);
    slotEnd.setHours(endHour, endMinute, 0); // Create a Date object for slot end time

    const isConflict = appointments.some(appointment => {
      const appStart = new Date();
      const [appStartHour, appStartMinute] = appointment.appointmentTime.start.split(':').map(Number);
      appStart.setHours(appStartHour, appStartMinute, 0); // Appointment start time

      const appEnd = new Date();
      const [appEndHour, appEndMinute] = appointment.appointmentTime.end.split(':').map(Number);
      appEnd.setHours(appEndHour, appEndMinute, 0); // Appointment end time

      // Check if the slot overlaps with any existing appointment
      return slotStart < appEnd && slotEnd > appStart;
    });

    return {
      ...slot,
      available: !isConflict // If conflict, mark as unavailable
    };
  });

  return timeSlots;
};

export const getDoctors = async () => {
  try {
    await connectMongo();
    const doctors = await Doctor.find({});

    // For each doctor, find available time slots
    const doctorsWithAvailability = await Promise.all(doctors.map(async (doctor) => {
      const availableTimeSlots = await findAvailableTimeSlots(doctor._id.toString());
      return {
        ...doctor.toObject(),
        availableTimeSlots
      };
    }));

    return doctorsWithAvailability;
  } catch (err) {
    console.error(err);
    return [];
  }
};




// export const getDoctors = async () => {
//     try {
//         await connectMongo();
//         const doctor = await Doctor.find({});
//         return  doctor;
//     } catch (err) {
//         console.error(err);
//         return [];
//     }
// }