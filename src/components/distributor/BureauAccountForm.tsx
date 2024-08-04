import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ImageUploadComponent from '../ImageUpload';

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

  const [errors, setErrors] = useState({
    bureauName: '',
    mobile: '',
    about: '',
    location: '',
    email: '',
    ownerName: '',
    password: '',
  });

  const [showNextComponent, setShowNextComponent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    if (!formData.bureauName) {
      formErrors.bureauName = 'Bureau Name is required.';
      isValid = false;
    }

    if (!formData.ownerName) {
      formErrors.ownerName = 'Owner Name is required.';
      isValid = false;
    }

    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = 'Mobile Number must be exactly 10 digits.';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required.';
      isValid = false;
    }

    if (!formData.password) {
      formErrors.password = 'Password is required.';
      isValid = false;
    }

    if (!formData.location) {
      formErrors.location = 'Location is required.';
      isValid = false;
    }

    if (!formData.about) {
      formErrors.about = 'About is required.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form data:', formData);
    }
  };

  const handleNextBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form submission
    if (validateForm()) {
      setShowNextComponent(true);
    }
  };

  return (
    <>
      <Navbar title="Distributor Company Name" tab1="Home" tab2="Logout" tab3="Profile" screenType="DISTRIBUTOR" />
      {showNextComponent ? (
        <>
          <ImageUploadComponent />
          <button
            onClick={handleSubmit}
            className=" m-6 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6">
          <form className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-xs sm:max-w-md" onSubmit={handleSubmit}>
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
              />
              {errors.bureauName && <span className="text-red-500 text-sm">{errors.bureauName}</span>}
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
              />
              {errors.ownerName && <span className="text-red-500 text-sm">{errors.ownerName}</span>}
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
              />
              {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Email"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
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
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <textarea
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="h-20 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Location"
              />
              {errors.location && <span className="text-red-500 text-sm">{errors.location}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
              <textarea
                id="about"
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                className="mt-1 h-20 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Details"
              />
              {errors.about && <span className="text-red-500 text-sm">{errors.about}</span>}
            </div>

            <button
              onClick={handleNextBtn}
              className="mt-4 w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none"
            >
              Next
            </button>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
}

export default BureauAccountForm;
