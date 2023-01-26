import Input from "../../components/input";
import Button from "../../components/button";

const ResetPassword = () => {
  return (
    <div className=" h-screen bg-[#F5FAFF] py-16  ">
      <div className=" bg-white max-w-xl mx-auto rounded-xl pt-10 pb-20 px-16">
        <div className="space-y-2">
          <p className=" text-2xl font-semibold">Reset Password</p>
          <p className="text-lg font-poppins">
            Enter your new password?
          </p>
        </div>

        <form className=" mt-9 space-y-20 flex flex-col">

          <Input
            id="email"
            label="New Password."
            type="text"
            placeholder="RoaotechITCompany@gmail.com"
          />

          <Button classname="">Reset Password</Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
