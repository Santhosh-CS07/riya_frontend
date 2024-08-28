import React from "react";

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
        {records.map((record) => (
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
                <span className="font-medium">Distributor ID:</span>{" "}
                {record.distributorId}
              </p>
              <p>
                <span className="font-medium">Created:</span>{" "}
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
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-1 py-2 rounded-lg font-small flex-1">
                Edit
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-1 py-2 rounded-lg font-small flex-1">
                Move To Paid
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-1 py-2 rounded-lg font-small flex-1">
                Move To Free
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-1 py-2 rounded-lg font-small flex-1">
                Suspend
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BureauRecordTable;
