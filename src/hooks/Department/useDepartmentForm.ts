import { useFormik } from "formik";
import { DepartmentsFormSchema } from "../../Schemas/Department/departmentsSchema";
import { DepartmentsTypes } from "../../types/Department/DepartmentType";
import { postDepartments } from "../../services/DepartmentService/departmentPostServices";

export const useDepartmentForm = () => {
  const formik = useFormik({
    initialValues: {
      Department: "",
      codeDepartment: "",
    },
    validationSchema: DepartmentsFormSchema,

    
    onSubmit: async (values, { resetForm }) => {
      try {
        const departmentsRequest: DepartmentsTypes = {
          id: 0,
          Department: values.Department,
          codeDepartment: values.codeDepartment,
        };
        const response = await postDepartments(departmentsRequest);
        console.log(response, "😴😴😴");
        alert("Departamento registrado exitosamente");
        resetForm();
      } catch (error: any) {
        alert(
          `Hubo un problema al registrar el Departamento: ${error.message}`
        );
      }
    },
  });

  const inputClasses =
    "w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";
  const labelClasses = "block mb-2 text-sm font-medium text-gray-700";

  return { formik, inputClasses, labelClasses };
};
