import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDistributorProfile } from "../services/authServices";
import {
  FaTools,
  FaHeadset,
  FaGlobe,
  FaAndroid,
  FaApple,
  FaChartLine,
  FaUserShield,
  FaUserPlus,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaIdCard,
} from "react-icons/fa";
import ImageViewer from "../components/image/ImageViewer";
import BureauAccountForm from "../components/distributor/BureauAccountForm";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const DistributorWebsite: React.FC = () => {
  const { distributorId } = useParams<{ distributorId: string }>();
  const [userDetails, setUserDetails] = useState<any>(null);
  const [bureauAccountForm, setCreateBureauAccountForm] = useState(false);

  const fetchDistributorDetails = async () => {
    try {
      const res = await getDistributorProfile({
        distributorId: String(distributorId),
      });
      setUserDetails(res.data);
    } catch (error) {
      console.error("Error fetching distributor details:", error);
    }
  };

  useEffect(() => {
    if (distributorId) {
      fetchDistributorDetails();
    }
  }, [distributorId]);

  if (!userDetails) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  const document = [
    {
      filePath: "https://picsum.photos/1208/600",
      fileName: "Beautiful Sunset",
      banner: 1,
    },
    {
      filePath: "https://picsum.photos/1208/700",
      fileName: "Mountain Landscape",
      banner: 2,
    },
    {
      filePath: "https://picsum.photos/1208/810",
      fileName: "City Lights",
      banner: 3,
    },
    {
      filePath: "https://picsum.photos/1208/601",
      fileName: "Ocean View",
      banner: 4,
    },
    {
      filePath: "https://picsum.photos/1208/600",
      fileName: "Forest Path",
      banner: 5,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-2">
      <h1>Logo comes here</h1>
      {/* Header Section */}
      <div className="text-center mb-12 bg-gradient-to-r from-blue-900 via-yellow-500 to-teal-600 text-white py-10">
        <h1 className="text-4xl font-extrabold mb-2">
          Welcome to {userDetails.companyName}
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          We offer the best mobile app to manage your profiles and access global
          profiles.
        </p>
      </div>

      {bureauAccountForm ? (
        <BureauAccountForm
          Id={distributorId}
          setCreateBureauAccountForm={setCreateBureauAccountForm}
        />
      ) : (
        <div className="relative z-10 flex flex-col sm:flex-row sm:justify-center gap-4 m-2">
          <button
            onClick={() => setCreateBureauAccountForm(true)}
            className="bg-green-700 text-white py-2 px-4 rounded-md"
          >
            Create Marriage Bureau Account
          </button>
        </div>
      )}

      {/* Get Our App Section */}
      {/* Uncomment if you want to display this section */}
      {/* <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6">Get Our App</h2>
        <p className="text-lg mb-6">
          Download our app to manage your profiles, access global profiles, and much more.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
          >
            <FaAndroid className="text-xl" />
            <span>Google Play</span>
          </motion.a>
          <motion.a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
          >
            <FaApple className="text-xl" />
            <span>App Store</span>
          </motion.a>
        </div>
      </div> */}

      {/* Our Services Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          We provide powerful software tools designed specifically for bureau
          owners to triple their revenue, access global profiles, and offer
          outstanding customer support.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChartLine className="text-7xl text-blue-600 mb-3" />
            <h3 className="text-xl font-medium">Revenue Growth</h3>
            <p className="text-lg mt-4 max-w-xs text-center">
              Increase your revenue up to 3 times with our specialized software
              tools tailored for bureau owners.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGlobe className="text-7xl text-green-600 mb-3" />
            <h3 className="text-xl font-medium">Global Profiles</h3>
            <p className="text-lg mt-4 max-w-xs text-center">
              Access and manage global profiles effortlessly with our
              user-friendly platform.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaUserShield className="text-7xl text-purple-600 mb-3" />
            <h3 className="text-xl font-medium">Trusted Platform</h3>
            <p className="text-lg mt-4 max-w-xs text-center">
              Enjoy 100% trusted and secure services with 24/7 customer support
              and easy onboarding processes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Distributor Details Section */}
      <div className="container mx-auto p-2 md:p-2">
        <div className="p-6 md:flex md:space-x-2">
          <div className="md:w-1/2">
            <div className="bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 p-6 rounded-lg shadow-lg border border-gray-200 space-y-4">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                <FaUser className="text-2xl text-blue-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Name:</p>
                  <p className="text-lg font-medium text-gray-600">
                    {userDetails.fullName}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                <FaEnvelope className="text-2xl text-blue-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Email:</p>
                  <p className="text-lg font-medium text-gray-600">
                    {userDetails.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                <FaPhone className="text-2xl text-green-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Mobile:</p>
                  <p className="text-lg font-medium text-gray-600">
                    {userDetails.mobileNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                <FaMapMarkerAlt className="text-2xl text-red-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Location:
                  </p>
                  <p className="text-lg font-medium text-gray-600">
                    {userDetails.city}, {userDetails.state}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                <FaCalendarAlt className="text-2xl text-yellow-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Member Since:
                  </p>
                  <p className="text-lg font-medium text-gray-600">
                    {userDetails.createdAt}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                <FaIdCard className="text-2xl text-teal-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Job Title:
                  </p>
                  <p className="text-lg font-medium text-gray-600">
                    {userDetails.jobTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <ImageViewer documents={userDetails.documents} />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-12 mb-12">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="text-lg mb-6">
          Get in touch with us for any inquiries or support.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={`mailto:${userDetails.email}`}
            className="flex items-center space-x-2 text-blue-600 hover:underline"
          >
            <FaEnvelope className="text-2xl" />
            <span>{userDetails.email}</span>
          </a>
          <a
            href={`tel:${userDetails.mobileNumber}`}
            className="flex items-center space-x-2 text-green-600 hover:underline"
          >
            <FaPhone className="text-2xl" />
            <span>{userDetails.mobileNumber}</span>
          </a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6">Follow Us</h2>
        <div className="flex justify-center gap-6">
          <a
            href={userDetails.socialLinks?.instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href={userDetails.socialLinks?.facebook || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href={userDetails.socialLinks?.youtube || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800"
          >
            <FaYoutube className="text-3xl" />
          </a>
          <a
            href={userDetails.socialLinks?.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-900"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DistributorWebsite;
