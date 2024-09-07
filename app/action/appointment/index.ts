import Appointment from "../../../models/Appointment";
import Doctor from "../../../models/Doctor";
import connectMongo from "../../../util/connectMongo";
import mongoose, { Schema, Document, Model } from 'mongoose';

// Add Appointment Function with Time Conflict Validation , Add Appointment Function (with 30-minute duration constraint)
export const addAppointment = async (body) => {
    const { doctorId, patientId, appointmentDate, startTime, reason } = body;

    try {
        await connectMongo();

        // Check if doctor exists
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return { success: false, message: "Doctor not found" };
        }

        // Convert startTime to Date object and calculate endTime (30 minutes after startTime)
        const startTimeObj = new Date(`${appointmentDate}T${startTime}:00`);
        const endTimeObj = new Date(startTimeObj.getTime() + 30 * 60000); // Add 30 minutes

        const startTimeFormatted = startTimeObj.toTimeString().slice(0, 5); // Format to 'HH:mm'
        const endTimeFormatted = endTimeObj.toTimeString().slice(0, 5); // Format to 'HH:mm'

        // Check if there is a time conflict for the doctor on the given date and time range
        const conflict = await Appointment.findOne({
            doctor: doctorId,
            appointmentDate: new Date(appointmentDate),
            $or: [
                {
                    "appointmentTime.start": { $lt: endTimeFormatted }, // overlapping start time
                    "appointmentTime.end": { $gt: startTimeFormatted } // overlapping end time
                }
            ]
        });

        if (conflict) {
            return { success: false, message: "Doctor already has an appointment at this time" };
        }

        // Create new appointment if no conflict
        const newAppointment = new Appointment({
            doctor: doctorId,
            patient: patientId,
            appointmentDate: new Date(appointmentDate),
            appointmentTime: {
                start: startTimeFormatted,
                end: endTimeFormatted
            },
            reason: reason || ""
        });

        // Save appointment to the database
        await newAppointment.save();

        return { success: true, message: "Appointment added successfully", appointment: newAppointment };

    } catch (error) {
        console.error("Error adding appointment:", error);
        return { success: false, message: "Error adding appointment", error };
    }
};


// Helper function to generate time slots (30-minute intervals)
export const generateTimeSlots = (startTime, endTime, intervalMinutes = 30) => {
    const slots = [];
    let currentTime = new Date(startTime);

    while (currentTime < endTime) {
        let nextTime = new Date(currentTime.getTime() + intervalMinutes * 60000); // Add 30 minutes
        slots.push({
            start: currentTime.toTimeString().slice(0, 5), // Format as HH:mm
            end: nextTime.toTimeString().slice(0, 5),
            available: true
        });
        currentTime = nextTime;
    }

    return slots;
};

// Function to check available time slots for a doctor (no appointmentDate needed)
export const findAvailableTimeSlots = async (doctorId) => {
    try {
        console.log("doctorId", doctorId);
        await connectMongo();
        const appointments = await Appointment.find({doctor:  doctorId});
        return  appointments
        // Define working hours (e.g., 09:00 AM to 05:00 PM)
        // const workingStart = new Date();
        // workingStart.setHours(9, 0, 0, 0); // Set start time to 09:00 AM
        // const workingEnd = new Date();
        // workingEnd.setHours(17, 0, 0, 0); // Set end time to 05:00 PM

        // // Generate all possible 30-minute time slots within working hours
        // let timeSlots = generateTimeSlots(workingStart, workingEnd);
        // const objectId = new mongoose.Types.ObjectId(doctorId);
        // // Retrieve all appointments for the doctor (regardless of date)
        // const appointments = await Appointment.find({doctor:  objectId});

        // // Mark time slots as unavailable if they overlap with existing appointments
        // timeSlots = timeSlots.map((slot) => {
        //     const slotStart = new Date();
        //     slotStart.setHours(...slot.start.split(':'), 0); // Create a Date object for slot start time

        //     const slotEnd = new Date();
        //     slotEnd.setHours(...slot.end.split(':'), 0); // Create a Date object for slot end time

        //     const isConflict = appointments.some(appointment => {
        //         const appStart = new Date();
        //         appStart.setHours(...appointment.appointmentTime.start.split(':'), 0); // Appointment start time

        //         const appEnd = new Date();
        //         appEnd.setHours(...appointment.appointmentTime.end.split(':'), 0); // Appointment end time

        //         // Check if the slot overlaps with any existing appointment
        //         return slotStart < appEnd && slotEnd > appStart;
        //     });

        //     return {
        //         ...slot,
        //         available: !isConflict // If conflict, mark as unavailable
        //     };
        // });

        // return timeSlots;

    } catch (error) {
        console.error("Error finding available time slots:", error);
        return { success: false, message: "Error finding available time slots", error };
    }
};





