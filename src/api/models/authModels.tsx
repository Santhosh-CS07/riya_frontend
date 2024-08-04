// Request Payload Types
export interface DistributorLoginPayload {
  distributorId: string;
  password: string;
}

export interface DistributorRegisterPayload {
  email: string;
  password: string;
  fullName: string;
  companyName: string;
  mobileNumber: string;
  address: string;
  filePath: string;
}

// Response Types (if needed)
export interface AuthResponse {
  token: string;
  // Add other fields if necessary
}
