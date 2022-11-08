import "./user.css";
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

const User = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [category,setCategory]=useState("Random")
  function handleSelect(event) {
    const { name, value } = event.target;
    if (name === "category") {
      setCategory(value);
    } 
  }

  useEffect(() => {
    fetch("http://localhost:9000/all/questions")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);




  const postData = (e) => {
    e.preventDefault();
    
    const {question} = data;
    fetch("http://localhost:9000/user/ans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        question,
        category: category,
      }),
    });
    alert("Answer Submited");

    
    setCategory("Random")
    
  };
  return (
    <div className="container">
      <div className="admin">
        <h1>User Panel
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
      </div>

      {data.map((vl, id) => {
        return (
          <form onSubmit={postData} key={vl.id}>
          <div className="que">
            {vl.question}
          </div>
             <select className="category" name="category"
            value={category}
            onChange={handleSelect}
            >
              {/* <option value="Random"  key={vl.id}></option> */}
              <option value={vl.opt1}  key={vl.id}>{vl.opt1}</option>
              <option value={vl.opt2}  key={vl.id}>{vl.opt2}</option>
              <option value={vl.opt3}  key={vl.id}>{vl.opt3}</option>
              <option value={vl.opt4}  key={vl.id}>{vl.opt4}</option>

            </select>
          </form>
        );
    })}
    <button type="submit" className="submit">Submit</button>
    </div>
  );
};

export default User;
