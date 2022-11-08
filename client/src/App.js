import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/Login";
import AdminRegister from "./Components/Register";
import Home from "./Pages/Home";
import Header from "./Pages/Header-NavBar/Header"
import UserReg from "./Components/UserReg";
import UserLogin from "./Components/UserLogin"
import AdminDashBoard from "./Pages/admin/Admin"
import UserDahBoard from "./Pages/user/User";


const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
        
       
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-register" element={<UserReg />} />
          <Route path="/user-dashboard" element={<UserDahBoard/>}/>
          <Route path="/" element={<Header/>}/>
          <Route path="/admin-dashboard" element={<AdminDashBoard/>}/>
          <Route path="/admin-dashboard" element={<Home />} />

          <Route path="/admin-login" element={ <AdminLogin />}/>
          <Route path="/user-login" element={ <UserLogin />}/>
          
          <Route path="*" element={<Header/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
