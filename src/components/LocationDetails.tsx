import { IoEarth, IoFlag, IoPin } from "react-icons/io5";

const LocationDetails = ({ profileData }: any) => {
  const checkData = (value: string | undefined) => {
    return value === "SELECT" || value === "Any" || value === ""
      ? "NO DATA"
      : value;
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Location Details</h2>
      <div className="space-y-4">
        {/* Country */}
        <div className="flex items-center space-x-4">
          <IoEarth size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Country</p>
            <p className="font-semibold">
              {checkData(profileData?.locationDetails?.country)}
            </p>
          </div>
        </div>

        {/* State */}
        <div className="flex items-center space-x-4">
          <IoFlag size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">State</p>
            <p className="font-semibold">
              {checkData(profileData?.locationDetails?.state)}
            </p>
          </div>
        </div>

        {/* City */}
        <div className="flex items-center space-x-4">
          <IoPin size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">City</p>
            <p className="font-semibold">
              {checkData(profileData?.locationDetails?.city)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
