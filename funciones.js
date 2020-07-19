
function azar(colores, palabras) {
  const color = Math.floor(Math.random() * colores.length);
  const indice = Math.floor(Math.random() * palabras.length);
  const subIndice = Math.floor(Math.random() * palabras[indice].length);
  return { palabra: palabras[indice][subIndice], color: colores[color] };
}

function render(obj) {
  PalabraH1.className = "";
  PalabraH1.classList.add(obj.color);
  PalabraH1.textContent = obj.palabra;
}

function sound() {
  snd.pause();
  snd.load();
  snd.play();
}

function start() {
  speedContainer.classList.add("hidden");
  PalabraH1.className = "";
  const Celda = azar(Colores, Palabras);
  render(Celda);
  sound();
  puntaje(Celda.color);
  const multiplo = count % 30;
  if (count > 0 && multiplo == 0) {
  	contadorInicial(4);
  }
}

function puntaje(obj) {
  PalabrasSalidas[count] =  obj;
  console.log(PalabrasSalidas[count]);
  count ++;
}

function time() {
   // procesar(); 
  timer = setInterval(start, milisegundos);
}

function stop(){
  // procesar();
  clearInterval(timer);
  inicio = false;
  speedContainer.classList.remove("hidden");
  count = 0;
  PalabraH1.className = "";
  PalabraH1.textContent = "--";
}

function contadorInicial(i) {
  milisegundos = speedContainer.querySelector("input").value || 1000;
	clearInterval(timer);
  timer = setTimeout(function() {
    PalabraH1.textContent = i;
    PalabraH1.className = "";
    i--;
    if(i>0) {contadorInicial(i);}
    else {
      inicio = true;
      time(); 
    }  
  }, milisegundos);
}