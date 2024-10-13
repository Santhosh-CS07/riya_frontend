import React, { useState } from "react";
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../App.css"; // Global styles

const Navbar = (props: any) => {
  const {
    title,
    tab1,
    tab3,
    screenType,
    distributorId,
    bureauData_,
    isBureau,
    myPofileCount,
    allPofileCount,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleButtonClick = (flag: string) => {
    const url = "https://expo.dev/artifacts/eas/bSXhY4JboGExZFtnb3kwwW.apk";
    window.open(url, "_blank");
  };

  console.log("bureauData_", bureauData_);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full  shadow-md z-50 text-white shadow-lg">
        <div className="bg-white text-center text-black flex flex-row justify-center p-3	">
          {isBureau && (
            <p className="text-2xl font-semibold text-center ml-6">
              Welcome to....
            </p>
          )}
          {/* <div>Image</div> */}
        </div>
        <div className="container mx-auto flex justify-between items-center p-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-teal-600">
          {/* Navbar Title */}
          <div>
            <h3 className="font-semibold cursor-pointer">{title}</h3>
          </div>

          {/* Distributor ID on larger screens */}
          {distributorId && (
            <h2 className="text-lg hidden md:block">{distributorId}</h2>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          {/* Desktop Menu (horizontal layout) */}
          <ul className="hidden md:flex md:flex-row md:space-x-8">
            <li
              onClick={() => {
                if (screenType === "DISTRIBUTOR") {
                  navigate("/distributorDashboard");
                } else {
                  navigate("/");
                }
              }}
              className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <FaHome className="mr-2 text-yellow-500" />
              <span className="text-lg font-medium">{tab1}</span>
            </li>
            <li className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
              <FaUserPlus className="mr-2 text-yellow-500" />
              <span className="text-lg font-medium">{tab3}</span>
            </li>
            {distributorId && (
              <li
                onClick={handleLogout}
                className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <FaSignInAlt className="mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Logout</span>
              </li>
            )}
          </ul>

          {/* Mobile Menu Items (vertical layout in side panel) */}
          <ul
            className={`fixed top-0 right-0 w-1/2 h-screen bg-gradient-to-b from-blue-500 to-orange-500 text-white flex flex-col justify-between py-6 px-4
          transition-transform transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
          >
            {/* Close Button Inside the Side Panel */}
            <li
              className="absolute top-4 right-4 cursor-pointer md:hidden"
              onClick={toggleMenu}
            >
              <FaTimes size={24} />
            </li>

            <div className="flex flex-col space-y-6 mt-1">
              {/* Home Link */}
              {isBureau ? (
                <></>
              ) : (
                <li
                  onClick={() => {
                    if (screenType === "DISTRIBUTOR") {
                      navigate("/distributorDashboard");
                    } else {
                      navigate("/");
                    }
                  }}
                  className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <FaHome className="mr-2 text-yellow-500" />
                  <span className="text-lg font-medium">{tab1}</span>
                </li>
              )}

              {/* Tab 3 Link */}
              {isBureau ? (
                <>
                  <div className="mt-8 z-10 flex flex-col sm:justify-center gap-4">
                    <button
                      className="bg-orange-600 text-sm text-white px-3 py-1 rounded-lg shadow-md hover:bg-orange-700 transition duration-200 flex items-center gap-2"
                      onClick={() => handleButtonClick("register")}
                    >
                      My Own Profiles
                      <span className="bg-white text-orange-600 w-10 h-10 flex items-center justify-center rounded-full font-bold">
                        {myPofileCount}+
                      </span>
                    </button>

                    <button
                      className="bg-green-700 text-sm text-white px-3 py-1 rounded-lg shadow-md hover:bg-green-800 transition duration-200 flex items-center gap-2"
                      onClick={() => handleButtonClick("login")}
                    >
                      Other Profiles
                      <span className="bg-white text-green-700 w-10 h-10 flex items-center justify-center rounded-full font-bold">
                        {allPofileCount}+
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <li className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                    <FaUserPlus className="mr-2 text-yellow-500" />
                    <span className="text-lg font-medium">{tab3}</span>
                  </li>
                </>
              )}
              {/* Logout (Visible when distributorId exists) */}
              {distributorId && (
                <li
                  onClick={handleLogout}
                  className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <FaSignInAlt className="mr-2 text-yellow-500" />
                  <span className="text-lg font-medium">Logout</span>
                </li>
              )}
            </div>

            {/* Support Section */}
            {isBureau && (
              <div className="bg-gradient-to-b from-blue-700 to-orange-500 p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Need Help?
                </h2>
                <p className="text-white mb-4 text-center">
                  We’re here to help 24/7. Contact us via WhatsApp, call, or
                  email.
                </p>
                <div className="flex flex-col gap-4">
                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${
                      bureauData_?.mobileNumber
                    }?text=${encodeURIComponent("Hi, I need help")}`}
                    className="flex items-center justify-center bg-green-500 text-white py-2 rounded hover:bg-green-600"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </a>

                  {/* Call Us Button */}
                  <a
                    href={`tel:${bureauData_?.mobileNumber}`}
                    className="flex items-center justify-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    <FaPhoneAlt className="mr-2" />
                    Call Us
                  </a>

                  {/* Email Us Button */}
                  <a
                    href={`mailto:${bureauData_?.email}`}
                    className="flex items-center justify-center bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
                  >
                    <FaRegEnvelope className="mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
