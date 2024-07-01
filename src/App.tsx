import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="bg-gray-200 h-screen pt-12">
        <div className="p-8">Welcome to Riyamatrimony.com</div>
        <p className="text-green-900 font-bold pb-8">work in progress...</p>
        <p>
          if any queries? please contact developer{" "}
          <span className="text-red-900 font-bold">
            @santhosh.m0719@gmail.com | 7093946332
          </span>
        </p>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
