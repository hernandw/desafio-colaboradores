import { useEffect, useState } from "react";
import "./App.css";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
/* import { colaboradores } from "./db"; */

const urlApi = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();
    setUsuarios(data);
  };
  return (
    <div className="container">
      <h1 className="text-center">Base de datos de Colaboradores</h1>
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
      {/* <Formulario usuarios={usuarios} setUsuarios={setUsuarios}/>
    <hr /> */}
      <Tabla
        usuarios={usuarios}
        busqueda={busqueda}
        setUsuarios={setUsuarios}
       
      />
    </div>
  );
}

export default App;
