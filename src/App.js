import React from "react";
import {  Routes, Route } from 'react-router-dom'
import Admin from "./admin/pages/admin";
import SignUp from "./user/pages/sign-up";
import Login from "./user/pages/login";
import User from "./user/pages/user";
import ResetPassword from "./user/pages/reset-password";
import ForgotPassword from "./user/pages/forgot-password";
import PageNotFound from "./admin/layout/404";
// import UserProfile from "./components/user-profile";


function App() {
  return (
       <div className=" font-poppins">
          <Routes>
        <Route  path="/admin-dashboard" element={<Admin/>} />
        <Route  path="/sign-up" element={<SignUp/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/user-dashboard" element={<User/>} />
        {/* <Route path="/user-profile" element={<UserProfile/>}/> */}
        <Route  path="/reset-password" element={<ResetPassword/>} />
        <Route  path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="*" element={<PageNotFound />}/>





        
      </Routes> 

       </div>
    
      
   
  ); 
}

export default App;
