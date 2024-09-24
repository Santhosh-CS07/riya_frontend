import {
  bureauRegister,
  distributorLogin,
  distributorRegister,
  bureauUsers,
  distributorUser,
  createImages,
  createBureauImages,
} from "../api/endpoints/authEndPoints";
import {
  BureauAccountRegisterPayload,
  bureauImagePayLoad,
  DistributorLoginPayload,
  DistributorRegisterPayload,
  GetUserPayload,
  imagePayLoad,
} from "../api/models/authModels";

export const loginDistributor = async (loginData: DistributorLoginPayload) => {
  try {
    const response = await distributorLogin(loginData);
    return response.data; // Return token or relevant data
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const registerDistributor = async (
  registerData: DistributorRegisterPayload
) => {
  try {
    const response = await distributorRegister(registerData);
    return response.data; // Return relevant data if needed
  } catch (error) {
    throw new Error("Registration failed");
  }
};

export const distributorCreateImages = async (data: imagePayLoad) => {
  try {
    const response = await createImages(data);
    return response.data; // Return relevant data if needed
  } catch (error) {
    throw new Error("Registration failed");
  }
};

export const bureauCreateImages = async (data: bureauImagePayLoad) => {
  try {
    const response = await createBureauImages(data);
    return response.data; // Return relevant data if needed
  } catch (error) {
    throw new Error("Registration failed");
  }
};

export const registerBureauAccount: any = async (
  registerData: BureauAccountRegisterPayload
) => {
  try {
    const response = await bureauRegister(registerData);
    return response.data; // Return relevant data if needed
  } catch (error) {
    throw new Error("Registration failed");
  }
};

export const getBureauUsers = async (getParms: GetUserPayload) => {
  try {
    const response = await bureauUsers(getParms);
    return response.data; // Return token or relevant data
  } catch (error) {
    throw new Error("data fetch failed");
  }
};

export const getDistributorProfile = async (getParms: GetUserPayload) => {
  try {
    const response = await distributorUser(getParms);
    return response.data; // Return token or relevant data
  } catch (error) {
    throw new Error("data fetch failed");
  }
};
