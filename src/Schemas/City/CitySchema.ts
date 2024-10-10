import * as Yup from "yup";

export const CityFormSchema = Yup.object({
  cities: Yup.string().required("El nombre de la ciudad  es  obligatorio"),
  codeCities: Yup.string().required("la descripción es obligatorio"),
});
