import progress from "../assets/svg/progress.svg";

const names = [
  "Tobi Adeloro",
  "Sharon Ojo",
  "Adedayo Jigida",
  "Tobi Adeloro",
  "Sharon Ojo",
  "Adedayo Jigida",
];

const Avatar = ({ name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className=" bg-primary rounded-full w-[60px] h-[60px]" />
      <p className=" text-sm">{name}</p>
    </div>
  );
};

const UserProfile = () => {
  return (
    <div className=" rounded-2xl border-[1px] px-3 py-5">
      <div className="flex justify-between mb-4 items-center">
        <p className="text-xl font-bold">Users Profile</p>

        <a href="/" className=" text-md text-[#D9D9D9]">
          See All
        </a>
      </div>

      <div className=" flex w-full space-x-3">
        <div className=" w-[45%] rounded-2xl border-[1px] py-8 px-2">
          <a
            href="/"
            className=" text-[#2D4F93] text-base mb-4 block font-medium"
          >
            Profile edited recently
          </a>

          <div className="grid grid-cols-3 gap-2 text-center">
            {names.map((name) => (
              <Avatar name={name} />
            ))}
          </div>
        </div>

        <div className="w-[55%] space-y-3">
          <div className="w-[100%] space-x-3  flex">
            <div className=" w-[50%] px-8 py-5 bg-[#EBF0F9] rounded-2xl flex justify-center items-center flex-col">
              <span className="text-sm font-medium">Users Birthday</span>
              <span className="text-sm">(Jan)</span>
              <span className="text-2xl font-medium">07</span>
            </div>
            <div className=" w-[50%] px-8 py-5 bg-[#FAE1D1] rounded-2xl flex justify-center items-center flex-col">
              <span className="text-sm font-medium">Active Users</span>
              <span className="text-sm">(Weekly)</span>
              <span className="text-2xl font-medium">42</span>
            </div>
          </div>

          <div className="w-[100%] px-8 py-5 bg-[#EBF9F4]  flex justify-between rounded-2xl">
            <div className="  flex justify-center items-center flex-col">
              <span className="text-sm font-medium">New Users</span>
              <span className="text-sm">(Monthly)</span>
              <span className="text-2xl font-medium">100</span>
            </div>

            <div className="relative">
              <img src={progress} alt="raoatech" />
              <span className="text-xl font-medium absolute center">70%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
