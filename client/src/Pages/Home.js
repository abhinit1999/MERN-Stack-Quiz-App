import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Services/axiosInterceptor";
import Admin from "./admin/Admin";


const Home = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");
  const [input, setInput] = useState({
    newpassword: "",
    confirmpassword: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const response = await axios.post("api/auth/change-password", input, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    alert(response.data.message);
    if (response.status === 200) {
      handleLogout();
    }
  };
  return (
    <>
    
      <Admin />
    
    </>

    
  );
};

export default Home;
