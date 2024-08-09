import {
  bureauRegister,
  distributorLogin,
  distributorRegister,
  bureauUsers,
  distributorUser
} from "../api/endpoints/authEndPoints";
import {
  BureauAccountRegisterPayload,
  DistributorLoginPayload,
  DistributorRegisterPayload,
  GetUserPayload,
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

export const registerBureauAccount = async (
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

