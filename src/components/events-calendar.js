const colors = ["bg-[#FAE1D1]", "bg-[#F0A575]", "bg-[#F7F9FD]"];
const Card = ({ classname }) => {
  console.log(classname);
  return (
    <div className={`${classname} px-3 py-6 rounded-lg space-y-3`}>
      <p className="text-lg font-medium">Name of the Event</p>
      <p className="text-lg">Venue</p>
      <div className="text-lg flex justify-between ">
        <span className="w-[50%]">Time</span>
        <span className="w-[50%]">Date</span>
      </div>
    </div>
  );
};

const EventCalender = () => {
  return (
    <div className=" rounded-2xl border-[1px] px-3 py-5 ">
      <div className="flex justify-between mb-4 items-center">
        <p className="text-xl font-bold">Events Calendar</p>

        <a href="/" className=" text-md text-[#D9D9D9]">
          See All
        </a>
      </div>

      <div>
        <div className=" bg-[#F7F9FD] rounded-3xl px-2 py-3 inline-block pr-8 space-x-2 ">
          <span className="rounded-3xl bg-white text-lg font-medium px-3 py-2 pr-8">
            Upcoming
          </span>
          <span className="text-lg font-medium px-3 py-2">Scheduled</span>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-8">
          {colors.map((color) => (
            <Card classname={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalender;
