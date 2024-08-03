import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [termsOpen, setTermsOpen] = useState(false);

  const handleTermsOpen = () => {
    setTermsOpen(true);
  };

  const handleTermsClose = () => {
    setTermsOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            onChange={handleTermsOpen}
          />
          <label htmlFor="terms" className="text-sm font-medium text-gray-700">I agree to the terms and conditions</label>
        </div>
        <div className="mb-4">
          <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700">Upload PAN Card / Aadhaar Card</label>
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
        >
          Register
        </button>
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${termsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Terms and Conditions</h2>
            <p className="text-sm text-gray-700 mb-4">
              [Add your terms and conditions content here.]
            </p>
            <button
              type="button"
              onClick={handleTermsClose}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
