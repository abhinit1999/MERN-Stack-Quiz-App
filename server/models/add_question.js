const mongoose=require("mongoose")

const newQuiz = new mongoose.Schema({
    question:{type: String, required: true },
    opt1:{type: String,  },
    opt2:{type: String,  },
    opt3:{type: String,  },
    opt4:{type: String, },
    category: { type: String},
    difficulty: { type: String, },
    cor_ans:{type:String},
    date: { type: Date, default: Date.now },
    
})

const QuizData = mongoose.model("QuizData",newQuiz);

module.exports=QuizData;