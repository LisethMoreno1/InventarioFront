import config from "../../config/config.json";
import { RolesType } from "../../types/Rol/rolType";

const baseUrl = config.baseUrl;


/* METODO DELETE */
export const deleteRoles = async (rolesInter: RolesType) => {
  const response = await fetch(`${baseUrl}/roles/${rolesInter.id}`, {
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