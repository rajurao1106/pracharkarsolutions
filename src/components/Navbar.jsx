import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";

export default function Navbar() {
  const [select, setSelect] = useState(0);

  const handleClick = (index) => {
    setSelect(index);
  };

  const menuItems = [
    { name: "Home", icon: <AiOutlineHome />, link: "/" },
    { name: "About", icon: <IoInformationCircleOutline />, link: "/about" },
    {
      name: "Services",
      icon: <MdOutlineMiscellaneousServices />,
      link: "/services",
    },
    { name: "Portfolio", icon: <LuBriefcaseBusiness />, link: "/portfolio" },
    { name: "Contact", icon: <IoCallOutline />, link: "/contact" },
  ];

  return (
    <nav className="w-full flex flex-col justify-center items-center pt-3 fixed z-100">
      <div className="w-full max-w-[1250px] flex justify-between items-center font-medium">
        <h1 className="text-4xl text-blue-500 font-black font-[Quicksand]">PK</h1>
        <ul className="flex gap-20 px-2 bg-white shadow-md rounded-md">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={` ${
                select === index
                  ? " border-b-2 border-blue-500 text-blue-500"
                  : "border-b-2 border-white"
              }`}
            >
              <Link
                to={menu.link}
                className="flex items-center gap-2 px-3 py-4  cursor-pointer transition-all"
              >
                {menu.icon} {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to={'/contact'} className="bg-red-500 text-white p-4 rounded-xl flex justify-center items-center gap-2 shadow-md ">
          <IoCallOutline />
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
