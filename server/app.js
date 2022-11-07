const express = require("express");
require("./config/db")
const authRoutes =require ("./routes/authRoutes.js");
const dotenv = require("dotenv");
const cors = require("cors");
  // Admin Add question Model//
  const QuizData = require("./models/add_question");



const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;


app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page ...");
});

// Routes

app.use("/api/auth", authRoutes);
app.post("/add/questions",(req,res)=>
{
  const add_question = new QuizData(req.body);
  add_question.save();
  res.send("Question inserted")

})

app.listen(PORT, () => {
  console.log(`server runing at: ${PORT}`);
});
