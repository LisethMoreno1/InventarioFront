import { useEffect, useState } from "react";
import { DepartmentsTypes } from "../../types/Department/DepartmentType";
import { getDepartments } from "../../services/DepartmentService/departmentGetService";

const useDepartment = () => {
  const [departments, setDepartments] = useState<DepartmentsTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true);
        const departmentsData = await getDepartments();
        setDepartments(departmentsData);
      } catch (error: any) {
        setError(error.message || "Error al cargar los departamentos");
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  return { departments, loading, error };
};

export default useDepartment;
