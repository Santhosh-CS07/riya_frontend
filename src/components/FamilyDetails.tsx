import {
  FaUser,
  FaBriefcase,
  FaHeart,
  FaMapMarkedAlt,
  FaHome,
} from "react-icons/fa";

const FamilyDetails = ({ profileData }: any) => {
  const checkData = (value: string | undefined) => {
    return value && value !== "" && value != "Any" ? value : "NO DATA";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Family Details</h2>
      <div className="space-y-6">
        {/* Father's Occupation */}
        <div className="flex items-center space-x-4">
          <FaUser className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Father's Occupation</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.fatherOccupation)}
            </span>
          </div>
        </div>

        {/* Father's Employment Status */}
        <div className="flex items-center space-x-4">
          <FaBriefcase className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Father's Employment</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.fatherEmployed)}
            </span>
          </div>
        </div>

        {/* Mother's Occupation */}
        <div className="flex items-center space-x-4">
          <FaUser className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Mother's Occupation</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.motherOccupation)}
            </span>
          </div>
        </div>

        {/* Mother's Employment Status */}
        <div className="flex items-center space-x-4">
          <FaBriefcase className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Mother's Employment</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.motherEmployed)}
            </span>
          </div>
        </div>

        {/* Brothers */}
        <div className="flex items-center space-x-4">
          <FaUser className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Brothers</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.brothers)}
            </span>
          </div>
        </div>

        {/* Brothers Married */}
        <div className="flex items-center space-x-4">
          <FaUser className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Brothers Married</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.brothersMarried)}
            </span>
          </div>
        </div>

        {/* Sisters */}
        <div className="flex items-center space-x-4">
          <FaUser className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Sisters</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.sisters)}
            </span>
          </div>
        </div>

        {/* Sisters Married */}
        <div className="flex items-center space-x-4">
          <FaUser className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Sisters Married</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.sistersMarried)}
            </span>
          </div>
        </div>

        {/* Family Values */}
        <div className="flex items-center space-x-4">
          <FaHeart className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Family Values</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.familyValues)}
            </span>
          </div>
        </div>

        {/* Family Type */}
        <div className="flex items-center space-x-4">
          <FaHome className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Family Type</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.familyType)}
            </span>
          </div>
        </div>

        {/* Family Status */}
        <div className="flex items-center space-x-4">
          <FaHome className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Family Status</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.familyStatus)}
            </span>
          </div>
        </div>

        {/* Original Location */}
        <div className="flex items-center space-x-4">
          <FaMapMarkedAlt className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Original Location</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.originalLocation)}
            </span>
          </div>
        </div>

        {/* Settled Location */}
        <div className="flex items-center space-x-4">
          <FaMapMarkedAlt className="text-blue-500 text-2xl" />
          <div className="flex flex-col">
            <span className=" text-gray-600">Settled Location</span>
            <span className="font-semibold">
              {checkData(profileData?.familyDetails?.settledLocation)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyDetails;
