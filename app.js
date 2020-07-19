const Colores = ["red", "green", "blue", "yellow", "black"];
const Palabras = [,];
Palabras[0] = ["ROJO", "VERDE", "AZUL", "AMARILLO", "NEGRO", "BLANCO"];
Palabras[1] = ["LIBRE", "SUELTO", "AQUI", "AHORA", "SOY"];
const PalabrasSalidas = [];
const snd = new Audio("./metronomo.mp3");
let milisegundos = 1000;
const speedContainer = document.querySelector("#speedContainer");

let timer;
let inicio = false;
let count = 0;

const PalabraH1 = document.querySelector("h1");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");

startBtn.addEventListener("click", (e)=> {
  stop();
  contadorInicial(3);
});

stopBtn.addEventListener("click", stop);

