const GeneradorObjetos = (function(){

  function GeneradorObjetos(set, contenedor){
    this.palabras = set[0];
    this.colores = set[1];
    this.contenedor = contenedor;
    this._init();
    console.log(this.palabraH1)
  }

  console.log(GeneradorObjetos)

  GeneradorObjetos.prototype = {

    _init: function(){
      this._config();
      this._initEvents()
    },
    
    _azar: function(){
      const self = this;
      console.log(this, self)
      const color = Math.floor(Math.random() * this.colores.length);
      const indice = Math.floor(Math.random() * this.palabras.length);
      const subIndice = Math.floor(Math.random() * this.palabras[indice].length);
      return { palabra: this.palabras[indice], color: this.colores[color] };
    },

    _puntaje: function(obj) {
     
    },

    _render: function(renderObj){
      const self = this;
      console.log(typeof renderObj)

      self.PalabraH1.className = "";
      if(typeof renderObj == 'number'){
        this.PalabraH1.textContent = renderObj
      }
      else{
        this.speedContainer.classList.add('hidden');
        this.PalabraH1.classList.add(renderObj.color);
        this.PalabraH1.textContent = renderObj.palabra;
      }
    },

    _config: function(){
      this.secuenciador;
      this.conteoInicial = 3;
      this.delay = 1;
      this.speedContainer = this.contenedor.querySelector("#speedContainer");
      this.PalabraH1 = this.contenedor.querySelector("h1");
      this.startBtn = this.contenedor.querySelector(".start");
      this.stopBtn = this.contenedor.querySelector(".stop")
    },

    _initEvents: function(){
      const self = this;
      this.startBtn.addEventListener('click', function(){
        self._start()
      });
      this.stopBtn.addEventListener('click', function(){
        self._stop()
      })
    },

    _sound: function() {
      let snd = new Audio("./metronomo.mp3");
      snd.pause();
      snd.load();
      snd.play();
    },

    _start: function() {
      const self = this;
      let start = Date.now();
      let diff;
      let minutes;
      let seconds;
      function timer() {
          // get the number of seconds that have elapsed since 
          // startTimer() was called
          diff = self.conteoInicial - (((Date.now() - start) / 1000) | 0);
    
          // does the same job as parseInt truncates the float
          minutes = (diff / 60) | 0;
          seconds = (diff % 60) | 0;
    
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          console.log(minutes, seconds, diff)
          self._render(diff)
        
          if (diff <= 0) {
              // add one second so that the count down starts at the full duration
              // example 05:00 not 04:59
              start = Date.now() + 1000;
              clearInterval(self.secuenciador)
          }
      };
      // we don't want to wait a full second before the timer starts
      timer();
    
      const initialCountdown =  new Promise((resolve, reject) => {
        self.secuenciador = setInterval(() => {
          timer();
          if(diff <= 0){
            resolve('Done');
          }
        },1000)
      })
      
      
      initialCountdown.then(() => {
        console.log('here')
        self.secuenciador = setInterval(() => {
          self._render(self._azar());
          self._sound();
        },1000)
      })
    },

    _stop: function(){
      self = this;
      console.log(this.secuenciador, self.secuenciador)
      clearInterval(self.secuenciador);
    }
  }

  return function(set, contenedor){
    var a = new GeneradorObjetos(set, contenedor);
    console.log(a)
  }

})()


export default GeneradorObjetos;

