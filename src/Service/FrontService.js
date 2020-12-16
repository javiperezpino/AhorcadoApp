import axios from "axios";

const API_URL = "http://ahorcadorest.eu-west-3.elasticbeanstalk.com/";
const NEW_GAME = "nuevaPartida";
const GAME = "partida/";
const INSERT_PALABRA = "palabra/";
const SEPARATOR = "/";

//Llamadas a la API
export function retrieveAllWords() {
  return axios.get(`${API_URL}`);
}

export function CreateGame() {
  return axios.get(`${API_URL}` + NEW_GAME);
}

export function UpdateGame(idPartida, letter) {
  return axios.put(
    `${API_URL}` + GAME + `${idPartida}` + SEPARATOR + `${letter}`
  );
}

export function InsertPalabra(nombre) {
  return axios.put(`${API_URL}` + INSERT_PALABRA + `${nombre}`);
}

export function GetPalabraRellenada(idPartida) {
  return axios.get(`${API_URL}` + GAME + `${idPartida}`);
}
