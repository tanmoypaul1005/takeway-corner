const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    image:{
        type: String,
        default:""
    },
    banner:{
        type: String,
        default:""
    },

    delivery_charge:{
        type: Number,
        default:""
    },

    ratting:{
        type: Number ,
        default:""
    },

    delivery_time:{
        type: String,
        default:""
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    type: {
        type: String,
        enum: ["Restaurant", "Cafe", "Bakery", "Fast Food", "Grocery", "Sweet tooth", "Homechefs"],
        default: "Restaurant"
    },
 
},{timestamps:true});

export default mongoose?.models?.Shop || mongoose?.model('Shop', shopSchema);