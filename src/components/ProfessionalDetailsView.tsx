import React from "react";
import {
  IoSchoolOutline,
  IoCheckmarkCircleOutline,
  IoBriefcaseOutline,
  IoLocationOutline,
  IoCashOutline,
  IoBusinessOutline,
  IoPinOutline,
  IoConstructOutline,
} from "react-icons/io5";

interface ProfileData {
  professionalDetails?: {
    education?: string;
    employedStatus?: string;
    occupation?: string;
    jobLocation?: string;
    annualIncome?: string;
    business?: string;
    businessLocations?: string;
    businessIncome?: string;
    skills?: string;
  };
}

interface ProfessionalDetailsViewProps {
  profileData: ProfileData;
}

const checkData = (value: string | undefined) => {
  return value === "SELECT" || value === "Any" || value === ""
    ? "NO DATA"
    : value;
};

const ProfessionalDetailsView: React.FC<ProfessionalDetailsViewProps> = ({
  profileData,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Professional Details</h2>

      <div className="space-y-6">
        {/* Education */}
        <div className="flex items-center">
          <IoSchoolOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Education</p>
            <p className="font-semibold">
              {checkData(profileData?.professionalDetails?.education)}
            </p>
          </div>
        </div>

        {/* Employed Status */}
        <div className="flex items-center">
          <IoCheckmarkCircleOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Employed Status</p>
            <p className="font-semibold">
              {checkData(profileData?.professionalDetails?.employedStatus)}
            </p>
          </div>
        </div>

        {/* Occupation */}
        <div className="flex items-center">
          <IoBriefcaseOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Occupation</p>
            <p className="font-semibold">
              {checkData(profileData?.professionalDetails?.occupation)}
            </p>
          </div>
        </div>

        {/* Job Location */}
        <div className="flex items-center">
          <IoLocationOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Job Location</p>
            <p className="font-semibold">
              {checkData(profileData?.professionalDetails?.jobLocation)}
            </p>
          </div>
        </div>

        {/* Annual Income */}
        <div className="flex items-center">
          <IoCashOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Annual Income</p>
            <p className="font-semibold">
              {checkData(profileData?.professionalDetails?.annualIncome)}
            </p>
          </div>
        </div>

        {/* Business */}
        <div className="flex items-center">
          <IoBusinessOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Business</p>
            <p className="font-semibold">
              {checkData(profileData?.professionalDetails?.business)}
            </p>
          </div>
        </div>

        {/* Business Locations */}
        <div className="flex items-center">
          <IoPinOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Business Locations</p>
            <p className="font-semibold">
              {checkData(profileData?.professionalDetails?.businessLocations)}
            </p>
          </div>
        </div>

        {/* Business Income */}
        <div className="flex items-center">
          <IoCashOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Business Income</p>
            <p className="font-semibold">
              {checkData(profileData?.professionalDetails?.businessIncome)}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex items-center">
          <IoConstructOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Skills</p>
            <p className="font-semibold">
              {checkData(profileData?.professionalDetails?.skills)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetailsView;
