import { typeOfIdentification } from "../../types/TypeOfIdentification/typeOfIdentificationType";
import config from "../../config/config.json";

const baseUrl = config.baseUrl;

/* METODO DELETE */
export const deleteTypeOfIdentifications = async (TypeOfIdentification: typeOfIdentification) => {
    const response = await fetch(`${baseUrl}/typeOfIdentifications/${TypeOfIdentification.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error en la solicitud: ${errorText}`);
    }
};