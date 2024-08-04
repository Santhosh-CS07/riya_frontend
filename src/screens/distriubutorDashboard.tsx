import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const DistriubutorDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleShareAccountClick = () => {
    // navigate("/distributorDashboard/create-breau-account");
  };

  const handleCreateMarriageAccountClick = () => {
    navigate("/distributorDashboard/create-marriage-bureau-account");
  };

  return (
    <>
      <Navbar title="Distributor Company Name" tab1="Home" tab2="12345" tab3="Profile" />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={handleShareAccountClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Share My Distributor Account
          </button>
          <button
            onClick={handleCreateMarriageAccountClick}

            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Create Marriage Bureau Account
          </button>
        </div>
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">S.No</th>
                <th className="py-2 px-4 border-b">Bureau Name</th>
                <th className="py-2 px-4 border-b">About</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b text-center">1</td>
                <td className="py-2 px-4 border-b text-center">Example Bureau</td>
                <td className="py-2 px-4 border-b text-center">Description of the bureau</td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="bg-red-500 text-white py-1 px-3 rounded-md">Delete</button>
                </td>
              </tr>
              {/* More rows can be added here */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DistriubutorDashboard;
