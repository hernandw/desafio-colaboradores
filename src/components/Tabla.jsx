import React, { useState } from "react";
import TableRow from "./TableRow";

const Tabla = ({ usuarios, busqueda }) => {
  const [orden, setOrden] = useState("");

  let results = [];
  if (!busqueda) {
    results = usuarios;
  } else {
    results = usuarios.filter((user) =>
      user.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  const ordenarNameAsc = (data) => {
    data.sort((a, b) => a.name.localeCompare(b.name));
  };

  const ordenarNameDesc = (data) => {
    data.sort((a, b) => b.name.localeCompare(a.name));
  };

  orden === "menor" && ordenarNameAsc(results);
  orden === "mayor" && ordenarNameDesc(results)
  


  return (
    <div>
      <h2> Lista de Colaboradores</h2>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={(e) => setOrden(e.target.value)}
        value={"default"}
      >
        <option value="default" disabled hidden>
          -- Ordenar por --
        </option>

        <option value="menor"> Nombre A - Z</option>
        <option value="mayor"> Nombre Z - A</option>
      </select>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead className="bg-success text-white">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((user) => <TableRow key={user.id} user={user} />)
          ) : (
            <tr>
              <td colSpan="2">No hay datos para tu busqueda</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
