import { checkResponse } from "../utils/responses.js";

const { VITE_API_URL: baseUrl } = import.meta.env;
const authorizationHeader = `Bearer ${localStorage.getItem("token")}`;

export const getUsers = async () => {
  const response = await fetch(`${baseUrl}/users`);
  return checkResponse(response);
};

export const getUserById = async (id) => {
  const response = await fetch(`${baseUrl}/users/${id}`, {
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};
