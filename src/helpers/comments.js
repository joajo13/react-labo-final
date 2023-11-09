import { checkResponse } from "../utils/responses.js";

const { VITE_API_URL: baseUrl } = import.meta.env;

export const getComments = async (id) => {
  const response = await fetch(`${baseUrl}/comment/${id}/comments`);
  return checkResponse(response);
};

export const getUserName = async (userID) => {
  const response = await fetch(`${baseUrl}/users/${userID}`);
  const user = await response.json();
  return user.name;
};
