import React, { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import SuccessModal from "./SuccessModal";
import GlobalModal from "../GlobalModal";
import { registerDistributor } from "../../services/authServices";
import ImageUploadComponent from "../ImageUpload";

const RegistrationForm: React.FC = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  const [uploadImages, setUploadImages] = useState(false);
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
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [distributorId, setDistributorId] = useState("");
  const navigate: any = useNavigate();

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

  const generateDistributorId = (): string => {
    const randomNumbers = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
    return `D${randomNumbers}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id: any = generateDistributorId();

    // Create a FormData object to handle file uploads
    const formData_: any = new FormData();

    formData_.append("email", formData.email);
    formData_.append("password", formData.password);
    formData_.append("fullName", formData.fullName);
    formData_.append("companyName", formData.companyName);
    formData_.append("mobileNumber", formData.mobileNumber);
    formData_.append("location", formData.address);
    formData_.append("distributorId", id);

    // Append file if it exists
    if (formData.fileUpload) {
      formData_.append("fileUpload", formData.fileUpload);
    }

    try {
      // Send form data to the server
      await registerDistributor(formData_);
      setDistributorId(id);
      setSuccessModalOpen(true);
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

  return (
    <>
      <Navbar title="Riya Matrymony" tab1="Home" tab2="Login" tab3="Register" />
      <div>
        {uploadImages ? <>
          <ImageUploadComponent />
          <button
            onClick={handleSubmit}
            className=" m-6 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </> : <>
          <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
            >
              <h1 className="text-2xl font-bold mb-6 text-center">
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
                  htmlFor="fullName"
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
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
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
                  <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>
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
                  className={`mt-1 h-40 block w-full px-3 py-2 border ${errors.address ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="fileUpload"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload PAN Card / Aadhaar Card
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  name="fileUpload"
                  className={`mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border ${errors.fileUpload
                    ? "file:border-red-500"
                    : "file:border-gray-300"
                    } file:rounded-md file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200`}
                  onChange={handleChange}
                />
                {errors.fileUpload && (
                  <p className="text-red-500 text-xs mt-1">{errors.fileUpload}</p>
                )}
              </div>
              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className={`mr-2 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 ${errors.terms ? "border-red-500" : ""
                      }`}
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="terms"
                    className="block text-sm font-medium text-gray-700"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      onClick={handleTermsOpen}
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-xs mt-1 ml-6">{errors.terms}</p>
                )}
              </div>
              <button
                onClick={() => { handleNextBtn() }}
                className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Next
              </button>
              <div className="text-center mt-4 text-blue-500">
                <a href="/login">Already have an account | Login</a>
              </div>
            </form>
          </div>
        </>}
      </div>
      {/* Success Modal */}
      {successModalOpen && (
        <SuccessModal
          distributorId={distributorId}
          handleSuccessModalClose={handleSuccessModalClose}
        />
      )}

      {/* {terms modal} */}
      {termsOpen && (
        <GlobalModal
          handleTermsModalClose={handleTermsModalClose}
          title={"Terms and Conditions"}
          message={"list comes here"}
        />
      )}
      <Footer />
    </>
  );
};

export default RegistrationForm;
