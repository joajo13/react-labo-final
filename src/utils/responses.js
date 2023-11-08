export const checkResponse = (response) => {
  if (!response.ok) {
    return response.json().then((error) => {
      throw new Error("Ha ocurrido un error");
    });
  }

  return response.json();
};
