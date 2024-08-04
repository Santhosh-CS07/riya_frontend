import apiClient from "../index";
import {
  DistributorLoginPayload,
  DistributorRegisterPayload,
} from "../models/authModels";

// Utility function to build query strings
const buildQueryString = (params: { [key: string]: any }) => {
  return new URLSearchParams(params).toString();
};

// Login: GET method
export const distributorLogin = (loginData: DistributorLoginPayload) =>
  apiClient.get(`/distributor/login?${buildQueryString(loginData)}`);

// Register: POST method
export const distributorRegister = async (
  formData: DistributorRegisterPayload
) =>
  apiClient.post("/distributor/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
// Delete distributor: DELETE method
export const deleteDistributor = (distributorId: string) =>
  apiClient.delete(`/distributor/${distributorId}`);

// Update distributor: PUT method (or PATCH for partial updates)
export const updateDistributor = (
  distributorId: string,
  updateData: Partial<DistributorRegisterPayload> // Adjust type as needed
) => apiClient.put(`/distributor/${distributorId}`, updateData);
