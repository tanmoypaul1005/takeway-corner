const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    image:{
        type: String,
        default:""
    },

    delivery_charge:{
        type: Number,
        default:""
    },

    delivery_time:{
        type: String,
        default:""
    },

    type: {
        type: String,
        enum: ["Restaurant", "Cafe", "Bakery", "Fast Food", "Grocery", "Sweet tooth", "Homechefs"],
        default: "Restaurant"
    },
 
},{timestamps:true});

export default mongoose?.models?.Shop || mongoose?.model('Shop', categorySchema);