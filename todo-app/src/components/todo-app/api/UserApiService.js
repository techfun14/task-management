import { apiClient } from "./apiClient";

export const AddUserApi=(username,user)=>apiClient.post(`/users/signup`,user)
