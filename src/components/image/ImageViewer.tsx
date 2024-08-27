import React, { useState } from "react";
import { FaExpand, FaTimes } from "react-icons/fa";

interface Document {
  filePath: string;
  fileName: string;
  banner: number;
}

interface ImageViewerProps {
  documents: Document[];
}

const ImageViewer: React.FC<ImageViewerProps> = ({ documents }) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const openFullscreen = (filePath: string) => {
    setFullscreenImage(filePath);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  // Function to construct a valid URL from the file path
  const getValidUrl = (filePath: string): string => {
    const baseUrl = "http://localhost:5000"; // Ensure this matches your Koa server URL
    const normalizedPath = filePath.replace(/\\/g, "/").replace("src/", ""); // Remove 'src/' prefix and normalize slashes
    return `${baseUrl}/${normalizedPath}`;
  };

  return (
    <div className="space-y-4">
      {documents?.map((doc, index) => (
        <div
          key={index}
          className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => openFullscreen(getValidUrl(doc.filePath))}
        >
          <img
            src={getValidUrl(doc.filePath)}
            alt={doc.fileName}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-50 text-white px-4 py-2">
            {doc.fileName}
          </div>
          <div className="absolute top-2 right-2 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white cursor-pointer">
            <FaExpand />
          </div>
        </div>
      ))}

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="relative max-w-full max-h-full">
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-screen-md max-h-screen object-contain"
            />
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-white text-3xl bg-gray-800 rounded-full p-2 hover:bg-gray-700"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
