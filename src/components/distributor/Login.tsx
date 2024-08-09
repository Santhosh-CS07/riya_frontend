import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginDistributor } from "../../services/authServices";
import Navbar from "../navbar/Navbar";
import RegistrationForm from "./Registration";
import Footer from "../footer/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    distributorId: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    distributorId: "",
    password: "",
    notFound: ""
  }) as any;
  const [showPassword, setShowPassword] = useState(false);

  const handleCreateAccountClick = () => {
    navigate("/create-distributor-account");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    if (!formData.distributorId) {
      formErrors.distributorId = "Distributor ID is required.";
      isValid = false;
    }

    if (!formData.password) {
      formErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res: any = await loginDistributor({
          distributorId: formData.distributorId,
          password: formData.password,
        });
        const distributorId: any = res?.data?.distributorId;
        const companyName: any = res?.data?.companyName;
        if (res.status === 1) {
          localStorage.setItem('distributorId', distributorId);
          localStorage.setItem('companyName', companyName);
          navigate("/distributorDashboard");
        } else {
          setErrors({ notFound: "Invalid Credentials" });
        }
      } catch (err) {
        console.log("Failed to login");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar title="Riya Matrymony" tab1="Home" tab2="Login" tab3="Register" />

      <div className="flex items-center justify-center py-24 bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-xs sm:max-w-md"
        >
          <h1 className="text-3xl font-bold mb-6 text-center font-serif">
            Login
          </h1>
          {errors.notFound && (
            <p className="text-red-500 text-bold text-center mb-4">
              {errors.notFound}
            </p>
          )}
          <div className="mb-4">
            <input
              type="text"
              id="distributorId"
              name="distributorId"
              className={`mt-1 block w-full px-3 py-2 border ${errors.distributorId ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Distributor Id"
              value={formData.distributorId}
              onChange={handleChange}
            />
            {errors.distributorId && (
              <p className="text-red-500 text-xs mt-1">
                {errors.distributorId}
              </p>
            )}
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className={`mt-1 block w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
          >
            Login
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={handleCreateAccountClick}
              className="text-indigo-600 hover:text-indigo-800"
            >
              Create account
            </button>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
