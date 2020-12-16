// @ts-nocheck
import Ahorcado1 from "../Assets/Ahorcado1.PNG";
import Ahorcado2 from "../Assets/Ahorcado2.PNG";
import Ahorcado3 from "../Assets/Ahorcado3.PNG";
import Ahorcado4 from "../Assets/Ahorcado4.PNG";
import Ahorcado5 from "../Assets/Ahorcado5.PNG";
import Ahorcado6 from "../Assets/Ahorcado6.PNG";
import Ahorcado7 from "../Assets/Ahorcado7.PNG";

export function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

export function imageAhorcado(id) {
  const ahorcadoImages = [
    Ahorcado1,
    Ahorcado2,
    Ahorcado3,
    Ahorcado4,
    Ahorcado5,
    Ahorcado6,
    Ahorcado7,
  ];
  return ahorcadoImages[id];
}
