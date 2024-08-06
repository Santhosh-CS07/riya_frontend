
import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: { src: string; text: string }[];
  interval?: number; // Optional interval prop to control the sliding speed
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {


  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img
            src={image.src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-top justify-center bg-black bg-opacity-50">
            <p className="text-white text-xl font-bold">{image.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
