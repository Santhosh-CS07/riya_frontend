import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/distributor/LoginPage";
import HomePage from "./screens/homeScreen";
import RegistrationForm from "./components/distributor/RegistrationForm";
import DistriubutorDashboard from "./screens/distriubutorDashboard";
import BureauAccountForm from "./components/distributor/BureauAccountForm";
import ImageSlider from "./components/distributor/ImageSlider";
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/distributorDashboard" element={<DistriubutorDashboard />} />
          <Route path="/create-distributor-account" element={<RegistrationForm />} />
          <Route path="/distributorDashboard/create-marriage-bureau-account" element={<BureauAccountForm />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
