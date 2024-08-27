import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {
  FaWhatsapp,
  FaRegEnvelope,
  FaPhoneAlt,
  FaBuilding,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaHandshake, FaCheckCircle, FaHeadset } from "react-icons/fa";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = (flag: string) => {
    if (flag === "login") {
      navigate("/login");
    } else {
      navigate("/create-distributor-account");
    }
  };

  return (
    <>
      <Navbar title="Riya Matrimony" tab1="Home" tab2="Login" tab3="Register" />

      <div className="mt-20 relative flex flex-col items-center justify-center text-center py-20 px-6 lg:px-24 bg-gradient-to-r from-blue-50 to-white overflow-hidden">
        {/* Floating Images */}
        <img
          src={"marriage.jpg"}
          alt="Floating decoration 3"
          className="absolute bottom-0 left-0 w-full h-full object-cover opacity-60 animate-float delay-300"
        />

        <div className="relative z-10 mb-12 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
            Welcome to Riya Matrimony
          </h1>
          <p className="text-lg lg:text-xl text-gray-900 max-w-2xl mx-auto">
            Finding the perfect partner for you and your family is our priority.
            Join millions who have found their happily ever after with us.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:justify-center gap-4 mb-12">
          <button
            className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition duration-200"
            onClick={() => handleButtonClick("register")}
          >
            Create a Distributor Account
          </button>
          <button
            className="bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition duration-200"
            onClick={() => handleButtonClick("login")}
          >
            Login to Distributor Account
          </button>
        </div>
      </div>
      {/* Services Section */}
      <div className="w-full py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-24">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4 text-4xl text-green-600">
              <FaHandshake />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Personalized Matchmaking
            </h3>
            <p className="text-gray-600">
              We provide personalized matchmaking services that cater to your
              specific needs and preferences.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4 text-4xl text-blue-600">
              <FaCheckCircle />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Verified Profiles
            </h3>
            <p className="text-gray-600">
              All profiles are verified to ensure genuine connections for our
              clients.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4 text-4xl text-red-600">
              <FaHeadset />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600">
              Our team is available around the clock to assist you with any
              questions or issues.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4 text-4xl text-purple-600">
              <FaBuilding />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Business Opportunities
            </h3>
            <p className="text-gray-600">
              Onboard bureau owners to provide access to all Indian profiles for
              marriages and expand your network.
            </p>
          </motion.div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="w-full py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Testimonials
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-8 px-6 lg:px-24">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "Riya Matrimony helped me find my soulmate. The process was easy
              and the customer support was fantastic."
            </p>
            <p className="font-bold text-gray-800">- Priya Sharma</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "I was able to find a perfect match for my daughter through Riya
              Matrimony. Highly recommended!"
            </p>
            <p className="font-bold text-gray-800">- Rajesh Kumar</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "Excellent service with a wide range of verified profiles. Thank
              you for your support!"
            </p>
            <p className="font-bold text-gray-800">- Sunita Patel</p>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-blue-50 py-16 w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Need Help?
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We’re here to help 24/7. Contact us via WhatsApp or call our support
          team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={`https://wa.me/?text=${encodeURIComponent("Hi, need help")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white text-xl font-medium px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition"
          >
            WhatsApp <FaWhatsapp className="ml-2" />
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center bg-blue-600 text-white text-xl font-medium px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Call Us <FaPhoneAlt className="ml-2" />
          </a>
          <a
            href="mailto:support@riyamatri.com"
            className="inline-flex items-center justify-center bg-gray-600 text-white text-xl font-medium px-8 py-4 rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            Email Us <FaRegEnvelope className="ml-2" />
          </a>
        </div>
      </div>

      {/* Happy Stories Section */}
      <div className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Millions of Happy Stories
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Over the years, we have helped countless individuals find their
          perfect match. Our success stories are a testament to our dedication
          to making the journey of finding love a memorable one.
        </p>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Riya Matrimony is dedicated to helping individuals find their life
          partners. With our extensive experience in the matchmaking industry,
          we offer personalized services that cater to your specific needs. We
          believe in creating a safe and reliable platform where you can connect
          with genuine individuals looking for long-term relationships.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
