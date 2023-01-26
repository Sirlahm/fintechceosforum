import homeSvg from "../assets/svg/home.svg";
import profileSvg from "../assets/svg/profile.svg";

import discussionSvg from "../assets/svg/discussion1.svg";

import calendarSvg from "../assets/svg/calendar.svg";

import resourceSvg from "../assets/svg/resource.svg";

const links = [
  { name: "Home", svg: homeSvg },
  { name: "User Profile", svg: profileSvg },
  { name: "Discussion", svg: discussionSvg },
  { name: "Events Calendar", svg: calendarSvg },
  { name: "Resources Library", svg: resourceSvg },

];

const Link = ({name,svg}) => {
  return (
<li className=" flex px-10 py-3 items-center text-lg hover:bg-[#F7F9FD] cursor-pointer hover:border-l-[5px] hover:border-[#2D4F93] ">
          {" "}
          <img src={svg} alt="raoatech" />{" "}
          <p className=" ml-3 font-medium">{name}</p>
        </li>
  )
}

const SideNavBar = () => {
  return (
    <div className=" h-screen sticky top-0  py-12 flex flex-col justify-between border-r-[1px]">
      <span className=" bg-[#D9D9D9] self-center py-3 px-16 text-center text-base font-bold uppercase">
        Company <br />
        Logo
      </span>

      <ul className=" list-none h-[50%] flex flex-col justify-between">
        
        {
          links.map((link) => <Link name={link.name} svg={link.svg}/>)
        }
      </ul>

      <div className=" text-center text-lg font-medium">
        <a href="/" className=" text-[#FF0000]">
          Logout
        </a>
      </div>
    </div>
  );
};

export default SideNavBar;
