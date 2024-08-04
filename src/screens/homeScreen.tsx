import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { FaWhatsapp } from "react-icons/fa";

const HomePage: React.FC = () => {
  const navigate: any = useNavigate();

  // Function to handle button click and navigate to the login page
  const handleButtonClick = (flag: any) => {
    if (flag === "login") {
      navigate("/login");
    } else {
      navigate("/create-distributor-account");
    }
  };

  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-col  justify-between text-center my-8 px-8">
        {/* Welcome message and buttons */}
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="min-h-1 min-w-1">
              <span className="m-2 p-1 text-xl">
                Welcome to Our Website Riya Matrimony.
                <br /> We Ensure you the Best Partners For you and your family.
              </span>
            </div>

            {/* Buttons for creating and logging into a distributor account */}
            <button
              className="bg-cyan-500 px-4 py-2 m-2 rounded-md text-white hover:bg-cyan-600"
              onClick={() => {
                handleButtonClick("register");
              }}
            >
              Create a Distributor Account
            </button>
            <button
              className="bg-cyan-500 px-4  py-2 m-2 rounded-md text-white hover:bg-cyan-600"
              onClick={() => {
                handleButtonClick("login");
              }}
            >
              Login to Distributor Account
            </button>
          </div>
        </div>

        {/* Support section */}
        <div>
          <h1 className="text-3xl mb-4">Any Questions?</h1>
          <h1>CALL US FOR SUPPORT (24/7)*</h1>
          <div className="flex items-center justify-center">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "hi, need help"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-4xl text-white rounded bg-green-500 px-4 py-2 my-4"
            >
              WhatsApp <FaWhatsapp className="mt-1 ml-2" />
            </a>
          </div>
        </div>

        {/* Happy stories section */}
        <div>
          <h1 className="text-4xl mb-4">Millions of Happy Stories</h1>
        </div>

        {/* About us section */}
        <div>
          <h1 className="text-4xl mb-4">About Us</h1>
          <p>
            Marriage, a legally and socially sanctioned union, usually between a
            man and a woman, that is regulated by laws, rules, customs, beliefs,
            and attitudes that prescribe the rights and duties of the partners
            and accords status to their offspring (if any).
          </p>
        </div>

        {/* Footer component */}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
