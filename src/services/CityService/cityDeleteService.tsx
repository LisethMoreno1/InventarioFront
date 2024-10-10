import config from "../../config/config.json";
import CityType from "../../types/City/CityType";

const baseUrl = config.baseUrl;


/* METODO DELETE */
export const deleteCity  = async (id: CityType) => {
  const response = await fetch(`${baseUrl}/cities/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('La respuesta de la red no era correcta');
  }

  return await response.json();
};


