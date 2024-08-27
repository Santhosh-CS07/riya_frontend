import React, { useState } from "react";
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../App.css"; // Add your global styles

const Navbar = (props: any) => {
  const { title, tab1, tab3, screenType, distributorId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 via-yellow-500 to-teal-600 shadow-md z-50 py-1 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1
          className="text-2xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          {title}
        </h1>
        {distributorId && (
          <h2 className="text-lg hidden md:block">{distributorId}</h2>
        )}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`list-none fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:flex md:flex-row md:space-x-8 md:translate-x-0 md:h-auto md:w-auto md:bg-transparent md:items-center md:justify-end`}
        >
          <li
            onClick={() => {
              if (screenType === "DISTRIBUTOR") {
                navigate("/distributorDashboard");
              } else {
                navigate("/");
              }
            }}
            className="flex items-center my-4 md:my-0 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <FaHome className="mr-2 text-yellow-500" />
            <span className="text-lg font-medium">{tab1}</span>
          </li>
          <li className="flex items-center my-4 md:my-0 cursor-pointer hover:scale-105 transition-transform duration-300">
            <FaUserPlus className="mr-2 text-yellow-500" />
            <span className="text-lg font-medium">{tab3}</span>
          </li>
          {distributorId && (
            <li
              onClick={handleLogout}
              className="flex items-center my-4 md:my-0 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <FaSignInAlt className="mr-2 text-yellow-500" />
              <span className="text-lg font-medium">Logout</span>
            </li>
          )}
          <li className="absolute top-4 right-4 md:hidden" onClick={toggleMenu}>
            <FaTimes size={24} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
