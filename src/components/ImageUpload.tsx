import React, { useState } from 'react';

const ImageUploadComponent = () => {
    const [images, setImages] = useState(Array(10).fill(null));

    const handleImageUpload = (e: any, index: number) => {
        const file = e.target.files[0];
        const newImages = [...images];
        newImages[index] = URL.createObjectURL(file);
        setImages(newImages);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload Banners</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <label key={index} htmlFor={`upload-${index}`} className="block border p-4 rounded-lg shadow-lg h-48 cursor-pointer flex flex-col items-center justify-center bg-gray-100">
                        <span className="text-center text-sm font-medium text-gray-700 mb-2">
                            {`Upload Banner ${index + 1}`}
                        </span>
                        <input
                            id={`upload-${index}`}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, index)}
                        />
                        {image ? (
                            <img src={image} alt={`Banner ${index + 1}`} className="w-full h-full object-cover rounded" />
                        ) : (
                            <span className="text-center text-gray-400">No image selected</span>
                        )}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default ImageUploadComponent;
