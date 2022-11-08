const express = require("express");
require("./config/db")
const authRoutes =require ("./routes/authRoutes.js");
const userAuthRoutes = require("./routes/userAuthRoutes")
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

// Routes for Admin
app.use("/api/auth", authRoutes);

// Routes for Users
app.use("/api/auth",userAuthRoutes)



app.post("/add/questions",(req,res)=>
{
  const add_question = new QuizData(req.body);
  add_question.save();
  res.send("Question inserted")

})

// Display Questions to the users

app.get("/all/questions",async(req,res)=>
{
  const all_question = QuizData.find();
  res.send('All questions')
})

app.listen(PORT, () => {
  console.log(`server runing at: ${PORT}`);
});
