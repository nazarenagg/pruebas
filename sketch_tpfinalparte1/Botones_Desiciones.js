function botonesDesicivos ( texto , x , y , ancho , alto ){

  fill(150);
  rect( x , y , ancho , alto );
  fill(255);
  text( texto , x , y , ancho , alto );
}

function areaBoton ( mx , my , x , y , ancho , alto ){

  return mx > x && mx < x + ancho && my > y && my < y + alto;

}
