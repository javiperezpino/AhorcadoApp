import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Style.css";
import { InsertPalabra } from "../Service/FrontService";

export function MainComponent() {
  //Referencia para el input
  const inputRef = useRef(null);
  //State para el modal (false no se muestra, true se muestra)
  const [show, setShow] = useState(false);
  //State para almacenar la respuesta del servidor
  const [status, setStatus] = useState(0);
  //Cierra el modal y resetea el status
  const handleClose = () => {
    setShow(false);
    setStatus(0);
  };
  //Abre el modal
  const handleShow = () => setShow(true);
  //Mandamos la palabra del input y almacenamos la respuesta del servidor
  const sendData = () => {
    InsertPalabra(inputRef.current.value)
      .then((response) => {
        setStatus(response.status);
      })
      .catch(function (error) {
        if (error.response) {
          setStatus(error.response.status);
        }
      });
  };

  return (
    <>
      <div>
        <div className="center">
          <Button
            href="/AhorcadoApp/#/partida"
            variant="primary"
            size="lg"
            block
          >
            Nueva Partida
          </Button>
          <Button
            href="/AhorcadoApp/#/palabras"
            variant="primary"
            size="lg"
            block
          >
            Ver Lista de Palabras
          </Button>
          <Button variant="primary" size="lg" block onClick={handleShow}>
            Añadir Palabras
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Palabra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe la palabra a registrar(maximo 10 letras)"
              aria-label="Escribe la palabra a registrar(maximo 10 letras)"
              aria-describedby="basic-addon2"
              width="20%"
              ref={inputRef}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={sendData}
              >
                Añadir
              </button>
            </div>
          </div>
          {/* Si el status recibido es 200 (OK) o 400 (BAD_REQUEST) mostramos el mensaje correspondiente */}
          {status === 200 && (
            <div className="status ok">Se ha insertado correctamente</div>
          )}
          {status === 400 && (
            <div className="status bad">
              Error de validación: la palabra ya existe o no es una palabra
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
