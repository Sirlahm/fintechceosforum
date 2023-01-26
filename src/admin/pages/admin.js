import SideNavBar from "../../components/side-nav-bar";
import RightSide from "../layout/right-side";

const Admin = () => {
  return (
    <div className=" flex space-x-4 text-[#000000]">
      <div className="w-[20%]">
        <SideNavBar />
      </div>

      <RightSide />
    </div>
  );
};
export default Admin;
