import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { retrieveAllWords } from "../Service/FrontService";

export function ListComponent() {
  //Creamos un State de palabras
  const [palabras, setPalabras] = useState([]);

  //Llamamos a la función refreshPalabras cuando se monta el componente
  useEffect(() => {
    refreshPalabras();
  }, []);
  //Llamamos a la funcion del service que llama al backend y actualizamos el State palabras con la respuesta del backend
  const refreshPalabras = () => {
    retrieveAllWords().then((response) => {
      console.log(response);
      setPalabras(response.data);
    });
  };

  return (
    <>
      <h3>Lista de Palabras</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
            </tr>
          </thead>
          {/* Mapeamos las palabras por su id */}
          <tbody>
            {palabras?.map((palabra) => (
              <tr key={palabra.id}>
                <td>{palabra.id}</td>
                <td>{palabra.nombre}</td>
              </tr>
            ))}
          </tbody>
          <tr>
            <Button href="/AhorcadoApp/#" variant="primary" size="lg" block>
              Volver
            </Button>{" "}
          </tr>
        </table>
      </div>
    </>
  );
}
