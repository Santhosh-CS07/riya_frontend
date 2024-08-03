import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegistrationForm from "./components/RegistrationForm";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </BrowserRouter>
      
      
      
    </>
  );
}

export default App;
