import generadorObjectos from "./funciones.js"

const Contenedor = document.getElementById('contenedor')
const Colores = ["red", "green", "blue", "yellow", "black"];
const Palabras = ["ROJO", "VERDE", "AZUL", "AMARILLO", "NEGRO", "BLANCO", "LIBRE", "SUELTO", "AQUI", "AHORA", "SOY"]

const merge = [Palabras, Colores]
console.log(generadorObjectos)
generadorObjectos(merge, Contenedor )