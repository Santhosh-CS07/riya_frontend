import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {
  FaWhatsapp,
  FaRegEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaHandshake,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { bureauData } from "../api/endpoints/authEndPoints";
import { BASE_BACKEND_URL } from "../config";

const BureauWebsite: React.FC = () => {
  const navigate = useNavigate();
  const { bureauName, bureauId } = useParams<{
    bureauName: string;
    bureauId: string;
  }>() as any;

  const [bureauData_, setBureauData] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]) as any;
  const [myPofileCount, setMyProfileCount] = useState<number>(0);
  const [allPofileCount, setAllProfileCount] = useState<number>(0);

  const handleButtonClick = (flag: string) => {
    const url = "https://expo.dev/artifacts/eas/bSXhY4JboGExZFtnb3kwwW.apk";
    window.open(url, "_blank");
  };

  const fetchBureauData = async () => {
    const res: any = await bureauData({ bureauId });
    try {
      if (res?.data?.status === 1) {
        setBureauData(res?.data?.data);
        setImages(res?.data?.data?.bureauImages);
        setMyProfileCount(res?.data?.myProfilesCount); // You can update this with real data
        setAllProfileCount(res?.data?.allProfilesCount); // You can update this with real data
      } else {
        console.error("Failed to fetch bureau data:", res.message);
      }
    } catch (error) {
      console.error("An error occurred while fetching bureau data:", error);
    }
  };

  useEffect(() => {
    fetchBureauData();
  }, [bureauId]);

  useEffect(() => {
    if (bureauData_?.bureauName) {
      document.title = `Welcome to ${bureauData_?.bureauName}`;
    }
  }, [bureauData_?.bureauName]);

  useEffect(() => {
    if (bureauData_?.bureauName) {
      const firstLetter = bureauData_?.bureauName.charAt(0).toUpperCase();

      // Create a canvas to draw the favicon
      const canvas: any = document.createElement("canvas");
      const ctx: any = canvas.getContext("2d");
      canvas.width = 32;
      canvas.height = 32;
      ctx.fillStyle = "#4CAF50"; // Set the background color
      ctx.fillRect(0, 0, 32, 32);

      // Draw the first letter on the canvas
      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(firstLetter, 8, 24);

      // Convert the canvas to an image and set it as the favicon
      const faviconUrl = canvas.toDataURL("image/png");
      const link = document.createElement("link");
      link.rel = "icon";
      link.href = faviconUrl;
      document.head.appendChild(link);
    }
  }, [bureauData_?.bureauName]);

  // const handleViewMore = () => {
  //   const formattedBureauName = bureauName?.replace(/\s+/g, "").toLowerCase();
  //   navigate(`/profile/${formattedBureauName}/${bureauId}`);
  // };
  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`Welcome to ${bureauData_?.bureauName}, where we offer personalized matchmaking, verified profiles, and 24/7 customer support.`}
        />
        <meta
          name="keywords"
          content="matchmaking, bureau, verified profiles, customer support, profiles"
        />
        <meta name="author" content={bureauData_?.bureauName} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:title"
          content={`${bureauData_?.bureauName} - Bureau Website`}
        />
        <meta
          property="og:description"
          content={`Join ${bureauData_?.bureauName} for personalized matchmaking and access to verified profiles. Contact us for a consultation today!`}
        />
        <meta
          property="og:image"
          content={`${BASE_BACKEND_URL + images[0]?.filePath}`}
        />
        <meta
          property="og:image:alt"
          content={`Image for ${bureauData_?.bureauName}`}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${bureauData_?.bureauName} - Bureau Website`}
        />
        <meta
          name="twitter:description"
          content={`Find your perfect match at ${bureauData_?.bureauName}. We offer personalized services to make your search easier.`}
        />
        <meta
          name="twitter:image"
          content={`${BASE_BACKEND_URL + images[0]?.filePath}`}
        />
        <title>Welcome to {bureauData_?.bureauName}</title>
      </head>

      <Navbar
        title={bureauData_?.bureauName}
        tab1="Home"
        tab2="Login"
        tab3="Register"
        screenType="DISTRIBUTOR"
        isBureau={true}
        allPofileCount={allPofileCount}
        myPofileCount={myPofileCount}
        bureauData_={bureauData_}
      />

      {/* Add padding to compensate for the navbar's height */}
      <div className="mt-[140px]">
        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-center pt-[55vh] sm:pt-[181vh] pb-4 px-6 lg:px-24 bg-gradient-to-r from-blue-50 to-white">
          <img
            src={`${BASE_BACKEND_URL + images[0]?.filePath}`}
            alt="Floating decoration"
            className="absolute bottom-0 w-full left-0 object-cover animate-float delay-300"
          />

          <div className="mt-8 z-10 flex sm:flex-row sm:justify-center gap-4">
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
        </div>
      </div>

      {/* <button
        onClick={handleViewMore}
        className="my-8 mx-16 bg-gray-400 px-10 py-2 rounded"
      >
        viewMore
      </button> */}
      {/* Services Section */}
      <div className="w-full py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-24">
          <ServiceCard
            icon={<FaHandshake className="text-4xl text-green-600" />}
            title="Personalized Matchmaking"
            description="We provide personalized matchmaking services that cater to your specific needs and preferences."
          />
          <ServiceCard
            icon={<FaCheckCircle className="text-4xl text-blue-600" />}
            title="Verified Profiles"
            description="All profiles are verified to ensure genuine connections for our clients."
          />
          <ServiceCard
            icon={<FaHeadset className="text-4xl text-red-600" />}
            title="24/7 Customer Support"
            description="Our team is available around the clock to assist you with any questions or issues."
          />
          <ServiceCard
            icon={<FaBuilding className="text-4xl text-purple-600" />}
            title="All India Profiles"
            description="Onboard bureau owners to provide access to all Indian profiles for marriages and expand your network."
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Testimonials
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-8 px-6 lg:px-24">
          <TestimonialCard
            content="Riya Matrimony helped me find my soulmate. The process was easy and the customer support was fantastic."
            author="Priya Sharma"
          />
          <TestimonialCard
            content="I was able to find a perfect match for my daughter through Riya Matrimony. Highly recommended!"
            author="Rajesh Kumar"
          />
          <TestimonialCard
            content="Excellent service with a wide range of verified profiles. Thank you for your support!"
            author="Sunita Patel"
          />
        </div>
      </div>

      {/* Support Section */}
      {/* <div className="bg-blue-50 py-16 w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Need Help?</h2>
        <p className="text-lg text-gray-600 mb-8">
          We’re here to help 24/7. Contact us via WhatsApp or call our support
          team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <ContactButton
            href={`https://wa.me/${
              bureauData_?.mobileNumber
            }?text=${encodeURIComponent("Hi, I need help")}`}
            label="WhatsApp"
            icon={<FaWhatsapp />}
            className="bg-green-500 hover:bg-green-600"
          />
          <ContactButton
            href={`tel:${bureauData_?.mobileNumber}`}
            label="Call Us"
            icon={<FaPhoneAlt />}
            className="bg-blue-600 hover:bg-blue-700"
          />
          <ContactButton
            href={`mailto:${bureauData_?.email}`}
            label="Email Us"
            icon={<FaRegEnvelope />}
            className="bg-gray-600 hover:bg-gray-700"
          />
        </div>
      </div> */}

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

      {/* Images Section */}
      <div className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Images
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img: any) => (
            <div
              key={img?.filePath}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`${BASE_BACKEND_URL + img?.filePath}`}
                alt="banner images"
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {bureauData_?.bureauName} is dedicated to helping individuals find
          their life partners. With years of experience and a vast database of
          verified profiles, we make the process easier for you to find the
          perfect match.
        </p>
      </div>

      <Footer
        name={bureauData_?.bureauName}
        mobileNumber={bureauData_?.mobileNumber}
        location={bureauData_?.location}
        email={bureauData_?.email}
        isBureau={true}
      />
    </>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-lg text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({
  content,
  author,
}: {
  content: string;
  author: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
    <p className="text-lg text-gray-600 mb-4">"{content}"</p>
    <p className="text-xl font-bold text-gray-800">{author}</p>
  </div>
);

const ContactButton = ({
  href,
  label,
  icon,
  className,
}: {
  href: string;
  label: string;
  icon: JSX.Element;
  className: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-2 justify-center px-6 py-3 text-white rounded-lg transition duration-200 ${className}`}
  >
    {icon}
    {label}
  </a>
);

export default BureauWebsite;
