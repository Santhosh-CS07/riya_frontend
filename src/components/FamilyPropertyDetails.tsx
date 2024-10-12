import React from "react";
import {
  IoHomeOutline,
  IoSquareOutline,
  IoCashOutline,
  IoLocationOutline,
  IoMapOutline,
  IoLeafOutline,
  IoArchiveOutline,
} from "react-icons/io5";

const FamilyPropertyDetails = ({ profileData }: any) => {
  const checkData = (value: string | undefined) => {
    return value == "SELECT" || value == "Any" || value == ""
      ? "NO DATA"
      : value;
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Family Property Details</h2>
      <div className="mt-6 space-y-4">
        {/* Own House Items */}
        <div className="flex items-start space-x-4">
          <IoHomeOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Own House Items</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.ownHouseItems)}
            </p>
          </div>
        </div>

        {/* Own House Size */}
        <div className="flex items-start space-x-4">
          <IoSquareOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Own House Size</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.ownHouseSqFeet)}
            </p>
          </div>
        </div>

        {/* Total Value of Own House */}
        <div className="flex items-start space-x-4">
          <IoCashOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Total Value of Own House</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.totalValue)}
            </p>
          </div>
        </div>

        {/* Monthly Rents */}
        <div className="flex items-start space-x-4">
          <IoCashOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Monthly Rents</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.monthlyRents)}
            </p>
          </div>
        </div>

        {/* Own House Locations */}
        <div className="flex items-start space-x-4">
          <IoLocationOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Own House Locations</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.ownHouseLocations)}
            </p>
          </div>
        </div>

        {/* Open Plots */}
        <div className="flex items-start space-x-4">
          <IoMapOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Open Plots</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.openPlots)}
            </p>
          </div>
        </div>

        {/* Open Plots Size */}
        <div className="flex items-start space-x-4">
          <IoSquareOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Open Plots Size</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.openPlotsSqFeet)}
            </p>
          </div>
        </div>

        {/* Total Value of Open Plots */}
        <div className="flex items-start space-x-4">
          <IoCashOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Total Value of Open Plots</p>
            <p className="font-semibold">
              {checkData(
                profileData?.familyPropertyDetails?.openPlotsTotalValue
              )}
            </p>
          </div>
        </div>

        {/* Open Plots Locations */}
        <div className="flex items-start space-x-4">
          <IoLocationOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Open Plots Locations</p>
            <p className="font-semibold">
              {checkData(
                profileData?.familyPropertyDetails?.openPlotsLocations
              )}
            </p>
          </div>
        </div>

        {/* Apartment */}
        <div className="flex items-start space-x-4">
          <IoHomeOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Apartment</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.apartment)}
            </p>
          </div>
        </div>

        {/* Flats Total Value */}
        <div className="flex items-start space-x-4">
          <IoCashOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Flats Total Value</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.flatsTotalValue)}
            </p>
          </div>
        </div>

        {/* Flats Location */}
        <div className="flex items-start space-x-4">
          <IoLocationOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Flats Location</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.flatsLocation)}
            </p>
          </div>
        </div>

        {/* Agriculture Land */}
        <div className="flex items-start space-x-4">
          <IoLeafOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Agriculture Land</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.agricultureLand)}
            </p>
          </div>
        </div>

        {/* Agriculture Land Total Value */}
        <div className="flex items-start space-x-4">
          <IoCashOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Agriculture Land Total Value</p>
            <p className="font-semibold">
              {checkData(
                profileData?.familyPropertyDetails?.agricultureLandTotalValue
              )}
            </p>
          </div>
        </div>

        {/* Agriculture Land Location */}
        <div className="flex items-start space-x-4">
          <IoLocationOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Agriculture Land Location</p>
            <p className="font-semibold">
              {checkData(
                profileData?.familyPropertyDetails?.agricultureLandLocation
              )}
            </p>
          </div>
        </div>

        {/* More Properties */}
        <div className="flex items-start space-x-4">
          <IoArchiveOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">More Properties</p>
            <p className="font-semibold">
              {checkData(profileData?.familyPropertyDetails?.moreProperties)}
            </p>
          </div>
        </div>

        {/* Total Property Value */}
        <div className="flex items-start space-x-4">
          <IoCashOutline size={24} color="#5BA2DC" />
          <div>
            <p className="text-gray-600">Total Property Value</p>
            <p className="font-semibold">
              {checkData(
                profileData?.familyPropertyDetails?.totalPropertyValue
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyPropertyDetails;
