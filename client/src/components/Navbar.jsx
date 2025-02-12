import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";

export default function Navbar() {
  const [select, setSelect] = useState(null);

  const handleClick = (index) => {
    setSelect(index);
  };

  const menuItems = [
    { name: "Home", icon: <AiOutlineHome />, link: "/" },
    { name: "About", icon: <IoInformationCircleOutline />, link: "/about" },
    { name: "Services", icon: <MdOutlineMiscellaneousServices />, link: "/services" },
    { name: "Portfolio", icon: <LuBriefcaseBusiness />, link: "/portfolio" },
    { name: "Contact Us", icon: <IoCallOutline />, link: "/contact" },
  ];

  return (
    <nav className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[892px] flex justify-center items-center font-medium shadow-md rounded`">
        <ul className="flex gap-20">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`px-4 py-3  cursor-pointer transition-all ${
                select === index ? " border-b-2 border-blue-500 text-blue-500" : "border-b-2 border-white"
              }`}
            >
              <Link to={menu.link} className="flex items-center gap-2">
                {menu.icon} {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
