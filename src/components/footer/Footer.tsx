import React from "react";
import '../../App.css';

const Footer = () => {
  return (
    <div className="bg-amber-500 text-white">
      {/* Information, Others, Contact Section */}
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="flex flex-col w-full md:w-1/3 p-2">
          <a href="#" className="text-white">
            <h4 className="text-lg">Information</h4>
          </a>
          <hr className="border-white my-2 w-14" />
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p><a href="#" className="text-white">Back</a></p>
        </div>

        <div className="flex flex-col w-full md:w-1/3 p-2">
          <a href="#" className="text-white">
            <h4 className="text-lg">Others</h4>
          </a>
          <hr className="border-white my-2 w-14" />
          <p><a href="#" className="text-white">Registration</a></p>
          <p><a href="#" className="text-white">Log In</a></p>
        </div>

        <div className="flex flex-col w-full md:w-1/3 p-2">
          <a href="#" className="text-white">
            <h4 className="text-lg">Contact</h4>
          </a>
          <hr className="border-white my-2 w-14" />
          <p>Office address: Padma Nilayam, RTC Colony, Near LB Nagar Metro Station, Hyderabad, Telangana, 500074.</p>
          <p>Contact details: 9859242242, 9063420559, madhulotmall108@gmail.com</p>
          <p>Phone: 09859242242</p>
        </div>
      </div>
      <hr className="bg-slate-200" />
      {/* Icon Section and Copyright Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex space-x-4">
          <div className="flex justify-center items-center w-10 h-10 border-2 border-white rounded-full bg-amber-600 p-1 icon-container">
            <img src="https://cdn-icons-png.freepik.com/256/6422/6422199.png?ga=GA1.2.1959493086.1721293510&semt=ais_hybrid" alt="Icon 1" className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center w-10 h-10 border-2 border-white rounded-full bg-amber-600 p-1 icon-container">
            <img src="https://cdn-icons-png.freepik.com/256/6422/6422210.png?ga=GA1.2.1959493086.1721293510&semt=ais_hybrid" alt="Icon 2" className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center w-10 h-10 border-2 border-white rounded-full bg-amber-600 p-1 icon-container">
            <img src="https://cdn-icons-png.freepik.com/256/6422/6422202.png" alt="Icon 3" className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center w-10 h-10 border-2 border-white rounded-full bg-amber-600 p-1 icon-container">
            <img src="https://cdn-icons-png.freepik.com/256/6422/6422200.png?ga=GA1.2.1959493086.1721293510&semt=sph" alt="Icon 4" className="w-8 h-8" />
          </div>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <p className="text-md">&copy; 2023 Global Matrimony. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;