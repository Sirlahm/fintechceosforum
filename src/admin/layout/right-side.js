import UserProfile from "../../components/user-profile";
import Discussion from "../../components/discussion";
import EventCalender from "../../components/events-calendar";
import ResourceLibrary from "../../components/resource-library";

const companies = [
  { group: "Raotech", name: "About" },
  { group: "Raotech", name: "About" },
  { group: "Raotech", name: "About" }, ]
const RightSide = () => {
  return (
    <section className="py-12 w-[80%] flex flex-col pr-10 space-y-6">
      <div className=" w-full flex justify-between space-x-3">
        <div className="w-[70%]">
          <UserProfile />
        </div>

        <div className="w-[30%]">
          <Discussion companies={companies}/>
        </div>
      </div>

      <div className=" w-full flex justify-between space-x-3">
        <div className="w-[30%]">
          <ResourceLibrary />
        </div>

        <div className="w-[70%]">
          <EventCalender />
        </div>
      </div>
    </section>
  );
};

export default RightSide;
