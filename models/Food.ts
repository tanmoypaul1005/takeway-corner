const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    categories: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

    cuisines: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cuisines'
    },

    image:{
        type: String,
        required: true,
    },
},{timestamps:true});

export default mongoose?.models?.Cuisines || mongoose?.model('Cuisines', foodSchema);