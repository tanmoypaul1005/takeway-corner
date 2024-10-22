const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
        trim: true
      },
      discountPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
      banner: {
        type: String,
        default: true
      },
      isActive: {
        type: Boolean,
        default: true
      }
},{timestamps:true});

export default mongoose?.models?.Offer || mongoose?.model('Offer', offerSchema);