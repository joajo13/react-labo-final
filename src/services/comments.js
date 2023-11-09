import { checkResponse } from "../utils/responses.js";

const { VITE_API_URL: baseUrl } = import.meta.env;
const authorizationHeader = `Bearer ${localStorage.getItem("token")}`;

export const getComments = async (id) => {
  const response = await fetch(`${baseUrl}/comment/${id}/comments`);
  return checkResponse(response);
};

export const createComment = async (data) => {
  const response = await fetch(`${baseUrl}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationHeader,
    },
    body: JSON.stringify(data),
  });

  console.log(JSON.stringify(data));

  return checkResponse(response);
};
