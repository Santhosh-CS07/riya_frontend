import React, { useState } from "react";
import ImageUploadComponent from "../image/ImageUpload";
import { useNavigate } from "react-router-dom";
import { registerBureauAccount } from "../../services/authServices";

const BureauAccountForm = ({ Id, setCreateBureauAccountForm }: any) => {
  const navigate = useNavigate();
  const distributorId = localStorage.getItem("distributorId") || Id;
  const companyName = localStorage.getItem("companyName");
  const [imageFiles, setImages] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    bureauName: "",
    mobile: "",
    about: "",
    location: "",
    email: "",
    ownerName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    bureauName: "",
    mobile: "",
    about: "",
    location: "",
    email: "",
    ownerName: "",
    password: "",
  });

  const [showNextComponent, setShowNextComponent] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {
      bureauName: "",
      mobile: "",
      about: "",
      location: "",
      email: "",
      ownerName: "",
      password: "",
    };

    if (!formData.bureauName.trim())
      newErrors.bureauName = "Bureau Name is required";
    if (!formData.ownerName.trim())
      newErrors.ownerName = "Owner Name is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile No is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile No must be 10 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.about.trim()) newErrors.about = "About is required";

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleNextBtn = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setShowNextComponent(true);
    }
  };

  const generateDistributorId = () => {
    const randomNumber = Math.floor(10000000 + Math.random() * 900000000); // Generates a 5-digit number
    return randomNumber;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id: any = generateDistributorId();
    const formData_ = new FormData();
    formData_.append("bureauName", formData.bureauName);
    formData_.append("password", formData.password);
    formData_.append("ownerName", formData.ownerName);
    formData_.append("mobileNumber", formData.mobile);
    formData_.append("location", formData.location);
    formData_.append("about", formData.about);
    formData_.append("email", formData.email);
    formData_.append("bureauId", id);
    formData_.append("distributorId", distributorId || "");
    imageFiles.forEach((file, index) => {
      if (file) {
        formData_.append(`bannerImage${index + 1}`, file);
      }
    });

    try {
      // Send form data to the server
      const res = await registerBureauAccount(formData_);
      if (res.status === 1) {
        alert("Bureau Account Created Successfully");
        if (!setCreateBureauAccountForm) {
          navigate("/distributorDashboard");
        } else {
          setCreateBureauAccountForm(false);
        }
      } else {
        alert("Mobile number already exists");
        setShowNextComponent(false);
      }
      setFormData({
        bureauName: "",
        mobile: "",
        about: "",
        location: "",
        email: "",
        ownerName: "",
        password: "",
      });
    } catch (error) {
      console.error("Error registering distributor:", error);
    }
  };

  return (
    <>
      {/* <Navbar
        title={companyName}
        tab1="Home"
        tab2="12345"
        tab3="Profile"
        distributorId={distributorId}
        screenType="DISTRIBUTOR"
      /> */}
      <div className="">
        {showNextComponent ? (
          <>
            <ImageUploadComponent setImagesList={setImages} />
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="mt-4 w-[40vh] my-4 py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6">
            <div className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-xs sm:max-w-md">
              <h1 className="text-3xl font-bold mb-6 text-center font-serif">
                Bureau Account Registration
              </h1>
              <div className="mb-4">
                <label
                  htmlFor="bureauName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bureau Name
                </label>
                <input
                  type="text"
                  id="bureauName"
                  name="bureauName"
                  value={formData.bureauName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Bureau Name"
                />
                {errors.bureauName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.bureauName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="ownerName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Owner Name
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Owner Name"
                />
                {errors.ownerName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.ownerName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile No
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Mobile No"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Location"
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  About
                </label>
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Tell us about your bureau"
                />
                {errors.about && (
                  <p className="text-red-500 text-xs mt-1">{errors.about}</p>
                )}
              </div>
              <div className="text-center">
                <button
                  onClick={handleNextBtn}
                  className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BureauAccountForm;
