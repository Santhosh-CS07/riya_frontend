import React from "react";
import {
  FaPersonBooth,
  FaCalendarAlt,
  FaClock,
  FaRulerVertical,
  FaWeight,
  FaHeart,
  FaChild,
  FaMale,
  FaFemale,
  FaUsers,
  FaAccessibleIcon,
  FaUtensils,
  FaWineGlassAlt,
  FaSmoking,
} from "react-icons/fa";

const PersonalDetailsView = ({ profileData }: any) => {
  const isoDate = profileData?.birthTime;
  const date = new Date(isoDate);

  // Extract time and format it
  const options: any = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const formattedTime: any = date?.toLocaleTimeString("en-US", options);

  // Function to check for NO DATA conditions
  const getDisplayValue = (value: any) => {
    return value === "SELECT" || value === "Any" || value === ""
      ? "NO DATA"
      : value;
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Personal Details</h2>

      {/* Name */}
      <div className="flex items-center mb-4">
        <FaPersonBooth className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Name</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(profileData?.name)}
          </p>
        </div>
      </div>

      {/* Date of Birth */}
      <div className="flex items-center mb-4">
        <FaCalendarAlt className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Date of Birth</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(
              profileData?.dateOfBirth
                ? new Date(profileData?.dateOfBirth).toLocaleDateString()
                : ""
            )}
          </p>
        </div>
      </div>

      {/* Age */}
      <div className="flex items-center mb-4">
        <FaClock className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Age</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(profileData?.age)}
          </p>
        </div>
      </div>

      {/* Birth Time */}
      <div className="flex items-center mb-4">
        <FaClock className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Birth Time</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(formattedTime)}
          </p>
        </div>
      </div>

      {/* Height */}
      <div className="flex items-center mb-4">
        <FaRulerVertical className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Height</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(profileData?.height)}
          </p>
        </div>
      </div>

      {/* Weight */}
      <div className="flex items-center mb-4">
        <FaWeight className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Weight</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(profileData?.weight)}
          </p>
        </div>
      </div>

      {/* Marital Status */}
      <div className="flex items-center mb-4">
        <FaHeart className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Marital Status</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(profileData?.maritalStatus)}
          </p>
        </div>
      </div>

      {profileData?.maritalStatus !== "Never Married" && (
        <>
          {/* Male Kids */}
          <div className="flex items-center mb-4">
            <FaMale className="text-blue-400 w-6 h-6" />
            <div className="ml-3">
              <p className="text-gray-600">Male Kids</p>
              <p className="text-lg font-semibold">
                {getDisplayValue(profileData?.maleKids)}
              </p>
            </div>
          </div>

          {/* Female Kids */}
          <div className="flex items-center mb-4">
            <FaFemale className="text-blue-400 w-6 h-6" />
            <div className="ml-3">
              <p className="text-gray-600">Female Kids</p>
              <p className="text-lg font-semibold">
                {getDisplayValue(profileData?.femaleKids)}
              </p>
            </div>
          </div>

          {/* Kids With */}
          <div className="flex items-center mb-4">
            <FaUsers className="text-blue-400 w-6 h-6" />
            <div className="ml-3">
              <p className="text-gray-600">
                పుట్టిన పిల్లలు మీ దగ్గరే ఉంటున్నారా ?
              </p>
              <p className="text-lg font-semibold">
                {getDisplayValue(profileData?.kidsWith)}
              </p>
            </div>
          </div>
        </>
      )}

      {/* Physical Status */}
      <div className="flex items-center mb-4">
        <FaAccessibleIcon className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Physical Status</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(profileData?.physicalStatus)}
          </p>
        </div>
      </div>

      {/* Body Type */}
      <div className="flex items-center mb-4">
        <FaPersonBooth className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Body Type</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(profileData?.bodyType)}
          </p>
        </div>
      </div>

      {/* Eating Habits */}
      <div className="flex items-center mb-4">
        <FaUtensils className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Eating Habits</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(profileData?.eatingHabit)}
          </p>
        </div>
      </div>

      {/* Drinking Habits */}
      <div className="flex items-center mb-4">
        <FaWineGlassAlt className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Drinking Habits</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(profileData?.drinkingHabit)}
          </p>
        </div>
      </div>

      {/* Smoking Habits */}
      <div className="flex items-center mb-4">
        <FaSmoking className="text-blue-400 w-6 h-6" />
        <div className="ml-3">
          <p className="text-gray-600">Smoking Habits</p>
          <p className="text-lg font-semibold">
            {getDisplayValue(profileData?.smokingHabit)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsView;
