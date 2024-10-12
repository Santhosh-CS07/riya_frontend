import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/distributor/Login";
import HomePage from "./screens/homeScreen";
import RegistrationForm from "./components/distributor/Registration";
import DistriubutorDashboard from "./screens/distriubutorDashboard";
import BureauAccountForm from "./components/distributor/BureauAccountForm";
import DistributorWebsite from "./webView/distributorWebsite";
import BureauWebsite from "./webView/bureauWebsite";
import ViewMore from "./webView/viewMore";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/distributorDashboard"
            element={<DistriubutorDashboard />}
          />
          <Route
            path="/create-distributor-account"
            element={<RegistrationForm />}
          />
          <Route
            path="/distributorDashboard/create-marriage-bureau-account"
            element={<BureauAccountForm />}
          />
          <Route
            path="d/:companyName/:distributorId"
            element={<DistributorWebsite />}
          />
          <Route path="/:bureauName/:bureauId" element={<BureauWebsite />} />
          <Route path="/profile/:bureauName/:matriId" element={<ViewMore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
