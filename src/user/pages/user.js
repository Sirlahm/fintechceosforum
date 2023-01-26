import SideNavBar from "../../components/side-nav-bar";
import Discussion from "../../components/discussion";
import EventCalender from "../../components/events-calendar";
import ResourceLibrary from "../../components/resource-library";

const companies = [
    { group: "Raotech", name: "About" },
    { group: "Raotech", name: "About" },
    { group: "Raotech", name: "About" },
    { group: "Raotech", name: "About" },
    { group: "Raotech", name: "About" },
    { group: "Raotech", name: "About" },
  ];

const User = () => {
  return (
    <div className=" flex space-x-4 text-[#000000]">
      <div className="w-[25%]">
        <SideNavBar />
      </div>

      <div className="w-[75%] flex space-x-3 pr-10 py-5">
        <div className="w-[70%] space-y-4">
          <EventCalender />
          <ResourceLibrary />

        </div>

        <div className="w-[30%]">
          <Discussion companies={companies} />
        </div>
      </div>
    </div>
  );
};
export default User;
