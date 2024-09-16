import { useState } from "react";


export default function UserForm() {
  const [user, setUser] = useState({
    typeOfIdentification: { name: "" },
    identificationNumber: "",
    firstName: "",
    middleName: "",
    firstLastName: "",
    secondLastName: "",
    phoneNumber: "",
    email: "",
    genre: { genre: "" },
    role: { typeOfRole: "" },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setUser((prevUser) => ({ ...prevUser, [name]: { [name]: value } }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
    // Aquí puedes agregar la lógica para enviar los datos del formulario
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sub Página 2</h2>
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <h2 className="text-2xl font-bold mb-4">Página 1</h2>

        <div>
          <label htmlFor="typeOfIdentification">Tipo de Identificación</label>
          <select
            onVolumeChange={(value : any) =>
              handleSelectChange("typeOfIdentification", value)
            }
          >
            <select>
              <select/>
            </select>
            <select>
              <select value="dni">DNI</select>
              <select value="passport">Pasaporte</select>
              <select value="other">Otro</select>
            </select>
          </select>
        </div>

        <div>
          <label htmlFor="identificationNumber">Número de Identificación</label>
          <input
            id="identificationNumber"
            name="identificationNumber"
            value={user.identificationNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="firstName">Primer Nombre</label>
          <input
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="middleName">Segundo Nombre</label>
          <input
            id="middleName"
            name="middleName"
            value={user.middleName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="firstLastName">Primer Apellido</label>
          <input
            id="firstLastName"
            name="firstLastName"
            value={user.firstLastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="secondLastName">Segundo Apellido</label>
          <input
            id="secondLastName"
            name="secondLastName"
            value={user.secondLastName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Número de Teléfono</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="genre">Género</label>
          <select onVolumeChange={(value : any) => handleSelectChange("genre", value)}>
            <select>
              <select />
            </select>
            <select>
              <select value="male">Masculino</select>
              <select value="female">Femenino</select>
              <select value="other">Otro</select>
            </select>
          </select>
        </div>

        <div>
          <label htmlFor="role">Rol</label>
          <select onVolumeChange={(value : any) => handleSelectChange("role", value)}>
            <select>
              <select  />
            </select>
            <select>
              <select value="admin">Administrador</select>
              <select value="user">Usuario</select>
              <select value="guest">Invitado</select>
            </select>
          </select>
        </div>
      </div>

      <button type="submit" className="w-full">
        Enviar
      </button>
    </form>
    </div>
  );
}
