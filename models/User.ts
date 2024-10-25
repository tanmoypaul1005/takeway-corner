const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
      },
      email: {
        required: true,
        type: String
      },
      password: {
        required: true,
        type: String
      },
      image: {
        required: false,
        type: String
      }
    
},{timestamps:true});

export default mongoose?.models?.User || mongoose?.model('User', userSchema);