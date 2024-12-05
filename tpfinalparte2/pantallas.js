class Pantalla{
  constructor( imagenFondo, textos ) {
    
    this.imagenFondo = imagenFondo;
    this.boton = new Boton( 200, 350, 100, 50, "Jugar" );
    this.botoncreditos = new Boton(400, 350, 100, 50, "Creditos" );
    this.botoninicio = new Boton(300, 300, 100, 50, "Inicio" );
    this.botoninstruccion = new Boton(500, 400, 100, 50, "instruccion" );
}

  pantallaInicio(){
   background( inicio );
   textAlign(CENTER, CENTER);
   textSize(20);
   fill(0);
   rectMode(CENTER);
 push();
   strokeWeight(3);
   stroke(255);
   rect(320, 70, 150, 40);
 pop();

 push();
    strokeWeight(3);
    stroke(255);
    rect(320, 200, 320, 40);
 pop();
 
 push();
    strokeWeight(3);
    stroke(255);
    rect(320, 300, 200, 40);
 pop();
      this.boton.mostrar();
      this.botoncreditos.mostrar();
      this.botoninstruccion();
}

  pantallaGanar(){
push();
     background( win );
     textAlign(CENTER, CENTER);
     textSize(23);
     rectMode(CENTER);
     fill(0);
     strokeWeight(3);
     stroke(255);
     rect(300, 173, 140, 45);
pop();
      this.botoninicio.mostrar();
}

  pantallaPerdiste(){
push();
      background( lose );
      textAlign(CENTER, CENTER);
      textSize(23);
      rectMode(CENTER);
      fill(0);
      strokeWeight(3);
      stroke(255);
      rect(300, 173, 140, 45);
pop();
      this.botoninicio.mostrar();
}

  pantallaCredito(){
push();
      background( creditos ); 
      textAlign(CENTER, CENTER);
      textSize(20);
      rectMode(CENTER);
      fill(0);
      strokeWeight(3);
      stroke(255);
      rect(290, 173, 310, 45);
pop();
      this.botoninicio.mostrar();
}

  pantallaInstrucciones(){
push();
      background( instrucciones ); 
      textAlign(CENTER, CENTER);
      textSize(20);
      rectMode(CENTER);
      fill(0);
      strokeWeight(3);
      stroke(255);
      rect(290, 173, 310, 45);
pop();
      this.botoninicio.mostrar();
}

}
