export const getComments = async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  return response.json();
};
