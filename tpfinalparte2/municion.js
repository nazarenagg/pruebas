class Bala {
  constructor( posX , posY , imagen ){
  
    this.posX = posX;
    this.posY = posY;
    this.enDisparo = false;
    this.imagen = imagen;
}
  
  dibujar() {
    if( this.enDisparo ){
      image( this.imagen , this.posX , this.posY , 40 , 40 );
    this.mover();
  }
}
  
  disparar( posX , posY ) {
    this.posX = posX;
    this.posY = posY;
    this.enDisparo = true;
}
  
  mover() {
    this.posY -=5;
      if( this.posY < 0 ){
    this.reset();
  }
}
  
  reset() {
    this.enDisparo = false;
    this.posY = -10;
  }
  
}//llave de cierre de la clase BALA-----------------------------------------------------------------------------------------------
