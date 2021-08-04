/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
----------------------------------------------------------------------------

*/
function mostrar()
{
  //declaracion de variables
  let tipo;
  let cantidad;
  let precio;
  let cantAren=0;
  let cantCal=0;
  let cantCemento=0;
  let precioTotal=0;
  let precioConDesc;
  let precioArena=0;
  let precioCal=0;
  let precioCemento=0;
  let maxPrecio=0;
  let masBolsas;
  let cantBolsas=0;
  let respuesta;

  //inicio algoritmo
  do{
    tipo=prompt("Ingrese el material(Arena/cal/cemento)").toLowerCase();
    while(tipo!="arena" && tipo!="cal" && tipo!="cemento"){
      tipo=prompt("Error. Ingrese un material valido(arena/cal/cemento)").toLowerCase();
    }
    cantidad=parseInt(prompt("Ingrese la cantidad de bolsas."));
    while(isNaN(cantidad) || cantidad <= 0){
      cantidad=parseInt(prompt("Error. Ingrese una cantidad valida y mayor a 0."));
    }
    precio=parseInt(prompt("Ingrese el precio por bolsa (Mayor a 0)"));
    while(isNaN(precio) || cantidad <= 0){
      cantidad=parseInt(prompt("Error. Ingreso un precio valido y mayor a 0"));
    }
    cantBolsas = cantBolsas + cantidad;
    switch(tipo){
      case "arena":
        cantAren=cantAren+cantidad;
        precioArena=cantAren*precio;
        break;
      case "cal":
        cantCal=cantCal+cantidad;
        precioCal=cantCal*precio;
        break;
      case "cemento":
        cantCemento=cantCemento+cantidad;
        precioCemento=cantCemento*precio;
        break;    
    }

    respuesta=prompt("Quiere ingresar mas materiales a su compra?(s/n)").toLowerCase();
  }while(respuesta=="s");

//precio total
precioTotal=precioArena+precioCal+precioCemento;
  alert("El precio sin descuento es " + precioTotal);

//precios con descuentos  
  if(cantBolsas >=10 && cantBolsas<30){
    precioConDesc = precioTotal*0.9;
    alert("El precio con descuento por una compra mayor a 10 unidades es " + precioConDesc);
  }
  else if(cantBolsas >= 30){
    precioConDesc = precioTotal*0.75;
    alert("El precio con descuento por una compra mayor a 30 unidades es " + precioConDesc);
  }
  else{
    alert("El precio no tiene descuento, el total es " + precioTotal);
  }
  //mas cantidad de bolsas
  if(cantAren>cantCal && cantAren>cantCemento){
    masBolsas="Arena";
  }
  else if(cantCal>cantAren && cantCal>cantCemento){
    masBolsas= "Cal";
  }
  else{
    masBolsas= "Cemento";
  }
  alert("El tipo con mas cantidad de bolsas es " + masBolsas);
//mayor precio
  if(precioArena>precioCal && precioArena>precioCemento){
    maxPrecio="Arena";
  }
  else if(precioCal>precioArena && precioCal>precioCemento){
    maxPrecio= "Cal";
  }
  else{
    maxPrecio= "Cemento";
  }
  alert("El tipo mas caro es " + maxPrecio);




}
