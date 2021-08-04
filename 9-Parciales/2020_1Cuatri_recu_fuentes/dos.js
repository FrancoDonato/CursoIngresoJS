function mostrar()
{
  //declaracion de variables
  let tipo;
  let cantidad;
  let precioxBolsa;
  let totalBolsas;
  let masBolsas;
  let contArena=0;
  let contCal=0;
  let contCemento=0;
  let precioTotalA=0;
  let precioTotalC=0;
  let precioTotalCe=0;
  let precioTotalBruto=0;
  let precioDescuento=0;
  let precioCaro;
  let respuesta;

  do{
    tipo=prompt("Ingrese que material quiere(arena/cal/cemento)").toLowerCase();
    while(tipo!= "arena" && tipo!= "cal" && tipo!= "cemento"){
      tipo=prompt("Error. Ingrese un material valido(arena/cal/cemento)").toLowerCase();
    }
    cantidad=parseInt(prompt("Ingrese la cantidad de bolsas"));
    while(isNaN(cantidad)|| cantidad<1){
      cantidad=parseInt(prompt("Error.Ingrese una cantidad mayor a 0"));
    }
    precioxBolsa=parseFloat(prompt("Ingrese el precio por unidad."));
    while(isNaN(precioxBolsa)||precioxBolsa<1){
      precioxBolsa=parseFloat(prompt("Error. Ingrese un valor valido y mayor a 0"));
    }
    switch(tipo){
      case "arena":
        contArena=contArena+cantidad;
        precioTotalA=precioTotalA+(precioxBolsa*cantidad);
        break;
      case "cal":
        contCal=contCal+cantidad;
        precioTotalC=precioTotalC+(precioxBolsa*cantidad);
        break;
      case "cemento":
        contCemento=contCemento+cantidad;
        precioTotalCe=precioTotalCe+(precioxBolsa*cantidad);
        break;   
    }
    
    respuesta=prompt("Quiere ingresar mas bolsas?(s/n)").toLowerCase();
    while(respuesta!='s' && respuesta!='n'){
      respuesta=prompt("Error.Ingrese una respuesta valida(s/n)").toLowerCase();
    }
  }while(respuesta=="s");
  //precio y descuentos
  precioTotalBruto=precioTotalA+precioTotalC+precioTotalCe;
  alert("El importe a pagar en bruto es " + precioTotalBruto);
  totalBolsas=contArena+contCal+contCemento;
  if(totalBolsas>=10 && totalBolsas<30){
    precioDescuento=precioTotalBruto*0.85;
    alert("El precio con un descuento del 15% es " + precioDescuento);
  }
  else if(totalBolsas>=30){
    precioDescuento=precioTotalBruto*0.75;
    alert("El precio con un descuento del 25% es " + precioDescuento);
  }
  else{
    alert("No hay descuento disponible, el precio es " + precioTotalBruto);
  }
  //mas cantidad de bolsas
  if(contArena>contCal && contArena>contCemento){
    alert("El material con mas cantidad de bolsas es arena");
  }
  else if(contCal>contArena && contCal>contCemento){
    alert("El material con mas cantidad de bolsas es cal");
  }
  else{
    alert("El material con mas cantidad de bolsas es el cemento");
  }
  //mayor precio
  if(precioTotalA>precioTotalC && precioTotalA>precioTotalCe){
    alert("El material mas caro es arena");
  }
  else if(precioTotalC>precioTotalA && precioTotalC>precioTotalCe){
    alert("El material mas caro es la cal");
  }
  else{
    alert("El material mas caro es el cemento");
  }
}
