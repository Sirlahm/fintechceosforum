import { useState, useEffect } from "react";
import axios from 'axios';
import Input from "../../components/input";
import Button from "../../components/button";

const SignUp = () => {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  phone_number: "",
 });

 const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://fintechceosforum.herokuapp.com/api/users/signup",
        formData
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="  bg-[#F5FAFF] py-16 ">
      <div className=" bg-white max-w-xl mx-auto rounded-xl py-10 px-16">
        <div className="space-y-2">
          <p className=" text-2xl font-semibold">Create your account</p>
          <p className="text-lg font-poppins">Let’s get you started!</p>
        </div>

        <form className=" mt-9 flex flex-col" onSubmit={handleSubmit}>
            <div className="space-y-6 flex flex-col">
            <Input
            id="name"
            name="name"
            label="Full Name"
            type="text"
            value={formData.name}
            placeholder="Roaotech IT Company"
           onChange={handleChange}
          />
          <Input
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={formData.email}
            placeholder="RoaotechITCompany@gmail.com"
            onChange={handleChange}
          />

          <Input
            id="phone-number"
            name="phone_number"
            label="Phone Number"
            type="text"
            value={formData.phone_number}
            placeholder="RoaotechITCompany@gmail.com"
            onChange={handleChange}
          />

          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            placeholder="Enter Password"
            onChange={handleChange}

          />

            </div>
         

          <Button classname="mt-32">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
