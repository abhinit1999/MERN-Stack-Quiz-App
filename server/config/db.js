const mongoose = require("mongoose");
const dotenv= require("dotenv")


dotenv.config();
const DATA_BASE = process.env.DATA_BASE;
mongoose.connect(DATA_BASE)
.then(()=>
{
  console.log(`mongoose conected`)
})
.catch((e)=>
{
  console.log(e);
})
