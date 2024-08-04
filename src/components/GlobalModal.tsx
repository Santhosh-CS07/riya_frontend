import React from "react";

const GlobalModal = (props: any) => {
  const { title, message, handleTermsModalClose } = props;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="text-gray-700">{message}</p>
        <button
          onClick={handleTermsModalClose}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default GlobalModal;
