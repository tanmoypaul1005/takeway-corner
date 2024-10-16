const mongoose = require('mongoose');

const cuisinesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    image:{
        type: String,
        default:""
    },
},{timestamps:true});

export default mongoose?.models?.Cuisines || mongoose?.model('Cuisines', cuisinesSchema);