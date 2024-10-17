const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
 
},{timestamps:true});

export default mongoose?.models?.Category || mongoose?.model('Category', categorySchema);