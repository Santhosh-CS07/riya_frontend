import {
  distributorLogin,
  distributorRegister,
} from "../api/endpoints/authEndPoints";
import {
  DistributorLoginPayload,
  DistributorRegisterPayload,
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
