import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { BASE_FRONTEND_URL } from "../../config";

interface BureauRecord {
  id: number;
  email: string;
  password: string;
  ownerName: string;
  bureauName: string;
  mobileNumber: string;
  location: string;
  about: string;
  bureauId: string;
  distributorId: number;
  createdAt: string;
  paymentStatus: number;
  deleteStatus: number;
}

interface BureauRecordTableProps {
  records: BureauRecord[];
}

const BureauRecordTable: React.FC<BureauRecordTableProps> = ({ records }) => {
  const navigate = useNavigate();

  const handleViewMore = (bureauName: string, bureauId: string) => {
    const formattedBureauName = bureauName?.replace(/\s+/g, "").toLowerCase();
    navigate(`/${formattedBureauName}.com/${bureauId}`);
  };

  const handleShare = (bureauName: string, bureauId: string) => {
    const formattedBureauName = bureauName.replace(/\s+/g, "").toLowerCase();

    // Use the baseURL from the axios instance
    const url = `${BASE_FRONTEND_URL}${formattedBureauName}.com/${bureauId}`;

    // WhatsApp share link format
    const whatsappUrl = `https://wa.me/?text=${url}`;

    // Open WhatsApp share window
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Bureau Accounts Management
      </h1>
      <p className="text-center text-lg text-gray-500 mb-8">
        Total Records: {records.length}
      </p>

      {/* Card View */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {records.map((record: BureauRecord) => (
          <div
            key={record.id}
            className="p-6 bg-white shadow-xl rounded-lg border border-gray-300 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {record.bureauName}
            </h2>
            <div className="text-gray-600 space-y-2">
              <p>
                <span className="font-medium">Owner:</span> {record.ownerName}
              </p>
              <p>
                <span className="font-medium">Bureau ID:</span>{" "}
                {record.bureauId}
              </p>
              <p>
                <span className="font-medium">Bureau Password:</span>{" "}
                {record.password}
              </p>
              <p>
                <span className="font-medium">Distributor ID:</span>{" "}
                {record.distributorId}
              </p>
              <p>
                <span className="font-medium">Created On:</span>{" "}
                {new Date(record.createdAt).toLocaleDateString()}
              </p>
              <p>
                <span className="font-medium">Mobile:</span>{" "}
                {record.mobileNumber}
              </p>
              <p>
                <span className="font-medium">Email:</span> {record.email}
              </p>
              <p>
                <span className="font-medium">Payment Status:</span>{" "}
                {record.paymentStatus === 1 ? (
                  <span className="text-green-500 font-semibold">Paid</span>
                ) : (
                  <span className="text-red-500 font-semibold">Unpaid</span>
                )}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1">
              <button
                onClick={() =>
                  handleViewMore(record.bureauName, record.bureauId)
                }
                className="bg-blue-500 hover:bg-blue-600 text-white px-1 py-2 rounded-lg font-small flex-1"
              >
                View More
              </button>
              <button
                onClick={() => handleShare(record.bureauName, record.bureauId)}
                className="bg-green-500 hover:bg-green-600 text-white px-1 py-2 rounded-lg font-small flex-1"
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BureauRecordTable;
