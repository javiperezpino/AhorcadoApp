import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { retrieveAllWords } from "../Service/FrontService";

export function ListComponent() {
  const [palabras, setPalabras] = useState([]);

  useEffect(() => {
    refreshPalabras();
  }, []);

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
          <tbody>
            {palabras?.map((palabra) => (
              <tr key={palabra.id}>
                <td>{palabra.id}</td>
                <td>{palabra.nombre}</td>
              </tr>
            ))}
          </tbody>
          <tr>
            <Button href="/" variant="primary" size="lg" block>
              Volver
            </Button>{" "}
          </tr>
        </table>
      </div>
    </>
  );
}
