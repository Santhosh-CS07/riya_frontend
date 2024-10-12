import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaGlobe,
  FaUser,
  FaHeart,
  FaCalendar,
  FaBriefcase,
  FaDollarSign,
  FaMapMarkerAlt,
  FaSchool,
  FaStar,
  FaPeopleArrows,
} from "react-icons/fa";
import { getUsersData } from "../services/authServices";
import { BASE_BACKEND_URL, BASE_FRONTEND_URL } from "../config";
import ImageSlider from "../components/image/ImageSlider";
import PersonalDetailsView from "../components/PersonalDetailsView";
import ReligiousDetailsView from "../components/ReligiousDetailsView";
import ProfessionalDetailsView from "../components/ProfessionalDetailsView";
import FamilyDetails from "../components/FamilyDetails";
import FamilyPropertyDetails from "../components/FamilyPropertyDetails";
import LocationDetails from "../components/LocationDetails";
import PartnerPreferences from "../components/PartnerPreferencesView";

const ViewMore: React.FC = () => {
  const [profileData, setProfileData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const { matriId } = useParams<{ matriId: string }>();
  const [bureauName, setBureauName] = useState<any>();
  const [bureauId, setBureauId] = useState<any>({});

  // Fetch profile data
  const fetchProfileData = async () => {
    setLoading(true);
    const response = await getUsersData({ matriId: String(matriId) });
    if (response?.status === 1) {
      setProfileData(response.data);
      const formattedBureauName = response?.data?.bureau?.bureauName
        ?.replace(/\s+/g, "")
        .toLowerCase();
      setBureauName(formattedBureauName);
      setBureauId(response?.data?.bureauId);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (matriId) {
      fetchProfileData();
    }
  }, [matriId]);

  const openWebsite = () => {
    const url = `${BASE_FRONTEND_URL}${bureauName}/${Number(bureauId)}`;
    window.open(url, "_blank");
  };

  const checkData = (value: any) => {
    return value === "SELECT" ||
      value === "Any" ||
      value === "ANY" ||
      value === ""
      ? "NO DATA"
      : value;
  };

  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <div className="text-xl font-semibold">Loading profile...</div>
            <div className="mt-4">Please wait</div>
          </div>
        </div>
      ) : (
        <>
          {/* images slider section */}

          <div style={{ backgroundColor: "#FFF6E7" }} className="m-0 p-0">
            <ImageSlider profileData={profileData?.images} />
            <div className="text-left pt-4 px-6">
              <h2 className="text-xl font-bold mb-4 mt-4">
                Created By: Marriage Bureau
              </h2>
              <p className="mb-2">
                Who Contacted for this profile: {profileData?.createdBy}
              </p>
              <p className="mb-4">
                Service Preference:{" "}
                {profileData?.partnerDetails?.servicePreference}
              </p>
            </div>

            <div className="text-center mb-4 pb-4">
              <button
                className="py-2 px-4 border rounded inline-flex items-center"
                onClick={openWebsite}
              >
                <FaGlobe className="mr-2" />
                View All Profiles in my website
              </button>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg px-6 pb-6">
            <div className="">
              <div className="flex items-center mb-4">
                <FaUser className="mr-2 text-blue-500" />
                <p>
                  Name:{" "}
                  <span className="font-semibold">
                    {checkData(profileData?.name)}
                  </span>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaHeart className="mr-2 text-blue-500" />
                <p>
                  Marital Status:{" "}
                  <span className="font-semibold">
                    {checkData(profileData?.maritalStatus)}
                  </span>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaCalendar className="mr-2 text-blue-500" />
                <p>
                  Date of Birth:{" "}
                  <span className="font-semibold">
                    {checkData(
                      new Date(profileData?.dateOfBirth).toLocaleDateString()
                    )}
                  </span>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaBriefcase className="mr-2 text-blue-500" />
                <p>
                  Occupation:{" "}
                  <span className="font-semibold">
                    {checkData(profileData?.professionalDetails?.occupation)}
                  </span>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaDollarSign className="mr-2 text-blue-500" />
                <p>
                  Annual Income:{" "}
                  <span className="font-semibold">
                    {checkData(profileData?.professionalDetails?.annualIncome)}
                  </span>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                <p>
                  Location:{" "}
                  <span className="font-semibold">
                    {checkData(profileData?.professionalDetails?.jobLocation)}
                  </span>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaSchool className="mr-2 text-blue-500" />
                <p>
                  Education:{" "}
                  <span className="font-semibold">
                    {checkData(profileData?.professionalDetails?.education)}
                  </span>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaStar className="mr-2 text-blue-500" />
                <p>
                  Religion:{" "}
                  <span className="font-semibold">
                    {checkData(profileData?.religionDeails?.religion)}
                  </span>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaPeopleArrows className="mr-2 text-blue-500" />
                <p>
                  Caste:{" "}
                  <span className="font-semibold">
                    {checkData(profileData?.religionDeails?.caste)}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <PersonalDetailsView profileData={profileData} />
          <ReligiousDetailsView profileData={profileData} />
          <ProfessionalDetailsView profileData={profileData} />
          <FamilyDetails profileData={profileData} />
          <FamilyPropertyDetails profileData={profileData} />
          <LocationDetails profileData={profileData} />
          <PartnerPreferences profileData={profileData} />
        </>
      )}
    </div>
  );
};

export default ViewMore;
