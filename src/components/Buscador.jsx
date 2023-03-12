import React from "react";

const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <div>
      <h2>Buscador de Colaboradores</h2>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
};

export default Buscador;
