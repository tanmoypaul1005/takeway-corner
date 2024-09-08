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






