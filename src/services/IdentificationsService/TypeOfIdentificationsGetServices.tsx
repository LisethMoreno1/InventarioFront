import { typeOfIdentification } from "../../types/TypeOfIdentification/typeOfIdentificationType";
import config from "../../config/config.json";

const baseUrl = config.baseUrl;

/* METODO GET */
export const getTypeOfIdentifications = async (): Promise<typeOfIdentification[]> => {
    const response = await fetch(`${baseUrl}/typeOfIdentifications`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },


    });
    if (!response.ok) {
        throw new Error('La respuesta de la red no era correcta');
    }
    return await response.json();
};


