import { checkResponse } from "../utils/responses.js";

const { VITE_API_URL: baseUrl } = import.meta.env;
const authorizationHeader = `Bearer ${localStorage.getItem("token")}`;

export const getPosts = async () => {
  const response = await fetch(`${baseUrl}/posts`);
  return checkResponse(response);
};

export const deletePost = async (id) => {
  const response = await fetch(`${baseUrl}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: authorizationHeader,
    },
  });

  return checkResponse(response);
};

export const createPost = async (data) => {
  const response = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationHeader,
    },
    body: JSON.stringify(data),
  });

  return checkResponse(response);
};
// export const getPostsByUserId = async (id) => {
//   const response = await fetch(`${baseUrl}/posts/${id}`, {
//     headers: {
//       Authorization: authorizationHeader,
//     },
//   });
//   return checkResponse(response);
//};
