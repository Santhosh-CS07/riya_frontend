import { useState } from "react";
import { BASE_BACKEND_URL } from "../../config";

const ImageSlider = (props: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { profileData } = props;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profileData?.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === profileData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Images Wrapper */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {profileData?.map((img: any, index: number) => (
            <div key={img.id} className="w-full flex-shrink-0">
              <img
                src={`${
                  img.image?.startsWith("https")
                    ? img.image
                    : `${BASE_BACKEND_URL}/${img.image}`
                }`}
                alt={`Profile ${img.position}`}
                className="w-full object-cover rounded-lg shadow"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
