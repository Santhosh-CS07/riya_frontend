import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { getBureauUsers } from "../services/authServices";
import BureauRecordTable from "../components/distributor/BureauRecordTable";

interface DistributorProfile {
  companyName: string;
  distributorId: string;
}

const DistributorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [bureauUsers, setBureauUsers] = useState<any[]>([]);
  const [distributorProfile, setDistributorProfile] =
    useState<DistributorProfile>({
      companyName: "Your Company Name",
      distributorId: "DXXXXXX",
    });

  const fetchDistributorDetails = async (distributorId: string) => {
    try {
      const res: any = await getBureauUsers({ distributorId });
      if (res.status === 1) {
        setBureauUsers(res.data);
      } else {
        console.error("Failed to fetch bureau users:", res.message);
      }
    } catch (error) {
      console.error("An error occurred while fetching bureau users:", error);
    }
  };

  useEffect(() => {
    const distributorId = localStorage.getItem("distributorId") || "DXXXXXX";
    const companyName: any =
      localStorage.getItem("companyName") || "Your Company Name";
    setDistributorProfile({ distributorId, companyName });
    fetchDistributorDetails(distributorId);
  }, []);

  const handleShareAccountClick = () => {
    const formattedCompanyName = distributorProfile?.companyName.replace(
      /\s+/g,
      "-"
    );
    navigate(`/d/${formattedCompanyName}/${distributorProfile.distributorId}`);
  };

  const handleCreateMarriageAccountClick = () => {
    navigate("/distributorDashboard/create-marriage-bureau-account");
  };

  return (
    <>
      <Navbar
        title={distributorProfile.companyName}
        distributorId="Distributor Admin Panel"
        // distributorId={distributorProfile.distributorId}
        tab1="Home"
        tab2="12345"
        tab3="Profile"
        screenType="DISTRIBUTOR"
      />
      <div className="mt-40 flex flex-col items-center justify-center">
        <div className="flex space-x-4 m-4">
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
        <div className="overflow-x-auto w-full">
          <BureauRecordTable records={bureauUsers} />
        </div>
      </div>
    </>
  );
};

export default DistributorDashboard;
