import { apiClient } from "./apiClient";

export const AddUserApi=(user)=>apiClient.post(`/users/signup`,user)
