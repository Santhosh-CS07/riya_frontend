import React, { useState } from 'react';
import ImageSlider from './ImageSlider';

const BannerForm: React.FC = () => {
  const [banners, setBanners] = useState<(string | null)[]>(Array(10).fill(null));
  const [showSlider, setShowSlider] = useState(false);

  const images = [
    { src: 'https://img.freepik.com/free-photo/beautiful-sea-side-landscape_23-2150724725.jpg?size=626&ext=jpg&ga=GA1.1.1959493086.1721293510&semt=ais_hybrid', text: 'Nature1' },
    { src: 'https://img.freepik.com/free-photo/brown-wooden-dock_198523-110.jpg?size=626&ext=jpg&ga=GA1.1.1959493086.1721293510&semt=ais_hybrid', text: 'Nature2' },
    { src: 'https://img.freepik.com/free-photo/sitting-bench-surrounded-by-autumn-beauty-generated-by-ai_188544-27756.jpg?size=626&ext=jpg&ga=GA1.1.1959493086.1721293510&semt=ais_hybrid', text: 'Nature3' },
  ];

  const handleBannerClick = (index: number) => {
    document.getElementById(`bannerInput-${index}`)?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Assuming you want to show the slider on form submission
    setShowSlider(true);
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
    <>
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
          <button type="submit" className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-sky-700" onClick={handleSubmit} >
            Submit
          </button>
        </form>
      </div>
     
    </div>
    <div>
    {showSlider && <ImageSlider images={images} />}
    </div>
    </>
  );
};

export default BannerForm;
