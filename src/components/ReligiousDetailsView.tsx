import React from "react";
import {
  IoPeopleOutline,
  IoBookOutline,
  IoStarOutline,
  IoHeartOutline,
  IoChatbubblesOutline,
  IoLanguageOutline,
} from "react-icons/io5";

interface ProfileData {
  religionDeails?: {
    caste?: string;
    subCaste?: string;
    gotram?: string;
    raasi?: string;
    star?: string;
    raasiStar?: string;
    religion?: string;
    languagesKnown?: string;
    motherTongue?: string;
  };
}

interface ReligiousDetailsViewProps {
  profileData: ProfileData;
}

const checkData = (value: string | undefined) => {
  return value && value !== "" && value != "Any" ? value : "NO DATA";
};

const ReligiousDetailsView: React.FC<ReligiousDetailsViewProps> = ({
  profileData,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Religious Details</h2>

      <div className="space-y-4">
        {/* Caste */}
        <div className="flex items-center">
          <IoPeopleOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Caste</p>
            <p className="font-semibold">
              {checkData(profileData?.religionDeails?.caste)}
            </p>
          </div>
        </div>

        {/* Sub Caste */}
        <div className="flex items-center">
          <IoPeopleOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Sub Caste</p>
            <p className="font-semibold">
              {checkData(profileData?.religionDeails?.subCaste)}
            </p>
          </div>
        </div>

        {/* Gotram */}
        <div className="flex items-center">
          <IoBookOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Gotram</p>
            <p className="font-semibold">
              {checkData(profileData?.religionDeails?.gotram)}
            </p>
          </div>
        </div>

        {/* Raasi */}
        <div className="flex items-center">
          <IoStarOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Raasi</p>
            <p className="font-semibold">
              {checkData(profileData?.religionDeails?.raasi)}
            </p>
          </div>
        </div>

        {/* Star */}
        <div className="flex items-center">
          <IoStarOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Star</p>
            <p className="font-semibold">
              {checkData(profileData?.religionDeails?.star)}
            </p>
          </div>
        </div>

        {/* Raasi Star */}
        <div className="flex items-center">
          <IoStarOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Raasi Star</p>
            <p className="font-semibold">
              {checkData(profileData?.religionDeails?.raasiStar)}
            </p>
          </div>
        </div>

        {/* Religion */}
        <div className="flex items-center">
          <IoHeartOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Religion</p>
            <p className="font-semibold">
              {checkData(profileData?.religionDeails?.religion)}
            </p>
          </div>
        </div>

        {/* Languages Known */}
        <div className="flex items-center">
          <IoChatbubblesOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Languages Known</p>
            <p className="font-semibold">
              {checkData(profileData?.religionDeails?.languagesKnown)}
            </p>
          </div>
        </div>

        {/* Mother Tongue */}
        <div className="flex items-center">
          <IoLanguageOutline size={24} className="text-blue-500" />
          <div className="ml-3">
            <p className="text-gray-600">Mother Tongue</p>
            <p className="font-semibold">
              {checkData(profileData?.religionDeails?.motherTongue)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReligiousDetailsView;
