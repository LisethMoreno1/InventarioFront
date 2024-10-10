import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { CityFormSchema } from "../../Schemas/City/CitySchema";
import { getDepartments } from "../../services/DepartmentService/departmentGetService";

export const useCityForm = () => {
  const [city, setCity] = useState({
    id: 0,
    cities: "",
    codeCities: "",
    departmentId: "",
  });

  const [departments, setDepartments] = useState<
    { id: number; Department: string }[]
  >([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await getDepartments();
        setDepartments(response);
      } catch (error) {
        console.error("Error al obtener los departamentos", error);
      }
    };
    fetchDepartments();
  }, []);

  const formik = useFormik({
    initialValues: {
      cities: city.cities,
      codeCities: city.codeCities,
      departmentId: city.departmentId,
    },
    validationSchema: CityFormSchema,
    onSubmit: async (values, { resetForm }) => {
      setCity({
        id: 0,
        cities: values.cities,
        codeCities: values.codeCities,
        departmentId: values.departmentId,
      });

      try {
        console.log("Ciudad registrada:", values);
        alert("Ciudad registrada exitosamente");
        resetForm();
      } catch (errorMessage) {
        console.error("Error al registrar la ciudad", errorMessage);
        alert(`Hubo un problema al registrar la ciudad: ${errorMessage}`);
      }
    },
  });

  return { formik, departments };
};
