export const checkResponse = (response) => {
  if (!response.ok) {
    return response.json().then((error) => {
      throw new Error("Ha ocurrido un error en el login");
    });
  }

  return response.json();
};
