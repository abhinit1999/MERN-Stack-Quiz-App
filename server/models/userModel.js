const mongoose =require( "mongoose");

const userAuthSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
 
});

const userModel = mongoose.model("userModel", userAuthSchema);
module.exports= userModel;
