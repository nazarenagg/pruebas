class Will {
  constructor( posX , posY , imagen ) {

    this.posX = posX;
    this.posY = posY;
    this.vida = 3;
    this.imagen = imagen;
    this.imagenDerecha = willder;
    this.imagenIzquierda = willizq;
    this.balasImagenes = [ candyvioleta, candyverde, candyamarillo ];
    this.bala = new Bala( this.posX, this.posY , imagen );
}

  dibujar() {
    if ( this.imagen ) {
      image( this.imagen , this.posX , this.posY , 60 , 160 );
     this.bala.dibujar();
     
    push();
    textSize( 15 );
    rectMode( CENTER );
    fill( 200 , 0 , 0 , 150 );
    strokeWeight( 2 );
    stroke( 50 );
    rect( 580, 50, 100, 40 );
    fill(255);
    textAlign( CENTER , CENTER );
    text( "Vidas: " + this.vida, 580, 50 ); 
    pop();
  }
}

  movizq(){
    this.posX -= 20;
}
  
  movderch(){
    this.posX += 20;
}
  
  mover( keyCode ){
    if( keyCode === LEFT_ARROW ){
    this.movizq();
    this.imagen = this.imagenIzquierda;
    }
    else if( keyCode === RIGHT_ARROW ){
     this.imagen = this.imagenDerecha;
     this.movderch();
    }
    else if ( key === ENTER ){
     this.seDispara();
    }
}

  vidaPerdida(){
    this.vida--;
}
  
  seDispara() {
    if( !this.bala.enDisparo ){
     let balaAleatoria = random( this.balasImagenes );
     this.bala.imagen = balaAleatoria;
     this.bala.disparar( this.posX + 20 , this.posY );
    } 
}
  
  balaDisparada() {
    return this.bala.enDisparo;
}

}//llave de cierre de la clase WILL-----------------------------------------------------------------------------------------------
