import React from 'react';

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
        <div className="container mx-auto py-4 px-4">
            <h1 className="text-3xl font-bold mb-4 text-center">My Bureau Accounts</h1>
            <p className='text-center text-gray-800 mb-4'>Total: {records.length}</p>

            {/* Card View for All Screens */}
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {records.map((record) => (
                    <div key={record.id} className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2">{record.bureauName}</h2>
                        <p><span className="font-semibold">Owner Name:</span> {record.ownerName}</p>
                        <p><span className="font-semibold">Bureau ID:</span> {record.bureauId}</p>
                        <p><span className="font-semibold">Distributor ID:</span> {record.distributorId}</p>
                        <p><span className="font-semibold">Created Date:</span> {new Date(record.createdAt).toLocaleDateString()}</p>
                        <p><span className="font-semibold">Mobile Number:</span> {record.mobileNumber}</p>
                        <p><span className="font-semibold">Email:</span> {record.email}</p>
                        <p><span className="font-semibold">Payment Status:</span>
                            {record.paymentStatus === 1 ? (
                                <span className="text-green-600 font-semibold">Paid</span>
                            ) : (
                                <span className="text-red-600 font-semibold">Unpaid</span>
                            )}
                        </p>
                        <div className="mt-4 flex flex-wrap space-x-2 gap-2">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Edit</button>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Table View for Smaller Screens */}
            {/* <div className="lg:hidden overflow-x-auto mt-6">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 border-b-2 border-gray-200">S.NO</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200">Distributor ID</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200">Bureau ID</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200">Bureau Name</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200">Owner Name</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200">Created Date</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200">Mobile Number</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200">Email</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200">Payment Status</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => (
                            <tr key={record.id} className="hover:bg-gray-50">
                                <td className="py-3 px-4 border-b">{index + 1}</td>
                                <td className="py-3 px-4 border-b">{record.distributorId}</td>
                                <td className="py-3 px-4 border-b">{record.bureauId}</td>
                                <td className="py-3 px-4 border-b">{record.bureauName}</td>
                                <td className="py-3 px-4 border-b">{record.ownerName}</td>
                                <td className="py-3 px-4 border-b">{new Date(record.createdAt).toLocaleDateString()}</td>
                                <td className="py-3 px-4 border-b">{record.mobileNumber}</td>
                                <td className="py-3 px-4 border-b">{record.email}</td>
                                <td className="py-3 px-4 border-b">
                                    {record.paymentStatus === 1 ? (
                                        <span className="text-green-600 font-semibold">Paid</span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">Unpaid</span>
                                    )}
                                </td>
                                <td className="py-3 px-4 border-b flex space-x-2">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default BureauRecordTable;
