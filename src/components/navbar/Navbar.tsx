import React, { useState } from "react";
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = (props: any) => {
  const { title, tab1, tab2, tab3, screenType } = props;
  const [isOpen, setIsOpen] = useState(false);
  const navigate: any = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-amber-500 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`list-none fixed top-0 left-0 w-full h-screen bg-amber-500 flex flex-col items-center justify-center transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } md:static md:flex md:flex-row md:space-x-4 md:translate-x-0 md:h-auto md:w-auto md:bg-transparent md:items-center md:justify-end`}
        >
          <li
            onClick={() => {
              if (screenType === 'DISTRIBUTOR') {
                navigate("/distributorDashboard");
              } else {
                navigate("/");
              }
            }}
            className="flex items-center my-2 md:my-0 cursor-pointer	"
          >
            <FaHome className="mr-2" />
            <span>{tab1}</span>
          </li>
          <li className="flex items-center my-2 md:my-0">
            <FaSignInAlt className="mr-2" />
            <span>{tab2}</span>
          </li>
          <li className="flex items-center my-2 md:my-0">
            <FaUserPlus className="mr-2" />
            <span>{tab3}</span>
          </li>
          <li className="absolute top-4 right-4 md:hidden" onClick={toggleMenu}>
            <FaTimes size={24} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
