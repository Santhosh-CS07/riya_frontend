import React from "react";
import Navbar from "../components/navbar/Navbar";

const DistriubutorDashboard = () => {
  return (
    <>
      <Navbar title="Distributor Company Name" tab1="Home" tab2="12345" tab3="profile" />
      <div className="min-h-screen">
        <button className="">Share My Distributor Account</button>
        <button className="">Create Marriege BUreau Account</button>
      </div>
    </>
  );
};

export default DistriubutorDashboard;
