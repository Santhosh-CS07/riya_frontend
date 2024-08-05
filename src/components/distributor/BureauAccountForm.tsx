import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import BannerUpload from './BannerUpload';

const BureauAccountForm: React.FC = () => {
  const [formData, setFormData] = useState({
    bureauName: '',
    mobile: '',
    about: '',
    location: '',
    email: '',
    ownerName: '',
    password: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [showNextComponent, setShowNextComponent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = Object.values(formData).every(field => field.trim() !== '');
    setIsFormValid(isValid);

    if (isValid) {
      setShowNextComponent(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  if (showNextComponent) {
    return <NextComponent />;
  }

  return (
    <>
    <Navbar title="Distributor Company Name" tab1="Home" tab2="12345" tab3="Profile"/>
    <div className="flex items-center justify-center min-h-screen bg-gray-200 opacity-75 py-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded shadow-lg w-full max-w-xs sm:max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">Bureau Account Registration</h1>
        <div className="mb-4">
          <label htmlFor="bureauName" className="block text-sm font-medium text-gray-700">Bureau Name</label>
          <input
            type="text"
            id="bureauName"
            name="bureauName"
            value={formData.bureauName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Bureau Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Owner Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Mobile No"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Email"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Password"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Location"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Details"
            required
          />
        </div>
        
        {/* <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
        >
          Submit
        </button> */}
        <button
          type="button"
          onClick={handleSubmit}
          className="mt-4 w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none"
        >
          Next
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
}

const NextComponent: React.FC = () => {
  return (
    <div>
        {/* className="flex items-center justify-center min-h-screen bg-gray-100" */}
      {/* <h1 className="text-2xl font-bold">Next Component Content Here</h1> */}
      <Navbar  title="Distributor Company Name" tab1="Home" tab2="12345" tab3="Profile"/>
      <BannerUpload />
      <Footer />
    </div>
  );
}

export default BureauAccountForm;
