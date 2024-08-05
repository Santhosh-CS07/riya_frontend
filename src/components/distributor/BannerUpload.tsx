import React, { useState } from 'react';

const BannerForm: React.FC = () => {
  const [banners, setBanners] = useState<(string | null)[]>(Array(10).fill(null));

  const handleBannerClick = (index: number) => {
    document.getElementById(`bannerInput-${index}`)?.click();
  };

  const handleBannerChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newBanners = [...banners];
        newBanners[index] = e.target?.result as string;
        setBanners(newBanners);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <form className="flex flex-col items-center">
          {banners.map((banner, index) => (
            <div key={index} className="w-full mb-4">
              <button
                type="button"
                onClick={() => handleBannerClick(index)}
                className="w-full py-4 bg-blue-400 text-white rounded-lg shadow-md"
              >
                {banner ? (
                  <img
                    src={banner}
                    alt={`Selected Banner ${index + 1}`}
                    className="object-cover w-full h-48 rounded-lg"
                  />
                ) : (
                  <p>Click to select an image</p>
                )}
              </button>
              <input
                type="file"
                id={`bannerInput-${index}`}
                className="hidden"
                onChange={(e) => handleBannerChange(index, e)}
                accept="image/*"
              />
            </div>
          ))}
          <button type="submit" className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-sky-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BannerForm;
