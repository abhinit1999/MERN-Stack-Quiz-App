import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [questionOption, setQuestionOption] = useState({
    question: "",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    cor_ans:"",
  });
  const [category, setCategory] = useState("Random");
  const [difficulty, setDifficulty] = useState("Easy");

  function handleSelect(event) {
    const { name, value } = event.target;
    if (name === "category") {
      setCategory(value);
    } else {
      setDifficulty(value);
    }
  }

  let name, value;
  const onChangeHandler = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setQuestionOption({ ...questionOption, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();

    const { question, opt1, opt2, opt3, opt4,cor_ans } = questionOption;
    fetch("http://localhost:9000/add/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        opt1,
        opt2,
        opt3,
        opt4,
        category: category,
        difficulty: difficulty,
        cor_ans,

      }),
    });
    alert("Data inserted");

    setQuestionOption({
      question: "",
      opt1: "",
      opt2: "",
      opt3: "",
      opt4: "",
      cor_ans:"",
      
    });
    setCategory("Random");
    setDifficulty("easy");
  };
  return (
    <div className="container">
      <h1 className="admin">
        Admin Panel
        <button
        style={{
            fontSize:"1.1rem",
            fontWeight:"bold",
            borderRadius:"15px",
            backgroundColor:"darkblue"
        

        }}
          class="btn btn-primary btn-sm btn-block mx-2"
          type="submit"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            // navigate("/login");
            navigate("/");
          }}
        >
          Logout
        </button>
      </h1>
      <form onSubmit={postData} className="form">
        <label htmlFor="question" className="question">
          Question Name ?{" "}
          <input
            type="text"
            name="question"
            className="question_text"
            placeholder="Add Question"
            value={questionOption.question}
            onChange={onChangeHandler}
          />
        </label>
        <div className="opt_div">
          <div className="div_opt">
            <label htmlFor="cor_ans" className="opt question">
              Correct - Answer:{" "}
              <input
                type="text"
                name="cor_ans"
                value={questionOption.cor_ans}
                onChange={onChangeHandler}
                className="question_text "
                placeholder="correct_answer"
              />
            </label>
            <label htmlFor="opt1" className="opt question">
              Option1:{" "}
              <input
                type="text"
                name="opt1"
                value={questionOption.opt1}
                onChange={onChangeHandler}
                className="question_text "
                placeholder="option1"
              />
            </label>
            <label htmlFor="opt2" className="opt question">
              Option2:{" "}
              <input
                type="text"
                name="opt2"
                value={questionOption.opt2}
                onChange={onChangeHandler}
                className="question_text "
                placeholder="option2"
              />
            </label>
            <label htmlFor="opt3" className="opt question">
              Option3:{" "}
              <input
                type="text"
                name="opt3"
                value={questionOption.opt3}
                onChange={onChangeHandler}
                className="question_text "
                placeholder="option3"
              />
            </label>
            <label htmlFor="opt4" className="opt question">
              Option4:{" "}
              <input
                type="text"
                name="opt4"
                value={questionOption.opt4}
                onChange={onChangeHandler}
                className="question_text "
                placeholder="option4"
              />
            </label>
            <button type="submit" className="submit">
              Submit
            </button>
          </div>

          <div className="cate">
            <select
              className="category"
              name="category"
              value={category}
              onChange={handleSelect}
            >
              <option value="Random">Selecet Category</option>
              <option value="Science">Science</option>
              <option value="Maths">Maths</option>
              <option value="Computer">Computer</option>
              <option value="Front-End">Front-End</option>
              <option value="Backend">Backend</option>
              <option value="Mern">Mern</option>
              <option value="code">Code</option>
            </select>
            <select
              className="difficulty"
              name="difficulty"
              value={difficulty}
              onChange={handleSelect}
            >
              <option value="Random">Difficulty Level</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Admin;
