const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        default: ""
    },
    designation: {
        type: String,
        required: true,
        trim: true
    },
  comment: {
        type: String,
        required: true,
        trim: true
    },
},{timestamps:true});

export default mongoose?.models?.Testimonial || mongoose?.model('Testimonial', testimonialSchema);

