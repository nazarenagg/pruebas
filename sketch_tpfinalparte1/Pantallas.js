function mostrar ( estado , dialogos , boton = [] ){

  image( imagenes[ estado ] , 0 , 0  );
  
   textSize( 25 );
   fill( 255 );
   text( dialogos[ estado - 1 ], 20 , 400 , width-20 );


  // Dibujar los botones si existen
  for ( let botones of boton ) {
    botonesDesicivos(boton[0] , boton[1] , boton[2] , boton[3] , boton[4] ); // Botón con ancho y alto fijos
  }
  

}//--------------------------------------------------------------------------corchete de cierre del MOSTRAR
