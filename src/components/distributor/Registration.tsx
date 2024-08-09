import React, { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import SuccessModal from "./SuccessModal";
import GlobalModal from "../GlobalModal";
import { registerDistributor } from "../../services/authServices";
import ImageUploadComponent from "../image/ImageUpload";

const RegistrationForm: React.FC = () => {
  const navigate: any = useNavigate();
  const [termsOpen, setTermsOpen] = useState(false);
  const [uploadImages, setUploadImages] = useState(false);
  const [imageFiles, setImages] = useState([]) as any;
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [distributorId, setDistributorId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobileNumber: "",
    password: "",
    address: "",
    terms: false,
    fileUpload: null,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobileNumber: "",
    password: "",
    address: "",
    terms: "",
    fileUpload: "",
  });

  const handleTermsOpen = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTermsOpen(true);
  };

  const handleTermsClose = () => {
    setTermsOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked, files } = e.target as any;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    if (!formData.fullName) {
      formErrors.fullName = "Full Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      formErrors.email = "Email is required.";
      isValid = false;
    }
    if (!formData.mobileNumber || !/^\d{10}$/.test(formData.mobileNumber)) {
      formErrors.mobileNumber = "Mobile Number must be exactly 10 digits.";
      isValid = false;
    }
    if (!formData.password) {
      formErrors.password = "Password is required.";
      isValid = false;
    }
    if (!formData.address) {
      formErrors.address = "Address is required.";
      isValid = false;
    }
    if (!formData.terms) {
      formErrors.terms = "You must agree to the terms and conditions.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const generateDistributorId = () => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // Generates a 5-digit number
    return `D${randomNumber}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    // Create a FormData object to handle file uploads
    const id: any = generateDistributorId();
    const formData_: any = new FormData();
    formData_.append("email", formData.email);
    formData_.append("password", formData.password);
    formData_.append("fullName", formData.fullName);
    formData_.append("companyName", formData.companyName);
    formData_.append("mobileNumber", formData.mobileNumber);
    formData_.append("location", formData.address);
    formData_.append("distributorId", id);

    // Append banner images
    imageFiles.forEach((file: any, index: any) => {
      if (file) {
        formData_.append(`bannerImage${index + 1}`, file);
      }
    });

    try {
      // Send form data to the server
      const res: any = await registerDistributor(formData_);
      if (res.status === 1) {
        setDistributorId(id);
        setSuccessModalOpen(true);
      } else {
        alert("Mobile number already exists");
        setUploadImages(false);
      }

    } catch (error) {
      console.error("Error registering distributor:", error);
    }
  };

  const handleSuccessModalClose = () => {
    setSuccessModalOpen(false);
    navigate("/login"); // Navigate to the login page
  };

  const handleTermsModalClose = () => {
    setTermsOpen(false);
  };

  const handleNextBtn = () => {
    if (validateForm()) {
      setUploadImages(true);
    }
  };

  console.log("images___", imageFiles)

  return (
    <>
      <Navbar title="Riya Matrymony" tab1="Home" tab2="Login" tab3="Register" />
      <div>
        {uploadImages ? (
          <>
            <ImageUploadComponent setImagesList={setImages} />
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="m-6 px-4 py-2 w-[40vh] bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
            <div className="text-blue-500 text-center my-4">
              <a href="/login">Already have an account | login here</a>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div
              className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
            >
              <h1 className="text-3xl font-bold mb-6 text-center font-serif	">
                Create Distributor account
              </h1>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.fullName ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name/Society Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.companyName ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Enter your Company name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.mobileNumber ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Enter your mobile number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.address ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="terms"
                  className="inline-flex items-center text-sm font-medium text-gray-700"
                >
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className={`mr-2 ${errors.terms ? "border-red-500" : "border-gray-300"
                      } rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  I agree to the{" "}
                  <span
                    className="text-blue-600 cursor-pointer"
                    onClick={handleTermsOpen}
                  >
                    terms and conditions
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
                )}
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="m-6 px-4 py-2 w-full bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleNextBtn}
                >
                  Next
                </button>
              </div>
              <div className="text-blue-500 text-center my-4">
                <a href="/login">Already have an account | login here</a>
              </div>
            </div>
          </div>
        )}
        {termsOpen && (
          <GlobalModal
            handleTermsModalClose={handleTermsModalClose}
            title={"Terms and Conditions"}
            message={"list comes here"}
          />
        )}
        {successModalOpen && (<SuccessModal
          isOpen={successModalOpen}
          onClose={handleSuccessModalClose}
          distributorId={distributorId}
        />)}

      </div>
      <Footer />
    </>
  );
};

export default RegistrationForm;
