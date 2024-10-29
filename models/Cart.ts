const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    
    quantity: {
        type: Number,
        required: true
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
 
},{timestamps:true});

export default mongoose?.models?.Cart || mongoose?.model('Cart',cartSchema);