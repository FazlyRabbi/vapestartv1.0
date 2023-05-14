import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_URL, // Set your API base URL here
});

export const Get = async (url, config = {}) => {
  try {
    const response = await apiClient.get(url, config);
    return response.data;
  } catch (error) {
    throw new Error("Failed to perform GET request");
  
};

export const GetById = async (url, config = {}) => {
  try {
    const response = await apiClient.get(url, config);
    return response.data;
  } catch (error) {
    throw new Error("Failed to perform GET request");
  }
};

export const httpPost = async (url, data = {}, config = {}) => {
  try {
    const response = await apiClient.post(url, data, config);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const httpPut = async (url, data = {}, config = {}) => {
  try {
    const response = await apiClient.put(url, data, config);
    return response.data;
  } catch (error) {
    throw new Error("Failed to perform PUT request");
  }
};


export const httpDelete = async (url, id) => {
  try {
    const response = await apiClient.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to perform PUT request");
  }
};

// Add other HTTP methods as needed: httpDelete, httpPatch, etc.

const http = {
  httpPost,
  Get,
  GetById,
  httpDelete,
};

export default http;
