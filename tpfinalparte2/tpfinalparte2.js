//Manejo de ARREGLOS, Objetos, IMAGENES y SONIDO
//RESUELVE Y NO RESUELVE CONFLICTO ( GANA O PIERDE)
// INSTRUCCIONES Y CREDITOS--CONTROL PARA REINICIO--DESARROLLO EN POO--4 O MAS CLASES DE OBJECTOS
let principal;
let sonido;
let willder , willizq , thebeast , candyverde , candyvioleta , candyamarillo , fondo , inicio , win , lose ,instrucciones , creditos;


function preload() {

//carga de imagen de JUGADOR Y ENEMIGO------------------------
  willder = loadImage("data/willright.png");
  willizq = loadImage("data/willleft.png");
  beast = loadImage("data/thebeast.png");
  
//carga de imagen de MUNICIONES-------------------------------
  candyvioleta = loadImage("data/candyvioleta.png");
  candyverde = loadImage("data/candyverde.png");
  candyamarillo = loadImage("data/candyamarillo.png");
  
//carga de imagen de FONDOS-----------------------------------
  fondo = loadImage("data/fondo.png");
  inicio = loadImage("data/inicio.png");
  win = loadImage("data/win.png");
  lose = loadImage("data/lose.png");
  creditos = loadImage("data/creditos.png");
  instrucciones = loadImage("data/instrucciones.png");

  
//carga de SONIDO---------------------------------------------
  //sonido = loadSound("data/misonido.mp3");
  
}//llave de cierre del PRELOAD-----------------------------------------------------------------------------------------------


function setup() {

  createCanvas( 640 , 480 );
  principal = new Principal(10 , willder , thebeast);
  
}//llave de cierre del SETUP-----------------------------------------------------------------------------------------------


function draw() {
      //background( 0 );
      principal.dibujar()

}//llave de cierre del DRAW-----------------------------------------------------------------------------------------------

//function keyPressed() {
//  if (juego) {
//    juego.mover(keyCode);
//  }
//}
function keyPressed() {
  if (principal.estado === 2) {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      juego.mover(keyCode);
    } else if (keyCode === ENTER) {
      juego.disparar();
    }
  }
}


function mousePressed() {
  this.principal.mousePresionado();
}
