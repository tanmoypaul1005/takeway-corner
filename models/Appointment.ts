const mongoose = require('mongoose');

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
    
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor', // reference to the doctor
        required: true
    },
    // patient: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Patient', // assuming a Patient model exists
    //     required: true
    // },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        start: {
            type: String, // e.g., '09:00'
            required: true,
        },
        end: {
            type: String, // e.g., '10:00'
            required: true,
        }
    },
    reason: {
        type: String, // reason for the appointment
        trim: true,
        default: ""
    },
    status: {
        type: String, 
        enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'], 
        default: 'Pending'
    },

},{timestamps:true});

// Export Appointment model
export default mongoose?.models?.Appointment || mongoose?.model('Appointment', appointmentSchema);
