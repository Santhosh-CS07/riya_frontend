import apiClient from "../index";
import {
  BureauAccountRegisterPayload,
  bureauImagePayLoad,
  DistributorLoginPayload,
  DistributorRegisterPayload,
  GetUserPayload,
  imagePayLoad,
} from "../models/authModels";

// Utility function to build query strings
const buildQueryString = (params: { [key: string]: any }) => {
  return new URLSearchParams(params).toString();
};

// Login: GET method
export const distributorLogin = (loginData: DistributorLoginPayload) =>
  apiClient.get(`/distributor/login?${buildQueryString(loginData)}`);

export const distributorUser = (paramsData: GetUserPayload) =>
  apiClient.get(`/distributor/getUserById?${buildQueryString(paramsData)}`);

// Register: POST method
export const distributorRegister = async (
  formData: DistributorRegisterPayload
) =>
  apiClient.post("/distributor/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const createImages = async (images: imagePayLoad) =>
  apiClient.post("/distributor/createImage", images);

export const createBureauImages = async (images: bureauImagePayLoad) =>
  apiClient.post("/bureau/createImages", images);

// Delete distributor: DELETE method
export const deleteDistributor = (distributorId: string) =>
  apiClient.delete(`/distributor/${distributorId}`);

// Update distributor: PUT method (or PATCH for partial updates)
export const updateDistributor = (
  distributorId: string,
  updateData: Partial<DistributorRegisterPayload> // Adjust type as needed
) => apiClient.put(`/distributor/${distributorId}`, updateData);

export const bureauRegister = async (formData: BureauAccountRegisterPayload) =>
  apiClient.post("/bureau/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const bureauUsers = (paramsData: GetUserPayload) =>
  apiClient.get(`/bureau/getUsersById?${buildQueryString(paramsData)}`);
