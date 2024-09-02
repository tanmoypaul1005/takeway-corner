const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        default: ""
    },
    specialization: {
        type: String,
        required: true,
        trim: true
    },
    experience: {
        type: Number,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    qualifications: {
        type: [String],
        required: true,
    },
    availableDays: {
        type: [String], // e.g., ['Monday', 'Wednesday', 'Friday']
        required: true,
    },
    availableTime: {
        start: {
            type: String, // e.g., '09:00'
            required: true,
        },
        end: {
            type: String, // e.g., '17:00'
            required: true,
        }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    ratings: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    }
},{timestamps:true});

export default mongoose?.models?.Doctor || mongoose?.model('Doctor', doctorSchema);

