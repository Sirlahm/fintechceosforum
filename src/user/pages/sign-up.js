import Input from "../../components/input";
import Button from "../../components/button";

const SignUp = () => {
  return (
    <div className="  bg-[#F5FAFF] py-16 ">
      <div className=" bg-white max-w-xl mx-auto rounded-xl py-10 px-16">
        <div className="space-y-2">
          <p className=" text-2xl font-semibold">Create your account</p>
          <p className="text-lg font-poppins">Let’s get you started!</p>
        </div>

        <form className=" mt-9 flex flex-col">
            <div className="space-y-6 flex flex-col">
            <Input
            id="name"
            label="Full Name"
            type="text"
            placeholder="Roaotech IT Company"
          />
          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="RoaotechITCompany@gmail.com"
          />

          <Input
            id="phone-number"
            label="Phone Number"
            type="text"
            placeholder="RoaotechITCompany@gmail.com"
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Enter Password"

          />

            </div>
         

          <Button classname="mt-32">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
