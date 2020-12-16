import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  CreateGame,
  GetPalabraRellenada,
  UpdateGame,
} from "../Service/FrontService";
import "./Style.css";
import { imageAhorcado, isLetter } from "../Utils/Utils";
import { Button } from "react-bootstrap";

export function PartidaComponent() {
  //Referencia del input de la letra
  const inputRef = useRef(null);
  //Mensaje de error para validación
  const [error, seterror] = useState("");
  //Estado de la partida
  const [partida, setPartida] = useState(null);
  //Cambiamos la imagen del ahorcado cuando cambia el estado de la partida en base al numero de errores
  const img_url = useMemo(() => {
    if (partida) {
      return imageAhorcado(partida.numeroDeFallos);
    }
    return null;
  }, [partida]);
  //Comprobamos si la partida ha finalizado, si ha finalizado en derrota además de devolver un true pedimos la palabra correcta al servidor
  const isFinished = useMemo(() => {
    if (partida) {
      if (!partida.palabraRellenada?.includes("-")) return true;
      else if (partida.numeroDeFallos <= 0) {
        GetPalabraRellenada(partida.id).then((response) => {
          setPartida(response.data);
          console.log(response.data);
          return true;
        });
      }
    }
    return false;
  }, [partida]);

  //Llamamos al servidor pidiendo una nueva partida y la seteamos
  const createNewGame = () => {
    CreateGame().then((response) => {
      setPartida(response.data);
    });
  };

  //Creamos una nueva partida cuando se monta el componente
  useEffect(() => {
    createNewGame();
  }, []);

  //Validamos que no se envie mas de una letra, que este repetido, vacio o que no sea una letra
  const handleValidate = () => {
    if (inputRef.current.value?.length === 0) {
      seterror("El valor no puede estar vacio");
      return false;
    } else if (inputRef.current.value?.length > 1) {
      seterror("El valor no puede ser más de una letra");
      return false;
    } else if (!isLetter(inputRef.current.value.toLowerCase())) {
      seterror("El valor no es una letra");
      return false;
    } else if (partida.letrasUsadas.includes(inputRef.current.value)) {
      seterror("El valor esta repetido");
      return false;
    }

    seterror("");
    return true;
  };
  //Onclick del boton enviar, envia la letra escrita en el input, el id de la partida actual y recibe el estado actualizado de la partida
  const handleClick = () => {
    if (handleValidate()) {
      UpdateGame(partida.id, inputRef.current.value).then((response) => {
        setPartida(response.data);
      });
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-letter">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe una letra"
              aria-label="Escribe una letra"
              aria-describedby="basic-addon2"
              width="20%"
              disabled={isFinished}
              ref={inputRef}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleClick}
                disabled={isFinished}
              >
                Enviar
              </button>
            </div>
            {error && error !== "" && <h3 className="error">{error}</h3>}
          </div>
        </div>

        {partida && (
          <div>
            <h1>{partida?.palabraRellenada}</h1>
          </div>
        )}
      </div>
      <div className="row">
        {/* Si la partida existe muestra el numero de fallos, letras usadas y la imagen correspondiente del ahorcado */}
        {partida && (
          <div>
            <h3>Fallos Restantes: {partida?.numeroDeFallos}</h3>
            <h3>Letras Usadas:</h3>
            <h3>{partida?.letrasUsadas}</h3>
          </div>
        )}
        {img_url && (
          <div>
            <img src={img_url} alt=""></img>
          </div>
        )}
      </div>
      {/* Si el numero de fallos es menor que 0 muestra el texto correspondiente */}
      {partida && partida?.numeroDeFallos <= 0 && (
        <div>
          <h3 className="resultado derrota">DERROTA</h3>
        </div>
      )}
      {/* Si la palabra rellenada esta entera (ya no contiene guiones) muestra el texto correspondiente,
      hace una comprobación adicional del numero de fallos para que no se muestre cuando la palabra esta entera 
      por haber sido recibida por el servidor al perder*/}
      {partida &&
        !partida?.palabraRellenada.includes("-") &&
        partida.numeroDeFallos > 0 && (
          <div>
            <h3 className="resultado victoria">VICTORIA</h3>
          </div>
        )}

      <div className="btn-group-vertical">
        <div className="buttonGroupPartida">
          <Button href="/AhorcadoApp/#" variant="info" block>
            Volver
          </Button>
          <Button variant="info" onClick={createNewGame} block>
            Nueva Partida
          </Button>
        </div>
      </div>
    </div>
  );
}
