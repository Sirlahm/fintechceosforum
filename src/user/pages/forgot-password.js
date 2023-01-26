import Input from "../../components/input";
import Button from "../../components/button";

const ForgotPassword = () => {
  return (
    <div className=" h-screen bg-[#F5FAFF] py-16  ">
      <div className=" bg-white max-w-xl mx-auto rounded-xl pt-10 pb-20 px-16">
        <div className="space-y-2">
          <p className=" text-2xl font-semibold">Forgot Password</p>
          <p className="text-lg font-poppins">
          Enter your email to reset password?
          </p>
        </div>

        <form className=" mt-9 space-y-8 flex flex-col">

          <Input
            id="email"
            label="Email Address."
            type="text"
            placeholder="RoaotechITCompany@gmail.com"
          />

          <Button classname="">Sign Up</Button>
        </form>
        <div className=" flex justify-between mt-32">
            <a href="/" className=" cursor-pointer">Didn’t get a mail?</a>
            <a href="/" className=" cursor-pointer text-[#2D4F93]">Request Again.</a>

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
