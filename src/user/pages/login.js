import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="  bg-[#F5FAFF] py-16 ">
      <div className=" bg-white max-w-xl mx-auto rounded-xl py-10 px-16">
        <div className="space-y-2">
          <p className=" text-2xl font-semibold">Login To Your Account</p>
          <p className="text-lg font-poppins">
            We are excited to have you back.
          </p>
        </div>

        <form className=" mt-9  flex flex-col">
            <div className="space-y-6 flex flex-col">
            <Input
            id="email"
            label="Email Address Or Phone Number"
            type="text"
            placeholder="RoaotechITCompany@gmail.com"
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Enter Valid Password"
          />

          <div className="flex justify-between">
          <div className="flex space-x-2">
            <input id="check"  type="checkbox" /> 
          <label className=" cursor-pointer" htmlFor="check">Remember me</label>
            </div>

            <a href="/" className="text-[#2D4F93] cursor-pointer">Forgot Password</a>

          </div>
            </div>
          
            
          

          <Button classname=" mt-16">Login</Button>
        </form>

        <div className=" text-center my-20">
            <span>New user? <Link className="text-[#2D4F93]" to={"/sign-up"}>Sign Up</Link></span>
        </div>

      </div>
    </div>
  );
};

export default Login;
