class Juego {
  constructor(numeroDeBestias, willder, imagenDeBestia){
  
    this.numeroDeBestias = numeroDeBestias;
    this.imagenDeBestia = thebeast;
    
    this.crearWill( willder );
    this.enemigos = [];
    
    this.intervaloEnemigos = 80; // Cada cuantos cuadros se agrega un enemigo
    this.contadorCuadros = 0; // Contador para manejar el intervalo
    this.tiempoTranscurrido = 0
    this.tiempoLimiteCuadros = 1000;
    
    //this.estado =1;
}

  dibujar(){
    this.will.dibujar();
    
      for (let i = 0; i < this.enemigos.length; i++) {
      let beast = this.enemigos[i];
      beast.dibujar();
      beast.caida();
      if (beast.posY > height) {
      beast.reinicio();
      }
    }
    
    
    
}
  
  crearWill(image){
    this.will = new Will (width / 2, 300, image )
}
  
  mover( keyCode ) {
    if( this.will ){
     this.will.mover( keyCode )
    }
  }
  
  // disparar() {
  //  if (this.will) {
  //   this.will.seDispara();
  //  }
  //}

 disparar() {
  if (this.will.seDispara()) {
    for (let i = 0; i < this.enemigos.length; i++) {
      let beast = this.enemigos[i];
      beast.chocaConBala(this.will.bala);
    }
  }
}



crearEnemigosContinuamente() {
    this.contadorCuadros++;
    if (this.contadorCuadros >= this.intervaloEnemigos) {
      let posX = random(40 , 600);
      let imagenEnemigo = thebeast;
      this.enemigos.push(new Beast(posX, 0, imagenEnemigo));
      this.contadorCuadros = 0;
    }
  }


   controlarColisiones() {
    for (let i = 0; i < this.enemigos.length; i++) {
      let beast = this.enemigos[i];
      if (beast.vida && this.colisionaConPersonaje(beast)) {
        this.will.vidaPerdida();
        beast.muere();
        if (this.will.vida <= 0) {
          principal.estado = 3
        }
      }
    }
  }

  colisionaConPersonaje(beast) {
    return (
      beast.posX < this.will.posX + 50 &&
      beast.posX + 50 > this.will.posX &&
      beast.posY < this.will.posY + 50 &&
      beast.posY + 50 > this.will.posY
      );
  }
  
   actualizarTiempo() {
    this.tiempoTranscurrido++;
    if (this.tiempoTranscurrido >= this.tiempoLimiteCuadros) {
        console.log("Ganaste. Tiempo límite alcanzado.");
        principal.estado = 5; // Cambia a "Ganaste"
    }
}

reiniciarJuego() {
  this.estado = 1;
  this.tiempoTranscurrido = 0;
    this.enemigos = []; // Vacía el arreglo de enemigos
    this.contadorCuadros = 0; // Resetea el contador de cuadros
    this.will.vidas = 3; // Restablece las vidas del personaje
    this.will = new Will(width / 2, 300, this.will.imagen);

    this.temporizador = null;
  }

}
