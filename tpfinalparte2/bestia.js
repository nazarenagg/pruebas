class Beast{
  constructor( posX , posY , imagen ) {

    this.posX = posX;
    this.posY = posY;
    this.vida = true;
    this.imagen = thebeast;
    this.velocidad = 3;
}
  
  dibujar() {
    if ( this.vida ) {
      image( this.imagen, this.posX, this.posY , 50 , 50 );
    }
}
  
  caida() {
    this.posY += this.velocidad;
}
  
  muere() {
    this.vida = false;
}
  
  reinicio() {
    this.posX = random( 40 , 600 );
    this.posY = -10;
    this.vida = true;
}

  chocaConBala( bala ) {
    if (this.vida && dist(this.posX, this.posY, bala.posX, bala.posY) < 25) {
     this.matar();
     bala.reset();
    }
  }
  
}//llave de cierre de la clase BESTIA-----------------------------------------------------------------------------------------------
