import React from "react";
import "../../App.css"; // Add your global styles

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-yellow-500 to-teal-600 text-white py-8">
      {/* Information, Others, Contact Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between p-4">
        <div className="flex flex-col w-full md:w-1/3 p-2">
          <h4 className="text-lg font-semibold mb-2">Information</h4>
          <hr className="border-white my-2 w-14" />
          <a href="#" className="hover:underline mb-1">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline mb-1">
            Terms and Conditions
          </a>
          <a href="#" className="hover:underline">
            Back
          </a>
        </div>

        <div className="flex flex-col w-full md:w-1/3 p-2">
          <h4 className="text-lg font-semibold mb-2">Others</h4>
          <hr className="border-white my-2 w-14" />
          <a href="#" className="hover:underline mb-1">
            Registration
          </a>
          <a href="#" className="hover:underline mb-1">
            Log In
          </a>
        </div>

        <div className="flex flex-col w-full md:w-1/3 p-2">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <hr className="border-white my-2 w-14" />
          <p>
            Office Address:- flat no,103 , SRI Gayatri apartment,opp,D Mart,
            Vanasthali puram, 500070, Hyderabad, Telangana,
          </p>
          <p>Contact: 9859242242, 9063420559</p>
          <p>Email: madhulotmall108@gmail.com</p>
          <p>Phone: 09859242242</p>
        </div>
      </div>
      <hr className="border-white my-4" />
      {/* Icon Section and Copyright Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <div className="flex justify-center items-center w-10 h-10 border-2 border-white rounded-full bg-green-600 p-1">
            <img
              src="https://cdn-icons-png.freepik.com/256/6422/6422199.png?ga=GA1.2.1959493086.1721293510&semt=ais_hybrid"
              alt="Icon 1"
              className="w-8 h-8"
            />
          </div>
          <div className="flex justify-center items-center w-10 h-10 border-2 border-white rounded-full bg-green-600 p-1">
            <img
              src="https://cdn-icons-png.freepik.com/256/6422/6422210.png?ga=GA1.2.1959493086.1721293510&semt=ais_hybrid"
              alt="Icon 2"
              className="w-8 h-8"
            />
          </div>
          <div className="flex justify-center items-center w-10 h-10 border-2 border-white rounded-full bg-green-600 p-1">
            <img
              src="https://cdn-icons-png.freepik.com/256/6422/6422202.png"
              alt="Icon 3"
              className="w-8 h-8"
            />
          </div>
          <div className="flex justify-center items-center w-10 h-10 border-2 border-white rounded-full bg-green-600 p-1">
            <img
              src="https://cdn-icons-png.freepik.com/256/6422/6422200.png?ga=GA1.2.1959493086.1721293510&semt=sph"
              alt="Icon 4"
              className="w-8 h-8"
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-md">
            &copy; 2024 Riyamatrimony.com | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
