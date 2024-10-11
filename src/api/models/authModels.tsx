// Request Payload Types
export interface DistributorLoginPayload {
  distributorId: string;
  password: string;
}

export interface DistributorRegisterPayload {
  email: string;
  password: string;
  fullName: string;
  mobileNumber: string;
  address: string;
  filePath: string;
}
export interface imagePayLoad {
  images: string;
  distributorId: string;
}
export interface bureauImagePayLoad {
  images: string;
  bureauId: string;
  order: number;
}
export interface BureauAccountRegisterPayload {
  email: string;
  password: string;
  ownerName: string;
  mobileNumber: string;
  location: string;
  about: string;
  bureauId: string;
  distributorId: string;
  bureauNmae: string;
}

export interface GetUserPayload {
  distributorId: string;
}

export interface GetBureauPayload {
  bureauId: string;
}

// Response Types (if needed)
export interface AuthResponse {
  token: string;
  // Add other fields if necessary
}
