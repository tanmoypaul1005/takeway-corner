const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    price:{
        type: Number,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },

    categories: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

    cuisines: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cuisines'
    },

    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop'
    },

    image:{
        type: String,
        required: true,
    },
},{timestamps:true});

export default mongoose?.models?.Cuisines || mongoose?.model('Food', foodSchema);