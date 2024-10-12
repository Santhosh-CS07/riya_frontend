import React from "react";
import {
  FaStar,
  FaUser,
  FaHeart,
  FaUsers,
  FaSchool,
  FaBriefcase,
  FaLocationArrow,
  FaCashRegister,
  FaHome,
  FaMapMarked,
  FaFlag,
  FaShieldAlt,
  FaLeaf,
  FaCalendar,
  FaLanguage,
} from "react-icons/fa";

interface ProfileData {
  servicePreference?: string;
  createdByPreference?: string;
  religionPreference?: string;
  castePreference?: string;
  subCastePreference?: string;
  maritalStatusPreference?: string;
  childrenPreference?: string;
  motherTonguePreference?: string;
  ageFrom?: number;
  ageTo?: number;
  heightFrom?: number;
  heightTo?: number;
  educationPreference?: string;
  employeePreference?: string;
  jobLocationPreference?: string;
  annualIncomePreference?: string;
  familyPreference?: string;
  settledLocationPreference?: string;
  ownHousePreference?: string;
  apartmentFlatsPreference?: string;
  monthlyRentsPreference?: string;
  openPlotsLandsPreference?: string;
  propertyLocationPreference?: string;
  agricultureLandPreference?: string;
  totalPropertyValuePreference?: string;
  countryPreference?: string;
  statePreference?: string;
  cityPreference?: string;
  citizenshipPreference?: string;
  occupationPrefrence?: string;
}

interface PartnerPreferencesProps {
  profileData: ProfileData;
}

const PartnerPreferences: React.FC<PartnerPreferencesProps> = ({
  profileData,
}) => {
  const getIconForLabel = (label: string) => {
    switch (label) {
      case "Service preference":
        return <FaStar />;
      case "Created by":
        return <FaUser />;
      case "Religion preference":
        return <FaHeart />;
      case "Caste preference":
      case "Sub caste preference":
        return <FaUsers />;
      case "Marital status preference":
        return <FaHeart />;
      case "Mother Tongue preference":
        return <FaLanguage />;
      case "Age preference":
        return <FaCalendar />;
      case "Height preference":
        return <FaLocationArrow />;
      case "Education preference":
        return <FaSchool />;
      case "Employee preference":
        return <FaBriefcase />;
      case "Job location preference":
        return <FaLocationArrow />;
      case "Annual income preference From":
      case "Annual income preference To":
        return <FaCashRegister />;
      case "Family preference":
        return <FaHome />;
      case "Settled location preference":
        return <FaMapMarked />;
      case "Own house preference":
        return <FaHome />;
      case "Monthly rents preference":
        return <FaCashRegister />;
      case "Open plots preference":
        return <FaMapMarked />;
      case "Own house/flats location preference":
        return <FaMapMarked />;
      case "Agriculture land preference From":
      case "Agriculture land preference To":
        return <FaLeaf />;
      case "Total property value preference From":
      case "Total property value preference To":
        return <FaCashRegister />;
      case "Country preference":
        return <FaFlag />;
      case "State preference":
        return <FaMapMarked />;
      case "City preference":
        return <FaHome />;
      case "Citizenship preference":
        return <FaShieldAlt />;
      default:
        return <FaHeart />;
    }
  };

  const renderPreferenceItem = (
    label: string,
    value: string | number | undefined
  ) => (
    <div className="flex items-center my-2">
      <div className="text-blue-500 mr-3">{getIconForLabel(label)}</div>
      <div>
        <p className="font-semibold text-gray-600">{label}</p>
        <p className="font-medium text-gray-800">{value ?? "Any"}</p>
      </div>
    </div>
  );

  return (
    <div className="p-4 bg-yellow-200 rounded-lg shadow-lg mb-4">
      <h2 className="text-2xl font-bold mb-4">Partner Preferences</h2>

      {renderPreferenceItem(
        "Service preference",
        profileData?.servicePreference
      )}
      {renderPreferenceItem("Created by", profileData?.createdByPreference)}

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Caste & Religion Preference:
      </h3>
      {renderPreferenceItem(
        "Religion preference",
        profileData?.religionPreference
      )}
      {renderPreferenceItem("Caste preference", profileData?.castePreference)}
      {renderPreferenceItem(
        "Sub caste preference",
        profileData?.subCastePreference
      )}
      {renderPreferenceItem(
        "Marital status preference",
        profileData?.maritalStatusPreference
      )}
      {profileData?.maritalStatusPreference !== "Never Married" &&
        renderPreferenceItem(
          "Children preference",
          profileData?.childrenPreference
        )}
      {renderPreferenceItem(
        "Mother Tongue preference",
        profileData?.motherTonguePreference
      )}
      {renderPreferenceItem(
        "Age preference",
        `From ${profileData?.ageFrom ? profileData?.ageFrom : "Any"} to ${
          profileData?.ageTo ? profileData?.ageTo : "Any"
        }`
      )}
      {renderPreferenceItem(
        "Height preference",
        `From ${profileData?.heightFrom ? profileData?.heightFrom : "Any"} to ${
          profileData?.heightTo ? profileData?.heightTo : "Any"
        }`
      )}

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Education & Profession Preference:
      </h3>
      {renderPreferenceItem(
        "Education preference",
        profileData?.educationPreference
      )}
      {renderPreferenceItem(
        "Employee preference",
        profileData?.employeePreference
      )}
      {renderPreferenceItem(
        "Occupation preference",
        profileData?.occupationPrefrence
      )}
      {renderPreferenceItem(
        "Job location preference",
        profileData?.jobLocationPreference
      )}
      {renderPreferenceItem(
        "Annual income preference From",
        profileData?.annualIncomePreference
      )}
      {renderPreferenceItem(
        "Annual income preference To",
        profileData?.annualIncomePreference
      )}

      <h3 className="text-xl font-semibold mt-6 mb-2">Family Preference:</h3>
      {renderPreferenceItem("Family preference", profileData?.familyPreference)}
      {renderPreferenceItem(
        "Settled location preference",
        profileData?.settledLocationPreference
      )}

      <h3 className="text-xl font-semibold mt-6 mb-2">Property Preference:</h3>
      {renderPreferenceItem(
        "Own house preference",
        profileData?.ownHousePreference
      )}
      {renderPreferenceItem(
        "Flats preference",
        profileData?.apartmentFlatsPreference
      )}
      {renderPreferenceItem(
        "Monthly rents preference",
        profileData?.monthlyRentsPreference
      )}
      {renderPreferenceItem(
        "Open plots preference",
        profileData?.openPlotsLandsPreference
      )}
      {renderPreferenceItem(
        "Own house/flats location preference",
        profileData?.propertyLocationPreference
      )}
      {renderPreferenceItem(
        "Agriculture land preference From",
        profileData?.agricultureLandPreference
      )}
      {renderPreferenceItem(
        "Agriculture land preference To",
        profileData?.agricultureLandPreference
      )}
      {renderPreferenceItem(
        "Total property value preference From",
        profileData?.totalPropertyValuePreference
      )}
      {renderPreferenceItem(
        "Total property value preference To",
        profileData?.totalPropertyValuePreference
      )}

      <h3 className="text-xl font-semibold mt-6 mb-2">Location Preference:</h3>
      {renderPreferenceItem(
        "Country preference",
        profileData?.countryPreference
      )}
      {renderPreferenceItem("State preference", profileData?.statePreference)}
      {renderPreferenceItem("City preference", profileData?.cityPreference)}
      {renderPreferenceItem(
        "Citizenship preference",
        profileData?.citizenshipPreference
      )}
    </div>
  );
};

export default PartnerPreferences;
