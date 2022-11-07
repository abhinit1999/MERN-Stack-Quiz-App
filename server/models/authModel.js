const mongoose =require( "mongoose");

const authSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  // isVerified: {
  //   type: Boolean,
  //   default:true
  // },
});

const authModel = mongoose.model("newUser", authSchema);
module.exports= authModel;
